# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email sending directly from your contact form.

## Prerequisites

1. Sign up for a free EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Verify your email address

## Step 1: Create an Email Service

1. Go to [Email Services](https://dashboard.emailjs.com/admin) in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (it looks like: `service_xxxxxxxxxx`)

## Step 2: Create an Email Template

1. Go to [Email Templates](https://dashboard.emailjs.com/admin/templates) in your dashboard
2. Click "Create New Template"
3. Set up your template with the following variables:

   **Subject:**
   ```
   {{subject}}
   ```

   **To Email:**
   ```
   neighbourandy@gmail.com
   ```

   **From Name:**
   ```
   {{from_name}}
   ```

   **From Email:**
   ```
   {{from_email}}
   ```

   **Reply To:**
   ```
   {{from_email}}
   ```

   **Message/Body:**
   ```
   Hi Neighbour Andy,

   You have received a new message from your website contact form:

   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}

   Message:
   {{message}}

   Best regards,
   Your Website Contact Form
   ```

4. Save the template and note down your **Template ID** (it looks like: `template_xxxxxxxxxx`)

## Step 3: Get Your Public Key

1. Go to [Account](https://dashboard.emailjs.com/admin/account) in your dashboard
2. Find your **Public Key** (it looks like: `xxxxxxxxxxxxxx`)
3. Note this down

## Step 4: Update Your Contact Page

1. Open `app/contact/page.tsx`
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
const emailJSConfig = {
    serviceId: 'service_xxxxxxxxxx', // Your Service ID
    templateId: 'template_xxxxxxxxxx', // Your Template ID
    publicKey: 'xxxxxxxxxxxxxx' // Your Public Key
};
```

## Step 5: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check your email (neighbourandy@gmail.com) to confirm emails are being received

## Troubleshooting

### Emails Not Sending

1. Check your browser's console for JavaScript errors
2. Verify all three EmailJS credentials are correct
3. Ensure your email service is properly configured in EmailJS
4. Check your EmailJS dashboard for any error messages

### EmailJS Console Errors

- `EmailJS service ID not found`: Double-check your Service ID
- `EmailJS template ID not found`: Double-check your Template ID
- `Invalid public key`: Double-check your Public Key

### Gmail-Specific Issues

If using Gmail, you may need to:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password instead of your regular password when setting up the service

## Security Notes

- Your Public Key is safe to use in client-side code
- Never expose your Private Key in client-side code
- The contact form includes basic validation but consider adding server-side validation for production

## EmailJS Limits (Free Plan)

- 200 emails per month
- 50 emails per day
- Upgrade to a paid plan for higher limits

## Support

For more help, check the [EmailJS Documentation](https://www.emailjs.com/docs/) or contact their support.
