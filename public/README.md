# Public Assets Structure

This directory contains all public assets for your gym website.

## Directory Structure

```
public/
├── images/           # All images
│   ├── logo.png
│   ├── about-main.jpg
│   ├── about-secondary.jpg
│   ├── program-1.jpg
│   ├── program-2.jpg
│   ├── program-3.jpg
│   ├── program-4.jpg
│   ├── trainer-1.jpg
│   ├── trainer-2.jpg
│   ├── trainer-3.jpg
│   ├── trainer-4.jpg
│   ├── testimonial-1.jpg
│   ├── testimonial-2.jpg
│   ├── testimonial-3.jpg
│   ├── testimonial-4.jpg
│   ├── testimonial-5.jpg
│   ├── blog-1.jpg
│   ├── blog-2.jpg
│   └── blog-3.jpg
├── videos/           # Video files
│   └── hero-bg.mp4
├── favicon.ico       # Browser favicon
└── robots.txt        # SEO robots file
```

## Adding Your Assets

### Logo
- File: `logo.png`
- Dimensions: 200x200px (square)
- Format: PNG with transparency
- Usage: Header, footer, meta tags

### Images
Place all images in the `images/` folder with the exact names listed above.

### Videos (Optional)
Place background video in `videos/hero-bg.mp4`

## Image Optimization

Before adding images:
1. Resize to recommended dimensions
2. Compress using [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
3. Target file size: < 200KB per image
4. Use modern formats (WebP, AVIF) when possible

## Note

The Next.js Image component will automatically:
- Optimize images on-demand
- Serve modern formats to supported browsers
- Lazy load images for better performance
- Generate responsive image sizes

Just add your source images and Next.js handles the rest!
