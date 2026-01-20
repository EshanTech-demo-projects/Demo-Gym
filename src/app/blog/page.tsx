import { BlogSection } from '@/components/sections/blog-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fitness Blog - Tips, Guides & Success Stories',
  description: 'Read the latest fitness tips, workout guides, nutrition advice, and inspiring transformation stories from our PowerFit community.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <BlogSection />
    </main>
  );
}
