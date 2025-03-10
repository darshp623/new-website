import Experience from '@/components/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Darsh Patel',
  description: 'Explore Darsh Patel\'s professional experience, work history, and career journey.',
};

export default function ExperiencePage() {
  return (
    <>
      <Experience />
    </>
  );
}