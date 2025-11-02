# Vercel Deployment Setup Guide

## Email Configuration for Vercel

Your email system is now configured to work on Vercel's serverless environment. Follow these steps to set up your environment variables.

### Step 1: Get Your SMTP Settings

You're using a custom email: **info@rauhawellness.com**

You'll need to get your SMTP settings from your email provider (Hostinger, cPanel, etc.). Typically you need:

- **SMTP Host**: (e.g., `smtp.hostinger.com`, `mail.rauhawellness.com`, or `smtp.yourdomain.com`)
- **SMTP Port**: Usually `465` (SSL) or `587` (TLS)
- **Your email password**: The password for info@rauhawellness.com

**Where to find SMTP settings:**
- Check your hosting provider's email documentation
- Look for "Email Settings" or "Mail Configuration" in your hosting control panel
- Contact your hosting support if unsure

Common providers:
- **Hostinger**: `smtp.hostinger.com`, port `465`, SSL enabled
- **cPanel**: `mail.yourdomain.com`, port `465` or `587`
- **GoDaddy**: `smtpout.secureserver.net`, port `465` or `587`
- **Namecheap**: `mail.privateemail.com`, port `465` or `587`

### Step 2: Configure Environment Variables in Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project (rauhawellness)
3. Click on **Settings** tab
4. Click on **Environment Variables** in the left sidebar
5. Add the following environment variables:

#### Required Variables for Custom Email (info@rauhawellness.com):

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `ADMIN_EMAIL` | `info@rauhawellness.com` | Email where notifications are sent |
| `EMAIL_HOST` | `smtp.hostinger.com` | Your SMTP server (from Step 1) |
| `EMAIL_PORT` | `465` | SMTP port (usually 465 or 587) |
| `EMAIL_SECURE` | `true` | Use SSL/TLS (true for 465, false for 587) |
| `EMAIL_USER` | `info@rauhawellness.com` | Your email address (sender) |
| `EMAIL_PASS` | `your-email-password` | Your email password |

**Important:**
- DO NOT set `EMAIL_SERVICE` when using custom SMTP (leave it unset)
- Replace `smtp.hostinger.com` with your actual SMTP host
- Use your actual email password for `info@rauhawellness.com`
- Make sure all variables are set for **Production**, **Preview**, and **Development** environments

### Step 3: Redeploy Your Application

After adding the environment variables:

1. Go to the **Deployments** tab in Vercel
2. Click on the three dots (...) next to your latest deployment
3. Click **Redeploy**
4. OR: Push a new commit to trigger automatic redeployment

### Step 4: Test the Email System

1. Visit your deployed website
2. Try submitting:
   - Newsletter subscription
   - Waitlist signup
   - Skin quiz
3. Check your `ADMIN_EMAIL` inbox for notifications
4. Check the customer email inbox for confirmation emails

### Step 5: Monitor Logs

To view submission logs and debug issues:

1. Go to your Vercel dashboard
2. Click on your project
3. Click on **Deployments**
4. Click on a deployment
5. Click on **Functions** tab
6. Click on a function (e.g., `/api/waitlist`)
7. View the logs to see submissions and any errors

## What Changed?

### Before (Local Development)
- Data was saved to JSON files on disk
- Worked fine locally but failed on Vercel

### After (Vercel Compatible)
- No file system usage (Vercel is read-only)
- All submissions are sent via email immediately
- Submissions are logged to Vercel function logs
- No database required

## Troubleshooting

### Emails Not Sending?

1. **Check environment variables:**
   ```bash
   # In Vercel dashboard > Settings > Environment Variables
   # Verify all 4 variables are set correctly
   ```

2. **Verify Gmail App Password:**
   - Make sure you used the App Password, not your regular password
   - App password should be 16 characters without spaces
   - 2-Step Verification must be enabled

3. **Check Vercel logs:**
   - Look for error messages like "Invalid login" or "Authentication failed"
   - Check if emails are being attempted: look for "📤 Sending email notifications..."

4. **Common errors:**
   - `Invalid login: 535-5.7.8` → Wrong password, use App Password
   - `Missing credentials` → Environment variables not set
   - `ENOTFOUND` → Wrong EMAIL_HOST or EMAIL_SERVICE

### Alternative: Using Gmail Instead

If you prefer to use Gmail (simpler setup):

1. Set up Gmail App Password:
   - Go to https://myaccount.google.com/
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"

2. Use these environment variables instead:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `ADMIN_EMAIL` | `your-admin@gmail.com` | Where notifications go |
| `EMAIL_SERVICE` | `gmail` | Use Gmail service |
| `EMAIL_USER` | `your-email@gmail.com` | Your Gmail address |
| `EMAIL_PASS` | `your-16-char-app-password` | Gmail App Password |

**Remove** `EMAIL_HOST`, `EMAIL_PORT`, and `EMAIL_SECURE` when using Gmail.

## Viewing Submissions

Since there's no database, you have three options to view form submissions:

### Option 1: Email Notifications (Current Setup)
- All submissions are sent to `ADMIN_EMAIL`
- Check your inbox for notifications

### Option 2: Vercel Function Logs
- Go to Vercel Dashboard > Deployments > Functions
- View logs to see JSON data of submissions

### Option 3: Add a Database (Future Enhancement)
Consider integrating:
- **Vercel Postgres** (free tier available)
- **Supabase** (free PostgreSQL)
- **MongoDB Atlas** (free tier)
- **Google Sheets API** (simple option)

## Need Help?

- Check Vercel docs: https://vercel.com/docs/concepts/projects/environment-variables
- Gmail App Passwords: https://support.google.com/accounts/answer/185833
- Nodemailer docs: https://nodemailer.com/

## Security Notes

- Never commit `.env.local` to git (it's in `.gitignore`)
- Use App Passwords, not your main Gmail password
- Rotate passwords regularly
- Monitor your email sending limits (Gmail: 500 emails/day)
