'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <div className="w-16 h-1 bg-primary/50 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Feel free to reach out! Whether you have a question, project inquiry, 
              or just want to say hello, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <a href="mailto:darshp717@gmail.com" className="flex items-center group">
                <div className="bg-primary/10 p-4 rounded-xl mr-4 group-hover:bg-primary/20 transition-all">
                  <FiMail className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-text-secondary">darshp717@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background-dark/40 p-8 rounded-2xl border border-primary/10"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background-dark/60 rounded-lg border border-primary/10 py-3 px-4"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background-dark/60 rounded-lg border border-primary/10 py-3 px-4"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-text-secondary mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-background-dark/60 rounded-lg border border-primary/10 py-3 px-4"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-background-dark/60 rounded-lg border border-primary/10 py-3 px-4"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-background-dark py-3 px-6 rounded-lg w-full flex justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-500/10 text-green-500 p-3 rounded-lg text-center">
                  Your message has been sent successfully!
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-500/10 text-red-500 p-3 rounded-lg text-center">
                  Error sending message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
