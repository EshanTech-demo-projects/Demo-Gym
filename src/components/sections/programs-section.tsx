'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { media } from '@/config/media';

const programs = [
  {
    title: 'Weight Loss Program',
    duration: '12 Weeks',
    icon: 'mdi:weight-lifter',
    image: '/images/program-1.jpg',
    description: 'Lose fat, build lean muscle, and transform your body with our comprehensive weight loss program.',
    features: ['Custom meal plans', 'Cardio training', 'Progress tracking'],
  },
  {
    title: 'Muscle Building',
    duration: '16 Weeks',
    icon: 'mdi:arm-flex',
    image: '/images/program-2.jpg',
    description: 'Pack on serious muscle mass with our proven strength training and nutrition protocols.',
    features: ['Strength training', 'Protein-rich diet', 'Supplement guidance'],
  },
  {
    title: 'Athletic Performance',
    duration: '8 Weeks',
    icon: 'mdi:run-fast',
    image: '/images/program-3.jpg',
    description: 'Enhance your athletic performance with sport-specific training and conditioning.',
    features: ['Speed training', 'Agility drills', 'Power development'],
  },
  {
    title: 'Functional Fitness',
    duration: '10 Weeks',
    icon: 'mdi:karate',
    image: '/images/program-4.jpg',
    description: 'Improve everyday movement patterns and overall functional strength.',
    features: ['Mobility work', 'Core stability', 'Balance training'],
  },
];

export function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="programs" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Training Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Achieve Your <span className="gradient-text">Goals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customized programs designed by expert trainers to help you reach your fitness goals faster.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={media.programs[index] || program.image}
                    alt={`${program.title} - ${program.description.substring(0, 60)}`}
                    fill
                    loading="lazy"
                    quality={85}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {program.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-full bg-primary/90 flex items-center justify-center">
                        <Icon icon={program.icon} className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon icon="mdi:check-circle" className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
