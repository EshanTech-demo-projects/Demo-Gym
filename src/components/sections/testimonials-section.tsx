'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { media } from '@/config/media';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Weight Loss Transformation',
    image: '/images/testimonial-1.jpg',
    rating: 5,
    text: 'I lost 30 pounds in 3 months! The trainers here are amazing and the community is so supportive. Best decision I ever made.',
  },
  {
    name: 'Michael Chen',
    role: 'Muscle Building',
    image: '/images/testimonial-2.jpg',
    rating: 5,
    text: 'The personalized training program helped me gain 15 pounds of muscle. The equipment is top-notch and the atmosphere is motivating.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Fitness Enthusiast',
    image: '/images/testimonial-3.jpg',
    rating: 5,
    text: 'This gym changed my life! The group classes are fun and challenging. I\'ve made great friends and I\'m in the best shape of my life.',
  },
  {
    name: 'David Williams',
    role: 'Marathon Runner',
    image: '/images/testimonial-4.jpg',
    rating: 5,
    text: 'The cardio programs and nutrition coaching helped me complete my first marathon. I couldn\'t have done it without this team!',
  },
  {
    name: 'Jessica Martinez',
    role: 'Yoga Practitioner',
    image: '/images/testimonial-5.jpg',
    rating: 5,
    text: 'The yoga classes here are incredible. I\'ve improved my flexibility and found inner peace. The instructors are knowledgeable and caring.',
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Our Members <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who transformed their lives with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto overflow-hidden"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            autoHeight
            watchOverflow
            grabCursor
            threshold={5}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Icon key={i} icon="mdi:star" className="h-5 w-5 text-yellow-500" />
                      ))}
                    </div>

                    {/* Quote */}
                    <Icon icon="mdi:format-quote-close" className="h-10 w-10 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden">
                        <Image
                          src={media.testimonials[index] || testimonial.image}
                          alt={`${testimonial.name} - ${testimonial.role} testimonial photo`}
                          fill
                          loading="lazy"
                          quality={85}
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '5000+', label: 'Happy Members' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '10+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.p
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
