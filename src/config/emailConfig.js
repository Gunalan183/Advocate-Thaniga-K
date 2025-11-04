// EmailJS Configuration for Advocate Thaniga K Website
// Follow these steps to set up EmailJS:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail recommended for thinga07@gmail.com)
// 3. Create an email template with the following variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{phone}} - Sender's phone number
//    - {{subject}} - Message subject
//    - {{message}} - Message content
//    - {{to_email}} - Recipient email (thinga07@gmail.com)
//    - {{reply_to}} - Reply-to email address

// 4. Replace the following values in Contact.js:
export const emailConfig = {
    serviceID: 'service_advocate_thaniga', // Replace with your EmailJS service ID
    templateID: 'template_contact_form',   // Replace with your EmailJS template ID
    userID: 'your_emailjs_user_id',       // Replace with your EmailJS user ID (Public Key)
};

// Sample Email Template for EmailJS:
/*
Subject: New Legal Consultation Request - {{subject}}

Dear Advocate Thaniga K,

You have received a new message through your website contact form:

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

Please respond to this inquiry at your earliest convenience.

Best regards,
LawSpot Website Contact Form
*/

// Instructions for Gmail Setup:
/*
1. In EmailJS, add Gmail service
2. Authorize your Gmail account (thinga07@gmail.com)
3. Create template with above content
4. Test the template
5. Copy Service ID, Template ID, and User ID to Contact.js
6. Update the serviceID, templateID, and userID in the handleSubmit function
*/

export default emailConfig;