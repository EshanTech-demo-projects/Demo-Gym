'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { media } from '@/config/media';

const trainers = [
  {
    name: 'John Anderson',
    specialty: 'Strength & Conditioning',
    image: '/images/trainer-1.jpg',
    experience: '10+ years',
    certifications: ['NASM-CPT', 'CSCS'],
    social: {
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Sarah Mitchell',
    specialty: 'Yoga & Flexibility',
    image: '/images/trainer-2.jpg',
    experience: '8+ years',
    certifications: ['RYT-500', 'NASM-CPT'],
    social: {
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Mike Thompson',
    specialty: 'Weight Loss Coach',
    image: '/images/trainer-3.jpg',
    experience: '12+ years',
    certifications: ['ACE-CPT', 'Nutrition Specialist'],
    social: {
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Emily Carter',
    specialty: 'CrossFit & HIIT',
    image: '/images/trainer-4.jpg',
    experience: '6+ years',
    certifications: ['CF-L2', 'NASM-CPT'],
    social: {
      instagram: '#',
      facebook: '#',
    },
  },
];

export function TrainersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="trainers" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet Our Expert <span className="gradient-text">Trainers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our certified trainers are dedicated to helping you achieve your fitness goals with personalized guidance.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={media.trainers[index] || trainer.image}
                    alt={`${trainer.name} - ${trainer.specialty} specialist with ${trainer.experience} experience`}
                    fill
                    loading="lazy"
                    unoptimized
                    quality={85}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-3 mb-3">
                        <a
                          href={trainer.social.instagram}
                          className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary flex items-center justify-center transition-colors"
                        >
                          <Icon icon="mdi:instagram" className="h-5 w-5 text-white" />
                        </a>
                        <a
                          href={trainer.social.facebook}
                          className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary flex items-center justify-center transition-colors"
                        >
                          <Icon icon="mdi:facebook" className="h-5 w-5 text-white" />
                        </a>
                      </div>
                      <p className="text-white/80 text-sm">
                        {trainer.certifications.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-primary font-semibold mb-2">{trainer.specialty}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon icon="mdi:briefcase" className="h-4 w-4" />
                    <span>{trainer.experience} experience</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
