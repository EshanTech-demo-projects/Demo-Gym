# 🏋️ Quick Start Guide

Get your gym website up and running in **under 1 hour**!

## ⚡ Fast Track (10 Minutes)

### 1. Install Dependencies (2 min)
```bash
yarn install
```

### 2. Run Development Server (1 min)
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Choose Theme (30 seconds)
Edit `src/config/site-config.ts`:
```typescript
theme: 'orange' // Change to: yellow, red, purple, or green
```

### 4. Update Gym Info (5 min)
In `src/config/site-config.ts`:
```typescript
export const siteConfig = {
  name: 'Your Gym Name',
  description: 'Your description',
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'info@yourgym.com',
    address: 'Your Address',
    whatsapp: '+15551234567',
  },
  social: {
    facebook: 'https://facebook.com/yourgym',
    instagram: 'https://instagram.com/yourgym',
    // ... update all
  },
};
```

### 5. Done! 🎉
Your website is now customized and running!

---

## 📋 Complete Setup (1 Hour)

### Step 1: Installation (5 min)

```bash
# Navigate to project
cd "c:\Users\Dell\Desktop\Gym\New folder"

# Install dependencies
yarn install

# Run development server
yarn dev
```

### Step 2: Theme Selection (2 min)

Choose one of 5 themes in `src/config/site-config.ts`:

| Theme | Color | Best For |
|-------|-------|----------|
| `orange` | #FF6B35 | CrossFit, HIIT, Athletic |
| `yellow` | #FFB800 | Yoga, Wellness, Pilates |
| `red` | #E63946 | Bodybuilding, Powerlifting |
| `purple` | #7209B7 | Women's Fitness, Dance |
| `green` | #06D6A0 | Outdoor, Functional Fitness |

### Step 3: Site Configuration (10 min)

Edit `src/config/site-config.ts`:

```typescript
// 1. Basic Information
name: 'PowerFit Gym',
description: 'Transform your body and life',

// 2. Contact Details
contact: {
  phone: '+1 (555) 123-4567',
  email: 'info@powerfitgym.com',
  address: '123 Fitness St, NY 10001',
  whatsapp: '+15551234567',
},

// 3. Social Media
social: {
  facebook: 'https://facebook.com/powerfitgym',
  instagram: 'https://instagram.com/powerfitgym',
  twitter: 'https://twitter.com/powerfitgym',
  youtube: 'https://youtube.com/powerfitgym',
},

// 4. Enable/Disable Features
features: {
  enableBlog: true,
  enableTestimonials: true,
  enableMap: true,
  enableVideo: true,
  enableBackgroundVideo: false, // Set true if you have video
},
```

### Step 4: Section Configuration (5 min)

Customize which sections appear:

```typescript
export const sectionConfig = {
  hero: { enabled: true, order: 1 },
  about: { enabled: true, order: 2 },
  services: { enabled: true, order: 3 },
  programs: { enabled: true, order: 4 },
  testimonials: { enabled: true, order: 5 },
  pricing: { enabled: true, order: 6 },
  trainers: { enabled: true, order: 7 },
  blog: { enabled: false, order: 8 }, // Disable if not needed
  cta: { enabled: true, order: 9 },
  contact: { enabled: true, order: 10 },
};
```

### Step 5: Add Images (20 min)

Add images to `public/images/`:

**Required Images:**
- ✅ `logo.png` - Your gym logo
- ✅ `about-main.jpg` - Main about image
- ✅ `about-secondary.jpg` - Secondary about image
- ✅ `program-1.jpg` to `program-4.jpg` - Program images
- ✅ `trainer-1.jpg` to `trainer-4.jpg` - Trainer photos
- ✅ `testimonial-1.jpg` to `testimonial-5.jpg` - Customer photos
- ✅ `blog-1.jpg` to `blog-3.jpg` - Blog post images

**Optional:**
- `public/videos/hero-bg.mp4` - Background video

**Quick Image Sources:**
- [Unsplash](https://unsplash.com/s/photos/gym)
- [Pexels](https://pexels.com/search/fitness)
- Use your own gym photos (recommended!)

### Step 6: Customize Content (15 min)

#### Services Section
Edit `src/components/sections/services-section.tsx`:
```typescript
const services = [
  {
    icon: 'mdi:dumbbell',
    title: 'Your Service',
    description: 'Your description',
    color: 'from-orange-500 to-red-500',
  },
  // Add more services
];
```

#### Pricing Plans
Edit `src/components/sections/pricing-section.tsx`:
```typescript
const pricingPlans = [
  {
    name: 'Basic',
    price: '$29',
    features: [
      { text: 'Gym access', included: true },
      // Add features
    ],
  },
];
```

#### Testimonials
Edit `src/components/sections/testimonials-section.tsx`:
```typescript
const testimonials = [
  {
    name: 'Customer Name',
    text: 'Great gym!',
    image: '/images/testimonial-1.jpg',
    rating: 5,
  },
];
```

### Step 7: Google Maps (Optional, 3 min)

1. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Create `.env.local`:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Step 8: Build & Deploy (5 min)

```bash
# Build for production
yarn build

# Test production build locally
yarn start

# Deploy to Vercel (recommended)
npm i -g vercel
vercel
```

---

## 🎨 Creating Different Websites

### Website #1: Orange Theme, All Sections
```typescript
theme: 'orange',
sectionConfig: {
  hero: { enabled: true, order: 1 },
  services: { enabled: true, order: 2 },
  programs: { enabled: true, order: 3 },
  // ... all enabled
}
```

### Website #2: Yellow Theme, Minimal
```typescript
theme: 'yellow',
sectionConfig: {
  hero: { enabled: true, order: 1 },
  about: { enabled: true, order: 2 },
  services: { enabled: true, order: 3 },
  contact: { enabled: true, order: 4 },
  // ... others disabled
}
```

### Website #3: Red Theme, Different Order
```typescript
theme: 'red',
sectionConfig: {
  hero: { enabled: true, order: 1 },
  programs: { enabled: true, order: 2 },
  pricing: { enabled: true, order: 3 },
  trainers: { enabled: true, order: 4 },
  // ... custom order
}
```

---

## 🚀 Production Checklist

Before launching:

- [ ] Updated all contact information
- [ ] Added all images
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Verified contact form
- [ ] Tested WhatsApp/Call buttons
- [ ] Set up Google Maps API
- [ ] Optimized images (< 200KB each)
- [ ] Run `yarn build` successfully
- [ ] Test production build locally
- [ ] Set up domain name
- [ ] Deploy to hosting

---

## 🆘 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules yarn.lock
yarn install
```

### Images not showing
- Check file paths are correct
- Ensure images are in `public/images/`
- Check file extensions match

### Build errors
```bash
yarn lint
yarn build
```

### Styling issues
```bash
# Clear Next.js cache
rm -rf .next
yarn dev
```

---

## 📚 Next Steps

1. **Read Documentation:**
   - [TEMPLATES_GUIDE.md](TEMPLATES_GUIDE.md) - Template variations
   - [COMPONENTS_DOCS.md](COMPONENTS_DOCS.md) - Component details
   - [SEO_PERFORMANCE.md](SEO_PERFORMANCE.md) - Optimization guide

2. **Customize Further:**
   - Edit colors in `src/config/themes.ts`
   - Modify components in `src/components/`
   - Add new sections

3. **Optimize:**
   - Run Lighthouse audit
   - Compress images
   - Test on real devices

4. **Deploy:**
   - Choose hosting (Vercel recommended)
   - Set up custom domain
   - Configure analytics

---

## 💡 Tips for Creating 100+ Websites

1. **Use Git branches** for each website
2. **Template naming:** `gym-website-01`, `gym-website-02`, etc.
3. **Keep a spreadsheet** tracking:
   - Theme color
   - Enabled sections
   - Client name
   - Domain
   - Deploy status

4. **Batch creation:**
   - Week 1: Set up 5 base themes
   - Week 2-4: Create 95 variations
   - 5 websites per day = 19 days total

5. **Automation ideas:**
   - Script to swap themes
   - Bulk image renaming
   - Config file generator

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Iconify Icons](https://icon-sets.iconify.design/)

---

## 🤝 Support

Need help? Check these resources:
1. Read the documentation files
2. Check [Next.js Discussions](https://github.com/vercel/next.js/discussions)
3. Review component examples in the code

---

## ✨ You're All Set!

Your gym master template is ready to create amazing websites. 

**Time to build:** ~60 minutes per site
**Sites possible:** 100+ unique variations
**Performance:** Lighthouse score 95+

Happy building! 🏋️‍♂️💪
