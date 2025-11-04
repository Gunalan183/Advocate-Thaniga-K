# EmailJS Setup Guide for Advocate Thaniga K Website

This guide will help you set up EmailJS to send contact form messages directly to `thinga07@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as the service provider
4. Click **Connect Account** and authorize your Gmail account (`thinga07@gmail.com`)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Subject:
```
New Legal Consultation Request - {{subject}}
```

### Template Body:
```
Dear Advocate Thaniga K,

You have received a new message through your website contact form:

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

Please respond to this inquiry at your earliest convenience.

You can reply directly to: {{reply_to}}

Best regards,
LawSpot Website Contact Form
```

4. Set the **To Email** field to: `thinga07@gmail.com`
5. Set the **Reply To** field to: `{{reply_to}}`
6. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** (User ID)
3. Note it down (e.g., `user_abc123xyz`)

## Step 5: Update Website Configuration

1. Open `src/pages/Contact.js`
2. Replace these values in the `handleSubmit` function:

```javascript
const serviceID = 'your_service_id_here';     // Replace with your Service ID
const templateID = 'your_template_id_here';   // Replace with your Template ID  
const userID = 'your_public_key_here';        // Replace with your Public Key
```

## Step 6: Test the Setup

1. Save the changes and restart your development server
2. Go to the Contact page on your website
3. Fill out and submit the contact form
4. Check `thinga07@gmail.com` for the test email

## Troubleshooting

### If emails are not being sent:
1. Check the browser console for error messages
2. Verify all IDs are correct in the code
3. Ensure Gmail service is properly connected
4. Check EmailJS dashboard for usage limits

### If emails go to spam:
1. Add your website domain to Gmail's trusted senders
2. Check the template content for spam-like keywords
3. Ensure the "From" field is properly configured

### Fallback Option:
If EmailJS fails, the website will automatically open the user's default email client with a pre-filled message to `thinga07@gmail.com`.

## Security Notes

- Never expose your Private Key in client-side code
- Use only the Public Key in your React application
- EmailJS free plan allows 200 emails per month
- Consider upgrading for higher volume

## Support

For EmailJS specific issues, visit: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

---

**Important:** After completing the setup, delete this file or move it outside the public directory for security.