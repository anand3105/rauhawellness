# FINAL VERCEL SETUP - Copy & Paste Ready

## Your Email Configuration Summary

**Emails FROM:** info@rauhawellness.com (Hostinger)
**Emails TO:** info@rauhawellness.com (Admin notifications - same email)

---

## Step 1: Add Environment Variables to Vercel

1. Go to: https://vercel.com/dashboard
2. Select your project: **rauhawellness**
3. Click: **Settings** → **Environment Variables**
4. Add these **6 variables** (copy and paste exactly):

### Variable 1
```
Name: ADMIN_EMAIL
Value: info@rauhawellness.com
```

### Variable 2
```
Name: EMAIL_HOST
Value: smtp.hostinger.com
```

### Variable 3
```
Name: EMAIL_PORT
Value: 465
```

### Variable 4
```
Name: EMAIL_SECURE
Value: true
```

### Variable 5
```
Name: EMAIL_USER
Value: info@rauhawellness.com
```

### Variable 6
```
Name: EMAIL_PASS
Value: Shameem@321
```

**IMPORTANT:**
- Do NOT create a variable called `EMAIL_SERVICE` (leave it unset)
- Select all three environments: **Production**, **Preview**, **Development**
- Click "Save" after adding each variable

---

## Step 2: Redeploy Your Application

After adding all variables:

**Option A - Automatic (Recommended):**
```bash
git add .
git commit -m "Fix email configuration for Vercel"
git push
```

**Option B - Manual:**
1. Go to Vercel Dashboard → Deployments
2. Click the three dots (...) next to latest deployment
3. Click "Redeploy"

---

## Step 3: Test the Email System

1. Visit your deployed site: https://your-site.vercel.app
2. Test each form:
   - ✅ Newsletter subscription
   - ✅ Waitlist signup
   - ✅ Skin quiz

3. Check **anandjnu007@gmail.com** for notifications
4. Check customer emails for confirmation messages

---

## How It Works

```
Customer submits form
        ↓
Vercel API processes
        ↓
Sends 2 emails via Hostinger SMTP:
  1. Admin notification → info@rauhawellness.com
  2. Customer confirmation → customer's email
        ↓
Success response to customer
```

---

## Troubleshooting

### If emails don't send:

1. **Check Vercel Logs:**
   - Dashboard → Deployments → Click deployment → Functions tab
   - Look for error messages

2. **Common Issues:**
   - `Authentication failed` → Wrong password
   - `ECONNREFUSED` → Wrong SMTP host or port
   - `Missing credentials` → Variables not set properly

3. **Verify Hostinger email:**
   - Login to Hostinger control panel
   - Check if info@rauhawellness.com is active
   - Verify password is correct

4. **Test locally first:**
   ```bash
   npm run dev
   ```
   - Submit a form at http://localhost:3000
   - Check terminal for error messages

---

## View Submissions

Since there's no database, submissions are tracked via:

1. **Email notifications** → Check info@rauhawellness.com inbox
2. **Vercel function logs** → Dashboard → Deployments → Functions
3. **Console logs** → Each submission is logged

---

## Security Recommendations

⚠️ **IMPORTANT:** You shared your password in this conversation. For security:

1. **Change your password:**
   - Login to Hostinger
   - Change password for info@rauhawellness.com

2. **Update the password in:**
   - Vercel: Settings → Environment Variables → EMAIL_PASS
   - Local: `.env.local` file (already done)

3. **Never share:**
   - Don't commit `.env.local` to git (it's in `.gitignore`)
   - Don't share passwords in chat/email
   - Use strong, unique passwords

---

## Quick Reference

**Local development:** Already configured in `.env.local`
**Vercel production:** Add 6 environment variables (see Step 1)
**Email provider:** Hostinger SMTP
**SMTP host:** smtp.hostinger.com
**Port:** 465 (SSL)

---

## Next Steps After Setup

1. ✅ Add environment variables to Vercel
2. ✅ Redeploy application
3. ✅ Test all forms
4. ✅ Change password for security
5. ✅ Update EMAIL_PASS in Vercel with new password

---

**Need help?** Check `VERCEL_SETUP.md` for detailed troubleshooting.
