# Hostinger Email Setup Guide

## Quick Setup for info@rauhawellness.com

Follow these steps to enable email notifications using your Hostinger email account.

---

## Step 1: Get Your Email Password

### If you already have the email account:

1. **Log in to Hostinger Control Panel:**
   - Go to: https://hpanel.hostinger.com
   - Sign in with your Hostinger account

2. **Navigate to Email:**
   - Click on "Emails" in the sidebar
   - Find your email account: `info@rauhawellness.com`

3. **Get/Reset Password:**
   - Click on "Manage" next to your email
   - If you don't remember the password, click "Change Password"
   - Set a strong password (save it securely!)

### If you need to create the email account:

1. **Log in to Hostinger Control Panel**
2. **Go to Emails → Email Accounts**
3. **Click "Create Email Account"**
4. **Enter:**
   - Email: `info@rauhawellness.com`
   - Password: Create a strong password
5. **Click "Create"**

---

## Step 2: Update .env.local

Open your `.env.local` file and update the password:

```env
# Admin email (where notifications will be sent)
ADMIN_EMAIL=anandjnu007@gmail.com

# Hostinger SMTP Settings (already configured)
EMAIL_SERVICE=
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=465
EMAIL_SECURE=true

# Your Hostinger email credentials
EMAIL_USER=info@rauhawellness.com
EMAIL_PASS=your-actual-password-here    # ← PUT YOUR PASSWORD HERE
```

**Replace `your-actual-password-here` with your actual Hostinger email password.**

---

## Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C in terminal)
npm run dev
```

---

## Step 4: Test Email Notifications

### Test Waitlist Form:
1. Open: http://localhost:3001
2. Scroll to waitlist section
3. Enter an email and select a product
4. Click "Add to Wishlist & Subscribe"
5. Check terminal for "✅ Email sent successfully"
6. Check **anandjnu007@gmail.com** for the notification

### Test Quiz:
1. Go to: http://localhost:3001/skin-quiz
2. Complete all quiz steps
3. Submit with your email
4. Check terminal for "✅ Email sent successfully"
5. Check **anandjnu007@gmail.com** for the notification

---

## Hostinger SMTP Settings Reference

These are already configured in your `.env.local`:

| Setting | Value |
|---------|-------|
| **SMTP Host** | smtp.hostinger.com |
| **Port** | 465 (SSL) |
| **Security** | SSL/TLS |
| **Username** | info@rauhawellness.com |
| **Password** | Your email password |

---

## What Emails Will Look Like

**From:** Rauha Wellness <info@rauhawellness.com>
**To:** anandjnu007@gmail.com
**Subject:** 🎯 New Quiz Submission - [Product Name]

Or

**Subject:** 🎉 New Waitlist Sign-up - [Product Name]

You can preview the email templates in `EMAIL_PREVIEW.html`

---

## Troubleshooting

### ❌ Error: "Invalid login"

**Solution:**
1. Verify your password is correct
2. Check that `info@rauhawellness.com` exists in Hostinger
3. Try resetting the password in Hostinger control panel

### ❌ Error: "Connection timeout"

**Solution:**
1. Check your internet connection
2. Verify Hostinger SMTP settings are correct
3. Try using port 587 instead:
   ```env
   EMAIL_PORT=587
   EMAIL_SECURE=false
   ```

### ❌ Error: "Self-signed certificate"

**Solution:**
Add this to your `.env.local`:
```env
NODE_TLS_REJECT_UNAUTHORIZED=0
```
**Note:** Only use this for development, not production!

### 📧 Emails not arriving

**Check:**
1. Spam folder in anandjnu007@gmail.com
2. Terminal for "✅ Email sent successfully" message
3. Email quota in Hostinger (some plans have limits)
4. That `ADMIN_EMAIL` is correctly set

### 🔍 Check SMTP Connection

You can test SMTP directly:

```bash
node scripts/test-api.js
```

Look for:
- ✅ "Email sent successfully"
- ❌ Any error messages

---

## Alternative Ports

If port 465 doesn't work, try these alternatives:

### Option 1: Port 587 with STARTTLS
```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

### Option 2: Port 25 (Less secure)
```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=25
EMAIL_SECURE=false
```

---

## Security Best Practices

✅ **Do:**
- Use a strong, unique password for your email
- Keep `.env.local` in `.gitignore`
- Never share your email password
- Enable 2FA on your Hostinger account

❌ **Don't:**
- Commit `.env.local` to version control
- Share your password in screenshots
- Use the same password for multiple services
- Store passwords in plain text elsewhere

---

## Email Limits

Hostinger email accounts typically have:
- **Sending limit:** 100-300 emails per hour (depending on plan)
- **Storage:** 1-10 GB (depending on plan)

For high-volume sending, consider:
- Upgrading Hostinger plan
- Using a dedicated email service (SendGrid, Mailgun)
- Implementing email queuing

---

## How It Works

1. **Customer submits quiz or waitlist**
2. **Data saved to JSON file** (data/quiz-responses.json or data/waitlist.json)
3. **Email notification sent FROM** info@rauhawellness.com
4. **Email notification sent TO** anandjnu007@gmail.com
5. **You receive beautiful HTML email** with customer details

---

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables** in hosting platform:
   - ADMIN_EMAIL
   - EMAIL_HOST
   - EMAIL_PORT
   - EMAIL_SECURE
   - EMAIL_USER
   - EMAIL_PASS

2. **Migrate from file storage to database**
   - See `API_README.md` for database options

3. **Test thoroughly** before going live

---

## Need Help?

1. **Check Hostinger documentation:**
   - https://support.hostinger.com/en/articles/1583229-how-to-use-smtp

2. **Check terminal output** for error messages

3. **Test with curl:**
   ```bash
   curl -X POST http://localhost:3001/api/waitlist \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","selectedProduct":"Kumkumadi"}'
   ```

4. **Review email logs** in Hostinger control panel

---

## Quick Checklist

Before launching:

- [ ] Created `info@rauhawellness.com` in Hostinger
- [ ] Updated `.env.local` with correct password
- [ ] Restarted development server
- [ ] Tested waitlist form submission
- [ ] Tested quiz submission
- [ ] Verified email received at anandjnu007@gmail.com
- [ ] Checked email formatting (open `EMAIL_PREVIEW.html`)
- [ ] Confirmed data saved to JSON files

---

**You're all set!** Your Rauha Wellness website will now send beautiful email notifications using your professional domain email.

---

**Questions?** Check the other documentation files:
- `GETTING_STARTED.md` - General setup guide
- `EMAIL_SETUP.md` - Gmail setup (alternative)
- `API_README.md` - API documentation
- `FIXES_APPLIED.md` - Recent fixes
