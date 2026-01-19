# Template Configurations Guide

This guide shows you how to create different website variations using the gym master template.

## Quick Setup (1 Hour to Launch)

### Step 1: Choose Theme Color (30 seconds)
Edit `src/config/site-config.ts`:
```typescript
theme: 'orange' // Options: 'orange' | 'yellow' | 'red' | 'purple' | 'green'
```

### Step 2: Update Site Information (5 minutes)
```typescript
name: 'YourGym Name',
description: 'Your gym description',
contact: {
  phone: '+1 (555) 123-4567',
  email: 'info@yourgym.com',
  address: 'Your gym address',
  whatsapp: '+15551234567',
},
social: {
  facebook: 'https://facebook.com/yourgym',
  instagram: 'https://instagram.com/yourgym',
  // ... other social links
},
```

### Step 3: Configure Sections (2 minutes)
Enable/disable and reorder sections:
```typescript
export const sectionConfig = {
  hero: { enabled: true, order: 1 },
  about: { enabled: true, order: 2 },
  services: { enabled: true, order: 3 },
  programs: { enabled: false, order: 4 }, // Disable if not needed
  // ... configure all sections
};
```

### Step 4: Add Your Images (10 minutes)
Place images in `public/images/`:
- logo.png
- about-main.jpg, about-secondary.jpg
- program-1.jpg to program-4.jpg
- trainer-1.jpg to trainer-4.jpg
- testimonial-1.jpg to testimonial-5.jpg
- blog-1.jpg to blog-3.jpg

### Step 5: Build and Deploy (5 minutes)
```bash
yarn build
```

## Pre-configured Templates

### Template 1: Orange Energetic (Default)
**Best for:** CrossFit gyms, HIIT studios, athletic training centers
```typescript
// src/config/site-config.ts
theme: 'orange',
sectionConfig: {
  hero: { enabled: true, order: 1 },
  services: { enabled: true, order: 2 },
  programs: { enabled: true, order: 3 },
  trainers: { enabled: true, order: 4 },
  testimonials: { enabled: true, order: 5 },
  pricing: { enabled: true, order: 6 },
  cta: { enabled: true, order: 7 },
  contact: { enabled: true, order: 8 },
}
```

### Template 2: Yellow Vibrant
**Best for:** Yoga studios, wellness centers, Pilates studios
```typescript
theme: 'yellow',
sectionConfig: {
  hero: { enabled: true, order: 1 },
  about: { enabled: true, order: 2 },
  services: { enabled: true, order: 3 },
  testimonials: { enabled: true, order: 4 },
  trainers: { enabled: true, order: 5 },
  blog: { enabled: true, order: 6 },
  contact: { enabled: true, order: 7 },
}
```

### Template 3: Red Power
**Best for:** Bodybuilding gyms, powerlifting centers, strength training
```typescript
theme: 'red',
sectionConfig: {
  hero: { enabled: true, order: 1 },
  programs: { enabled: true, order: 2 },
  trainers: { enabled: true, order: 3 },
  pricing: { enabled: true, order: 4 },
  testimonials: { enabled: true, order: 5 },
  cta: { enabled: true, order: 6 },
  contact: { enabled: true, order: 7 },
}
```

### Template 4: Purple Bold
**Best for:** Women-only gyms, dance studios, boutique fitness
```typescript
theme: 'purple',
sectionConfig: {
  hero: { enabled: true, order: 1 },
  about: { enabled: true, order: 2 },
  services: { enabled: true, order: 3 },
  blog: { enabled: true, order: 4 },
  testimonials: { enabled: true, order: 5 },
  pricing: { enabled: true, order: 6 },
  contact: { enabled: true, order: 7 },
}
```

### Template 5: Green Fresh
**Best for:** Outdoor training, sports performance, functional fitness
```typescript
theme: 'green',
sectionConfig: {
  hero: { enabled: true, order: 1 },
  services: { enabled: true, order: 2 },
  programs: { enabled: true, order: 3 },
  about: { enabled: true, order: 4 },
  pricing: { enabled: true, order: 5 },
  cta: { enabled: true, order: 6 },
  contact: { enabled: true, order: 7 },
}
```

## Creating 100+ Variations

### Strategy:
1. **5 Base Themes** × **5 Color Variations** = 25 unique looks
2. **25 Looks** × **4 Section Arrangements** = 100 unique websites

### Section Arrangement Patterns:

**Pattern A - Service Focused:**
```
Hero → Services → Programs → Pricing → Testimonials → Contact
```

**Pattern B - Trust Building:**
```
Hero → About → Trainers → Testimonials → Pricing → CTA → Contact
```

**Pattern C - Education First:**
```
Hero → Blog → About → Services → Testimonials → Contact
```

**Pattern D - Community Driven:**
```
Hero → Testimonials → About → Programs → Trainers → Contact
```

## Content Customization Tips

### Hero Section
- Update hero text in `src/components/sections/hero-section.tsx`
- Replace background video: `public/videos/hero-bg.mp4`
- Change stats to match your gym

### Services
- Edit service list in `src/components/sections/services-section.tsx`
- Add/remove services as needed
- Update icons and descriptions

### Testimonials
- Replace testimonials array in `src/components/sections/testimonials-section.tsx`
- Use real customer photos and reviews
- Consider integrating Google Reviews API

### Pricing
- Update pricing plans in `src/components/sections/pricing-section.tsx`
- Adjust features and prices
- Add seasonal promotions

## Performance Optimization Checklist

✅ All images optimized (WebP, AVIF formats)
✅ Lazy loading enabled for images
✅ Code splitting with Next.js
✅ Minimal JavaScript bundle
✅ CSS optimized with Tailwind
✅ Font optimization with Next.js Font
✅ SEO meta tags configured
✅ Mobile-first responsive design
✅ Fast animations with Framer Motion
✅ Lighthouse score 95+

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
```bash
# Build for production
yarn build

# Output is in .next folder
# Upload to your hosting provider
```

## Support & Updates

For questions or support:
1. Check the README.md
2. Review component documentation
3. Test in different browsers
4. Validate responsive design

## License

MIT - Use for unlimited personal and commercial projects
