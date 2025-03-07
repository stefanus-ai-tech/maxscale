import { Handler } from "@netlify/functions";
import dotenv from "dotenv";
import { z } from "zod"; // Using zod for input validation
import {
  withSession,
  verifyCsrfToken,
  parseCookies,
  CSRF_COOKIE_NAME,
} from "./session-middleware";
import { Resend } from "resend"; // Import Resend

// Load environment variables
dotenv.config();
console.log("Environment loaded");
console.log("RESEND_API_KEY configured:", !!process.env.RESEND_API_KEY);
console.log("Environment variables check:", {
  SMTP_HOST: !!process.env.SMTP_HOST,
  SMTP_PORT: !!process.env.SMTP_PORT,
  SMTP_USER: !!process.env.SMTP_USER,
  SMTP_PASS: !!process.env.SMTP_PASS ? "Set" : "Not set",
  RESEND_API_KEY: !!process.env.RESEND_API_KEY ? "Set" : "Not set",
  NODE_ENV: process.env.NODE_ENV || "not set",
});

// Email recipients - consider moving to environment variables
const RECIPIENTS = ["stefanusaitech@gmail.com", "irfanwill.co@gmail.com"];

// Define validation schema for input data
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required").max(5000),
});

// Helper function to sanitize HTML content
const sanitizeHtml = (str: string): string => {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// Simple in-memory rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute
const rateLimits: Record<string, { count: number; resetTime: number }> = {};

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();

  // Initialize or reset expired rate limit
  if (!rateLimits[ip] || now > rateLimits[ip].resetTime) {
    rateLimits[ip] = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
    return true;
  }

  // Increment count and check if limit exceeded
  rateLimits[ip].count += 1;
  return rateLimits[ip].count <= MAX_REQUESTS;
};

const emailHandler: Handler = async (event) => {
  // Set security headers
  const headers = {
    "Content-Type": "application/json",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Security-Policy": "default-src 'self'",
  };

  console.log("Function invoked with method:", event.httpMethod);
  console.log("Request path:", event.path);
  console.log("Headers:", JSON.stringify(event.headers));

  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    console.log("Method not allowed:", event.httpMethod);
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Check for CSRF token in headers
    console.log("CSRF check:", {
      csrfTokenHeader: event.headers["x-csrf-token"] || "Not present",
      csrfCookiePresent: !!parseCookies(event.headers.cookie || "")[
        CSRF_COOKIE_NAME
      ],
      headerNames: Object.keys(event.headers).join(", "),
    });

    // Add more detailed logging for CSRF debugging
    console.log("Request headers (full):", JSON.stringify(event.headers));
    console.log("Cookie header raw:", event.headers.cookie);

    // Log all cookies for debugging
    const allCookies = parseCookies(event.headers.cookie || "");
    console.log("All cookies:", JSON.stringify(allCookies));

    // Check for case-insensitive CSRF token header
    const csrfHeaderKey = Object.keys(event.headers).find(
      (key) => key.toLowerCase() === "x-csrf-token"
    );
    const csrfHeaderValue = csrfHeaderKey ? event.headers[csrfHeaderKey] : null;
    console.log(
      "CSRF header found:",
      csrfHeaderKey,
      "with value:",
      csrfHeaderValue
    );

    // Check for client-side generated token in sessionStorage
    console.log("Client-side token check:", {
      headerToken: csrfHeaderValue,
      expectedFormat:
        typeof csrfHeaderValue === "string" &&
        /^[a-z0-9]{15,}$/.test(csrfHeaderValue),
      length: csrfHeaderValue ? csrfHeaderValue.length : 0,
    });

    if (!verifyCsrfToken(event)) {
      console.error("CSRF token validation failed");
      // Log the specific CSRF issue
      const cookies = parseCookies(event.headers.cookie || "");
      console.error("CSRF debug:", {
        tokenInHeader: event.headers["x-csrf-token"],
        tokenInCookie: cookies[CSRF_COOKIE_NAME],
        headersCsrfKey: Object.keys(event.headers).find(
          (key) => key.toLowerCase() === "x-csrf-token"
        ),
        cookieNames: Object.keys(cookies).join(", "),
        rawCookieHeader: event.headers.cookie,
      });

      return {
        statusCode: 403,
        headers,
        body: JSON.stringify({ message: "CSRF token validation failed" }),
      };
    }

    // Apply rate limiting
    const clientIP =
      event.headers["client-ip"] ||
      event.headers["x-forwarded-for"] ||
      "unknown";
    if (!checkRateLimit(clientIP)) {
      console.error("Rate limit exceeded for IP:", clientIP);
      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({
          message: "Too many requests. Please try again later.",
        }),
      };
    }

    // Parse the request body
    let formData;
    try {
      formData = JSON.parse(event.body || "{}");
    } catch (parseError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: "Invalid JSON in request body" }),
      };
    }

    // Validate input data using Zod
    const validationResult = ContactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: "Validation failed",
          errors: validationResult.error.format(),
        }),
      };
    }

    const { name, email, company, service, message } = validationResult.data;

    // Sanitize all user inputs before using in HTML
    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedCompany = sanitizeHtml(company || "Not provided");
    const sanitizedService = sanitizeHtml(service || "Not specified");
    const sanitizedMessage = sanitizeHtml(message);

    // Prepare email content with sanitized inputs
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${sanitizedName}</p>
      <p><strong>Email:</strong> ${sanitizedEmail}</p>
      <p><strong>Company:</strong> ${sanitizedCompany}</p>
      <p><strong>Service Interested In:</strong> ${sanitizedService}</p>
      <h3>Message:</h3>
      <p>${sanitizedMessage}</p>
    `;

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log("Attempting to send email via Resend...");
    console.log(
      "Resend API key last 4 chars:",
      process.env.RESEND_API_KEY
        ? `...${process.env.RESEND_API_KEY.slice(-4)}`
        : "Not available"
    );

    // Send email using Resend
    const { data, error } = await resend.emails
      .send({
        from: "MaxScale Website <onboarding@resend.dev>", // Use Resend's default domain for testing
        to: RECIPIENTS,
        subject: `New Contact Form Submission from ${sanitizedName}`,
        html: emailContent,
        replyTo: email,
      })
      .catch((err) => {
        console.error("Resend API throw error:", err.message || err);
        return { data: null, error: err };
      });

    if (error) {
      console.error("Error sending email with Resend:", error);
      console.error("Full error details:", JSON.stringify(error));
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message: "Failed to send email",
          error:
            process.env.NODE_ENV === "development" ? error.message : undefined,
        }),
      };
    }

    console.log("Email sent successfully with Resend:", data);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Email sent successfully",
        messageId: data?.id,
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    console.error(
      "Error stack:",
      error instanceof Error ? error.stack : "No stack available"
    );

    // Don't expose detailed error information to clients
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: "An error occurred while processing your request",
      }),
    };
  }
};

// Export the handler with session middleware
export const handler = withSession(emailHandler);
