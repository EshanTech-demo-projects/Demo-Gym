# Multi-Theme System Guide

## Overview

This gym template now features **5 completely different themes**, not just color variations. Each theme has its own unique design philosophy, layout style, typography, animations, and visual identity.

## Available Themes

### 1. Modern Minimalist 🎨
**Theme ID:** `modern-minimalist`

**Design Philosophy:**
- Clean, spacious layouts with lots of breathing room
- Elegant simplicity and sophisticated aesthetics
- Light weight typography with negative letter spacing
- Subtle, slow animations
- Flat cards with minimal shadows

**Best For:**
- High-end boutique gyms
- Yoga and wellness centers
- Premium fitness studios

**Visual Characteristics:**
- Max container width: 1400px
- Section spacing: 8rem
- Border radius: 0.5rem
- Font: Inter (light weight - 300)
- Colors: Deep blues and teals with gradient accents

---

### 2. Bold & Dynamic 💥
**Theme ID:** `bold-dynamic`

**Design Philosophy:**
- High-energy, full-width sections
- Bold, uppercase typography
- Fast, sharp animations
- Elevated cards with dramatic shadows
- Zero border radius for sharp edges

**Best For:**
- CrossFit gyms
- High-intensity training facilities
- Sports performance centers
- Young, energetic demographics

**Visual Characteristics:**
- Max container width: 100% (full width)
- Section spacing: 0 (edge-to-edge)
- Border radius: 0
- Font: Montserrat (heavy weight - 800)
- Colors: Vibrant oranges and warm tones

---

### 3. Classic Elegant 🏛️
**Theme ID:** `classic-elegant`

**Design Philosophy:**
- Timeless, traditional design
- Serif typography for sophistication
- Bordered cards instead of shadows
- Refined aesthetics with boxed layouts
- Smooth, moderate animations

**Best For:**
- Established gyms with long history
- Country clubs and exclusive facilities
- Traditional strength training gyms
- Professional clientele

**Visual Characteristics:**
- Max container width: 1200px
- Section spacing: 6rem
- Border radius: 0.25rem
- Font: Playfair Display (serif)
- Colors: Browns and golds with elegant gradients

---

### 4. Dark & Intense ⚡
**Theme ID:** `dark-intense`

**Design Philosophy:**
- Dark background with high contrast
- Neon accent colors (green, cyan, magenta)
- Glass morphism effects
- Uppercase, tech-style typography
- Edgy, urban aesthetic

**Best For:**
- 24-hour gyms
- Underground/urban fitness spaces
- Tech-focused smart gyms
- Younger, trend-conscious audience

**Visual Characteristics:**
- Max container width: 1600px
- Section spacing: 5rem
- Border radius: 1rem
- Font: Rajdhani (tech-style)
- Background: #0a0a0a (near black)
- Colors: Neon greens and cyans with glowing effects

---

### 5. Vibrant & Playful 🌈
**Theme ID:** `vibrant-playful`

**Design Philosophy:**
- Colorful gradient backgrounds
- Large border radius (rounded everything)
- Bouncy, energetic animations
- Gradient cards with playful hover effects
- Modern, friendly typography

**Best For:**
- Family-friendly gyms
- Group fitness centers
- Dance studios
- Community recreation centers

**Visual Characteristics:**
- Max container width: 1300px
- Section spacing: 7rem
- Border radius: 2rem (very rounded)
- Font: Poppins (friendly and modern)
- Colors: Multi-color gradients (pink to purple to blue)

---

## How to Switch Themes

### Method 1: Live Theme Switcher (Client-Side)
Users can switch themes in real-time using the floating theme selector button in the top-right corner of the website:

1. Click the "Themes" button (palette icon)
2. Select from the 5 available themes
3. The entire website instantly transforms

This is perfect for:
- Demoing to clients
- User preference selection
- A/B testing different designs

### Method 2: Configuration File (Build-Time)
Set the default theme in `src/config/site-config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: 'PowerFit Gym',
  theme: 'modern-minimalist', // Change this value
  // Options:
  // - 'modern-minimalist'
  // - 'bold-dynamic'
  // - 'classic-elegant'
  // - 'dark-intense'
  // - 'vibrant-playful'
  ...
};
```

---

## Theme Configuration Details

Each theme is defined in `src/config/themes.ts` with the following properties:

```typescript
{
  id: string;              // Unique theme identifier
  name: string;            // Display name
  description: string;     // What makes this theme special
  colors: {
    primary: string;       // Main brand color
    primaryDark: string;   // Darker shade for hover states
    secondary: string;     // Secondary accent
    accent: string;        // Tertiary highlight
    gradient: string;      // CSS gradient for special effects
  };
  layout: {
    style: string;         // Theme style identifier
    containerMaxWidth: string;  // Max width of content
    sectionSpacing: string;     // Vertical spacing between sections
    borderRadius: string;       // Corner roundness
    cardStyle: 'flat' | 'elevated' | 'bordered' | 'gradient' | 'glass';
  };
  typography: {
    headingFont: string;   // Font for headings
    bodyFont: string;      // Font for body text
    headingWeight: number; // Font weight for headings
    letterSpacing: string; // Character spacing
  };
  animations: {
    enabled: boolean;      // Toggle animations
    speed: 'slow' | 'normal' | 'fast';
    style: 'subtle' | 'smooth' | 'bouncy' | 'sharp';
  };
}
```

---

## What Makes Each Theme Different?

### Not Just Colors!

The theme system changes:

1. **Layout & Spacing**
   - Container widths (boxed vs full-width)
   - Section padding and vertical rhythm
   - Card styles and shadows

2. **Typography**
   - Different font families (serif vs sans-serif)
   - Font weights (light vs heavy)
   - Letter spacing (tight vs loose)
   - Text transforms (uppercase vs normal)

3. **Visual Style**
   - Border radius (sharp vs rounded)
   - Card treatments (flat, elevated, bordered, glass)
   - Shadow styles and intensity
   - Background treatments

4. **Animations**
   - Speed (slow/elegant vs fast/energetic)
   - Easing functions (subtle vs bouncy)
   - Hover effects (scale, rotate, lift)

5. **Color Psychology**
   - Modern Minimalist: Calm, professional blues
   - Bold & Dynamic: Energetic oranges and reds
   - Classic Elegant: Sophisticated browns and golds
   - Dark & Intense: Edgy neon greens on dark
   - Vibrant & Playful: Fun multi-color gradients

---

## Customizing Themes

### Adding a New Theme

1. Open `src/config/themes.ts`
2. Add a new theme object to `AVAILABLE_THEMES`
3. Update the `ThemeVariant` type
4. Add theme-specific CSS in `src/app/globals.css`

Example:
```typescript
'futuristic-tech': {
  id: 'futuristic-tech',
  name: 'Futuristic Tech',
  description: 'Sci-fi inspired design',
  colors: { ... },
  layout: { ... },
  typography: { ... },
  animations: { ... },
}
```

### Modifying Existing Themes

Edit the theme configuration in `src/config/themes.ts`:

```typescript
'modern-minimalist': {
  colors: {
    primary: '#YOUR_NEW_COLOR',  // Change colors
    ...
  },
  layout: {
    containerMaxWidth: '1600px', // Change layout
    ...
  },
  ...
}
```

---

## Technical Implementation

### Files Modified

1. **`src/config/themes.ts`** - Theme definitions
2. **`src/config/site-config.ts`** - Default theme selection
3. **`src/components/providers/theme-provider.tsx`** - Theme application logic
4. **`src/components/ui/theme-selector.tsx`** - UI for switching themes
5. **`src/app/globals.css`** - Theme-specific CSS classes
6. **`src/app/layout.tsx`** - Font loading for all themes

### How It Works

1. Theme data is stored in `AVAILABLE_THEMES` object
2. ThemeProvider applies theme properties to CSS custom properties
3. Body gets a class based on theme style (e.g., `theme-minimal`)
4. CSS rules target theme classes for specific styling
5. ThemeSelector component allows runtime switching

### CSS Custom Properties

Themes set the following CSS variables:
- `--primary`, `--secondary`, `--accent` (colors)
- `--container-max-width` (layout)
- `--section-spacing` (spacing)
- `--border-radius` (corners)
- `--heading-font`, `--body-font` (typography)
- `--heading-weight`, `--letter-spacing` (type details)

---

## Best Practices

### Choosing a Theme

Ask these questions:
1. Who is your target audience? (age, demographics)
2. What's your gym's personality? (bold, elegant, fun)
3. What type of training do you offer? (yoga vs crossfit)
4. What's your price point? (budget vs premium)

### Theme Consistency

Once you choose a theme:
- Use images that match the aesthetic
- Write copy that matches the tone
- Choose colors from the theme palette
- Maintain the visual language throughout

### Testing Themes

1. Try all 5 themes with your content
2. Get feedback from your target audience
3. Test on different devices and screen sizes
4. Consider accessibility (contrast, readability)

---

## Support & Questions

For questions about the theme system:
1. Check this guide first
2. Review the code in `src/config/themes.ts`
3. Look at CSS in `src/app/globals.css`
4. Test with the live theme switcher

---

## Summary

You now have **5 truly different website designs** in one codebase:
- ✅ Different layouts (boxed, full-width, centered)
- ✅ Different typography (serif, sans-serif, tech fonts)
- ✅ Different visual styles (minimal, bold, elegant, dark, playful)
- ✅ Different animations (slow, fast, bouncy, sharp)
- ✅ Different color palettes (blues, oranges, browns, neons, gradients)

Simply change the theme in config or use the UI switcher - your entire website transforms!
