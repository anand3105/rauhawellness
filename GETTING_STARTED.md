# 🚀 Getting Started with Rauha Wellness

Welcome! Your website is ready to launch. Here's everything you need to know.

## ✅ What's Already Working

Your website has these features ready:

- ✨ Beautiful, responsive design (mobile-friendly)
- 🎨 Skin Quiz with personalized recommendations
- 📧 Waitlist sign-up form
- 📱 Mobile hamburger menu
- 🎯 Announcement bar
- 💾 Local data storage (no database needed!)
- 📧 Email notifications (just needs setup)

## 🎯 Quick Start

### 1. Run the Website

```bash
npm run dev
```

Open http://localhost:3000

### 2. Setup Email Notifications (Optional but Recommended)

**Why?** Get instant email alerts when someone:
- Completes the skin quiz
- Joins your waitlist

**Setup Time:** 5 minutes

**Follow:** `EMAIL_SETUP.md`

All notifications will go to: **anandjnu007@gmail.com**

### 3. View Your Data

```bash
# View all quiz responses and waitlist entries
npm run view-data
```

**Or manually:**
- Quiz data: `data/quiz-responses.json`
- Waitlist: `data/waitlist.json`

## 📁 Important Files

### Configuration
- `.env.local` - Email settings (create from `.env.example`)
- `.gitignore` - Protects sensitive data

### Documentation
- `EMAIL_SETUP.md` - Email notification setup guide
- `API_README.md` - API documentation
- `EMAIL_PREVIEW.html` - Preview email templates

### Data
- `data/quiz-responses.json` - All quiz submissions
- `data/waitlist.json` - All waitlist entries

## 🎨 Pages

Your website has these pages:

1. **Home** (`/`)
   - Hero section
   - Product showcase
   - Waitlist form

2. **Skin Quiz** (`/skin-quiz`)
   - Interactive quiz
   - Personalized recommendations
   - Email collection

3. **Kumkumadi Oil** (`/products/kumkumadi-oil`)
   - Product details
   - Benefits & ingredients
   - How to use

4. **Rosehip Oil** (`/products/rosehip-oil`)
   - Product details
   - Benefits & ingredients
   - How to use

## 📊 Features

### Announcement Bar
- Shows at top of every page
- Scrolling animation
- Pauses on hover
- Mobile responsive

### Header
- Fixed at top
- Mobile hamburger menu
- Smooth transitions

### Skin Quiz
- 5-step interactive quiz
- Personalized product recommendation
- Email collection
- Auto-saves to local storage
- Email notification to you

### Waitlist
- Product selection (Kumkumadi or Rosehip)
- Email validation
- Duplicate detection
- Success message
- Email notification to you

## 🔧 Commands

```bash
# Development
npm run dev          # Start dev server

# View Data
npm run view-data    # View all submissions

# Build
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Check code quality
npm run typecheck    # Check TypeScript
```

## 📧 Email Notifications

### What You'll Receive

**Quiz Submission:**
- Customer email
- Skin type
- Concerns & goals
- Age range
- Recommended product

**Waitlist Sign-up:**
- Customer email
- Selected product
- Timestamp
- 15% discount reminder

### Email Features
- Beautiful HTML design
- Rauha brand colors
- Mobile responsive
- Plain text fallback
- Instant delivery

## 🎯 Next Steps

### Before Launch

1. ✅ Test the website on mobile
2. ✅ Setup email notifications
3. ✅ Test quiz and waitlist forms
4. ✅ Review email templates (`EMAIL_PREVIEW.html`)
5. ✅ Prepare product inventory

### During Launch

1. Monitor email notifications
2. Track submissions with `npm run view-data`
3. Respond to waitlist sign-ups
4. Prepare 15% discount codes

### After Launch

1. Export data regularly (`data/` folder)
2. Follow up with waitlist customers
3. Send quiz recommendations
4. Prepare for December launch

## 💾 Data Management

### Backup Your Data

```bash
# Copy data folder regularly
cp -r data data-backup-2025-10-30
```

### Export to CSV (Optional)

You can easily convert JSON to CSV:
```javascript
// Use online tool: https://www.convertcsv.com/json-to-csv.htm
// Or create a script
```

### View Data Anytime

```bash
# Pretty print quiz data
cat data/quiz-responses.json | jq

# Count waitlist entries
cat data/waitlist.json | jq 'length'
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Important:** For production, you'll need a database. Current file-based storage works for development only.

### Production Database Options

See `API_README.md` for migration guides:
- Vercel Postgres
- PlanetScale MySQL
- MongoDB Atlas
- Supabase (if desired)

## 🔒 Security

### Protected Files
- `.env.local` - Email credentials (gitignored)
- `data/` - Customer data (gitignored)
- `node_modules/` - Dependencies (gitignored)

### Best Practices
- Never commit `.env.local`
- Backup `data/` folder regularly
- Use App Passwords for Gmail
- Keep dependencies updated

## 📱 Mobile Testing

Test on these devices:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop (Chrome, Firefox, Safari)

All features are mobile-optimized!

## 🆘 Troubleshooting

### Website won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Emails not sending
- Check `EMAIL_SETUP.md`
- Verify `.env.local` exists
- Restart dev server
- Check terminal for error messages

### Data not saving
- Check `data/` folder exists
- Verify write permissions
- Check terminal for errors

## 📞 Support

### Documentation
- `EMAIL_SETUP.md` - Email configuration
- `API_README.md` - API details
- `EMAIL_PREVIEW.html` - Email preview

### Quick Links
- Website: http://localhost:3000
- Email Preview: Open `EMAIL_PREVIEW.html` in browser
- Data Viewer: `npm run view-data`

---

## 🎉 You're Ready!

Your Rauha Wellness website is fully configured and ready to launch!

**What works right now:**
✅ All pages and features
✅ Mobile responsive design
✅ Quiz and waitlist forms
✅ Data storage
✅ Email notifications (after setup)

**Next:** Setup email notifications (5 minutes) → `EMAIL_SETUP.md`

---

**Questions?** Check the documentation files or review the code comments.

**Good luck with your launch! 🚀**
