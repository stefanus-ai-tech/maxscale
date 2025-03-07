# Email Functionality Setup

This project includes a Netlify serverless function to send emails from the contact form. Follow these steps to set it up:

## Prerequisites

- A Netlify account
- SMTP server credentials (you can use Gmail, SendGrid, or any other SMTP provider)

## Setup Instructions

1. **Create a `.env` file in the root of your project**

   Copy the `.env.example` file to a new file named `.env`:

   ```bash
   cp .env.example .env
   ```

   Then fill in your SMTP server details:

   ```
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@example.com
   SMTP_PASS=your-password-or-app-password
   ```

   Note: This file is for local development only and should not be committed to your repository.

2. **Set up environment variables in Netlify**

   In your Netlify dashboard:

   - Go to your site settings
   - Navigate to "Environment variables"
   - Add the following variables with your SMTP server details:
     - `SMTP_HOST`
     - `SMTP_PORT`
     - `SMTP_SECURE`
     - `SMTP_USER`
     - `SMTP_PASS`

3. **Deploy to Netlify**

   Make sure your `netlify.toml` file is properly configured (it should be already set up in this project).

   ```bash
   git add .
   git commit -m "Add email functionality"
   git push
   ```

   Or deploy using the Netlify CLI:

   ```bash
   netlify deploy --prod
   ```

## How It Works

1. When a user submits the contact form, the form data is sent to the `/api/send-email` endpoint.
2. The Netlify serverless function processes the request and sends an email to both recipients:
   - stefanusaitech@gmail.com
   - irfanwill.co@gmail.com
3. The function returns a success or error response to the frontend.

## Testing Locally

To test the email functionality locally:

1. Install the Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Run the development server:

   ```bash
   netlify dev
   ```

   This will start both your frontend and the Netlify functions locally.

3. Fill out the contact form and submit it to test the email functionality.

## Troubleshooting

- If emails are not being sent, check your SMTP credentials and make sure they are correctly set in your environment variables.
- For Gmail, you might need to use an "App Password" instead of your regular password.
- Check the Netlify function logs for any errors.

## Modifying Recipients

To change the email recipients, edit the `RECIPIENTS` array in the `netlify/functions/send-email.ts` file:

```typescript
const RECIPIENTS = ["stefanusaitech@gmail.com", "irfanwill.co@gmail.com"];
```
