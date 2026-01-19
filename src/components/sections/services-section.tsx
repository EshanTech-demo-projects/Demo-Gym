'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: 'mdi:dumbbell',
    title: 'Strength Training',
    description: 'Build muscle and increase strength with our comprehensive weightlifting programs and expert guidance.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: 'mdi:run',
    title: 'Cardio Fitness',
    description: 'Improve your cardiovascular health with our cutting-edge cardio equipment and HIIT classes.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'mdi:yoga',
    title: 'Yoga & Flexibility',
    description: 'Enhance your flexibility and find inner peace with our yoga and stretching programs.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'mdi:food-apple',
    title: 'Nutrition Coaching',
    description: 'Get personalized meal plans and nutrition advice to fuel your fitness journey.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'mdi:account-group',
    title: 'Group Classes',
    description: 'Join our energetic group classes including Zumba, Spinning, CrossFit, and more.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: 'mdi:account-tie',
    title: 'Personal Training',
    description: 'Work one-on-one with certified trainers for customized workouts and faster results.',
    color: 'from-red-500 to-pink-500',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
          <motion.span
            variants={fadeInUp}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Everything You Need to <span className="gradient-text">Succeed</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From strength training to nutrition coaching, we offer a complete range of services 
            to help you achieve your fitness goals.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group cursor-pointer border-2 hover:border-primary transition-all">
                <CardHeader>
                  <motion.div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon icon={service.icon} className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">Ready to get started?</p>
          <motion.button
            className="text-primary font-semibold text-lg hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Services →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
