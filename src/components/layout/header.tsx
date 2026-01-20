'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { siteConfig } from '@/config/site-config';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Programs', href: '/programs' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For home page, scroll to sections if on home page
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // For other pages, let Next.js handle routing
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border/50',
          isScrolled
            ? 'shadow-lg'
            : ''
        )}
        role="banner"
      >
      <nav className="container-custom px-3 sm:px-4 md:px-6 relative" aria-label="Main navigation">
        {/* Tagline Banner */}
        <div className="absolute -top-8 left-0 right-0 bg-primary/95 backdrop-blur-sm py-1.5 text-center hidden md:block">
          <p className="text-white text-xs font-medium tracking-wide">🔥 Your Transformation Starts Here - Join 5000+ Members Today!</p>
        </div>
        
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group flex-shrink-0" aria-label={`${siteConfig.name} home`}>
            <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform" aria-hidden="true">
              <Icon icon="mdi:dumbbell" className="h-4 w-4 sm:h-5 sm:w-5 md:h-7 md:w-7 text-white" />
            </div>
            <span className="text-sm sm:text-base md:text-2xl font-bold text-foreground md:gradient-text truncate">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <Link href="/contact">
              <Button 
                variant="gradient" 
                size="lg" 
                className="hidden md:inline-flex"
              >
                Join Now
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Icon
                icon={isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'}
                className="h-5 w-5 sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="lg:hidden absolute top-full left-0 right-0 py-4 border-t border-border bg-background backdrop-blur-xl shadow-2xl animate-fade-in"
          >
            <div className="container-custom px-4">
              <div className="flex flex-col gap-1" role="menu">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg"
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="w-full">
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="w-full mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Now - Get Started Today
                </Button>
              </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
