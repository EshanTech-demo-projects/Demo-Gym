'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig, mapConfig } from '@/config/site-config';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 px-4">
            Start Your <span className="gradient-text">Fitness Journey</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Have questions? We&apos;re here to help. Reach out and let&apos;s make your fitness goals a reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>

              {/* Contact Cards */}
              <div className="space-y-3 md:space-y-4">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon icon="mdi:map-marker" className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-sm md:text-base">Address</p>
                      <p className="text-muted-foreground text-xs md:text-base">{siteConfig.contact.address}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon icon="mdi:phone" className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-sm md:text-base">Phone</p>
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon icon="mdi:email" className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="font-semibold mb-1 text-sm md:text-base">Email</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-base break-all">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: 'mdi:facebook', href: siteConfig.social.facebook, label: 'Facebook' },
                  { icon: 'mdi:instagram', href: siteConfig.social.instagram, label: 'Instagram' },
                  { icon: 'mdi:twitter', href: siteConfig.social.twitter, label: 'Twitter' },
                  { icon: 'mdi:youtube', href: siteConfig.social.youtube, label: 'YouTube' },
                ].map((social) => (
                  social.href && (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all transform hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <Icon icon={social.icon} className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </a>
                  )
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your fitness goals..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" variant="gradient" size="lg" className="w-full">
                    Send Message
                    <Icon icon="mdi:send" className="h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map */}
        {/* {siteConfig.features.enableMap && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="overflow-hidden">
              <div className="h-[400px] bg-muted flex items-center justify-center">
                <div className="text-center">
                  <Icon icon="mdi:map-marker" className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Google Maps integration (Add API key in .env.local)
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )} */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="overflow-hidden">
            <div className="w-full">
              <div className="embed-map-responsive">
                <div className="embed-map-container">
                  <iframe 
                    className="embed-map-frame" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=beeramguda%20shiva&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                    title="Gym Location Map"
                  />
                </div>
                <style>{`
                  .embed-map-responsive {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: 56.25%;
                  }
                  .embed-map-container {
                    overflow: hidden;
                    background: none !important;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                  }
                  .embed-map-frame {
                    width: 100% !important;
                    height: 100% !important;
                    position: absolute;
                    top: 0;
                    left: 0;
                  }
                `}</style>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
