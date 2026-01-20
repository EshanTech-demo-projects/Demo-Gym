import { AboutSection } from '@/components/sections/about-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Mission',
  description: 'Learn about PowerFit Gym\'s journey, our mission to transform lives, and the values that drive us to be the best fitness center in town.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <AboutSection />
    </main>
  );
}
