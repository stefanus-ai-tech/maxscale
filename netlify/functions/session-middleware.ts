import { Handler } from "@netlify/functions";
import crypto from "crypto";

// Session configuration
const SESSION_COOKIE_NAME = "maxscale_session";
const SESSION_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours
export const CSRF_COOKIE_NAME = "maxscale_csrf";

// Generate a secure random token
const generateSecureToken = (length = 32): string => {
  return crypto.randomBytes(length).toString("hex");
};

// Create a secure session cookie
export const createSessionCookie = (sessionId: string): string => {
  const expires = new Date(Date.now() + SESSION_EXPIRY);
  return `${SESSION_COOKIE_NAME}=${sessionId}; HttpOnly; Secure; SameSite=Strict; Path=/; Expires=${expires.toUTCString()}`;
};

// Create a CSRF cookie (accessible to JavaScript)
export const createCsrfCookie = (csrfToken: string): string => {
  const expires = new Date(Date.now() + SESSION_EXPIRY);
  return `${CSRF_COOKIE_NAME}=${csrfToken}; Secure; SameSite=Strict; Path=/; Expires=${expires.toUTCString()}`;
};

// Parse cookies from request headers
export const parseCookies = (
  cookieHeader: string | undefined
): Record<string, string> => {
  const cookies: Record<string, string> = {};
  if (!cookieHeader) return cookies;

  cookieHeader.split(";").forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    if (name && value) {
      cookies[name] = value;
    }
  });

  return cookies;
};

// Session middleware for Netlify functions
export const withSession = (handler: Handler): Handler => {
  return async (event, context) => {
    console.log("withSession middleware starting");
    console.log("Request headers:", JSON.stringify(event.headers));

    // Parse cookies from request
    const cookies = parseCookies(event.headers.cookie);
    console.log("Parsed cookies:", JSON.stringify(cookies));

    // Check if session exists
    let sessionId = cookies[SESSION_COOKIE_NAME];
    let csrfToken = cookies[CSRF_COOKIE_NAME];
    let newSession = false;

    console.log("Initial session state:", {
      sessionIdExists: !!sessionId,
      csrfTokenExists: !!csrfToken,
    });

    // Create new session if none exists
    if (!sessionId) {
      sessionId = generateSecureToken();
      csrfToken = generateSecureToken();
      newSession = true;
      console.log("Created new session:", {
        sessionId: sessionId.substring(0, 8) + "...",
        csrfToken: csrfToken.substring(0, 8) + "...",
      });
    }

    // Add session info to event context for the handler
    const eventWithSession = {
      ...event,
      session: {
        id: sessionId,
        csrfToken,
        isNew: newSession,
      },
    };

    // Call the original handler
    const response = await handler(eventWithSession, context);

    // Ensure we have a response object
    const handlerResponse = response || {
      statusCode: 200,
      body: "",
    };

    // If new session, add cookies to response
    if (newSession) {
      // Create session cookies
      const sessionCookie = createSessionCookie(sessionId);
      const csrfCookie = createCsrfCookie(csrfToken);

      console.log("Setting new cookies in response:", {
        sessionCookieSet: !!sessionCookie,
        csrfCookieSet: !!csrfCookie,
        csrfTokenValue: csrfToken.substring(0, 8) + "...",
      });

      // Add to response using a custom header that our frontend will process
      handlerResponse.headers = {
        ...handlerResponse.headers,
        "Set-Session-Cookie": sessionCookie,
        "Set-CSRF-Cookie": csrfCookie,
      };
    }

    console.log(
      "Final response headers:",
      JSON.stringify(handlerResponse.headers)
    );
    return handlerResponse;
  };
};

// Verify CSRF token
export const verifyCsrfToken = (event: any): boolean => {
  try {
    // Find CSRF token in headers (case-insensitive)
    const csrfHeaderKey = Object.keys(event.headers).find(
      (key) => key.toLowerCase() === "x-csrf-token"
    );
    const csrfToken = csrfHeaderKey ? event.headers[csrfHeaderKey] : null;

    // Parse cookies
    const cookies = parseCookies(event.headers.cookie || "");
    const cookieCsrfToken = cookies[CSRF_COOKIE_NAME];

    // Log detailed information for debugging
    console.log("CSRF Verification (detailed):", {
      headerKeys: Object.keys(event.headers),
      csrfHeaderKey: csrfHeaderKey,
      tokenInHeader: csrfToken,
      tokenInCookie: cookieCsrfToken,
      allCookies: cookies,
      rawCookieHeader: event.headers.cookie,
      headerMatch: csrfToken === cookieCsrfToken,
    });

    // Special case for the init-session endpoint
    if (event.path === "/.netlify/functions/init-session") {
      console.log("Skipping CSRF check for init-session endpoint");
      return true;
    }

    // Check if tokens exist and match
    if (!csrfToken || !cookieCsrfToken) {
      console.error("Missing CSRF token:", {
        hasHeaderToken: !!csrfToken,
        hasCookieToken: !!cookieCsrfToken,
      });
      return false;
    }

    const tokensMatch = csrfToken === cookieCsrfToken;
    if (!tokensMatch) {
      console.error("CSRF token mismatch:", {
        headerToken: csrfToken.substring(0, 8) + "...",
        cookieToken: cookieCsrfToken.substring(0, 8) + "...",
      });
    }

    return tokensMatch;
  } catch (error) {
    console.error("Error during CSRF verification:", error);
    return false;
  }
};

// Example usage:
// export const handler = withSession(async (event, context) => {
//   // Your function logic here
//   // Access session via event.session
// });
