'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-secondary text-lg mb-2"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Darsh Patel
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-text-secondary text-xl md:text-2xl mb-6"
          >
            Computer Science Undergrad
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link 
              href="/resume.pdf" 
              target="_blank"
              className="btn-special"
            >
              Download CV
            </Link>
            
            <Link 
              href="/contact"
              className="btn-special"
            >
              Contact Info
            </Link>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex gap-4 mt-8 justify-center md:justify-start"
          >
            <Link 
              href="https://www.linkedin.com/in/darshp623/" 
              target="_blank"
              className="text-text-primary hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={28} />
            </Link>
            <Link 
              href="https://github.com/darshp623/" 
              target="_blank"
              className="text-text-primary hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={28} />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/profile-pic.PNG"
              alt="Darsh Patel"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;