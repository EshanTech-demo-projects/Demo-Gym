'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { media } from '@/config/media';

const blogPosts = [
  {
    title: '10 Essential Exercises for Beginners',
    excerpt: 'Start your fitness journey with these fundamental exercises that will build a strong foundation.',
    image: '/images/blog-1.jpg',
    author: 'John Anderson',
    date: 'Jan 15, 2026',
    category: 'Training',
    readTime: '5 min read',
  },
  {
    title: 'The Ultimate Guide to Meal Prep',
    excerpt: 'Learn how to prepare healthy meals in advance and stick to your nutrition goals effortlessly.',
    image: '/images/blog-2.jpg',
    author: 'Sarah Mitchell',
    date: 'Jan 12, 2026',
    category: 'Nutrition',
    readTime: '8 min read',
  },
  {
    title: 'How to Stay Motivated in Your Fitness Journey',
    excerpt: 'Discover proven strategies to maintain motivation and consistency in your workout routine.',
    image: '/images/blog-3.jpg',
    author: 'Mike Thompson',
    date: 'Jan 10, 2026',
    category: 'Mindset',
    readTime: '6 min read',
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Blog & Tips
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Latest <span className="gradient-text">Fitness</span> Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice, workout tips, and nutrition guides to help you succeed.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={media.blog[index] || post.image}
                    alt={`${post.title} - ${post.category} article by ${post.author}`}
                    fill
                    loading="lazy"
                    unoptimized
                    quality={85}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:calendar" className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:clock-outline" className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Icon icon="mdi:account-circle" className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-primary font-semibold text-sm flex items-center gap-1"
                    >
                      Read More
                      <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Articles
              <Icon icon="mdi:arrow-right" className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
