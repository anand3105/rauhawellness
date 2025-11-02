# 📱 PWA Setup Guide - Rauha Wellness

## ✅ What Was Added

Your Rauha Wellness website is now a **Progressive Web App (PWA)**! This means users can:

1. **Install the website as an app** on their phones, tablets, and desktops
2. **Use it offline** - key pages work even without internet
3. **Get push notifications** (ready for future use)
4. **Enjoy faster loading** with cached assets
5. **Access shortcuts** to quiz, giveaway, and products from their home screen

---

## 📁 Files Created

### 1. **public/manifest.json**
- App metadata (name, icons, colors, shortcuts)
- Defines how the app appears when installed
- Includes shortcuts to:
  - Skin Quiz
  - Giveaway Contest
  - Product Showcase

### 2. **public/service-worker.js**
- Handles offline functionality
- Caches important pages and assets
- Enables push notifications (ready for future)
- Smart caching strategy (cache-first, then network)

### 3. **public/offline.html**
- Beautiful offline fallback page
- Shows when user is offline and page isn't cached
- Branded with Rauha colors and styling

### 4. **components/PWAInstallPrompt.tsx**
- Smart install prompt that appears after 5 seconds
- Only shows to users who haven't dismissed it
- Registers service worker automatically
- Beautiful UI matching Rauha brand

### 5. **app/layout.tsx** (Updated)
- Added PWA meta tags
- Linked manifest.json
- Apple-specific meta tags for iOS
- Included PWAInstallPrompt component

---

## 🧪 How to Test PWA

### Testing Locally (Development)

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open Chrome DevTools:**
   - Press `F12` or `Ctrl+Shift+I` (Windows/Linux)
   - Press `Cmd+Option+I` (Mac)

3. **Go to Application Tab:**
   - Click "Application" in DevTools
   - Look for "Manifest" in the sidebar
   - Verify all data is correct

4. **Check Service Worker:**
   - In Application tab → Service Workers
   - You should see `service-worker.js` registered
   - Status should be "activated and running"

5. **Test Install Prompt:**
   - In Application tab → Manifest
   - Click "Add to home screen" button
   - Or wait 5 seconds for automatic prompt

### Testing in Production (Vercel/Live Site)

**Important:** PWA features require HTTPS. They won't work on http://localhost but will work on your deployed site.

1. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

2. **Open your live site** (https://rauhawellness.com)

3. **Test on Mobile:**
   - **Android Chrome:**
     - After 5 seconds, you'll see install prompt
     - Or tap menu (⋮) → "Add to Home screen"

   - **iOS Safari:**
     - Tap Share button (box with arrow)
     - Scroll down → "Add to Home Screen"
     - Icon will appear on home screen

4. **Test Offline Mode:**
   - Install the app
   - Open DevTools → Network tab
   - Check "Offline" checkbox
   - Navigate the site - key pages should still work!

---

## 🎨 PWA Features

### App Shortcuts
When users long-press the app icon, they see:
- **Take Skin Quiz** → /skin-quiz
- **Join Giveaway** → /giveaway
- **Shop Products** → /#products

### Cached Pages
These pages work offline:
- Homepage (/)
- Skin Quiz (/skin-quiz)
- Giveaway (/giveaway)
- About Us (/about)
- Why Rauha (/why-rauha)
- Careers (/careers)
- Kumkumadi Oil (/products/kumkumadi-oil)
- Rosehip Oil (/products/rosehip-oil)

### Cached Assets
- Rauha logos
- Favicon
- Product images (added as browsed)

---

## 🔍 Lighthouse Audit

Test your PWA score:

1. **Open Chrome DevTools** (F12)
2. **Go to Lighthouse tab**
3. **Select:**
   - ✅ Performance
   - ✅ Progressive Web App
   - ✅ Best Practices
   - ✅ Accessibility
   - ✅ SEO
4. **Click "Generate report"**

**Expected PWA Score:** 90-100

### PWA Checklist
- ✅ Registers a service worker
- ✅ Responds with 200 when offline
- ✅ Has a valid manifest.json
- ✅ Uses HTTPS
- ✅ Configured for custom splash screen
- ✅ Sets an address bar theme color
- ✅ Has a maskable icon
- ✅ Provides offline fallback

---

## 📱 Install Instructions for Users

### Android (Chrome)
1. Visit rauhawellness.com
2. Wait for install banner OR
3. Tap menu (⋮) → "Install app"
4. Confirm installation
5. App appears on home screen!

### iOS (Safari)
1. Visit rauhawellness.com in Safari
2. Tap Share button (bottom center)
3. Scroll down → "Add to Home Screen"
4. Tap "Add"
5. App appears on home screen!

### Desktop (Chrome/Edge)
1. Visit rauhawellness.com
2. Look for install icon in address bar (⊕)
3. Click install button
4. Or wait for automatic prompt
5. App opens in standalone window!

---

## 🔔 Push Notifications (Future Use)

The service worker is already set up to handle push notifications. To enable:

1. **Get user permission:**
   ```javascript
   const permission = await Notification.requestPermission();
   ```

2. **Subscribe to push service:**
   ```javascript
   const subscription = await registration.pushManager.subscribe({
     userVisibleOnly: true,
     applicationServerKey: 'YOUR_PUBLIC_VAPID_KEY'
   });
   ```

3. **Send notifications from server**
   - Use Web Push protocol
   - Send to subscription endpoint
   - Service worker will display notification

---

## 🎯 SEO Benefits

PWA improves SEO:
- ✅ Faster page loads (cached assets)
- ✅ Better mobile experience
- ✅ Improved engagement metrics
- ✅ Lower bounce rates
- ✅ Google favors PWAs in search rankings
- ✅ "Add to Home Screen" increases return visits

---

## 🛠 Customization

### Update App Icon
Replace `/public/favicon.png` with your app icon:
- Recommended size: 512x512px
- Format: PNG with transparent background
- Square shape (will be rounded automatically)

### Update App Colors
Edit `public/manifest.json`:
```json
{
  "background_color": "#F5EFE6",  // Rauha light
  "theme_color": "#C98A53"        // Rauha accent
}
```

### Add More Cached Pages
Edit `public/service-worker.js`:
```javascript
const urlsToCache = [
  '/',
  '/new-page',  // Add your page here
  // ... existing pages
];
```

### Update Install Prompt Timing
Edit `components/PWAInstallPrompt.tsx`:
```typescript
setTimeout(() => {
  setShowPrompt(true);
}, 5000); // Change from 5000ms (5 seconds)
```

---

## 📊 Analytics Tracking

Track PWA installs:

```javascript
// In PWAInstallPrompt.tsx (already implemented)
if (outcome === 'accepted') {
  // Track with your analytics
  gtag('event', 'pwa_install', {
    event_category: 'engagement',
    event_label: 'PWA Installed'
  });
}
```

---

## 🐛 Troubleshooting

### Install Prompt Not Showing
- ✅ Must be on HTTPS (not localhost)
- ✅ Must have valid manifest.json
- ✅ Service worker must be registered
- ✅ User hasn't installed before
- ✅ User hasn't dismissed prompt

### Service Worker Not Updating
```bash
# Clear cache and hard reload
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

### Offline Pages Not Working
- Check service worker is activated
- Check Network tab → Service Worker is intercepting
- Verify pages are in urlsToCache array

### iOS Not Showing Icon
- Icon must be PNG
- Must be at least 192x192
- Check apple-touch-icon meta tag is present

---

## ✅ Verification Checklist

Before going live:

- [ ] Test install on Android Chrome
- [ ] Test install on iOS Safari
- [ ] Test install on Desktop Chrome
- [ ] Test offline functionality
- [ ] Run Lighthouse audit (score > 90)
- [ ] Verify manifest.json loads
- [ ] Verify service worker activates
- [ ] Test shortcuts work
- [ ] Test offline page appears
- [ ] Verify icons display correctly

---

## 🚀 Next Steps

1. **Deploy to production:**
   ```bash
   npm run build
   vercel --prod
   ```

2. **Test on multiple devices**

3. **Monitor install rate:**
   - Track in Google Analytics
   - Monitor conversion metrics

4. **Add push notifications** (optional):
   - Set up VAPID keys
   - Create notification service
   - Request user permission

---

## 📚 Resources

- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Push Notifications](https://web.dev/push-notifications/)

---

## 🎉 Benefits for Rauha Wellness

✅ **Increased Engagement:** Users with installed apps visit 3x more often
✅ **Better Retention:** App icon on home screen = constant reminder
✅ **Offline Access:** Users can browse products without internet
✅ **Faster Loading:** Cached assets = instant page loads
✅ **Mobile-First:** Perfect experience on all devices
✅ **Push Notifications:** Future marketing channel (when enabled)
✅ **SEO Boost:** Google loves PWAs
✅ **Professional:** Modern, app-like experience

---

**Your PWA is ready! 🚀**

Test it on your deployed site and watch your engagement soar!
