import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Darsh Patel',
  description: 'Get in touch with Darsh Patel. Send a message or connect through social media.',
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}