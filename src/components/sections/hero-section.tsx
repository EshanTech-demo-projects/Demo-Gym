'use client';

import { motion, type Variants } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site-config';
import { media } from '@/config/media';
import dynamic from 'next/dynamic';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (Optional) */}
      {siteConfig.features.enableBackgroundVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={media.heroPoster}
            className="w-full h-full object-cover"
            aria-label="Background video showing gym training"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
            <track kind="captions" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Background Gradient */}
      {!siteConfig.features.enableBackgroundVideo && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient-x" />
      )}

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="container-custom relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm backdrop-blur-sm border border-primary/20">
            🔥 Transform Your Body Today
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Build Your <span className="gradient-text">Dream Body</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
        >
          Join the ultimate fitness experience with world-class trainers, 
          state-of-the-art equipment, and a community that inspires.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="gradient" size="xl" className="group">
            Start Your Journey
            <Icon icon="mdi:arrow-right" className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="group">
            <Icon icon="mdi:play-circle" className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Video
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { icon: 'mdi:account-group', value: '5000+', label: 'Happy Members' },
            { icon: 'mdi:dumbbell', value: '50+', label: 'Training Programs' },
            { icon: 'mdi:account-tie', value: '20+', label: 'Expert Trainers' },
            { icon: 'mdi:star', value: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon icon={stat.icon} className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Icon icon="mdi:chevron-down" className="h-10 w-10 text-primary" />
      </motion.div>
    </section>
  );
}
