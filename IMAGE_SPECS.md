# Image Specifications Guide

Place all images in the `public/images/` directory.

## Required Images

### Logo
- **File:** `logo.png`
- **Dimensions:** 200x200px (square)
- **Format:** PNG with transparency
- **Usage:** Header and footer branding

### About Section
- **Files:** 
  - `about-main.jpg` (800x1000px)
  - `about-secondary.jpg` (500x500px)
- **Format:** JPG/WebP
- **Usage:** About section imagery

### Programs (4 images)
- **Files:** `program-1.jpg` to `program-4.jpg`
- **Dimensions:** 800x600px (landscape)
- **Format:** JPG/WebP
- **Content Ideas:**
  - Weight loss before/after
  - Muscle building exercises
  - Athletic performance training
  - Functional fitness activities

### Trainers (4 images)
- **Files:** `trainer-1.jpg` to `trainer-4.jpg`
- **Dimensions:** 600x800px (portrait)
- **Format:** JPG/WebP
- **Style:** Professional headshots or action shots

### Testimonials (5 images)
- **Files:** `testimonial-1.jpg` to `testimonial-5.jpg`
- **Dimensions:** 200x200px (square)
- **Format:** JPG/WebP
- **Style:** Professional headshots of customers

### Blog Posts (3 images)
- **Files:** `blog-1.jpg` to `blog-3.jpg`
- **Dimensions:** 800x600px (landscape)
- **Format:** JPG/WebP
- **Content Ideas:**
  - Exercise demonstrations
  - Healthy meal prep
  - Fitness motivation

## Optional Images

### Background Video
- **File:** `public/videos/hero-bg.mp4`
- **Dimensions:** 1920x1080px (Full HD)
- **Duration:** 10-30 seconds (looped)
- **Size:** < 5MB (optimized)
- **Content:** Gym workout footage, people training

### Favicon
- **File:** `public/favicon.ico`
- **Dimensions:** 32x32px
- **Format:** ICO or PNG

## Image Optimization Tips

1. **Compress images** before adding:
   - Use TinyPNG or Squoosh
   - Target: < 200KB per image

2. **Use modern formats:**
   - WebP for better compression
   - AVIF for next-gen browsers

3. **Provide multiple sizes:**
   ```
   image-mobile.jpg (640px width)
   image-tablet.jpg (1024px width)
   image-desktop.jpg (1920px width)
   ```

4. **Alt text:** Always describe images for SEO and accessibility

## Placeholder Image Services

If you need placeholder images during development:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

Search terms: "gym", "fitness", "workout", "training", "bodybuilding"

## Quick Start with Placeholders

Run this script to create placeholder structure:

```bash
mkdir -p public/images public/videos
touch public/images/{logo.png,about-main.jpg,about-secondary.jpg}
touch public/images/{program-1..4}.jpg
touch public/images/{trainer-1..4}.jpg
touch public/images/{testimonial-1..5}.jpg
touch public/images/{blog-1..3}.jpg
```

Replace placeholders with your actual images before deployment.
