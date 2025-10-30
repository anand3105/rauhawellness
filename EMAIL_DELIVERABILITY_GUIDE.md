# Email Deliverability Guide - Preventing Spam Issues

## Why Your Emails Go to Spam

Your emails from `info@rauhawellness.com` may be going to spam for these reasons:

### 1. **Missing Domain Authentication (MOST IMPORTANT)**
Without proper DNS records, email providers can't verify your emails are legitimate.

### 2. **New Domain/Low Sender Reputation**
- rauhawellness.com is a new domain
- No email sending history
- Email providers are cautious with new senders

### 3. **Email Content Issues**
- Too promotional
- Missing plain text version
- Too many links
- Spam trigger words

---

## ✅ IMMEDIATE FIXES TO IMPLEMENT

### 1. Configure SPF, DKIM, and DMARC Records (CRITICAL)

Contact your **Hostinger support** or access your DNS settings and add these records:

#### **SPF Record** (Sender Policy Framework)
```
Type: TXT
Name: @ (or rauhawellness.com)
Value: v=spf1 include:_spf.hostinger.com ~all
```

#### **DKIM Record** (DomainKeys Identified Mail)
You need to generate DKIM keys in Hostinger:
1. Go to Hostinger Email → Settings
2. Look for "DKIM Settings" or "Email Authentication"
3. Generate DKIM key
4. Add the provided TXT record to your DNS

#### **DMARC Record** (Domain-based Message Authentication)
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:info@rauhawellness.com; pct=100; adkim=s; aspf=s
```

**How to Add DNS Records in Hostinger:**
1. Log in to Hostinger
2. Go to Hosting → Manage → DNS Zone Editor
3. Click "Add Record"
4. Add each record above
5. Wait 24-48 hours for DNS propagation

---

### 2. Verify Your Domain with Email Providers

#### **Gmail Postmaster Tools**
1. Go to: https://postmaster.google.com
2. Add and verify rauhawellness.com
3. Monitor your domain reputation

#### **Microsoft SNDS** (for Outlook/Hotmail)
1. Go to: https://sendersupport.olc.protection.outlook.com/snds/
2. Register your sending IP

---

### 3. Warm Up Your Email Sending

Don't send hundreds of emails immediately. Start slow:

**Week 1:** Send 10-20 emails/day
**Week 2:** Send 30-50 emails/day
**Week 3:** Send 50-100 emails/day
**Week 4+:** Gradually increase

---

### 4. Improve Email Content

#### ✅ DO:
- Include both HTML and plain text versions (already implemented)
- Use proper formatting
- Include physical address in footer
- Add unsubscribe link (already implemented)
- Use real "From" name (already done: "Rauha Wellness")
- Personalize subject lines
- Keep text-to-image ratio balanced

#### ❌ DON'T:
- Use ALL CAPS in subject
- Use too many exclamation marks!!!
- Use spam trigger words: FREE, CLICK HERE, ACT NOW, GUARANTEED
- Send only images without text
- Use URL shorteners
- Have broken links

---

### 5. Monitor and Test

#### **Test Your Emails**
1. **Mail-Tester**: https://www.mail-tester.com
   - Send test email to the provided address
   - Get a spam score out of 10
   - Fix issues it identifies

2. **GlockApps**: https://glockapps.com
   - Test deliverability across providers

3. **MXToolbox**: https://mxtoolbox.com
   - Check domain blacklists
   - Verify DNS records

#### **Check Domain Reputation**
- **Sender Score**: https://senderscore.org
- **Talos Intelligence**: https://talosintelligence.com/reputation

---

## 📧 EMAIL BEST PRACTICES (Already Implemented)

✅ Reply-To address configured
✅ List-Unsubscribe header added
✅ Plain text version included
✅ Professional "From" name
✅ Proper email headers

---

## 🚨 URGENT ACTIONS FOR YOU

### Step 1: Contact Hostinger Support (TODAY)
Tell them:
*"I need help setting up email authentication for info@rauhawellness.com:
1. SPF record for Hostinger mail servers
2. DKIM keys and DNS record
3. DMARC policy
Please provide exact DNS records I need to add."*

### Step 2: Add DNS Records
Once you get the records from Hostinger, add them to your DNS.

### Step 3: Wait 24-48 Hours
DNS changes take time to propagate worldwide.

### Step 4: Test Your Setup
After 48 hours:
1. Send test email to mail-tester.com
2. Check your spam score
3. Fix any remaining issues

---

## 📊 MONITORING CHECKLIST

After implementation, monitor weekly:

- [ ] Check Gmail Postmaster Tools for domain reputation
- [ ] Test emails with mail-tester.com
- [ ] Check if domain is on any blacklists (MXToolbox)
- [ ] Monitor bounce rates
- [ ] Track spam complaints
- [ ] Review unsubscribe requests

---

## 💡 ADDITIONAL TIPS

### For Customer Emails:
1. **Ask them to whitelist you**: "Please add info@rauhawellness.com to your contacts"
2. **Include in welcome email**: "To ensure you receive our emails, please add us to your address book"
3. **Check spam folder**: "If you don't see our email, please check your spam folder and mark it as 'Not Spam'"

### Content Improvements:
- Add your physical address in email footer (required by law in many countries)
- Use customer's first name in emails
- Send emails during business hours (not midnight)
- Maintain consistent sending schedule

---

## 🔧 TECHNICAL DETAILS FOR DEVELOPER

Current Configuration (already set up):
- ✅ Using Hostinger SMTP (smtp.hostinger.com:465)
- ✅ Sending from verified domain email (info@rauhawellness.com)
- ✅ Reply-To header configured
- ✅ List-Unsubscribe header included
- ✅ Plain text + HTML versions
- ✅ Proper email headers

What's Missing (MUST ADD):
- ❌ SPF DNS Record
- ❌ DKIM DNS Record
- ❌ DMARC DNS Record
- ❌ Email warm-up strategy

---

## 📞 SUPPORT CONTACTS

**Hostinger Email Support:**
- Chat: Available 24/7 in your Hostinger panel
- Email: support@hostinger.com
- Phone: Check your Hostinger dashboard for regional number

**Ask them specifically about:**
1. Email authentication setup (SPF/DKIM/DMARC)
2. Sending limits per day
3. How to check if your IP is blacklisted
4. Best practices for their mail servers

---

## ⏱️ TIMELINE

- **Day 1**: Contact Hostinger, get DNS records
- **Day 1**: Add DNS records to your domain
- **Day 2-3**: Wait for DNS propagation
- **Day 3**: Test with mail-tester.com
- **Week 1**: Start email warm-up (10-20 emails/day)
- **Week 2-4**: Gradually increase sending
- **Month 2**: Regular monitoring and optimization

---

## 🎯 EXPECTED RESULTS

After proper configuration:
- ✅ 90-95% inbox placement rate (instead of spam)
- ✅ Better sender reputation
- ✅ Customers actually see your emails
- ✅ Higher engagement rates
- ✅ Professional email presence

---

## 📝 NOTES

- These changes take TIME to show effect (2-4 weeks)
- Don't expect immediate perfection
- Building email reputation is gradual
- Consistency is key
- Monitor and adjust regularly

**Remember**: Even Gmail sometimes ends up in spam without proper setup. This is normal for new domains. Following these steps will significantly improve delivery.
