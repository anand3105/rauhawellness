# 📧 Email Notification Setup Guide

All quiz responses and waitlist sign-ups will be automatically sent to **anandjnu007@gmail.com**

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Under "How you sign in to Google", enable **2-Step Verification** (if not already enabled)
4. Scroll down and click **App passwords**
5. Select **Mail** and **Other (Custom name)**
6. Enter "Rauha Wellness" as the name
7. Click **Generate**
8. **Copy the 16-character password** (looks like: `xxxx xxxx xxxx xxxx`)

### Step 2: Configure Email Settings

Open `.env.local` file and update:

```env
ADMIN_EMAIL=anandjnu007@gmail.com
EMAIL_SERVICE=gmail
EMAIL_USER=your-business-email@gmail.com
EMAIL_PASS=your-16-char-app-password-here
```

**Important:**
- Remove spaces from the app password
- Use the email account you want to send FROM
- Emails will be sent TO: anandjnu007@gmail.com

### Step 3: Restart Your Dev Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

## ✅ Done!

Now every time someone:
- Completes the skin quiz → You'll get an email notification
- Joins the waitlist → You'll get an email notification

---

## 📨 What You'll Receive

### Quiz Notifications

**Subject:** 🎯 New Quiz Submission - Kumkumadi Oil

**Content:**
- Customer's email
- Skin type
- Skin concerns
- Skin goals
- Age range
- Recommended product
- Timestamp

### Waitlist Notifications

**Subject:** 🎉 New Waitlist Sign-up - kumkumadi

**Content:**
- Customer's email
- Selected product
- Timestamp
- Reminder: 15% discount for this customer

---

## 🔧 Troubleshooting

### Emails Not Sending?

**Check Console Output:**
```bash
# Look for these messages in your terminal:
✅ Email sent successfully: <message-id>
# OR
❌ Error sending email: ...
```

**Common Issues:**

1. **"Invalid credentials"**
   - Make sure you're using an App Password, not your regular Gmail password
   - Verify 2-Step Verification is enabled
   - Check for typos in EMAIL_USER and EMAIL_PASS

2. **"Emails not sending but no errors"**
   - Check your .env.local file is in the root directory
   - Restart your dev server after changing .env.local
   - Verify EMAIL_USER matches the account you created the App Password for

3. **"Less secure app access"**
   - Gmail no longer supports this method
   - You MUST use App Passwords (see Step 1)

### Test Email Setup

You can test by:
1. Going to http://localhost:3000/skin-quiz
2. Complete the quiz with a test email
3. Check your terminal for email confirmation
4. Check anandjnu007@gmail.com inbox

---

## 🔒 Security Notes

### ✅ DO:
- Keep .env.local in .gitignore (already configured)
- Use a dedicated business email for sending
- Use App Passwords (never regular passwords)
- Keep credentials secure

### ❌ DON'T:
- Commit .env.local to version control
- Share your App Password
- Use your personal Gmail password
- Disable 2-Step Verification

---

## 📊 Email Features

### Beautiful HTML Templates
- Responsive design
- Brand colors (Rauha gradient)
- Clear, organized layout
- Mobile-friendly

### Plain Text Fallback
- Works even if HTML is blocked
- All information included

### Non-Blocking
- Emails sent asynchronously
- Doesn't slow down the website
- User gets instant response

---

## 🌐 Alternative Email Services

Want to use a different email service? Update `EMAIL_SERVICE`:

### Outlook/Hotmail
```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Yahoo
```env
EMAIL_SERVICE=yahoo
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

### Custom SMTP
Edit `lib/email/config.ts` and use custom SMTP settings:
```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_CONFIG.USER,
    pass: EMAIL_CONFIG.PASS,
  },
});
```

---

## 📞 Support

If you're still having issues:
1. Check the terminal console for error messages
2. Verify all steps in this guide
3. Make sure .env.local has correct values
4. Restart your dev server

**Email Format:**
- Quiz emails: "🎯 New Quiz Submission - [Product]"
- Waitlist emails: "🎉 New Waitlist Sign-up - [Product]"

All emails sent to: **anandjnu007@gmail.com**
