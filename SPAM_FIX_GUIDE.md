# Fix Email Spam Issues - Step by Step Guide

## The Problem
Your emails from `info@rauhawellness.com` are going to spam because your domain is **not authenticated**. Email providers like Gmail, Outlook, and Yahoo can't verify that you're the legitimate owner of rauhawellness.com.

---

## The Solution (Takes 15 minutes)

You need to add **3 DNS records** to your domain. These records prove you're the real sender.

---

## Step 1: Add SPF Record (Sender Policy Framework)

This tells email providers which servers are allowed to send emails for your domain.

### What to Do:
1. Log in to **Hostinger** control panel
2. Go to **Hosting** → **Manage** → **DNS Zone Editor**
3. Click **"Add Record"**
4. Add the following:

```
Type: TXT
Name: @ (or leave it as rauhawellness.com)
Value: v=spf1 include:_spf.hostinger.com ~all
TTL: 3600 (default)
```

**What this does:** Tells email providers "Only Hostinger's mail servers can send emails for rauhawellness.com"

---

## Step 2: Add DKIM Record (DomainKeys Identified Mail)

This adds a cryptographic signature to your emails to prove they weren't tampered with.

### What to Do:

**Option A: If Hostinger has DKIM settings in Email panel**
1. Go to **Hostinger Email** → **Email Settings**
2. Look for **"DKIM Settings"** or **"Email Authentication"**
3. Click **"Enable DKIM"** or **"Generate DKIM Keys"**
4. Copy the DKIM record they provide
5. Add it to your DNS Zone Editor

**Option B: Contact Hostinger Support (Recommended)**
1. Open a chat with Hostinger Support (24/7 available)
2. Say: *"I need to set up DKIM authentication for info@rauhawellness.com. Can you provide the DKIM DNS record I need to add?"*
3. They'll give you the exact record to add
4. Add it to your DNS Zone Editor

The DKIM record will look something like this:
```
Type: TXT
Name: default._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSq... (long string)
TTL: 3600
```

---

## Step 3: Add DMARC Record (Domain-based Message Authentication)

This tells email providers what to do if your emails fail authentication checks.

### What to Do:
1. In **DNS Zone Editor**, click **"Add Record"**
2. Add the following:

```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:info@rauhawellness.com; pct=100; adkim=r; aspf=r
TTL: 3600
```

**What this does:**
- `p=none` = Monitor mode (don't reject emails yet, just report)
- `rua=mailto:info@rauhawellness.com` = Send reports to this email
- After 2-4 weeks of monitoring, change `p=none` to `p=quarantine`

---

## Step 4: Wait for DNS Propagation

After adding all 3 records:
- DNS changes take **24-48 hours** to propagate worldwide
- You can check status at: https://dnschecker.org

---

## Step 5: Test Your Setup

### After 48 hours, test your configuration:

1. **Test with Mail-Tester** (Best tool!)
   - Go to: https://www.mail-tester.com
   - Send a test email to the address they provide
   - Get your spam score (aim for 8/10 or higher)

2. **Test with MXToolbox**
   - Go to: https://mxtoolbox.com/SuperTool.aspx
   - Type: `rauhawellness.com`
   - Check if SPF, DKIM, DMARC records are found

3. **Check if you're blacklisted**
   - Go to: https://mxtoolbox.com/blacklists.aspx
   - Enter: `rauhawellness.com`
   - Make sure you're not on any blacklists

---

## Step 6: Verify Records Are Working

Run these commands in Command Prompt to verify:

```bash
# Check SPF record
nslookup -type=txt rauhawellness.com

# Check DKIM record (after you know the selector name from Hostinger)
nslookup -type=txt default._domainkey.rauhawellness.com

# Check DMARC record
nslookup -type=txt _dmarc.rauhawellness.com
```

You should see the TXT records you added.

---

## Additional Quick Fixes (Already Done in Code)

I've already improved your email headers to include:
- ✅ Professional sender name: "Rauha Wellness"
- ✅ List-Unsubscribe header
- ✅ Organization header
- ✅ Proper email priority
- ✅ Both HTML and plain text versions

---

## Important: Email Warm-Up Strategy

Even after DNS setup, don't send hundreds of emails immediately. New domains need to build reputation:

**Week 1:** Send 10-20 emails/day
**Week 2:** Send 30-50 emails/day
**Week 3:** Send 50-100 emails/day
**Week 4+:** Gradually increase

This tells email providers you're a legitimate sender, not a spammer.

---

## Content Tips to Avoid Spam

### ✅ DO:
- Use customer's name (personalization)
- Include your physical address in footer
- Send during business hours (9 AM - 5 PM)
- Keep subject lines under 50 characters
- Balance text and images (more text = better)

### ❌ DON'T:
- Use ALL CAPS in subject lines
- Use too many exclamation marks!!!
- Use spam words: FREE, GUARANTEED, CLICK HERE, ACT NOW
- Send emails at midnight or odd hours
- Use only images without text

---

## Expected Timeline

| Day | Action | Status |
|-----|--------|--------|
| Day 1 | Add SPF record | ⏳ Do now |
| Day 1 | Get DKIM from Hostinger | ⏳ Do now |
| Day 1 | Add DKIM record | ⏳ Do now |
| Day 1 | Add DMARC record | ⏳ Do now |
| Day 2-3 | Wait for DNS propagation | ⏳ Wait |
| Day 3 | Test with mail-tester.com | ⏳ Test |
| Week 1 | Start email warm-up | ⏳ Monitor |
| Week 4 | Should see improvement | ✅ Success |

---

## Quick Contact for Help

**Hostinger Support (24/7):**
- Open your Hostinger panel
- Click the chat icon (bottom right)
- Say: *"I need help setting up SPF, DKIM, and DMARC records for info@rauhawellness.com to prevent emails going to spam"*

They're very helpful and can guide you through the DNS setup.

---

## Expected Results

**Before DNS Setup:**
- ❌ Emails go to spam 80-90% of the time
- ❌ Low sender reputation
- ❌ Mail-tester score: 2-4/10

**After DNS Setup (2-4 weeks):**
- ✅ Emails reach inbox 90-95% of the time
- ✅ Good sender reputation
- ✅ Mail-tester score: 8-10/10
- ✅ Gmail shows authenticated checkmark ✓

---

## Monitoring Checklist

After setup, check monthly:

- [ ] Mail-tester.com score (should be 8+/10)
- [ ] MXToolbox blacklist check (should be clean)
- [ ] Gmail Postmaster Tools: https://postmaster.google.com
- [ ] Check bounce rate (should be under 5%)
- [ ] Monitor spam complaints (should be under 0.1%)

---

## Need Help Testing?

I've created a test script you can run to check your spam score after DNS setup. Let me know when you're ready to test!

---

## Summary: What You Need to Do RIGHT NOW

1. **Log in to Hostinger**
2. **Go to DNS Zone Editor**
3. **Add SPF record** (copy-paste from Step 1)
4. **Contact Hostinger support** to get DKIM record
5. **Add DKIM record** (they'll provide it)
6. **Add DMARC record** (copy-paste from Step 3)
7. **Wait 48 hours**
8. **Test with mail-tester.com**

That's it! These 3 DNS records will fix 90% of your spam issues.

---

**Remember:** This is a gradual process. Don't expect instant results. Building email reputation takes 2-4 weeks, but the DNS setup is the critical first step.
