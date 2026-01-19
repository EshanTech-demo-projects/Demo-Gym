import { SiteConfig } from './themes';

// This is your main site configuration - customize for each website
export const siteConfig: SiteConfig = {
  name: 'PowerFit Gym',
  description: 'Transform your body, transform your life. Join the ultimate fitness experience.',
  theme: 'layout-1-stacked', // Change to: 'layout-1-stacked' | 'layout-2-split' | 'layout-3-grid' | 'layout-4-diagonal'
  logo: '/images/logo.png',
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'info@powerfitgym.com',
    address: '123 Fitness Street, New York, NY 10001',
    whatsapp: '+15551234567',
  },
  social: {
    facebook: 'https://facebook.com/powerfitgym',
    instagram: 'https://instagram.com/powerfitgym',
    twitter: 'https://twitter.com/powerfitgym',
    youtube: 'https://youtube.com/powerfitgym',
  },
  features: {
    enableBlog: true,
    enableTestimonials: true,
    enableMap: true,
    enableVideo: true,
    enableBackgroundVideo: true,
  },
};

// Section configuration - enable/disable and reorder sections
export const sectionConfig = {
  hero: { enabled: true, order: 1 },
  about: { enabled: true, order: 2 },
  services: { enabled: true, order: 3 },
  programs: { enabled: true, order: 4 },
  testimonials: { enabled: true, order: 5 },
  pricing: { enabled: true, order: 6 },
  trainers: { enabled: true, order: 7 },
  blog: { enabled: true, order: 8 },
  cta: { enabled: true, order: 9 },
  contact: { enabled: true, order: 10 },
};

// Google Maps Configuration
export const mapConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  center: { lat: 40.7128, lng: -74.0060 }, // New York coordinates
  zoom: 15,
  placeId: '', // Your Google Place ID for reviews
};
