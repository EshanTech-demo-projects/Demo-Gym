export type ThemeVariant = 'layout-1-stacked' | 'layout-2-split' | 'layout-3-grid' | 'layout-4-diagonal';

export interface ThemeConfig {
  id: ThemeVariant;
  name: string;
  description: string;
  layoutType: 'stacked' | 'split' | 'grid' | 'diagonal';
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  layout: {
    style: 'minimal' | 'bold' | 'classic' | 'dark' | 'playful';
    containerMaxWidth: string;
    sectionSpacing: string;
    borderRadius: string;
    cardStyle: 'flat' | 'elevated' | 'bordered' | 'gradient' | 'glass';
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    headingWeight: number;
    letterSpacing: string;
  };
  animations: {
    enabled: boolean;
    speed: 'slow' | 'normal' | 'fast';
    style: 'subtle' | 'smooth' | 'bouncy' | 'sharp';
  };
}

export const AVAILABLE_THEMES: Record<ThemeVariant, ThemeConfig> = {
  'layout-1-stacked': {
    id: 'layout-1-stacked',
    name: 'Traditional Stacked',
    description: 'Full-width sections stacked vertically - classic gym layout',
    layoutType: 'stacked',
    colors: {
      primary: '#FF6B35',
      primaryDark: '#E55527',
      secondary: '#F7931E',
      accent: '#FDC830',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    },
    layout: {
      style: 'minimal',
      containerMaxWidth: '1200px',
      sectionSpacing: '6rem',
      borderRadius: '0.5rem',
      cardStyle: 'flat',
    },
    typography: {
      headingFont: 'var(--font-inter)',
      bodyFont: 'var(--font-inter)',
      headingWeight: 700,
      letterSpacing: '-0.02em',
    },
    animations: {
      enabled: true,
      speed: 'normal',
      style: 'subtle',
    },
  },
  'layout-2-split': {
    id: 'layout-2-split',
    name: 'Split Screen',
    description: '50/50 image-text layouts alternating on each section',
    layoutType: 'split',
    colors: {
      primary: '#2C3E50',
      primaryDark: '#1A252F',
      secondary: '#3498DB',
      accent: '#1ABC9C',
      gradient: 'linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)',
    },
    layout: {
      style: 'bold',
      containerMaxWidth: '100%',
      sectionSpacing: '0',
      borderRadius: '0',
      cardStyle: 'elevated',
    },
    typography: {
      headingFont: 'var(--font-montserrat)',
      bodyFont: 'var(--font-inter)',
      headingWeight: 800,
      letterSpacing: '-0.01em',
    },
    animations: {
      enabled: true,
      speed: 'fast',
      style: 'sharp',
    },
  },
  'layout-3-grid': {
    id: 'layout-3-grid',
    name: 'Grid Modern',
    description: 'Multi-column grid layouts with card-based design',
    layoutType: 'grid',
    colors: {
      primary: '#8B4513',
      primaryDark: '#6B3410',
      secondary: '#DAA520',
      accent: '#CD853F',
      gradient: 'linear-gradient(135deg, #8B4513 0%, #DAA520 100%)',
    },
    layout: {
      style: 'classic',
      containerMaxWidth: '1400px',
      sectionSpacing: '5rem',
      borderRadius: '1rem',
      cardStyle: 'bordered',
    },
    typography: {
      headingFont: 'var(--font-playfair)',
      bodyFont: 'var(--font-inter)',
      headingWeight: 700,
      letterSpacing: '0.01em',
    },
    animations: {
      enabled: true,
      speed: 'normal',
      style: 'smooth',
    },
  },
  'layout-4-diagonal': {
    id: 'layout-4-diagonal',
    name: 'Diagonal Dynamic',
    description: 'Angled sections with diagonal dividers and skewed elements',
    layoutType: 'diagonal',
    colors: {
      primary: '#00FF88',
      primaryDark: '#00CC6A',
      secondary: '#FF00FF',
      accent: '#00E5FF',
      gradient: 'linear-gradient(135deg, #00FF88 0%, #00E5FF 100%)',
    },
    layout: {
      style: 'dark',
      containerMaxWidth: '1600px',
      sectionSpacing: '8rem',
      borderRadius: '0',
      cardStyle: 'glass',
    },
    typography: {
      headingFont: 'var(--font-rajdhani)',
      bodyFont: 'var(--font-inter)',
      headingWeight: 700,
      letterSpacing: '0.05em',
    },
    animations: {
      enabled: true,
      speed: 'fast',
      style: 'sharp',
    },
  },
};

export interface SiteConfig {
  name: string;
  description: string;
  theme: ThemeVariant;
  logo: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp?: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
  features: {
    enableBlog: boolean;
    enableTestimonials: boolean;
    enableMap: boolean;
    enableVideo: boolean;
    enableBackgroundVideo: boolean;
  };
}
