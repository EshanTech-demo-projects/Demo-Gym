# 🎨 Customization Guide - PowerFit Gym Website

Complete guide to customize your gym website for your business.

## 📋 Table of Contents
1. [Basic Information](#basic-information)
2. [Colors & Branding](#colors--branding)
3. [Content Customization](#content-customization)
4. [Images & Media](#images--media)
5. [SEO & Marketing](#seo--marketing)
6. [Advanced Customization](#advanced-customization)

---

## 1. Basic Information

### Site Configuration
**File**: `src/config/site-config.ts`

```typescript
export const siteConfig = {
  name: 'YOUR GYM NAME',                    // Change this
  description: 'Your gym description',       // Change this
  theme: 'layout-1-stacked',                // Choose layout
  
  contact: {
    phone: '+1234567890',                   // Your phone
    email: 'info@yourgym.com',             // Your email
    address: 'Your full address',          // Your address
    whatsapp: '+1234567890',               // WhatsApp number
  },
  
  social: {
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourpage',
    twitter: 'https://twitter.com/yourpage',
    youtube: 'https://youtube.com/yourpage',
  },
};
```

**Important**: Update ALL contact information with your actual details!

---

## 2. Colors & Branding

### Primary & Secondary Colors
**File**: `src/app/globals.css`

```css
:root {
  /* Light Mode Colors */
  --primary: 222.2 47.4% 11.2%;        /* Main brand color */
  --secondary: 210 40% 96.1%;          /* Secondary color */
  --background: 0 0% 100%;             /* Background */
  --foreground: 222.2 84% 4.9%;        /* Text color */
}

.dark {
  /* Dark Mode Colors */
  --primary: 210 40% 98%;              /* Main brand color */
  --secondary: 217.2 32.6% 17.5%;      /* Secondary color */
  --background: 222.2 84% 4.9%;        /* Background */
  --foreground: 210 40% 98%;           /* Text color */
}
```

### How to Change Colors:
1. Go to [HSL Color Picker](https://hslpicker.com/)
2. Choose your brand color
3. Copy the HSL values (e.g., "210 40% 98%")
4. Replace in the CSS above

### Quick Color Examples:
```css
/* Red Theme */
--primary: 0 84% 60%;

/* Blue Theme */
--primary: 217 91% 60%;

/* Green Theme */
--primary: 142 71% 45%;

/* Purple Theme */
--primary: 271 81% 56%;

/* Orange Theme */
--primary: 24 100% 50%;
```

---

## 3. Content Customization

### Hero Section
**File**: `src/components/sections/hero-section.tsx`

Change the headline and description:
```typescript
<h1>
  Transform Your Body,{' '}
  <span className="gradient-text">Elevate Your Life</span>  {/* Change this */}
</h1>

<p>
  Join thousands of members achieving their fitness goals...  {/* Change this */}
</p>
```

Update stats:
```typescript
const stats = [
  { icon: 'mdi:account-group', value: '5,000+', label: 'Happy Members' },  // Update numbers
  { icon: 'mdi:dumbbell', value: '50+', label: 'Training Programs' },
  { icon: 'mdi:account-tie', value: '20+', label: 'Expert Trainers' },
  { icon: 'mdi:star', value: '4.9/5', label: 'Average Rating' },
];
```

### Pricing Plans
**File**: `src/components/sections/pricing-section.tsx`

```typescript
const pricingPlans = [
  {
    name: 'Basic',           // Plan name
    price: '$29',           // Your price
    period: 'per month',    // Billing period
    description: 'Perfect for beginners',
    features: [
      { text: 'Access to gym equipment', included: true },
      // Add/remove features
    ],
    popular: false,
  },
  // Add more plans
];
```

### Services
**File**: `src/components/sections/services-section.tsx`

Add/edit your gym services

### Contact Information
**File**: `src/components/sections/contact-section.tsx`

Update opening hours:
```typescript
<div className="flex justify-between">
  <span>Monday - Friday</span>
  <span className="font-semibold">6:00 AM - 10:00 PM</span>  {/* Your hours */}
</div>
```

---

## 4. Images & Media

### Adding Your Images

**Logo**:
- Path: `/public/images/logo.png`
- Size: 200x200px (PNG with transparent background)

**Hero Background**:
- Path: `/public/images/hero-bg.jpg`
- Size: 1920x1080px (landscape)

**Service Images**:
- Path: `/public/images/services/`
- Size: 800x600px each

**Trainer Photos**:
- Path: `/public/images/trainers/`
- Size: 600x600px (square, professional headshots)

**Gallery Images**:
- Path: `/public/images/gallery/`
- Size: 1200x800px

### Image Optimization Tips:
1. Use WebP format for better performance
2. Compress images to < 300KB
3. Use landscape orientation for hero images
4. Use square photos for trainers/testimonials

### Video Background (Optional)
- Path: `/public/videos/hero-bg.mp4`
- Length: 10-30 seconds loop
- Size: < 5MB
- Format: MP4 (H.264)

**Enable/Disable** in `site-config.ts`:
```typescript
features: {
  enableBackgroundVideo: true,  // Set to false for better mobile performance
}
```

---

## 5. SEO & Marketing

### Meta Tags
**File**: `src/app/layout.tsx`

```typescript
export const metadata = {
  title: 'Your Gym Name - Tagline',
  description: 'Compelling description with keywords',
  keywords: [
    'gym near me',
    'your city gym',
    'personal training',
    // Add location-specific keywords
  ],
};
```

### Google Analytics (Optional)
Add to `src/app/layout.tsx`:
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Facebook Pixel (Optional)
Add tracking code in layout.tsx

---

## 6. Advanced Customization

### Change Layout Theme

In `src/config/site-config.ts`:
```typescript
theme: 'layout-1-stacked'  // Options:
// 'layout-1-stacked' - Traditional stacked (Recommended)
// 'layout-2-split' - Split screen layouts
// 'layout-3-grid' - Grid-based layouts
// 'layout-4-diagonal' - Diagonal sections
```

### Add New Section

1. Create component in `src/components/sections/new-section.tsx`
2. Import in `src/components/layout-wrapper.tsx`
3. Add to section config in `site-config.ts`:

```typescript
export const sectionConfig = {
  // ... existing sections
  newSection: { enabled: true, order: 11 },
};
```

### Custom Fonts

**File**: `src/app/layout.tsx`

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-custom',
});
```

Then use in CSS:
```css
body {
  font-family: var(--font-custom);
}
```

### Custom Button Styles

**File**: `src/components/ui/button.tsx`

Add new variant:
```typescript
variant: {
  // ... existing variants
  custom: 'bg-gradient-to-r from-red-500 to-orange-500 text-white',
}
```

---

## 📱 Mobile Customization

### Touch Target Sizes
Ensure buttons are at least 44x44px for easy mobile tapping.

### Mobile Menu
**File**: `src/components/layout/header.tsx`

Customize mobile navigation appearance.

### Floating Action Buttons
**File**: `src/components/ui/floating-actions.tsx`

Position and styling of WhatsApp/Call buttons.

---

## 🚀 Deployment Checklist

Before going live:

- [ ] Update all contact information
- [ ] Replace all placeholder images
- [ ] Add real testimonials
- [ ] Update pricing plans
- [ ] Add Google Maps location
- [ ] Set up contact form (email integration)
- [ ] Add Google Analytics
- [ ] Test on real mobile devices
- [ ] Check all links work
- [ ] Verify social media links
- [ ] Test WhatsApp/Call buttons
- [ ] Run Lighthouse audit (aim for 90+)
- [ ] Test form submissions
- [ ] Check load time (< 3 seconds)
- [ ] Verify SEO meta tags

---

## 🆘 Need Help?

**Common Issues:**

1. **Colors not updating?**
   - Clear browser cache (Ctrl + Shift + R)
   - Restart dev server

2. **Images not showing?**
   - Check file paths are correct
   - Verify images are in `/public/` folder

3. **Mobile layout broken?**
   - Check Tailwind responsive classes
   - Test in Chrome DevTools mobile view

4. **Form not working?**
   - Set up email service (like EmailJS or SendGrid)
   - Add API endpoint for form submission

---

## 💡 Pro Tips

1. **Use Real Photos**: Professional photos make a huge difference
2. **Update Regularly**: Keep content fresh with blog posts
3. **Mobile First**: Always test on mobile devices first
4. **Fast Loading**: Keep images optimized and compressed
5. **Clear CTAs**: Make it easy for visitors to contact you
6. **Social Proof**: Add real testimonials with photos
7. **Location**: Prominently display your address and map
8. **Contact Methods**: Offer multiple ways to reach you

---

## 📞 Support

Need customization help?
- Email: eshantechservices@gmail.com
- Phone: +91 9959355356
- WhatsApp: +91 9959355356

---

**Last Updated**: January 2026
