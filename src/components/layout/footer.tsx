'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { siteConfig } from '@/config/site-config';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Programs', href: '#programs' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Blog', href: '#blog' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
];

const socialIcons = [
  { icon: 'mdi:facebook', href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: 'mdi:instagram', href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: 'mdi:twitter', href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: 'mdi:youtube', href: siteConfig.social.youtube, label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <Icon icon="mdi:dumbbell" className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">{siteConfig.name}</span>
            </div>
            <p className="text-muted-foreground mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                social.href && (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all transform hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon icon={social.icon} className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon icon="mdi:map-marker" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="text-sm text-muted-foreground">{siteConfig.contact.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon icon="mdi:phone" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">{siteConfig.contact.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon icon="mdi:email" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Built with ❤️ for fitness enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}
