# CSRF Token Validation Issue Analysis

## Problem Identification

Based on the error logs and code analysis, we've identified a fundamental mismatch in how CSRF tokens are handled between the frontend and backend:

1. **Frontend Approach**: The frontend (Contact.tsx) generates its own random CSRF token client-side and stores it in sessionStorage:

   ```javascript
   // Generate a random token
   const token =
     Math.random().toString(36).substring(2, 15) +
     Math.random().toString(36).substring(2, 15);
   setCsrfToken(token);
   // Store token in sessionStorage
   sessionStorage.setItem("csrfToken", token);
   ```

2. **Backend Approach**: The backend (session-middleware.ts) expects a CSRF token that was previously set in a cookie by the server:

   ```javascript
   // Verify CSRF token
   export const verifyCsrfToken = (event: any): boolean => {
     const csrfToken = event.headers["x-csrf-token"];
     const cookies = parseCookies(event.headers.cookie || "");
     const cookieCsrfToken = cookies[CSRF_COOKIE_NAME];
     return csrfToken && cookieCsrfToken && csrfToken === cookieCsrfToken;
   };
   ```

3. **Cookie Setting**: The server sets cookies in the response headers (`set-csrf-cookie` and `set-session-cookie`), but these cookies aren't available during the initial request, creating a chicken-and-egg problem.

## Most Likely Root Causes

1. **Token Generation Mismatch**: The frontend and backend are using different approaches to generate and validate CSRF tokens.

2. **Cookie Initialization Flow**: The server is setting cookies in the response headers, but these cookies aren't available during the initial form submission.

## Proposed Solutions

### Option 1: Modify Frontend to Use Server-Generated Token

1. Modify the Contact component to make an initial request to the server to get a CSRF token before showing the form.
2. Use the server-generated token from the cookie for form submission.

```typescript
// In Contact.tsx
useEffect(() => {
  // Make a request to get a CSRF token from the server
  fetch("/api/init-session", {
    method: "GET",
    credentials: "same-origin",
  }).then((response) => {
    // The server will set the CSRF cookie in the response
    // Extract the CSRF token from the cookie
    const cookies = document.cookie.split(";");
    const csrfCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("maxscale_csrf=")
    );
    if (csrfCookie) {
      const csrfToken = csrfCookie.split("=")[1];
      setCsrfToken(csrfToken);
    }
  });
}, []);
```

### Option 2: Modify Backend to Accept Client-Generated Token

1. Modify the session middleware to accept the client-generated token on the first request.
2. Store the client token in the session for future validation.

```typescript
// In session-middleware.ts
export const verifyCsrfToken = (event: any): boolean => {
  try {
    const csrfToken = event.headers["x-csrf-token"];
    const cookies = parseCookies(event.headers.cookie || "");
    const cookieCsrfToken = cookies[CSRF_COOKIE_NAME];

    // If no cookie token but header token exists, this might be the first request
    // Accept it and set it as the cookie token for future requests
    if (csrfToken && !cookieCsrfToken) {
      // We'll need to modify the withSession function to handle this case
      return true;
    }

    // Normal validation for subsequent requests
    return csrfToken && cookieCsrfToken && csrfToken === cookieCsrfToken;
  } catch (error) {
    console.error("Error during CSRF verification:", error);
    return false;
  }
};
```

### Option 3: Create a Dedicated Endpoint for CSRF Token Generation

1. Create a new endpoint that clients can call to get a valid CSRF token.
2. Modify the frontend to call this endpoint before showing the form.

```typescript
// New endpoint: netlify/functions/get-csrf-token.ts
import { Handler } from "@netlify/functions";
import { withSession } from "./session-middleware";

const handler: Handler = async (event) => {
  // The withSession middleware will handle setting the CSRF token
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "CSRF token set in cookies" }),
  };
};

export { handler };
```

## Recommended Solution

**Option 1** is recommended as it aligns with the standard CSRF protection pattern where the server generates the token and the client uses it. This approach:

1. Maintains proper security by using server-generated tokens
2. Requires minimal changes to the backend code
3. Follows the intended flow of the existing session middleware

## Implementation Steps

1. Create a simple endpoint for initializing a session
2. Modify the Contact component to fetch this endpoint on load
3. Extract the CSRF token from the cookie after the initial request
4. Use this token for the form submission

This approach ensures that the CSRF token used in the request header will always match the one in the cookie, resolving the validation failure.
