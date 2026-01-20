import { PricingSection } from '@/components/sections/pricing-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership Pricing - Affordable Gym Plans',
  description: 'Choose the perfect membership plan for your fitness journey. Flexible options starting from basic access to premium all-inclusive packages.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-20">
      <PricingSection />
    </main>
  );
}
