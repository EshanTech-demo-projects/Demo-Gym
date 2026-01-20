import { ProgramsSection } from '@/components/sections/programs-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fitness Programs - Personalized Training Plans',
  description: 'Discover our comprehensive fitness programs designed for all levels - from beginners to advanced athletes. Personal training, group classes, and specialized programs.',
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen pt-20">
      <ProgramsSection />
    </main>
  );
}
