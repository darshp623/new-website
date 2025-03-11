'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiBook, FiAward } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
          {/* Image Side */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/70 to-transparent"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Education Cards */}
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
                  <h3 className="text-lg font-medium">Education</h3>
                </div>
                <p className="font-medium">High School Diploma</p>
                <p className="text-text-secondary text-sm mb-1">Eastern Technical High School</p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-text-primary mb-4 leading-relaxed">
                I am a current junior at the University of Maryland, Baltimore County. 
                Currently, I am pursuing my Bachelor's of Science in Computer Science,
                and I am focusing my track on AI/Machine Learning.
              </p>
              <p className="text-text-primary leading-relaxed">
                I have other passions in web and app design, as well as a thirst for knowledge, 
                as shown by my multiple internships, one as a Software Engineer at bwtech, 
                in addition to my work at hackUMBC as the Tech Team Lead, as well as being an 
                AWS Certified Cloud Practitioner.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;