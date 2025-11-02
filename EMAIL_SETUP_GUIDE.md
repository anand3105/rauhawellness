# Email Authentication Setup Guide for Rauha Wellness

## Why Your Emails Aren't Being Delivered

Your email system **IS working perfectly** - emails are being sent successfully from your server. However, Gmail and other email providers are **blocking or filtering** them because your domain lacks proper authentication (SPF and DKIM records).

**Current Status:**
- ✅ SMTP Connection: Working
- ✅ Email Sending: Working
- ✅ Hostinger Queue: Accepting emails
- ❌ Gmail Delivery: Blocked (no authentication)

---

## Solution: Add SPF and DKIM Records

This tells Gmail and other providers that emails from `info@rauhawellness.com` are legitimate.

---

## Step 1: Log into Hostinger

1. Go to: https://hpanel.hostinger.com
2. Login with your Hostinger account
3. Select your domain: **rauhawellness.com**

---

## Step 2: Add SPF Record

### What is SPF?
SPF (Sender Policy Framework) tells email providers which servers are allowed to send emails from your domain.

### How to Add SPF:

1. In Hostinger Panel, go to **Websites** → **rauhawellness.com**
2. Click on **DNS / Name Servers** (or **DNS Zone**)
3. Click **Add Record** or **Manage**
4. Add a new **TXT record** with these details:

```
Type: TXT
Name: @
(or leave blank, or enter "rauhawellness.com")

Value: v=spf1 include:smtp.hostinger.com ~all

TTL: 3600 (or 1 Hour)
```

5. Click **Save** or **Add Record**

### Visual Example:
```
┌─────────────────────────────────────────────┐
│ Add DNS Record                              │
├─────────────────────────────────────────────┤
│ Type:     TXT                               │
│ Name:     @                                 │
│ Value:    v=spf1 include:smtp.hostinger.com │
│           ~all                              │
│ TTL:      3600                              │
│ Priority: (leave empty)                     │
└─────────────────────────────────────────────┘
```

---

## Step 3: Enable DKIM in Hostinger

### What is DKIM?
DKIM (DomainKeys Identified Mail) adds a digital signature to your emails to prove they weren't tampered with.

### How to Enable DKIM:

**Option A: Through Email Settings**

1. In Hostinger Panel, go to **Emails**
2. Click on **Email Accounts**
3. Find **DKIM** or **Email Authentication** section
4. Enable DKIM for your domain
5. Copy the DKIM record (it will look like: `v=DKIM1; k=rsa; p=MIGfMA0...`)
6. Go back to **DNS Zone**
7. Add a new **TXT record**:

```
Type: TXT
Name: default._domainkey
(Hostinger might give you a different name like: mail._domainkey)

Value: (paste the DKIM key from Hostinger)

TTL: 3600
```

**Option B: Auto-Configure** (Recommended)

Some Hostinger panels have an "Auto-configure Email Authentication" button:
1. Go to **Emails** → **Email Accounts**
2. Look for **Email Authentication** or **DKIM Settings**
3. Click **Enable DKIM** or **Auto-configure**
4. Hostinger will automatically add the DNS records

---

## Step 4: Add DMARC Record (Optional but Recommended)

### What is DMARC?
DMARC tells email providers what to do if SPF or DKIM checks fail.

### How to Add DMARC:

1. Go to **DNS Zone**
2. Add a new **TXT record**:

```
Type: TXT
Name: _dmarc

Value: v=DMARC1; p=none; rua=mailto:info@rauhawellness.com

TTL: 3600
```

This tells providers to report authentication failures to you but still deliver the email.

---

## Step 5: Verify DNS Records

After adding the records, verify them using online tools:

### Check SPF:
Go to: https://mxtoolbox.com/spf.aspx
Enter: `rauhawellness.com`

Should show: `v=spf1 include:smtp.hostinger.com ~all`

### Check DKIM:
Go to: https://mxtoolbox.com/dkim.aspx
Enter:
- Domain: `rauhawellness.com`
- Selector: `default` (or whatever Hostinger gave you)

### Check DMARC:
Go to: https://mxtoolbox.com/dmarc.aspx
Enter: `rauhawellness.com`

---

## Step 6: Wait for DNS Propagation

DNS changes can take time to propagate:
- **Minimum**: 15-30 minutes
- **Maximum**: 24-48 hours
- **Typical**: 1-2 hours

---

## Step 7: Test Email After DNS Propagation

After waiting 30 minutes, run this test:

```bash
node test-diagnostic.js
```

Then check:
1. `er.anand360@gmail.com` inbox
2. Gmail SPAM folder
3. Gmail Promotions tab

---

## Alternative: Contact Hostinger Support

If you're having trouble finding these settings:

1. Go to Hostinger Support Chat
2. Say: "I need help enabling SPF and DKIM for my domain rauhawellness.com to send emails from info@rauhawellness.com"
3. They will guide you through the exact steps in your panel

**Hostinger Support:**
- Live Chat: Available in your Hostinger panel
- Help Center: https://support.hostinger.com

---

## Quick Reference Table

| Record Type | Name | Value |
|-------------|------|-------|
| TXT (SPF) | @ | `v=spf1 include:smtp.hostinger.com ~all` |
| TXT (DKIM) | default._domainkey | (Get from Hostinger Email settings) |
| TXT (DMARC) | _dmarc | `v=DMARC1; p=none; rua=mailto:info@rauhawellness.com` |

---

## What Happens After Setup?

Once SPF/DKIM are configured:
- ✅ Gmail will accept your emails
- ✅ Emails won't go to spam
- ✅ Your domain will have good reputation
- ✅ All future emails will be delivered properly

---

## Need Help?

If you get stuck at any step, let me know and I'll help you troubleshoot!

---

## Current Email System Status

Your Rauha Wellness email system is **fully functional** and ready to send emails. Once DNS is configured, all emails will be delivered successfully.

**Technical Details:**
- SMTP Server: smtp.hostinger.com:465 ✅
- Authentication: Working ✅
- Email Queue: Working ✅
- DNS Authentication: ⏳ Pending your setup

---

Last Updated: November 1, 2025
