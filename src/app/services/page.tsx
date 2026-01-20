import { ServicesSection } from '@/components/sections/services-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Premium Gym Facilities & Training',
  description: 'Explore our full range of services including personal training, group classes, nutrition counseling, and state-of-the-art equipment.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <ServicesSection />
    </main>
  );
}
