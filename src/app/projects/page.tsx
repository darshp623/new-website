import Projects from '@/components/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Certifications | Darsh Patel',
  description: 'Explore Darsh Patel\'s projects, work, and professional certifications.',
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  );
}