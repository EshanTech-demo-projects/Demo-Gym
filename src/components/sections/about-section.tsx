'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { media } from '@/config/media';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-muted/30 overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Images */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative h-72 sm:h-80 md:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={media.about.main}
                alt="Professional gym facility with modern equipment and training area"
                fill
                priority
                quality={85}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <motion.div
              className="hidden sm:block absolute bottom-4 right-4 sm:bottom-2 sm:right-2 md:-bottom-6 md:-right-6 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-background"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Image
                src={media.about.secondary}
                alt="Personal trainer helping client with workout technique"
                fill
                loading="lazy"
                quality={85}
                className="object-cover"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 256px"
              />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              className="hidden sm:block absolute top-4 left-4 sm:-top-2 sm:-left-2 md:-top-6 md:-left-6 glass p-4 sm:p-5 md:p-6 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">10+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Where <span className="gradient-text">Fitness</span> Meets Lifestyle
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              We&apos;re more than just a gym – we&apos;re a community dedicated to helping you achieve your 
              fitness goals. With state-of-the-art equipment, expert trainers, and a motivating 
              environment, we provide everything you need to transform your body and mind.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4 mb-8">
              {[
                { icon: 'mdi:check-circle', text: 'Expert certified trainers' },
                { icon: 'mdi:check-circle', text: 'Modern equipment & facilities' },
                { icon: 'mdi:check-circle', text: 'Personalized training programs' },
                { icon: 'mdi:check-circle', text: 'Nutrition & wellness guidance' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon icon={item.icon} className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button variant="gradient" size="lg">
                Learn More About Us
                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
