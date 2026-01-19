# Component Documentation

## Core Components

### Button (`src/components/ui/button.tsx`)
Multi-variant button component with animations.

**Variants:**
- `default` - Primary button with shadow
- `gradient` - Gradient background
- `outline` - Outlined button
- `ghost` - Transparent button
- `secondary` - Secondary color

**Sizes:** `sm`, `default`, `lg`, `xl`, `icon`

**Usage:**
```tsx
<Button variant="gradient" size="lg">
  Click Me
</Button>
```

### Card (`src/components/ui/card.tsx`)
Container component for content sections.

**Sub-components:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Description text
- `CardContent` - Main content
- `CardFooter` - Footer section

**Usage:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

## Layout Components

### Header (`src/components/layout/header.tsx`)
Sticky header with navigation, logo, and theme toggle.

**Features:**
- Smooth scroll navigation
- Mobile responsive menu
- Theme toggle
- Transparent to solid on scroll

### Footer (`src/components/layout/footer.tsx`)
Multi-column footer with links, contact info, and social media.

## Section Components

### HeroSection (`src/components/sections/hero-section.tsx`)
Landing section with animated background and CTA.

**Features:**
- Optional background video
- Animated statistics
- Floating shapes animation
- Scroll indicator

**Customization:**
```tsx
// Edit text in the component
<h1>Build Your <span className="gradient-text">Dream Body</span></h1>
```

### AboutSection (`src/components/sections/about-section.tsx`)
About section with images and feature list.

**Features:**
- Dual image layout
- Animated badge
- Feature list with icons
- Hover animations

### ServicesSection (`src/components/sections/services-section.tsx`)
Grid of service cards.

**Customization:**
Edit the `services` array:
```tsx
const services = [
  {
    icon: 'mdi:dumbbell',
    title: 'Your Service',
    description: 'Description here',
    color: 'from-orange-500 to-red-500',
  },
  // ... more services
];
```

### ProgramsSection (`src/components/sections/programs-section.tsx`)
Training programs with images and features.

**Features:**
- Image overlay effect
- Duration badge
- Feature list
- Hover zoom animation

### TestimonialsSection (`src/components/sections/testimonials-section.tsx`)
Carousel of customer testimonials.

**Features:**
- Swiper carousel
- Auto-play
- Star ratings
- Responsive grid

**Add testimonials:**
```tsx
const testimonials = [
  {
    name: 'Customer Name',
    role: 'Customer Type',
    image: '/images/testimonial.jpg',
    rating: 5,
    text: 'Testimonial text',
  },
];
```

### PricingSection (`src/components/sections/pricing-section.tsx`)
Pricing plans comparison.

**Features:**
- Popular badge
- Feature checklist
- Gradient icons
- Responsive grid

**Edit plans:**
```tsx
const pricingPlans = [
  {
    name: 'Plan Name',
    price: '$99',
    period: 'per month',
    features: [
      { text: 'Feature', included: true },
    ],
    popular: false,
  },
];
```

### TrainersSection (`src/components/sections/trainers-section.tsx`)
Team member showcase.

**Features:**
- Image hover effect
- Social media links
- Certifications display

### BlogSection (`src/components/sections/blog-section.tsx`)
Blog posts grid.

**Features:**
- Category badges
- Read time
- Author information
- Excerpt with line clamp

### ContactSection (`src/components/sections/contact-section.tsx`)
Contact form and information.

**Features:**
- Contact form with validation
- Contact cards
- Opening hours
- Social links
- Google Maps placeholder

### CTASection (`src/components/sections/cta-section.tsx`)
Call-to-action section.

**Features:**
- Animated background
- Floating shapes
- Multiple CTAs
- Benefits showcase

## Utility Components

### ScrollToTop (`src/components/ui/scroll-to-top.tsx`)
Floating button to scroll to top.

**Features:**
- Auto-hide/show based on scroll
- Bounce animation
- Smooth scroll

### FloatingActions (`src/components/ui/floating-actions.tsx`)
Fixed WhatsApp and Call buttons.

**Features:**
- WhatsApp integration
- Direct call link
- Pulse animation

### ThemeToggle (`src/components/ui/theme-toggle.tsx`)
Dark/Light mode toggle button.

## Animation Utilities

### Framer Motion Variants

**fadeInUp:**
```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
```

**Usage:**
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  Content
</motion.div>
```

### useInView Hook
```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-100px' });

<section ref={ref}>
  <motion.div animate={isInView ? { opacity: 1 } : { opacity: 0 }}>
    Content
  </motion.div>
</section>
```

## Styling Utilities

### Custom Classes

**Gradient Text:**
```tsx
<span className="gradient-text">Text</span>
```

**Glass Effect:**
```tsx
<div className="glass">Content</div>
```

**Section Padding:**
```tsx
<section className="section-padding">Content</section>
```

**Container:**
```tsx
<div className="container-custom">Content</div>
```

## Icons

Uses Iconify React for flexibility:

```tsx
import { Icon } from '@iconify/react';

<Icon icon="mdi:dumbbell" className="h-6 w-6" />
```

**Icon Sets Available:**
- Material Design Icons (mdi:)
- Lucide (lucide:)
- Font Awesome (fa:)
- And 100+ more

## Configuration

### Theme Colors
Edit `src/config/themes.ts` to add/modify color schemes.

### Site Config
Edit `src/config/site-config.ts` for:
- Site name and description
- Contact information
- Social media links
- Feature toggles
- Section configuration

## Best Practices

1. **Images:** Always use Next.js Image component
2. **Animations:** Use Framer Motion for consistency
3. **Responsive:** Test on mobile, tablet, and desktop
4. **Performance:** Lazy load sections below fold
5. **SEO:** Update metadata in layout.tsx
6. **Accessibility:** Use proper ARIA labels
7. **Code:** Keep components modular and reusable
