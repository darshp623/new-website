import Skills from 'app/components/Skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Darsh Patel',
  description: 'Explore Darsh Patel\'s technical skills, programming languages, and expertise.',
};

export default function SkillsPage() {
  return (
    <>
      <Skills />
    </>
  );
}