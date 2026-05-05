'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiBook, FiAward } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-text-secondary text-lg mb-2">Get to Know More</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-16 h-1 bg-primary/50 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/darsh.jpg"
                alt="Darsh Patel"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0"></div>
            </div>
          </motion.div>

          {/* text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* education cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background-dark/40 p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <FiBook className="text-primary text-2xl mr-3" />
                  <h3 className="text-lg font-medium">Education</h3>
                </div>
                <p className="font-medium">B.S. Computer Science</p>
                <p className="text-text-secondary text-sm mb-1">(In progress)</p>
                <p className="text-text-secondary text-sm">University of Maryland Baltimore County</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-background-dark/40 p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <FiAward className="text-primary text-2xl mr-3" />
                  <h3 className="text-lg font-medium">Job</h3>
                </div>
                <p className="font-medium">Software Engineer</p>
                <p className="text-text-secondary text-sm mb-1">(Start June 8th)</p>
                <p className="text-text-secondary text-sm">Unison</p>
              </motion.div>
            </div>

            {/* description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-text-primary mb-4 leading-relaxed">
                I am a current senior at the University of Maryland, Baltimore County. 
                On May 21st 2026, I will *hopefully* be graduating with a Bachelor's of Science in Computer Science,
                with a focused track in AI/Machine Learning, with Cum Laude honors.
              </p>
              <p className="text-text-primary leading-relaxed">
                After graduating from UMBC on May 21st, I accepted an offer to start on June 8th as a remote 
                Full-Time Software Engineer at Unison. I am also an AWS Certified Cloud Practitioner,
                and overall I have a strong passion for building impactful web and software experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;