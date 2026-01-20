import { ContactSection } from '@/components/sections/contact-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Have questions? Contact PowerFit Gym today. Visit us, call, or send a message. Our team is ready to help you start your fitness journey.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <ContactSection />
    </main>
  );
}
