'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/ui/booking-modal';
import Link from 'next/link';
import { useState, use } from 'react';

const services = [
  {
    id: 'personal-training',
    icon: 'mdi:account-supervisor',
    title: 'Personal Training',
    shortDesc: 'One-on-one customized fitness coaching',
    fullDesc: 'Get personalized attention from our certified trainers who will create a custom workout plan tailored to your specific goals, fitness level, and schedule.',
    features: [
      'Customized workout plans',
      'Nutritional guidance',
      'Progress tracking & assessments',
      'Flexible scheduling',
      'Goal-oriented approach',
      'Injury prevention & recovery',
    ],
    pricing: 'From $60/session',
    duration: '60 minutes per session',
    included: ['Initial fitness assessment', 'Personalized workout plan', '24/7 text support', 'Monthly progress reviews'],
  },
  {
    id: 'group-classes',
    icon: 'mdi:account-group',
    title: 'Group Classes',
    shortDesc: 'High-energy group fitness sessions',
    fullDesc: 'Join our energetic group classes led by expert instructors. From HIIT to yoga, we offer diverse classes that build community while delivering results.',
    features: [
      'Variety of class types',
      'All fitness levels welcome',
      'Motivating environment',
      'Expert instruction',
      'Flexible scheduling',
      'Community support',
    ],
    pricing: 'Included in membership',
    duration: '45-60 minutes per class',
    included: ['Unlimited class access', 'Free trial class', 'Equipment provided', 'Schedule flexibility'],
  },
  {
    id: 'nutrition',
    icon: 'mdi:food-apple',
    title: 'Nutrition Counseling',
    shortDesc: 'Expert dietary guidance & meal planning',
    fullDesc: 'Work with certified nutritionists to develop sustainable eating habits that complement your fitness routine and help you achieve your health goals.',
    features: [
      'Personalized meal plans',
      'Macronutrient guidance',
      'Supplement recommendations',
      'Regular check-ins',
      'Recipe suggestions',
      'Lifestyle coaching',
    ],
    pricing: 'From $80/session',
    duration: '45 minutes per consultation',
    included: ['Initial nutrition assessment', 'Custom meal plan', 'Weekly adjustments', 'Shopping guides'],
  },
  {
    id: 'strength-training',
    icon: 'mdi:dumbbell',
    title: 'Strength Training',
    shortDesc: 'Build muscle & increase power',
    fullDesc: 'Access our comprehensive strength training area with free weights, machines, and functional training equipment. Perfect for building muscle and increasing overall strength.',
    features: [
      'Free weights & machines',
      'Olympic lifting platforms',
      'Functional training area',
      'Powerlifting equipment',
      'Expert supervision',
      'Progressive programs',
    ],
    pricing: 'Included in membership',
    duration: 'Unlimited access',
    included: ['Equipment orientation', 'Technique coaching', 'Workout templates', 'Progress tracking app'],
  },
  {
    id: 'cardio',
    icon: 'mdi:run',
    title: 'Cardio Training',
    shortDesc: 'Improve endurance & heart health',
    fullDesc: 'Our state-of-the-art cardio equipment and dedicated cardio area help you improve cardiovascular health, burn calories, and boost endurance.',
    features: [
      'Treadmills with virtual courses',
      'Rowing machines',
      'Stationary bikes',
      'Ellipticals',
      'Stair climbers',
      'Heart rate monitoring',
    ],
    pricing: 'Included in membership',
    duration: 'Unlimited access',
    included: ['Virtual training programs', 'Heart rate zone training', 'Entertainment screens', 'Towel service'],
  },
  {
    id: 'yoga-mindfulness',
    icon: 'mdi:yoga',
    title: 'Yoga & Mindfulness',
    shortDesc: 'Flexibility, balance & mental wellness',
    fullDesc: 'Enhance flexibility, reduce stress, and improve mind-body connection through our yoga and mindfulness programs led by certified instructors.',
    features: [
      'Multiple yoga styles',
      'Meditation sessions',
      'Breathing techniques',
      'Flexibility training',
      'Stress management',
      'Mindfulness practices',
    ],
    pricing: 'Included in membership',
    duration: '60-75 minutes per class',
    included: ['Yoga mats & props', 'All levels welcome', 'Specialized workshops', 'Online resources'],
  },
  {
    id: 'sports-performance',
    icon: 'mdi:trophy',
    title: 'Sports Performance',
    shortDesc: 'Athletic training & sports conditioning',
    fullDesc: 'Specialized training programs designed for athletes looking to enhance their performance in specific sports or improve overall athletic ability.',
    features: [
      'Sport-specific training',
      'Agility & speed work',
      'Plyometric training',
      'Power development',
      'Recovery protocols',
      'Performance testing',
    ],
    pricing: 'From $75/session',
    duration: '75 minutes per session',
    included: ['Athletic assessment', 'Customized program', 'Video analysis', 'Performance tracking'],
  },
  {
    id: 'recovery',
    icon: 'mdi:spa',
    title: 'Recovery & Wellness',
    shortDesc: 'Massage, sauna & recovery services',
    fullDesc: 'Optimize your recovery with our wellness services including massage therapy, sauna, cold plunge, and recovery equipment.',
    features: [
      'Sports massage therapy',
      'Infrared sauna',
      'Cold plunge therapy',
      'Compression therapy',
      'Foam rolling area',
      'Stretching guidance',
    ],
    pricing: 'From $40/session',
    duration: 'Varies by service',
    included: ['Sauna access', 'Recovery area', 'Wellness consultations', 'Package discounts'],
  },
];

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = services.find((s) => s.id === slug);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  if (!service) {
    return (
      <main className="min-h-screen pt-32 pb-20">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services">
            <Button variant="gradient" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Icon icon={service.icon} className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">{service.fullDesc}</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:currency-usd" className="h-5 w-5 text-primary" />
                <span>{service.pricing}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-outline" className="h-5 w-5 text-primary" />
                <span>{service.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon icon="mdi:check" className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">What&apos;s Included</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  {service.included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                      <Icon icon="mdi:check-circle" className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    onClick={() => setIsBookingModalOpen(true)}
                  >
                    <Icon icon="mdi:calendar" className="h-5 w-5 mr-2" />
                    Book Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of members already transforming their lives with {service.title}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Icon icon="mdi:email" className="h-5 w-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  <Icon icon="mdi:arrow-left" className="h-5 w-5 mr-2" />
                  All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceTitle={service.title}
      />
    </main>
  );
}
