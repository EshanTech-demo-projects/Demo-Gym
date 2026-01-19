'use client';

import { motion, type Variants } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site-config';
import { media } from '@/config/media';

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
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
      )}

      {!siteConfig.features.enableBackgroundVideo && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient-x" />
      )}

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 md:top-20 left-5 md:left-10 w-40 h-40 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-52 h-52 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl"
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

      <motion.div
        className="container-custom relative z-10 text-center px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="mb-4 md:mb-6">
          <span className="inline-block px-4 py-2 md:px-6 md:py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs md:text-sm backdrop-blur-sm border border-primary/20">
            🔥 Your Transformation Starts Here
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight px-4"
        >
          Transform Your Body, <span className="gradient-text block mt-2">Elevate Your Life</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Join thousands of members achieving their fitness goals with world-class trainers, cutting-edge equipment, and a supportive community that motivates you every step.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
        >
          <Button variant="gradient" size="xl" className="group w-full sm:w-auto min-w-[200px]">
            Get Started Today
            <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="group w-full sm:w-auto min-w-[200px] bg-background/50 backdrop-blur-sm">
            <Icon icon="mdi:play-circle" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Tour Video
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20 max-w-4xl mx-auto px-4"
        >
          {[
            { icon: 'mdi:account-group', value: '5,000+', label: 'Happy Members' },
            { icon: 'mdi:dumbbell', value: '50+', label: 'Training Programs' },
            { icon: 'mdi:account-tie', value: '20+', label: 'Expert Trainers' },
            { icon: 'mdi:star', value: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-4 md:p-6 rounded-xl md:rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon icon={stat.icon} className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2 md:mb-3" />
              <p className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

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
