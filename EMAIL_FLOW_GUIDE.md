# Complete Email Flow Guide - Rauha Wellness

## ✅ Email Configuration

**All emails are sent FROM:** info@rauhawellness.com
**Admin notifications go TO:** info@rauhawellness.com
**Customer confirmations go TO:** Customer's submitted email

---

## 📧 What Happens When Someone Submits

### Scenario 1: Customer Joins Waitlist

**Example:** Sarah (sarah@example.com) joins waitlist for Kumkumadi Oil

**What happens:**

1. **Data is saved** to `data/waitlist.json`

2. **Email #1 - Admin Notification**
   - **From:** Rauha Wellness <info@rauhawellness.com>
   - **To:** info@rauhawellness.com
   - **Subject:** 🎉 New Waitlist Sign-up - Kumkumadi
   - **Contains:**
     - Sarah's email (sarah@example.com)
     - Selected product (Kumkumadi)
     - Sign-up date and time
     - Reminder that she gets 15% OFF

3. **Email #2 - Customer Confirmation**
   - **From:** Rauha Wellness <info@rauhawellness.com>
   - **To:** sarah@example.com
   - **Subject:** 🎉 You're on the Rauha Wellness Waitlist!
   - **Contains:**
     - Welcome message
     - Discount code: **EARLY15** (15% OFF)
     - Launch date: December 2025
     - What to expect next
     - Benefits of being on waitlist

**Result:**
- ✅ You receive notification at info@rauhawellness.com
- ✅ Sarah receives confirmation with discount code at sarah@example.com

---

### Scenario 2: Customer Completes Quiz

**Example:** John (john@example.com) completes skin quiz

**What happens:**

1. **Data is saved** to `data/quiz-responses.json`

2. **Email #1 - Admin Notification**
   - **From:** Rauha Wellness <info@rauhawellness.com>
   - **To:** info@rauhawellness.com
   - **Subject:** 🎯 New Quiz Submission - [Recommended Product]
   - **Contains:**
     - John's email (john@example.com)
     - Skin type, concerns, goals
     - Age range
     - Recommended product
     - Complete quiz responses

3. **Email #2 - Customer Confirmation**
   - **From:** Rauha Wellness <info@rauhawellness.com>
   - **To:** john@example.com
   - **Subject:** ✨ Your Personalized Skincare Recommendation from Rauha
   - **Contains:**
     - Personalized product recommendation
     - Why it's perfect for his skin
     - Discount code: **EARLY15** (15% OFF)
     - Launch date: December 2025
     - Product benefits

**Result:**
- ✅ You receive notification at info@rauhawellness.com
- ✅ John receives personalized recommendation with discount code at john@example.com

---

## 📨 Email Summary

### For Every Submission, 2 Emails Are Sent:

| Email Type | Sent From | Sent To | Purpose |
|------------|-----------|---------|---------|
| Admin Notification | info@rauhawellness.com | info@rauhawellness.com | You get notified about submission |
| Customer Confirmation | info@rauhawellness.com | Customer's email | Customer gets confirmation + EARLY15 code |

---

## 🧪 How to Test

### Step 1: Test Waitlist Form

1. **Open:** http://localhost:3004
2. **Scroll to:** Waitlist section
3. **Enter:** YOUR personal email (like yourname@gmail.com)
4. **Select:** Kumkumadi or Rosehip
5. **Click:** "Add to Wishlist & Subscribe"

**What to check:**

✅ **Terminal shows:**
```
✅ Email sent successfully: [id]
✅ Email sent successfully: [id]
```

✅ **Check info@rauhawellness.com inbox:**
- Should receive: Admin notification with customer details

✅ **Check YOUR personal email inbox:**
- Should receive: Welcome email with EARLY15 discount code

---

### Step 2: Test Quiz Form

1. **Open:** http://localhost:3004/skin-quiz
2. **Complete:** All quiz steps
3. **Enter:** YOUR personal email
4. **Submit:** Quiz

**What to check:**

✅ **Terminal shows:**
```
✅ Email sent successfully: [id]
✅ Email sent successfully: [id]
```

✅ **Check info@rauhawellness.com inbox:**
- Should receive: Quiz results notification

✅ **Check YOUR personal email inbox:**
- Should receive: Personalized recommendation with EARLY15 code

---

## 🔍 Troubleshooting

### Issue: Not Receiving ANY Emails

**Check Terminal for Errors:**

If you see:
```
❌ Error sending email: Invalid login
```

**Solution:**
1. Verify `EMAIL_USER=info@rauhawellness.com` in .env.local
2. Verify `EMAIL_PASS=Shameem@321` in .env.local
3. Restart server: Stop (Ctrl+C) and run `npm run dev`

---

### Issue: Only Admin Email Works (Customer Email Not Sent)

**Check Terminal:**
```
✅ Email sent successfully: [id]
❌ Failed to send customer confirmation: [error]
```

**Common Causes:**
1. **Invalid customer email:** Check the email format is correct
2. **Email provider blocking:** Try different test email (not Gmail)
3. **Rate limiting:** Hostinger may limit emails per hour

**Solution:**
- Use valid email addresses for testing
- Wait a few minutes between tests
- Check Hostinger email quota

---

### Issue: Only Customer Email Works (Admin Email Not Sent)

**Check Terminal:**
```
❌ Failed to send admin notification: [error]
✅ Email sent successfully: [id]
```

**Solution:**
- Verify ADMIN_EMAIL=info@rauhawellness.com in .env.local
- Check you're not sending to yourself (same address)
- Restart server

---

### Issue: Emails Going to Spam

**For info@rauhawellness.com:**
- Check Hostinger spam folder
- Check email filters
- Whitelist info@rauhawellness.com in your email client

**For customer emails:**
- This is normal during testing
- For production, configure SPF/DKIM in Hostinger
- See HOSTINGER_EMAIL_SETUP.md for deliverability tips

---

### Issue: No Email Logs in Terminal

**If terminal shows nothing after submission:**

1. **Check form submission worked:**
   - Look for "Successfully added to waitlist" message on website
   - Check `data/waitlist.json` or `data/quiz-responses.json`

2. **Check email config:**
   ```bash
   # View .env.local
   cat .env.local
   ```

   Should show:
   ```
   ADMIN_EMAIL=info@rauhawellness.com
   EMAIL_HOST=smtp.hostinger.com
   EMAIL_PORT=465
   EMAIL_SECURE=true
   EMAIL_USER=info@rauhawellness.com
   EMAIL_PASS=Shameem@321
   ```

3. **Restart server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

---

## 📝 Email Templates

### Admin Notification (Waitlist):

```
Subject: 🎉 New Waitlist Sign-up - Kumkumadi

Email Address: customer@example.com
Selected Product: Kumkumadi
Sign-up Date: [date and time]

Remember: This customer gets 15% OFF on launch day!
```

### Customer Confirmation (Waitlist):

```
Subject: 🎉 You're on the Rauha Wellness Waitlist!

Hi there! 👋

Thank you for joining the Rauha Wellness waitlist!

[Large discount code display]
EARLY15
Save 15% on your first purchase!

What's Next?
📅 Launch Day: December 2025 - You'll be the first to know!
💎 Early Access: Get exclusive first access
💰 Special Discount: Use code EARLY15 for 15% OFF
📧 Updates: We'll send you launch reminders

Stay beautiful,
The Rauha Wellness Team
```

### Admin Notification (Quiz):

```
Subject: 🎯 New Quiz Submission - Kumkumadi Oil

Email: customer@example.com
Skin Type: Combination
Concerns: Dullness, Pigmentation
Goals: Radiance, Even Tone
Age Range: 26-35
Recommended: Kumkumadi Oil
```

### Customer Confirmation (Quiz):

```
Subject: ✨ Your Personalized Skincare Recommendation

Hi! 👋

Thank you for taking our Skin Quiz!

We Recommend: Kumkumadi Oil
Perfect for your skin type and concerns

[Discount code]
EARLY15
Save 15% on your first order!

Why Kumkumadi Oil?
✓ Matches your skin type
✓ Addresses your concerns
✓ Research-backed ingredients
✓ 10 years of expertise

Coming December 2025
Use code EARLY15 to save 15%!
```

---

## ✅ Current Configuration

**Server:** http://localhost:3004
**Email Service:** Hostinger SMTP
**Sender Address:** info@rauhawellness.com
**Admin Notifications:** info@rauhawellness.com
**Customer Confirmations:** Their submitted email
**Discount Code:** EARLY15 (15% OFF)
**Status:** ✅ Ready to test

---

## 🚀 Next Steps

### 1. Test Both Flows
- Test waitlist submission
- Test quiz submission
- Verify both inboxes receive emails

### 2. Check Email Formatting
- Open emails on mobile device
- Check emails in different email clients
- Verify discount code is readable

### 3. Verify Data Storage
```bash
# View saved data
npm run view-data
```

### 4. Monitor Terminal
Watch for:
- Success messages (✅)
- Error messages (❌)
- Email IDs

---

## 📞 Support

**Email not working?**
1. Check `.env.local` configuration
2. Verify Hostinger credentials
3. Check terminal for error messages
4. Review HOSTINGER_EMAIL_SETUP.md

**Need to customize emails?**
- Templates: `lib/email/config.ts`
- Preview: `EMAIL_PREVIEW.html`
- Logic: `lib/email/sender.ts`

---

## Summary

✅ **Admin gets notified:** info@rauhawellness.com
✅ **Customers get confirmation:** With EARLY15 code
✅ **All emails from:** info@rauhawellness.com
✅ **Beautiful branded emails:** Mobile-responsive
✅ **Discount code included:** EARLY15 (15% OFF)

**Test it now at:** http://localhost:3004

---

**Last Updated:** October 30, 2025
**Status:** Configured and ready for testing
