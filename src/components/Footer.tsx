'use client';

import Link from 'next/link';
import { FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark/30 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Scroll to top */}
          <motion.button 
            onClick={scrollToTop}
            className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full mb-8 text-primary transition-all duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={24} />
          </motion.button>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-12">
              {navItems.map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-text-primary hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}
          <div className="w-24 h-1 bg-primary/30 rounded-full mb-6"></div>

          {/* Copyright */}
          <p className="text-text-secondary text-sm text-center">
            Copyright &copy; {currentYear} Darsh Patel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;