# PowerFit Gym - Professional Single Page Website

A modern, fully responsive, and professional gym website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed specifically for fitness businesses to convert visitors into members.

## 🚀 Features

### ✅ Professional Design
- **Modern UI/UX** - Clean, professional design with smooth animations
- **200% Mobile Responsive** - Optimized for all devices from 320px to 4K screens
- **Multiple Themes** - Choose from 4 pre-built layout themes
- **Dark Mode Support** - Built-in light/dark theme toggle
- **Professional Typography** - Carefully selected Google Fonts for readability

### ✅ Marketing Optimized
- **SEO Optimized** - Comprehensive meta tags and structured data
- **Fast Loading** - Optimized for Core Web Vitals and Lighthouse scores
- **Conversion Focused** - Strategic CTAs and trust elements throughout
- **Social Proof** - Testimonials, stats, and success stories
- **Contact Integration** - WhatsApp, phone, and email integration

### ✅ Key Sections
- **Hero Section** - Eye-catching hero with stats and CTAs
- **About Section** - Build trust with your story
- **Services** - Showcase your offerings
- **Programs** - Highlight training programs
- **Pricing** - Clear, transparent pricing cards
- **Trainers** - Meet the team
- **Testimonials** - Social proof from happy members
- **Blog** - Share fitness tips and updates
- **Contact** - Easy-to-use contact form with map integration

### ✅ Mobile Features
- **Touch-Friendly** - 44px minimum touch targets
- **Auto-Hide Navigation** - Smart scroll behavior
- **Floating Actions** - WhatsApp & Call buttons with smart positioning
- **Optimized Images** - Responsive images with lazy loading
- **Fast Performance** - 90+ Lighthouse score on mobile

## 📱 Mobile Responsive Highlights

- **Breakpoints**: xs (475px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px), 3xl (1920px)
- **Fluid Typography**: Scales from mobile to desktop seamlessly
- **Flexible Grids**: Stack beautifully on mobile, expand on desktop
- **Touch Optimization**: Buttons are 44px minimum for easy tapping
- **Smart Menus**: Hamburger menu on mobile, full menu on desktop

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Iconify
- **UI Components**: Radix UI
- **Fonts**: Google Fonts (Inter, Montserrat, Playfair Display, Rajdhani, Poppins)

## 📦 Installation

1. **Clone or extract the project**
   ```bash
   cd "Gym/New folder"
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## ⚙️ Configuration

### Site Configuration
Edit `src/config/site-config.ts` to customize:
- Gym name, description
- Contact information (phone, email, address, WhatsApp)
- Social media links
- Feature toggles

### Theme Selection
Choose from 4 layout themes in `site-config.ts`:
- `layout-1-stacked` - Classic stacked sections (recommended)
- `layout-2-split` - Split screen layouts
- `layout-3-grid` - Grid-based layouts
- `layout-4-diagonal` - Diagonal sections

### Colors & Branding
Edit `src/app/globals.css` for custom colors:
```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* Add your brand colors */
}
```

## 📱 Mobile Optimization Tips

1. **Test on Real Devices**: Use Chrome DevTools device emulation
2. **Check Touch Targets**: All buttons should be at least 44x44px
3. **Optimize Images**: Use WebP format and proper sizing
4. **Lazy Load**: Images below fold should lazy load
5. **Font Loading**: Using font-display: swap for better performance

## 🎨 Customization Guide

### Adding Your Logo
Replace `/public/images/logo.png` with your gym's logo

### Changing Colors
1. Edit CSS variables in `src/app/globals.css`
2. Update Tailwind config in `tailwind.config.ts`

### Adding Sections
1. Create new component in `src/components/sections/`
2. Import and add to `src/components/layout-wrapper.tsx`
3. Update section config in `site-config.ts`

### Modifying Content
Edit individual section files in `src/components/sections/`:
- Hero copy: `hero-section.tsx`
- Pricing plans: `pricing-section.tsx`
- Services: `services-section.tsx`
- etc.

## 🚀 Performance Features

- ✅ Server-side rendering with Next.js
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Font optimization
- ✅ CSS minification
- ✅ Lazy loading components
- ✅ Prefetching links

## 📊 SEO Features

- ✅ Meta tags optimization
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Canonical URLs

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Building for Production

```bash
npm run build
npm run start

# or
yarn build
yarn start
```

## 🎯 Marketing Tips

1. **Update Contact Info**: Add your real phone, email, and address
2. **Add Real Photos**: Replace placeholder images with your gym photos
3. **Testimonials**: Add real customer testimonials with photos
4. **Call-to-Actions**: Ensure all CTA buttons link to contact/signup
5. **Social Media**: Link all your active social profiles
6. **Google Maps**: Add your gym location in contact section
7. **Analytics**: Add Google Analytics tracking code

## 🔧 Troubleshooting

### Images Not Loading
- Check image paths in `/public/images/`
- Ensure images are optimized (< 500KB)

### Styles Not Applying
- Clear browser cache
- Restart development server
- Check Tailwind CSS purge settings

### Build Errors
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Check for TypeScript errors

## 📄 License

This is a commercial template. All rights reserved.

## 💼 Support

For customization services or support:
- Email: eshantechservices@gmail.com
- Phone: +91 9959355356
- WhatsApp: +91 9959355356

---

**Made with ❤️ for Fitness Businesses**

Transform your gym's online presence and convert more visitors into members!
