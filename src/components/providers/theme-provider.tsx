'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site-config';
import { AVAILABLE_THEMES, type ThemeVariant } from '@/config/themes';
import { ThemeSelector } from '@/components/ui/theme-selector';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>(siteConfig.theme);

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const applyTheme = (themeId: ThemeVariant) => {
    const theme = AVAILABLE_THEMES[themeId];
    if (!theme) return;
    
    // Convert hex to HSL for CSS variables
    const hexToHSL = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!result) return '0 0% 0%';

      let r = parseInt(result[1], 16) / 255;
      let g = parseInt(result[2], 16) / 255;
      let b = parseInt(result[3], 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
          case g: h = ((b - r) / d + 2) / 6; break;
          case b: h = ((r - g) / d + 4) / 6; break;
        }
      }
      return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
    };
    
    // Apply colors
    document.documentElement.style.setProperty('--primary', hexToHSL(theme.colors.primary));
    document.documentElement.style.setProperty('--secondary', hexToHSL(theme.colors.secondary));
    document.documentElement.style.setProperty('--accent', hexToHSL(theme.colors.accent));
    
    // Apply layout styles
    document.documentElement.style.setProperty('--container-max-width', theme.layout.containerMaxWidth);
    document.documentElement.style.setProperty('--section-spacing', theme.layout.sectionSpacing);
    document.documentElement.style.setProperty('--border-radius', theme.layout.borderRadius);
    
    // Apply typography
    document.documentElement.style.setProperty('--heading-font', theme.typography.headingFont);
    document.documentElement.style.setProperty('--body-font', theme.typography.bodyFont);
    document.documentElement.style.setProperty('--heading-weight', theme.typography.headingWeight.toString());
    document.documentElement.style.setProperty('--letter-spacing', theme.typography.letterSpacing);
    
    // Apply theme class to body
    document.body.className = `theme-${theme.layout.style} layout-${theme.layoutType}`;
    document.body.setAttribute('data-theme', themeId);
    document.body.setAttribute('data-layout', theme.layoutType);
  };

  const handleThemeChange = (newTheme: ThemeVariant) => {
    setCurrentTheme(newTheme);
  };

  return (
    <NextThemesProvider {...props}>
      <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      {children}
    </NextThemesProvider>
  );
}
