'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section - Clean & Professional */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background - More Visible */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/videos/gym-setup-sample.mp4" type="video/mp4" />
          </video>
          {/* Light Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 px-4 py-20">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Clean Badge */}
            <motion.div variants={scaleIn} className="mb-10">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-xl">
                <Icon icon="mdi:trophy-variant" className="h-6 w-6 text-yellow-400" />
                <span className="text-white font-semibold text-sm">Award Winning Fitness Center</span>
                <div className="h-4 w-px bg-white/30" />
                <Icon icon="mdi:star" className="h-5 w-5 text-orange-400" />
                <span className="text-white font-semibold text-sm">5,000+ Members</span>
              </div>
            </motion.div>

            {/* Main Heading - Balanced Typography */}
            <motion.div variants={fadeInUp} className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                <span className="block text-white mb-4">Transform Your</span>
                <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                  Body & Life
                </span>
              </h1>
            </motion.div>

            {/* Subheading - Lighter Weight */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto font-normal leading-relaxed"
            >
              Join our community of champions. Expert trainers, premium equipment, and proven results.
            </motion.p>

            {/* CTA Buttons - Cleaner Design */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="text-lg px-12 py-7 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 shadow-2xl w-full sm:w-auto rounded-xl font-semibold"
                  >
                    <Icon icon="mdi:lightning-bolt" className="h-6 w-6 mr-3" />
                    Start Free Trial
                    <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-3" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/programs">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-12 py-7 border-2 border-white/50 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 w-full sm:w-auto rounded-xl font-semibold"
                  >
                    <Icon icon="mdi:play-circle" className="h-6 w-6 mr-3" />
                    Explore Programs
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats Cards - Clean & Minimal */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {[
                { value: '5,000+', label: 'Active Members', icon: 'mdi:account-group' },
                { value: '20+', label: 'Expert Trainers', icon: 'mdi:medal' },
                { value: '50+', label: 'Weekly Classes', icon: 'mdi:calendar-star' },
                { value: '98%', label: 'Success Rate', icon: 'mdi:trophy-award' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all"
                >
                  <Icon icon={stat.icon} className="h-10 w-10 text-orange-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Simple Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-white/80">
            <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
            <Icon icon="mdi:chevron-down" className="h-8 w-8" />
          </div>
        </motion.div>
      </section>

      {/* Featured Services - Clean Design */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon icon="mdi:star-four-points" className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Elite Fitness <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your body with our comprehensive suite of premium services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'mdi:account-tie', title: 'Personal Training', desc: 'One-on-one coaching with elite trainers', slug: 'personal-training', gradient: 'from-red-500 to-pink-600' },
              { icon: 'mdi:account-group', title: 'Group Classes', desc: 'High-energy group sessions', slug: 'group-classes', gradient: 'from-orange-500 to-yellow-600' },
              { icon: 'mdi:food-apple', title: 'Nutrition Plans', desc: 'Custom meal planning & guidance', slug: 'nutrition', gradient: 'from-green-500 to-emerald-600' },
              { icon: 'mdi:yoga', title: 'Yoga & Wellness', desc: 'Mind-body balance training', slug: 'yoga-mindfulness', gradient: 'from-purple-500 to-pink-600' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Card className="p-8 h-full hover:shadow-xl transition-all border-2 hover:border-primary/50 group">
                    <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon icon={service.icon} className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.desc}</p>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      <span>Learn More</span>
                      <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button variant="outline" size="lg" className="px-10 py-6 text-lg border-2 rounded-xl font-semibold">
                View All Services
                <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned Professional Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container-custom px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold text-sm mb-6">
              <Icon icon="mdi:shield-star" className="h-5 w-5" />
              Why Choose PowerFit
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Where Champions <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Are Made
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the difference with cutting-edge facilities, world-class trainers, and a community that pushes you to greatness
            </p>
          </motion.div>

          {/* Feature Grid - Professional Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { 
                icon: 'mdi:trophy-award', 
                title: 'Award-Winning', 
                desc: '#1 Fitness Center 2026',
                gradient: 'from-yellow-500 to-orange-500',
                stat: '50+'
              },
              { 
                icon: 'mdi:account-group', 
                title: 'Expert Trainers', 
                desc: 'Certified Professionals',
                gradient: 'from-orange-500 to-red-500',
                stat: '20+'
              },
              { 
                icon: 'mdi:clock-time-four', 
                title: 'Open 24/7', 
                desc: 'Train On Your Schedule',
                gradient: 'from-primary to-secondary',
                stat: '24/7'
              },
              { 
                icon: 'mdi:chart-line', 
                title: 'Success Rate', 
                desc: 'Members Achieve Goals',
                gradient: 'from-green-500 to-emerald-600',
                stat: '98%'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="p-8 h-full hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border-2 hover:border-orange-500/50 group relative overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon icon={feature.icon} className="h-8 w-8 text-white" />
                    </div>

                    {/* Stat */}
                    <div className={`text-5xl font-bold mb-3 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.stat}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/about">
              <Button variant="default" size="lg" className="px-10 py-7 text-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-2xl shadow-orange-500/30 group">
                Discover Our Story
                <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Training Programs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured programs designed for every fitness level and goal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Beginner Kickstart', duration: '4 Weeks', desc: 'Perfect for fitness newcomers', icon: 'mdi:star' },
              { title: 'Weight Loss Challenge', duration: '12 Weeks', desc: 'Comprehensive fat loss program', icon: 'mdi:fire' },
              { title: 'Muscle Building', duration: '16 Weeks', desc: 'Advanced strength training', icon: 'mdi:dumbbell' },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all group cursor-pointer">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon icon={program.icon} className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.desc}</p>
                  <Link href="/programs">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      View Details
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/programs">
              <Button variant="gradient" size="lg">
                Explore All Programs
                <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Preview - Premium Design */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="container-custom px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-600 dark:text-green-400 font-semibold text-sm mb-6">
              <Icon icon="mdi:heart" className="h-5 w-5" />
              Success Stories
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Transformations That <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Inspire Greatness
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real people, real results, real commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              { 
                name: 'Sarah Johnson', 
                role: 'Marketing Executive',
                result: 'Lost 30 lbs in 3 months', 
                quote: 'PowerFit changed my life! The trainers are incredibly supportive and the community is amazing.',
                rating: 5,
                image: 'mdi:account-circle'
              },
              { 
                name: 'Mike Williams', 
                role: 'Software Engineer',
                result: 'Gained 15 lbs muscle mass', 
                quote: 'Best investment I\'ve ever made. The personal training sessions are worth every penny.',
                rating: 5,
                image: 'mdi:account-circle'
              },
              { 
                name: 'Emily Davis', 
                role: 'Entrepreneur',
                result: 'Completed first marathon', 
                quote: 'From couch to marathon! This gym gave me the confidence and strength to achieve my dreams.',
                rating: 5,
                image: 'mdi:account-circle'
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="p-8 h-full hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 border-2 hover:border-green-500/50 group relative overflow-hidden">
                  {/* Background shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} icon="mdi:star" className="h-6 w-6 text-yellow-500" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg mb-8 leading-relaxed text-foreground/90 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-6">
                      <Icon icon="mdi:trophy" className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                        {testimonial.result}
                      </span>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Icon icon={testimonial.image} className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/about">
              <Button variant="outline" size="lg" className="px-10 py-7 text-lg border-2 hover:border-green-500/50 hover:bg-green-500/5 group">
                Read More Success Stories
                <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium Features Showcase - New Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/50">
        <div className="container-custom px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
              <Icon icon="mdi:star-circle" className="h-5 w-5" />
              Premium Amenities
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-primary via-secondary to-pink-600 bg-clip-text text-transparent">
                Under One Roof
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'mdi:weight-lifter',
                title: 'Strength Zone',
                desc: 'Premium equipment from leading brands',
                features: ['Free Weights', 'Power Racks', 'Olympic Platforms']
              },
              {
                icon: 'mdi:run-fast',
                title: 'Cardio Studio',
                desc: 'High-tech cardio equipment with entertainment',
                features: ['Treadmills', 'Ellipticals', 'Rowing Machines']
              },
              {
                icon: 'mdi:meditation',
                title: 'Wellness Center',
                desc: 'Recovery and relaxation facilities',
                features: ['Sauna', 'Steam Room', 'Massage Therapy']
              },
              {
                icon: 'mdi:food-variant',
                title: 'Nutrition Bar',
                desc: 'Healthy post-workout refreshments',
                features: ['Protein Shakes', 'Smoothies', 'Healthy Snacks']
              },
              {
                icon: 'mdi:account-supervisor',
                title: 'Group Classes',
                desc: 'Over 50 weekly classes included',
                features: ['Yoga', 'HIIT', 'Spin Classes']
              },
              {
                icon: 'mdi:locker',
                title: 'Premium Lockers',
                desc: 'Spacious changing rooms and amenities',
                features: ['Day Lockers', 'Private Showers', 'Towel Service']
              },
            ].map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon icon={amenity.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {amenity.desc}
                  </p>
                  <ul className="space-y-2">
                    {amenity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon icon="mdi:check-circle" className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced Premium Design */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container-custom px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm">
                <Icon icon="mdi:lightning-bolt" className="h-5 w-5" />
                Limited Time Offer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Your Transformation
              <br />
              Starts Right Now
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed"
            >
              Join 5,000+ members who&apos;ve transformed their lives. Get your first month FREE when you sign up today!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/contact">
                <Button size="lg" className="text-lg px-12 py-8 bg-white text-orange-600 hover:bg-gray-100 shadow-2xl shadow-black/20 w-full sm:w-auto group">
                  <Icon icon="mdi:calendar-check" className="h-6 w-6 mr-3" />
                  Claim Your Free Month
                  <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="text-lg px-12 py-8 border-2 border-white text-white hover:bg-white/20 backdrop-blur-md w-full sm:w-auto group">
                  <Icon icon="mdi:ticket-percent" className="h-6 w-6 mr-3" />
                  View All Plans
                </Button>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-white/20"
            >
              {[
                { icon: 'mdi:shield-check', text: 'No Contract Required' },
                { icon: 'mdi:cash-refund', text: '30-Day Money Back' },
                { icon: 'mdi:account-cancel', text: 'Cancel Anytime' },
                { icon: 'mdi:credit-card-lock', text: 'Secure Payment' },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon icon={badge.icon} className="h-6 w-6 opacity-90" />
                  <span className="text-sm md:text-base font-medium opacity-90">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}