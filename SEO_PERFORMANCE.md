# SEO & Performance Optimization Guide

## SEO Configuration

### Meta Tags (layout.tsx)
Already configured with essential meta tags:
- Title
- Description
- Keywords
- Open Graph
- Twitter Cards
- Robots

### Dynamic Meta Tags for Different Gyms

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Gym Name - Transform Your Body & Mind',
  description: 'Join the #1 gym in [City]. Expert trainers, modern equipment, and proven results.',
  keywords: [
    'gym [city name]',
    'fitness center [city name]',
    'personal training',
    'weight loss',
    'muscle building',
    '[your gym name]',
  ],
};
```

### Structured Data (JSON-LD)

Add to each gym's layout for better SEO:

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Your Gym Name",
  "image": "https://yourdomain.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Fitness Street",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "telephone": "+1-555-123-4567",
  "openingHours": "Mo-Fr 06:00-22:00, Sa 07:00-20:00, Su 08:00-18:00",
  "priceRange": "$$",
};
```

## Performance Optimizations

### 1. Image Optimization

✅ **Already Implemented:**
- Next.js Image component (automatic optimization)
- Lazy loading
- Modern formats (AVIF, WebP)
- Responsive images

**Additional Tips:**
```typescript
// Optimize images with quality setting
<Image
  src="/images/hero.jpg"
  alt="Gym"
  quality={85} // 85 is optimal
  priority // For above-fold images
/>
```

### 2. Code Splitting

✅ **Already Implemented:**
- Next.js automatic code splitting
- Dynamic imports where needed

**For heavy components:**
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // If client-side only
});
```

### 3. Font Optimization

✅ **Already Implemented:**
- Next.js Font optimization
- Inter font with subset

**Custom fonts:**
```typescript
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

### 4. CSS Optimization

✅ **Already Implemented:**
- Tailwind CSS with purge
- Minimal custom CSS
- CSS-in-JS with Tailwind

### 5. JavaScript Optimization

✅ **Already Implemented:**
- TypeScript for type safety
- Tree shaking enabled
- Minimal dependencies

### 6. Loading Performance

**Implement skeleton screens:**
```tsx
<div className="animate-pulse">
  <div className="h-48 bg-gray-200 rounded" />
</div>
```

**Optimize animations:**
```tsx
// Use transform instead of position
// Use opacity instead of visibility
<motion.div
  animate={{ 
    opacity: 1, 
    transform: 'translateY(0)' 
  }}
/>
```

## Lighthouse Score Optimization

### Target Scores
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Checklist

#### Performance (95+)
- [ ] Images optimized (< 200KB each)
- [ ] Videos compressed (< 5MB)
- [ ] Lazy loading enabled
- [ ] Critical CSS inlined
- [ ] JavaScript minimized
- [ ] CDN for assets
- [ ] Caching headers set
- [ ] Compression enabled (gzip/brotli)

#### Accessibility (95+)
- [ ] Alt text on all images
- [ ] ARIA labels on interactive elements
- [ ] Color contrast ratios (4.5:1 minimum)
- [ ] Keyboard navigation working
- [ ] Focus indicators visible
- [ ] Semantic HTML used
- [ ] Screen reader tested

#### Best Practices (95+)
- [ ] HTTPS enabled
- [ ] No console errors
- [ ] Valid HTML
- [ ] Secure cookies
- [ ] No mixed content
- [ ] CSP headers set

#### SEO (100)
- [ ] Meta description (150-160 chars)
- [ ] Title tag (50-60 chars)
- [ ] H1 tag present and unique
- [ ] Internal links
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Canonical URLs
- [ ] Mobile-friendly

## Google PageSpeed Insights

Test your site:
```
https://pagespeed.web.dev/
```

### Common Issues & Fixes

**1. Largest Contentful Paint (LCP)**
- Target: < 2.5s
- Fix: Optimize hero images, use `priority` prop

**2. First Input Delay (FID)**
- Target: < 100ms
- Fix: Minimize JavaScript, defer non-critical scripts

**3. Cumulative Layout Shift (CLS)**
- Target: < 0.1
- Fix: Set image dimensions, avoid layout shifts

## Monitoring & Analytics

### Google Analytics Setup

1. Get tracking ID from Google Analytics
2. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Create `src/lib/analytics.ts`:
```typescript
export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  });
};
```

### Performance Monitoring

Use Vercel Analytics (free):
1. Deploy to Vercel
2. Enable Analytics in dashboard
3. Monitor Real Experience Score (RES)

## Deployment Optimization

### Vercel (Recommended)
- Automatic CDN
- Edge caching
- Image optimization
- Analytics included

### Build Settings
```json
{
  "buildCommand": "yarn build",
  "outputDirectory": ".next",
  "devCommand": "yarn dev",
  "installCommand": "yarn install"
}
```

### Environment Variables
Set in Vercel dashboard:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_GA_ID`

## Mobile Optimization

✅ **Already Implemented:**
- Mobile-first design
- Touch-friendly buttons (min 44x44px)
- Responsive images
- Fast mobile performance

**Test on:**
- Chrome DevTools (Device Mode)
- Real devices (iOS & Android)
- BrowserStack or LambdaTest

## Caching Strategy

**Static assets:** 1 year
```
Cache-Control: public, max-age=31536000, immutable
```

**HTML pages:** No cache or short cache
```
Cache-Control: public, max-age=0, must-revalidate
```

**API responses:** Based on data freshness
```
Cache-Control: public, max-age=3600, s-maxage=3600
```

## Security Headers

Add to `next.config.ts`:
```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ];
},
```

## Pre-launch Checklist

- [ ] Run Lighthouse audit
- [ ] Test on multiple devices
- [ ] Check all links work
- [ ] Verify contact forms
- [ ] Test dark/light modes
- [ ] Check social media links
- [ ] Verify Google Maps
- [ ] Test WhatsApp/Call buttons
- [ ] Check loading times
- [ ] Validate HTML
- [ ] Test with slow 3G
- [ ] Check accessibility
- [ ] Verify SEO meta tags
- [ ] Test share previews
- [ ] Monitor console for errors

## Maintenance

**Monthly:**
- Update dependencies
- Check broken links
- Review analytics
- Optimize slow pages

**Quarterly:**
- Run full Lighthouse audit
- Update content
- Refresh testimonials
- Update blog posts
