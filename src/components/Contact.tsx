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
    
    // This is a placeholder for actual form submission logic
    // You would typically connect this to an API endpoint or email service
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-text-secondary text-lg mb-2">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <div className="w-16 h-1 bg-primary/50 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Feel free to reach out! Whether you have a question, project inquiry, 
              or just want to say hello, I'd love to hear from you. You can contact me 
              directly through this form or via my social platforms.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:darshp717@gmail.com" 
                className="flex items-center group"
              >
                <div className="bg-primary/10 p-4 rounded-xl mr-4 group-hover:bg-primary/20 transition-all">
                  <FiMail className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-text-secondary">darshp717@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/darshp623/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="bg-primary/10 p-4 rounded-xl mr-4 group-hover:bg-primary/20 transition-all">
                  <FiLinkedin className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-text-secondary">linkedin.com/in/darshp623</p>
                </div>
              </a>

              <a 
                href="https://github.com/darshp623/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="bg-primary/10 p-4 rounded-xl mr-4 group-hover:bg-primary/20 transition-all">
                  <FiGithub className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-text-secondary">github.com/darshp623</p>
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
                  className="w-full bg-background-dark/60 rounded-lg border border-primary/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 py-3 px-4 text-text-primary outline-none transition-all"
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
                  className="w-full bg-background-dark/60 rounded-lg border border-primary/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 py-3 px-4 text-text-primary outline-none transition-all"
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
                  className="w-full bg-background-dark/60 rounded-lg border border-primary/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 py-3 px-4 text-text-primary outline-none transition-all"
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
                  className="w-full bg-background-dark/60 rounded-lg border border-primary/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 py-3 px-4 text-text-primary outline-none transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-background-dark py-3 px-6 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed w-full"
              >
                {isSubmitting ? (
                  <span className="inline-block h-5 w-5 border-2 border-background-dark/30 border-t-background-dark rounded-full animate-spin mr-2"></span>
                ) : (
                  <FiSend className="mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 text-green-500 p-3 rounded-lg text-center"
                >
                  Your message has been sent successfully!
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 text-red-500 p-3 rounded-lg text-center"
                >
                  There was an error sending your message. Please try again.
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