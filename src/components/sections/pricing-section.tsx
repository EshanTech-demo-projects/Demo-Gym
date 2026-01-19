'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const pricingPlans = [
  {
    name: 'Basic',
    price: '$29',
    period: 'per month',
    description: 'Perfect for beginners',
    features: [
      { text: 'Access to gym equipment', included: true },
      { text: 'Locker room access', included: true },
      { text: '2 group classes per week', included: true },
      { text: 'Personal trainer', included: false },
      { text: 'Nutrition guidance', included: false },
      { text: 'Priority support', included: false },
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600',
  },
  {
    name: 'Premium',
    price: '$59',
    period: 'per month',
    description: 'Most popular choice',
    features: [
      { text: 'Access to gym equipment', included: true },
      { text: 'Locker room access', included: true },
      { text: 'Unlimited group classes', included: true },
      { text: '4 personal training sessions', included: true },
      { text: 'Nutrition guidance', included: true },
      { text: 'Priority support', included: false },
    ],
    popular: true,
    color: 'from-primary to-secondary',
  },
  {
    name: 'Elite',
    price: '$99',
    period: 'per month',
    description: 'For serious athletes',
    features: [
      { text: 'Access to gym equipment', included: true },
      { text: 'Locker room access', included: true },
      { text: 'Unlimited group classes', included: true },
      { text: 'Unlimited personal training', included: true },
      { text: 'Custom nutrition plan', included: true },
      { text: '24/7 priority support', included: true },
    ],
    popular: false,
    color: 'from-yellow-500 to-orange-500',
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible membership options designed to fit your lifestyle and budget.
            No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <Card className={`h-full ${plan.popular ? 'border-2 border-primary shadow-2xl scale-105' : ''}`}>
                <CardHeader className="text-center pb-8">
                  {/* Icon */}
                  <motion.div
                    className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon icon="mdi:dumbbell" className="h-10 w-10 text-white" />
                  </motion.div>

                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                  {/* Price */}
                  <div>
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + featureIndex * 0.05 }}
                      >
                        <Icon
                          icon={feature.included ? 'mdi:check-circle' : 'mdi:close-circle'}
                          className={`h-6 w-6 flex-shrink-0 ${
                            feature.included ? 'text-green-500' : 'text-muted-foreground/30'
                          }`}
                        />
                        <span className={feature.included ? '' : 'text-muted-foreground line-through'}>
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? 'gradient' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                    <Icon icon="mdi:arrow-right" className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            Need a custom plan? <a href="#contact" className="text-primary hover:underline font-semibold">Contact us</a>
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { icon: 'mdi:shield-check', text: 'Money Back Guarantee' },
              { icon: 'mdi:credit-card-outline', text: 'Flexible Payments' },
              { icon: 'mdi:account-cancel', text: 'Cancel Anytime' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon icon={item.icon} className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
