# Rauha Wellness - API Documentation

## Overview

This application now uses a **custom file-based API system** with **email notifications**. All data is stored locally in JSON files and automatically emailed to you.

## Benefits

✅ **No External Dependencies** - No need for Supabase account or credentials
✅ **Zero Configuration** - Works out of the box
✅ **Complete Control** - All data stored locally
✅ **Email Notifications** - Get notified instantly for every submission
✅ **Easy Migration** - Can easily migrate to any database later
✅ **Privacy First** - Data stays on your server

## API Endpoints

### 1. Quiz Responses API

**Endpoint:** `/api/quiz`

**POST** - Save quiz response
```json
{
  "email": "user@example.com",
  "skin_type": "combination",
  "skin_concerns": ["dullness", "pigmentation"],
  "skin_goals": ["radiance", "evenTone"],
  "age_range": "26-35",
  "recommended_product": "Kumkumadi Oil"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Quiz response saved successfully",
  "data": {
    "email": "user@example.com",
    "skinType": "combination",
    "skinConcerns": ["dullness", "pigmentation"],
    "skinGoals": ["radiance", "evenTone"],
    "ageRange": "26-35",
    "recommendedProduct": "Kumkumadi Oil",
    "timestamp": "2025-10-30T12:00:00.000Z"
  }
}
```

**GET** - Retrieve all quiz responses
```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

---

### 2. Waitlist API

**Endpoint:** `/api/waitlist`

**POST** - Add to waitlist
```json
{
  "email": "user@example.com",
  "selectedProduct": "kumkumadi"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully added to waitlist",
  "data": {
    "email": "user@example.com",
    "selectedProduct": "kumkumadi",
    "timestamp": "2025-10-30T12:00:00.000Z"
  }
}
```

**GET** - Retrieve all waitlist entries
```json
{
  "success": true,
  "count": 25,
  "data": [...]
}
```

---

## 📧 Email Notifications

Every quiz submission and waitlist sign-up triggers an instant email notification to **anandjnu007@gmail.com**.

### Setup Email Notifications

See **EMAIL_SETUP.md** for detailed setup instructions.

**Quick setup:**
1. Get Gmail App Password
2. Update `.env.local` with your credentials
3. Restart your dev server

**Email Templates:**
- Beautiful HTML design with Rauha branding
- All customer details included
- Mobile-responsive
- Plain text fallback

---

## Data Storage

### Location
All data is stored in: `/data/`
- `quiz-responses.json` - Quiz submissions
- `waitlist.json` - Waitlist entries

### Format
Data is stored in pretty-printed JSON format for easy reading and manual editing if needed.

### Backup
**Important:** Make regular backups of the `/data/` directory to prevent data loss.

---

## Future Migration Options

This file-based system can be easily migrated to any database:

### Option 1: PostgreSQL / MySQL
Replace file operations with database queries in the API routes.

### Option 2: MongoDB
Replace JSON files with MongoDB collections.

### Option 3: Prisma ORM
Add Prisma to the project and update API routes to use Prisma client.

### Option 4: Cloud Services (Supabase, Firebase, etc.)
Re-implement the original Supabase code or use Firebase SDK.

---

## Security Notes

1. **Data Directory** - The `/data/` folder is gitignored to protect user data
2. **Email Validation** - Basic validation is performed on the backend
3. **Error Handling** - All errors are logged but not exposed to users
4. **CORS** - Next.js API routes are same-origin by default

---

## Development

To view stored data:
```bash
# View quiz responses
cat data/quiz-responses.json

# View waitlist
cat data/waitlist.json
```

To reset data:
```bash
# Delete all data
rm -rf data/
```

---

## Production Deployment

When deploying to production (Vercel, Netlify, etc.), you'll need to:

1. **Use a database** - File-based storage doesn't work on serverless platforms
2. **Choose Option 1, 2, or 3 above** for production
3. **Update API routes** accordingly

For quick deployment, consider:
- **Vercel** with Vercel Postgres
- **Railway** with PostgreSQL
- **PlanetScale** for MySQL
- **MongoDB Atlas** for MongoDB

---

## Support

For questions or issues, check:
- Next.js API Routes: https://nextjs.org/docs/api-routes/introduction
- File System API: https://nodejs.org/api/fs.html
