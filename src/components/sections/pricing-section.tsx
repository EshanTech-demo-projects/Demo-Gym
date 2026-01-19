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
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 px-4">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Flexible membership options designed to fit your lifestyle and budget.
            No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <Card className={`h-full ${plan.popular ? 'border-2 border-primary shadow-2xl md:scale-105' : ''}`}>
                <CardHeader className="text-center pb-6 md:pb-8">
                  {/* Icon */}
                  <motion.div
                    className={`h-16 w-16 md:h-20 md:w-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4 md:mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon icon="mdi:dumbbell" className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </motion.div>

                  <CardTitle className="text-xl md:text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">{plan.description}</p>

                  {/* Price */}
                  <div>
                    <span className="text-4xl md:text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-sm md:text-base text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Features */}
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
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
                          className={`h-5 w-5 md:h-6 md:w-6 flex-shrink-0 mt-0.5 ${
                            feature.included ? 'text-green-500' : 'text-muted-foreground/30'
                          }`}
                        />
                        <span className={`text-sm md:text-base ${feature.included ? '' : 'text-muted-foreground line-through'}`}>
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? 'gradient' : 'outline'}
                    size="lg"
                    className="w-full text-sm md:text-base h-11 md:h-12"
                  >
                    {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                    <Icon icon="mdi:arrow-right" className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-8 md:mt-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Need a custom plan? <a href="#contact" className="text-primary hover:underline font-semibold">Contact us</a> for personalized options
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 md:mt-8">
            {[
              { icon: 'mdi:shield-check', text: 'Money Back Guarantee' },
              { icon: 'mdi:credit-card-outline', text: 'Flexible Payments' },
              { icon: 'mdi:account-cancel', text: 'Cancel Anytime' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon icon={item.icon} className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <span className="text-xs md:text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
