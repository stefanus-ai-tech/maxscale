import { Handler } from "@netlify/functions";
import { withSession } from "./session-middleware";

const initHandler: Handler = async (event) => {
  // Set security headers
  const headers = {
    "Content-Type": "application/json",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Security-Policy": "default-src 'self'",
  };

  // The withSession middleware will handle setting the session and CSRF cookies
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: "Session initialized",
      timestamp: new Date().toISOString(),
    }),
  };
};

// Export the handler wrapped with session middleware
export const handler = withSession(initHandler);
