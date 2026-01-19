# How to Use Your 5 Different Themes

## Quick Start (2 Minutes)

### Try All Themes Right Now:

1. **Start the server:**
   ```bash
   yarn dev
   ```

2. **Open in browser:**
   - Navigate to: http://localhost:3000

3. **See the magic:**
   - Look for the **"Themes"** button in the top-right corner (purple/colorful icon)
   - Click it to open the theme selector panel
   - Click on any of the 5 themes
   - Watch your entire website transform instantly!

---

## The 5 Themes You Can Choose From

### 🎨 Modern Minimalist
- **When to use:** Upscale studios, wellness centers
- **Visual:** Clean, spacious, professional
- **Colors:** Blue and teal
- **Best for:** Premium clientele

### 💥 Bold & Dynamic
- **When to use:** CrossFit, HIIT, sports training
- **Visual:** Energetic, full-width, powerful
- **Colors:** Orange and yellow
- **Best for:** Intense workouts

### 🏛️ Classic Elegant
- **When to use:** Established gyms, country clubs
- **Visual:** Traditional, refined, timeless
- **Colors:** Brown and gold
- **Best for:** Long-standing reputation

### ⚡ Dark & Intense
- **When to use:** 24hr gyms, urban spaces
- **Visual:** Dark, high-contrast, edgy
- **Colors:** Neon green on black
- **Best for:** Modern, tech-savvy crowd

### 🌈 Vibrant & Playful
- **When to use:** Family gyms, group fitness
- **Visual:** Colorful, fun, energetic
- **Colors:** Pink to purple gradient
- **Best for:** Community-focused

---

## Setting a Default Theme

Want one specific theme to load by default?

**Edit:** `src/config/site-config.ts`

```typescript
export const siteConfig: SiteConfig = {
  name: 'PowerFit Gym',
  description: 'Your gym description',
  theme: 'bold-dynamic', // 👈 Change this!
  // ...
};
```

**Available values:**
- `'modern-minimalist'`
- `'bold-dynamic'`
- `'classic-elegant'`
- `'dark-intense'`
- `'vibrant-playful'`

Save the file, and that theme will be the default.

---

## Customizing a Theme

Want to tweak colors or spacing for a theme?

**Edit:** `src/config/themes.ts`

Find the theme you want to customize:

```typescript
'bold-dynamic': {
  id: 'bold-dynamic',
  name: 'Bold & Dynamic',
  description: 'High-energy design with bold typography',
  
  colors: {
    primary: '#FF6B35',      // 👈 Change these colors
    primaryDark: '#E55527',
    secondary: '#F7931E',
    accent: '#FDC830',
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
  },
  
  layout: {
    style: 'bold',
    containerMaxWidth: '100%',     // 👈 Or change layout
    sectionSpacing: '0',
    borderRadius: '0',
    cardStyle: 'elevated',
  },
  
  // ... rest of config
}
```

Save and refresh to see your changes!

---

## Hiding the Theme Switcher

Don't want users to see the theme switcher?

**Edit:** `src/components/providers/theme-provider.tsx`

Comment out this line:

```typescript
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // ...
  
  return (
    <NextThemesProvider {...props}>
      {/* <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} /> */}
      {children}
    </NextThemesProvider>
  );
}
```

The theme selector button will disappear, but your default theme still applies.

---

## Creating Your Own Theme

Want a 6th theme? Follow these steps:

### Step 1: Add to themes.ts

```typescript
export type ThemeVariant = 
  | 'modern-minimalist' 
  | 'bold-dynamic' 
  | 'classic-elegant' 
  | 'dark-intense' 
  | 'vibrant-playful'
  | 'my-custom-theme';  // 👈 Add here

export const AVAILABLE_THEMES: Record<ThemeVariant, ThemeConfig> = {
  // ... existing themes ...
  
  'my-custom-theme': {
    id: 'my-custom-theme',
    name: 'My Custom Theme',
    description: 'My unique gym design',
    colors: {
      primary: '#YOUR_COLOR',
      primaryDark: '#YOUR_DARK_COLOR',
      secondary: '#YOUR_SECONDARY',
      accent: '#YOUR_ACCENT',
      gradient: 'linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%)',
    },
    layout: {
      style: 'custom',
      containerMaxWidth: '1500px',
      sectionSpacing: '6rem',
      borderRadius: '1rem',
      cardStyle: 'elevated',
    },
    typography: {
      headingFont: 'var(--font-inter)',
      bodyFont: 'var(--font-inter)',
      headingWeight: 700,
      letterSpacing: '0em',
    },
    animations: {
      enabled: true,
      speed: 'normal',
      style: 'smooth',
    },
  },
};
```

### Step 2: Add CSS (optional)

If you want special styling, add to `src/app/globals.css`:

```css
/* My Custom Theme */
.theme-custom {
  /* Your custom CSS rules */
}

.theme-custom h1, 
.theme-custom h2 {
  /* Custom heading styles */
}

.theme-custom .card {
  /* Custom card styles */
}
```

That's it! Your theme will now appear in the selector.

---

## Deploy Different Themes to Different Sites

Want to use different themes for different gym locations?

### Option 1: Environment Variable

**Add to `.env.local`:**
```bash
NEXT_PUBLIC_DEFAULT_THEME=bold-dynamic
```

**Update `site-config.ts`:**
```typescript
export const siteConfig: SiteConfig = {
  theme: (process.env.NEXT_PUBLIC_DEFAULT_THEME as ThemeVariant) || 'modern-minimalist',
  // ...
};
```

### Option 2: Build Multiple Versions

For Gym A (Modern):
```bash
yarn build
# Deploy to gym-a.com
```

Change theme in config.

For Gym B (Bold):
```bash
yarn build
# Deploy to gym-b.com
```

---

## Troubleshooting

### Theme not changing?
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear cache and reload
3. Check browser console for errors

### Theme selector not showing?
1. Make sure you're viewing the frontend at http://localhost:3000
2. Check that `ThemeSelector` is not commented out in `theme-provider.tsx`
3. Look in top-right corner (it's a floating button)

### Colors not applying?
1. Check `themes.ts` for valid hex colors
2. Verify HSL conversion is working
3. Check browser DevTools for CSS custom properties

### Fonts not loading?
1. Check `layout.tsx` imports
2. Verify Google Fonts are accessible
3. Check console for font loading errors

---

## What Each Theme Changes

When you switch themes, these elements transform:

### ✅ Colors
- Primary, secondary, accent colors
- Gradients and backgrounds
- Text colors and contrasts

### ✅ Layout
- Container widths
- Section spacing
- Card layouts and positioning

### ✅ Typography
- Font families
- Font weights
- Letter spacing
- Text transforms

### ✅ Visual Style
- Border radius
- Shadows and elevation
- Background treatments
- Card styles

### ✅ Animations
- Speed and timing
- Easing functions
- Hover effects
- Transitions

---

## Tips for Success

### Match Your Brand
- Choose colors that match your gym's identity
- Pick typography that reflects your personality
- Select animations that match your energy level

### Think About Your Audience
- Young, energetic? → Bold & Dynamic or Vibrant & Playful
- Professional, mature? → Modern Minimalist or Classic Elegant
- Tech-savvy, urban? → Dark & Intense

### Test Before Deciding
- Try all 5 themes with your actual content
- Show them to potential members
- Test on mobile and desktop
- Consider your competitors' sites

### Consistency is Key
- Once you pick a theme, stick with it
- Use colors from your theme palette
- Match your photography to the aesthetic
- Keep marketing materials consistent

---

## Need Help?

1. **Documentation:**
   - Read `THEMES_GUIDE.md` for detailed theme info
   - Check `THEME_COMPARISON.md` for side-by-side comparison

2. **Code Reference:**
   - Theme definitions: `src/config/themes.ts`
   - Theme application: `src/components/providers/theme-provider.tsx`
   - Theme CSS: `src/app/globals.css`
   - Theme selector UI: `src/components/ui/theme-selector.tsx`

3. **Quick Checks:**
   - Is the dev server running? `yarn dev`
   - Are you on the right page? http://localhost:3000
   - Did you save your changes?
   - Did you refresh the browser?

---

## Summary

**You now have 5 truly different website designs!**

1. ✅ Use the live switcher to preview all themes
2. ✅ Set your default theme in `site-config.ts`
3. ✅ Customize colors and layout in `themes.ts`
4. ✅ Hide the switcher if you don't need it
5. ✅ Create your own themes if you want more

**No more "same design, different colors" - these are 5 complete, unique designs!**

Start the dev server and click the theme button to see the magic! 🎨✨
