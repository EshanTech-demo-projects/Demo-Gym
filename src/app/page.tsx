'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { FloatingActions } from '@/components/ui/floating-actions';
import { siteConfig } from '@/config/site-config';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState(siteConfig.theme);

  useEffect(() => {
    // Listen for theme changes from body attribute
    const observer = new MutationObserver(() => {
      const theme = document.body.getAttribute('data-theme');
      if (theme) {
        setCurrentTheme(theme as any);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <LayoutWrapper currentTheme={currentTheme} />
      <Footer />
      <ScrollToTop />
      <FloatingActions />
    </main>
  );
}
