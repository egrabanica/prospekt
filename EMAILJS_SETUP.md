# EmailJS Setup Guide

## Steps to Enable Email Functionality

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account
   - Verify your email address

2. **Add Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy your **Service ID** (e.g., `service_abc123`)

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template structure:

```
Subject: Neue Anfrage von {{from_name}}

Von: {{from_name}}
E-Mail: {{from_email}}
Telefon: {{phone}}
PLZ: {{plz}}
Auflage: {{auflage}}

Nachricht:
{{message}}
```

   - Save and copy your **Template ID** (e.g., `template_xyz789`)

4. **Get Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key** (e.g., `YOUR_PUBLIC_KEY_HERE`)

5. **Update Contact.js**
   - Open `src/components/Contact/Contact.js`
   - Replace these values (around line 45):
     ```javascript
     await emailjs.send(
       'service_YOUR_SERVICE_ID',    // Replace with your Service ID
       'template_YOUR_TEMPLATE_ID',  // Replace with your Template ID
       templateParams,
       'YOUR_PUBLIC_KEY'             // Replace with your Public Key
     );
     ```

6. **Test**
   - Fill out the contact form on your website
   - Check your email inbox for the message
   - Verify all fields are received correctly

## Email Template Variables

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Phone number
- `{{plz}}` - Postal code
- `{{auflage}}` - Circulation/quantity
- `{{message}}` - Message text
- `{{to_email}}` - Your email (dritonthaqi1980@outlook.com)

## Troubleshooting

- Make sure all IDs are correct (no typos)
- Check EmailJS dashboard for failed emails
- Verify your email service is properly connected
- Check browser console for error messages
