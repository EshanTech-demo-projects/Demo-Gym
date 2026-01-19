'use client';

import { siteConfig } from '@/config/site-config';
import { AVAILABLE_THEMES } from '@/config/themes';
import { HeroSection } from './sections/hero-section';
import { AboutSection } from './sections/about-section';
import { ServicesSection } from './sections/services-section';
import { ProgramsSection } from './sections/programs-section';
import { TestimonialsSection } from './sections/testimonials-section';
import { PricingSection } from './sections/pricing-section';
import { TrainersSection } from './sections/trainers-section';
import { BlogSection } from './sections/blog-section';
import { CTASection } from './sections/cta-section';
import { ContactSection } from './sections/contact-section';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { media } from '@/config/media';

interface LayoutWrapperProps {
  currentTheme: string;
}

export function LayoutWrapper({ currentTheme }: LayoutWrapperProps) {
  const theme = AVAILABLE_THEMES[currentTheme as keyof typeof AVAILABLE_THEMES];
  
  if (!theme) {
    return <DefaultLayout />;
  }

  switch (theme.layoutType) {
    case 'stacked':
      return <StackedLayout />;
    case 'split':
      return <SplitLayout />;
    case 'grid':
      return <GridLayout />;
    case 'diagonal':
      return <DiagonalLayout />;
    default:
      return <DefaultLayout />;
  }
}

// Layout 1: Traditional Stacked - Full-width sections stacked vertically
function StackedLayout() {
  return (
    <div className="layout-stacked overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProgramsSection />
      <TestimonialsSection />
      <PricingSection />
      <TrainersSection />
      {siteConfig.features.enableBlog && <BlogSection />}
      <CTASection />
      <ContactSection />
    </div>
  );
}

// Layout 2: Split Screen - 50/50 layouts alternating sides
function SplitLayout() {
  return (
    <div className="layout-split overflow-hidden">
      {/* Desktop split hero (web view) */}
      <section className="grid lg:grid-cols-2 min-h-[60vh] lg:min-h-[85vh]">
        {/* Left: content */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-16 bg-background">
          <div className="max-w-xl w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Your <span className="gradient-text">Dream Body</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8">
              Join the ultimate fitness experience with world-class trainers, state-of-the-art equipment,
              and a community that inspires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="group">
                Start Your Journey
                <Icon icon="mdi:arrow-right" className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Icon icon="mdi:play-circle" className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Video
              </Button>
            </div>
            {/* Subtle stats for balance on desktop */}
            <div className="hidden lg:grid grid-cols-3 gap-6 mt-10">
              {[
                { icon: 'mdi:account-group', value: '5K+', label: 'Members' },
                { icon: 'mdi:dumbbell', value: '50+', label: 'Programs' },
                { icon: 'mdi:star', value: '4.9/5', label: 'Rating' },
              ].map((stat, i) => (
                <div key={i} className="glass p-4 rounded-xl text-center">
                  <Icon icon={stat.icon} className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right: image/gradient visual */}
        <div className="relative hidden lg:block">
          <Image
            src={media.heroPoster}
            alt="Gym training visual"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/0 via-background/10 to-background/20" />
        </div>
      </section>
      <AboutSection />
      <ServicesSection />
      <ProgramsSection />
      <TestimonialsSection />
      <PricingSection />
      <TrainersSection />
      {siteConfig.features.enableBlog && <BlogSection />}
      <CTASection />
      <ContactSection />
    </div>
  );
}

// Layout 3: Grid Modern - Multi-column grid-based
function GridLayout() {
  return (
    <div className="layout-grid overflow-hidden">
      {/* Render core sections directly to avoid conflicting wrappers */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProgramsSection />
      <TestimonialsSection />
      <PricingSection />
      <TrainersSection />
      {siteConfig.features.enableBlog && <BlogSection />}
      <CTASection />
      <ContactSection />
    </div>
  );
}

// Layout 4: Diagonal - Angled sections with skewed elements
function DiagonalLayout() {
  return (
    <div className="layout-diagonal overflow-hidden">
      <HeroSection />
      
      {/* Diagonal about section */}
      <section className="relative py-32 bg-primary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent transform -skew-y-3"></div>
        <div className="relative container mx-auto px-4">
          <AboutSection />
        </div>
      </section>

      {/* Angled services */}
      <section className="relative py-32 bg-secondary/10">
        <div className="absolute inset-0 bg-gradient-to-l from-secondary/30 to-transparent transform skew-y-3"></div>
        <div className="relative container mx-auto px-4">
          <ServicesSection />
        </div>
      </section>

      {/* Diagonal divider */}
      <div className="h-32 bg-gradient-to-r from-primary to-secondary transform -skew-y-3 origin-top-left"></div>

      <div className="bg-primary/5 py-16">
        <ProgramsSection />
      </div>

      {/* Angled testimonials */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -skew-y-2"></div>
        <div className="relative">
          <TestimonialsSection />
        </div>
      </section>

      <PricingSection />
      
      {/* Diagonal trainers */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 transform skew-y-2"></div>
        <div className="relative">
          <TrainersSection />
        </div>
      </section>

      {siteConfig.features.enableBlog && <BlogSection />}
      <CTASection />
      <ContactSection />
    </div>
  );
}


// Default fallback
function DefaultLayout() {
  return <StackedLayout />;
}
