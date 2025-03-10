import About from '@/components/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Darsh Patel',
  description: 'Learn more about Darsh Patel, his background, education, and interests.',
};

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}