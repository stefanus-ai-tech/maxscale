import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaxScaleButton from "@/components/ui/MaxScaleButton";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required").max(5000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Function to set cookies from custom headers
const setCookiesFromHeaders = (response: Response) => {
  const sessionCookie = response.headers.get("Set-Session-Cookie");
  const csrfCookie = response.headers.get("Set-CSRF-Cookie");

  if (sessionCookie) {
    document.cookie = sessionCookie;
  }

  if (csrfCookie) {
    document.cookie = csrfCookie;
    // Also update the CSRF token in sessionStorage for future requests
    const csrfValue = csrfCookie.split("=")[1]?.split(";")[0];
    if (csrfValue) {
      sessionStorage.setItem("csrfToken", csrfValue);
    }
  }
};

const Contact = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [csrfToken, setCsrfToken] = useState("");

  // Initialize form with react-hook-form and zod validation
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  // Initialize session and get CSRF token on component mount
  useEffect(() => {
    const initializeSession = async () => {
      try {
        // Make request to initialize session
        const response = await fetch("/api/init-session", {
          method: "GET",
          credentials: "same-origin",
        });

        // Process any cookies from the response
        setCookiesFromHeaders(response);

        // Extract CSRF token from cookies
        const cookies = document.cookie.split(";");
        const csrfCookie = cookies.find((cookie) =>
          cookie.trim().startsWith("maxscale_csrf=")
        );

        if (csrfCookie) {
          const token = csrfCookie.split("=")[1].trim();
          setCsrfToken(token);
          console.log("Retrieved server-generated CSRF token");
        } else {
          console.error("No CSRF token found in cookies after initialization");
        }
      } catch (error) {
        console.error("Failed to initialize session:", error);
      }
    };

    initializeSession();
  }, []);

  // Check if user came from the consultation button on pricing page
  useEffect(() => {
    if (location.state && location.state.consultationRequest) {
      setValue("service", "other");
      setValue(
        "message",
        "I would like to schedule a free consultation about a custom AI solution for my business."
      );
    }
  }, [location.state, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      console.log("Submitting form with CSRF token:", csrfToken);
      console.log("Form data being submitted:", JSON.stringify(data));

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
          // Add additional headers for debugging
          "X-Debug-Client": "browser-form",
        },
        body: JSON.stringify(data),
        credentials: "same-origin", // Include cookies with the request
      });

      console.log("Response status:", response.status);
      console.log(
        "Response headers:",
        Object.fromEntries([...response.headers.entries()])
      );

      // Handle custom cookie headers
      setCookiesFromHeaders(response);

      let responseData;
      try {
        responseData = await response.json();
        console.log("Response data:", JSON.stringify(responseData));
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        responseData = { message: "Failed to parse server response" };
      }

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thanks for reaching out! We'll contact you soon.",
        });
        // Reset form
        reset();
        // Generate new CSRF token after successful submission
        const newToken =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        setCsrfToken(newToken);
        sessionStorage.setItem("csrfToken", newToken);
      } else {
        // Enhanced error handling with more details
        const errorMessage =
          responseData.message || "Something went wrong. Please try again.";
        console.error("Server error:", {
          status: response.status,
          message: errorMessage,
          details: responseData.error || "No additional details",
        });

        setSubmitStatus({
          type: "error",
          message: `Error (${response.status}): ${errorMessage}`,
        });
      }
    } catch (error) {
      console.error("Network or client-side error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-maxscale-dark">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="maxscale-container py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Get in </span>
              <span className="text-white">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Have questions about our AI solutions? Ready to start scaling your
              business? Our team is here to help you find the right solutions
              for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-300">
                      123 Innovation Street, Tech City, TC 10111
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-300">info@maxscale.ai</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9am - 6pm EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-maxscale-muted p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-maxscale-light flex items-center justify-center text-white hover:bg-maxscale-accent transition-colors"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-maxscale-light flex items-center justify-center text-white hover:bg-maxscale-accent transition-colors"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-maxscale-light flex items-center justify-center text-white hover:bg-maxscale-accent transition-colors"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              {submitStatus.type && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-900/50 border border-green-700 text-green-300"
                      : "bg-red-900/50 border border-red-700 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Hidden CSRF token field */}
                <input type="hidden" name="csrfToken" value={csrfToken} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 bg-maxscale-light border ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-maxscale-muted focus:border-maxscale-accent"
                      } rounded-lg text-white focus:outline-none`}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-400 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 bg-maxscale-light border ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-maxscale-muted focus:border-maxscale-accent"
                      } rounded-lg text-white focus:outline-none`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 bg-maxscale-light border border-maxscale-muted rounded-lg text-white focus:border-maxscale-accent focus:outline-none"
                    {...register("company")}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 bg-maxscale-light border border-maxscale-muted rounded-lg text-white focus:border-maxscale-accent focus:outline-none"
                    {...register("service")}
                  >
                    <option value="">Select a service</option>
                    <option value="website">
                      AI-Powered Website Development
                    </option>
                    <option value="customer-service">
                      AI Customer Service Solutions
                    </option>
                    <option value="automation">
                      Business Process Automation
                    </option>
                    <option value="scalable">Scalable AI Solutions</option>
                    <option value="other">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 bg-maxscale-light border ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-maxscale-muted focus:border-maxscale-accent"
                    } rounded-lg text-white focus:outline-none`}
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-400 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <MaxScaleButton
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </MaxScaleButton>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
