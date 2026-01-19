// Iconify configuration to bundle icons instead of loading from API
// This dramatically improves performance by eliminating external API calls

import type { IconifyJSON } from '@iconify/types';

// List of icons used in the project
export const bundledIcons = [
  // Header & Navigation
  'mdi:dumbbell',
  'mdi:menu',
  'mdi:close',
  'mdi:white-balance-sunny',
  'mdi:weather-night',
  
  // Hero Section
  'mdi:arrow-down',
  'mdi:play-circle',
  
  // Services Section
  'mdi:weight-lifter',
  'mdi:yoga',
  'mdi:run-fast',
  'mdi:food-apple',
  'mdi:dumbbell',
  'mdi:account-group',
  
  // Programs Section
  'mdi:arm-flex',
  'mdi:karate',
  'mdi:check-circle',
  
  // Testimonials
  'mdi:star',
  'mdi:format-quote-close',
  
  // Trainers
  'mdi:briefcase',
  'mdi:instagram',
  'mdi:facebook',
  
  // Blog
  'mdi:calendar',
  'mdi:clock-outline',
  'mdi:account-circle',
  'mdi:arrow-right',
  
  // Contact
  'mdi:map-marker',
  'mdi:phone',
  'mdi:email',
  'mdi:twitter',
  'mdi:youtube',
  'mdi:linkedin',
  
  // Footer
  'mdi:heart',
  
  // Floating Actions
  'mdi:whatsapp',
  'mdi:arrow-up',
];

// Iconify API configuration - disable API calls
export const iconifyConfig = {
  // Disable API loading
  disableCache: false,
  // Use local storage for offline
  localStorage: true,
  // Don't fetch from API
  fetchAPI: false,
};
