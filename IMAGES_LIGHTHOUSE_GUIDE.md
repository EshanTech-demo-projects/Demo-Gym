# 🖼️ Required Images for 95+ Lighthouse Scores

This guide explains what images you need to add and their specifications for optimal Lighthouse performance.

## 🎯 Critical Images (Required for Full Functionality)

### 1. Open Graph Image
**File**: `public/og-image.jpg`
**Dimensions**: 1200x630px
**Max Size**: 300KB
**Format**: JPEG or WebP

**Purpose**: Social media sharing preview
**Used by**: Facebook, Twitter, LinkedIn

**Quick tip**: Use Canva or Figma to create a branded image with:
- Your gym logo
- Tagline
- Gym interior photo

---

### 2. Hero Poster Image
**File**: `public/images/hero-poster.jpg`
**Dimensions**: 1920x1080px
**Max Size**: 200KB
**Format**: WebP preferred, JPEG acceptable

**Purpose**: Video placeholder (shows while video loads)
**Impact**: Reduces LCP (Largest Contentful Paint) by 2-3 seconds

---

### 3. Favicon
**File**: `public/favicon.ico`
**Dimensions**: 32x32px or 16x16px
**Format**: ICO or PNG

**Purpose**: Browser tab icon
**Generate at**: https://favicon.io/

---

## 📸 Content Images (For Full Template Functionality)

### About Section (2 images)
```
public/images/about-main.jpg      → 1200x800px, <200KB
public/images/about-secondary.jpg → 600x600px, <100KB
```

### Programs Section (4 images)
```
public/images/program-1.jpg → 800x600px, <150KB (Weight Loss)
public/images/program-2.jpg → 800x600px, <150KB (Muscle Building)
public/images/program-3.jpg → 800x600px, <150KB (Athletic Performance)
public/images/program-4.jpg → 800x600px, <150KB (Functional Fitness)
```

### Trainers Section (4 images)
```
public/images/trainer-1.jpg → 600x800px, <120KB (Portrait)
public/images/trainer-2.jpg → 600x800px, <120KB (Portrait)
public/images/trainer-3.jpg → 600x800px, <120KB (Portrait)
public/images/trainer-4.jpg → 600x800px, <120KB (Portrait)
```

### Testimonials Section (5 images)
```
public/images/testimonial-1.jpg → 200x200px, <50KB (Headshot)
public/images/testimonial-2.jpg → 200x200px, <50KB (Headshot)
public/images/testimonial-3.jpg → 200x200px, <50KB (Headshot)
public/images/testimonial-4.jpg → 200x200px, <50KB (Headshot)
public/images/testimonial-5.jpg → 200x200px, <50KB (Headshot)
```

### Blog Section (3 images)
```
public/images/blog-1.jpg → 800x600px, <150KB (Training tips)
public/images/blog-2.jpg → 800x600px, <150KB (Nutrition)
public/images/blog-3.jpg → 800x600px, <150KB (Motivation)
```

### Optional Video
```
public/videos/hero-bg.mp4 → 1920x1080px, <10MB, H.264 codec
```

---

## 🛠️ Image Optimization Tools

### Online Tools (Free)
1. **TinyPNG** - https://tinypng.com/
   - Drag & drop compression
   - Reduces file size by 50-70%

2. **Squoosh** - https://squoosh.app/
   - Advanced compression options
   - WebP conversion

3. **ImageOptim** (Mac) - https://imageoptim.com/
   - Batch processing
   - Lossless compression

### Command Line (Advanced)
```bash
# Install Sharp
npm install -g sharp-cli

# Convert to WebP (recommended)
sharp -i input.jpg -o output.webp --webp '{"quality": 85}'

# Resize images
sharp -i input.jpg -o output.jpg --resize '{"width": 1200, "height": 800, "fit": "cover"}'
```

### Batch Conversion Script
```bash
#!/bin/bash
# Save as optimize-images.sh

for img in public/images/*.jpg; do
  filename=$(basename "$img" .jpg)
  npx @squoosh/cli --resize '{width: 1200}' --webp '{quality: 85}' "$img" -d public/images/optimized/
done
```

---

## 📐 Recommended Image Specifications

| Image Type | Dimensions | Max Size | Format | Quality |
|------------|-----------|----------|--------|---------|
| Hero/Banner | 1920x1080 | 200KB | WebP | 85% |
| Programs/Services | 800x600 | 150KB | WebP | 85% |
| Trainers | 600x800 | 120KB | WebP | 85% |
| Testimonials | 200x200 | 50KB | WebP | 85% |
| Blog Cards | 800x600 | 150KB | WebP | 85% |
| OG Image | 1200x630 | 300KB | JPEG | 90% |

---

## 🎨 Where to Find Gym Images

### Free Stock Photos
1. **Unsplash** - https://unsplash.com/s/photos/gym
2. **Pexels** - https://www.pexels.com/search/gym/
3. **Pixabay** - https://pixabay.com/images/search/fitness/

### Premium Stock Photos
1. **Shutterstock** - https://www.shutterstock.com/
2. **Adobe Stock** - https://stock.adobe.com/
3. **iStock** - https://www.istockphoto.com/

### AI-Generated Images
1. **Midjourney** - Professional gym scenes
2. **DALL-E** - Custom gym imagery
3. **Stable Diffusion** - Open-source option

---

## 🚀 Quick Start: Adding Images

### Step 1: Download Sample Images
```bash
# From Unsplash (free, no attribution required)
curl -o public/images/about-main.jpg "https://source.unsplash.com/1200x800/?gym,fitness"
curl -o public/images/program-1.jpg "https://source.unsplash.com/800x600/?weightlifting"
# ... repeat for all images
```

### Step 2: Optimize Images
```bash
# Using TinyPNG CLI
npm install -g tinypng-cli
tinypng public/images/*.jpg --key YOUR_API_KEY
```

### Step 3: Convert to WebP
```bash
# Using Sharp
for img in public/images/*.jpg; do
  sharp -i "$img" -o "${img%.jpg}.webp" --webp '{"quality": 85}'
done
```

### Step 4: Update Image References (if using WebP)
```tsx
// Before
<Image src="/images/about-main.jpg" />

// After
<Image src="/images/about-main.webp" />
```

---

## ✅ Image Checklist for 95+ Performance

- [ ] All images are WebP or JPEG (no BMP/TIFF)
- [ ] All images are optimized (<300KB for large, <150KB for cards)
- [ ] All images have descriptive alt text
- [ ] Hero/above-fold images use `priority` prop
- [ ] Below-fold images use `loading="lazy"`
- [ ] All images have `sizes` attribute
- [ ] OG image exists at `/og-image.jpg`
- [ ] Favicon exists at `/favicon.ico`
- [ ] Hero poster image exists for video fallback

---

## 🎯 Performance Impact

| Optimization | Impact on Lighthouse |
|--------------|---------------------|
| WebP format | +5-10 points |
| Proper sizing | +8-12 points |
| Lazy loading | +10-15 points |
| Priority loading | +5-8 points |
| Compression | +5-10 points |

**Total potential gain**: +33-55 points on Performance score!

---

## 📝 Image Alt Text Best Practices

### ❌ Bad Alt Text
```tsx
<Image alt="image1" />
<Image alt="trainer" />
<Image alt="gym" />
```

### ✅ Good Alt Text
```tsx
<Image alt="Professional gym facility with modern equipment and training area" />
<Image alt="John Anderson - Strength & Conditioning specialist with 10+ years experience" />
<Image alt="Weight loss program - Custom meal plans and cardio training" />
```

**Formula**: `[Subject] - [Details] - [Context]`

---

## 🔍 Testing Your Images

### Check Image Sizes
```bash
# Linux/Mac
ls -lh public/images/

# Windows PowerShell
Get-ChildItem public/images/ | Select-Object Name, Length
```

### Check Image Dimensions
```bash
# Using ImageMagick
identify public/images/*.jpg

# Using Sharp
sharp -i public/images/about-main.jpg
```

### Test Lighthouse Impact
1. Remove all images
2. Run Lighthouse → Note score
3. Add optimized images one section at a time
4. Re-run Lighthouse after each section
5. Identify which images impact performance most

---

## 💡 Pro Tips

1. **Use WebP with JPEG Fallback**
   ```tsx
   <picture>
     <source srcSet="/images/hero.webp" type="image/webp" />
     <Image src="/images/hero.jpg" alt="..." />
   </picture>
   ```

2. **Lazy Load Everything Below Fold**
   - Only hero section images should have `priority`
   - Everything else: `loading="lazy"`

3. **Responsive Images**
   ```tsx
   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
   ```

4. **Placeholder Images**
   Use `placeholder="blur"` for Next.js Image component (requires static import)

5. **Image CDN**
   For best results, use a CDN like:
   - Cloudinary
   - imgix
   - Vercel Image Optimization (automatic on Vercel)

---

## 🆘 Troubleshooting

### Issue: Images not loading
**Check**:
- File paths are correct (case-sensitive)
- Files exist in `public/images/`
- No typos in file names

### Issue: Images too large
**Solution**:
```bash
# Compress all images
npx @squoosh/cli --resize '{width: 1200}' --webp '{quality: 85}' public/images/*.jpg
```

### Issue: Performance still low
**Check**:
- Are you testing production build? (`yarn build && yarn start`)
- Are images optimized? (Check file sizes)
- Is lazy loading enabled? (Check code)
- Are you using `priority` only on hero images?

---

## 📚 Further Resources

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [WebP Best Practices](https://developers.google.com/speed/webp)
- [Responsive Images Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
