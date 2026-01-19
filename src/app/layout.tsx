import type { Metadata } from 'next';
import { Inter, Montserrat, Playfair_Display, Rajdhani, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { siteConfig } from '@/config/site-config';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-rajdhani',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourgymdomain.com'),
  title: {
    default: `${siteConfig.name} - Premium Fitness Center & Personal Training`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Transform your fitness journey at PowerFit Gym. Offering personal training, group classes, state-of-the-art equipment, nutrition guidance, and a supportive community. Join 5000+ members achieving their goals today!',
  keywords: [
    'gym near me',
    'fitness center',
    'personal training',
    'workout classes',
    'gym membership',
    'strength training',
    'cardio workout',
    'yoga classes',
    'fitness coaching',
    'weight loss program',
    'muscle building',
    'group fitness',
    'powerfit gym',
    '24 hour gym',
    'best gym',
    'affordable gym membership',
    'certified personal trainers',
    'nutrition counseling',
    'fitness transformation',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: `${siteConfig.name} - Transform Your Body & Mind`,
    description: 'Join 5000+ members at PowerFit Gym. Premium equipment, expert trainers, flexible memberships. Start your fitness transformation today!',
    siteName: siteConfig.name,
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} - Premium Fitness Center`,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Your Fitness Transformation Starts Here`,
    description: 'Premium gym with expert trainers, modern equipment & supportive community. Join 5000+ members achieving their fitness goals!',
    creator: '@yourgymhandle',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteConfig.name,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndFitnessClub',
    name: siteConfig.name,
    description: siteConfig.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourgymdomain.com',
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressCountry: 'US',
    },
    image: '/og-image.jpg',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '05:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '07:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${rajdhani.variable} ${poppins.variable}`}>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
