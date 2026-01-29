'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiMapPin, FiGithub, FiExternalLink, FiBriefcase } from 'react-icons/fi';
import { useState } from 'react';

const experiences = [
  {
    title: 'Web Dev Intern',
    company: 'CHOYCES',
    location: 'Baltimore, Maryland · Remote',
    period: 'Sep 2024 - Nov 2024 · 3 mos',
    image: '/choyces.png',
    description: [
      'Optimized the CHOYCES website using WordPress, JavaScript, and CSS to improve visuals, and create a user-friendly design.',
      'Conducted research on optimizing CHOYCES website viewports for mobile and tablet devices, implementing adjustments that led to praise from leadership.'
    ],
    links: {
      website: 'https://choyces.org',
    },
  },
  {
    title: 'Undergraduate Researcher',
    company: 'DAMS Lab',
    location: 'Baltimore, Maryland · On-site',
    period: 'Sep 2024 - Dec 2024 · 4 mos',
    image: '/umbc.jpg',
    description: [
      'Composed Python scripts for detailed prompt engineering, analyzing and summarizing thousands of privacy policies to evaluate the processing capabilities of large language models within the GenAIPABench project.',
      'Built a small React-based interface connected to a Python backend to visualize policy scores and enable filtering/searching.'
    ],
    links: {
      github: 'https://github.com/darshp623/dams-research-proj',
      website: 'https://damslabumbc.github.io/members/',
    },
  },
  {
    title: 'Tech Team Organizer',
    company: 'hackUMBC',
    location: 'Baltimore, Maryland · Hybrid',
    period: 'Apr 2024 - Dec 2024 · 9 mos',
    image: '/hackUMBC24.png',
    description: [
      'Migrated hackUMBC.tech to Next.js and reworked front-end design using React, JavaScript, and Tailwind.',
      'Streamlined user data collection by integrating a type form with AWS DynamoDB, and AWS S3, for over 500+ participants.',
      'Deployed with AWS Amplify to allow secure, seamless updates.'
    ],
    links: {
      website: 'https://hackumbc.tech',
      github: 'https://github.com/umbchackers/hackumbc-web'
    },
  },
  {
    title: 'Technical Team Lead',
    company: 'hackUMBC',
    location: 'Baltimore, Maryland · Hybrid',
    period: 'Mar 2024 - Oct 2025 · 1 yr 8 mos',
    image: '/hackumbc2025.png',
    description: [
      'Led a team of 6 to rebuild hackUMBC.tech using React, Next.js, and Tailwind, improving stability, and redesigning the UI for 600+ participants.',
      'Deployed AWS-backed registration tools (DynamoDB + S3) to handle resume storage and participant management at scale.',
      'Coordinated cross-team communication, release cycles, and version control best practices for student developers.'
    ],
    links: {
      website: 'https://hackumbc.tech',
      github: 'https://github.com/umbchackers/hackumbc-web'
    },
  },
  {
    title: 'Software Engineer Intern',
    company: 'bwtech@UMBC',
    location: 'Baltimore, Maryland · On-site',
    period: 'Oct 2024 - Oct 2025 · 1 yr',
    image: '/bwtech.png',
    description: [
      'Built cloud-hosted infrastructure for internal and client-facing apps using AWS Amplify, S3, CloudFront, Route 53, and Digital Ocean, ensuring secure team access via IAM roles and policies.',
      'Developed an AI-assisted Raman spectroscopy processing platform for BISYN LLC, supporting classification, spectral binning, and automated workflows.',
      'Worked directly with upper leadership to support product deployment, feature testing, and cloud integration.'
    ],
    links: {
      github: 'https://github.com/Nex-Sys-io/repositories',
      repositories: 'https://nexsystech.vercel.app/',
    },
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-text-secondary text-lg mb-2">My Professional Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          <div className="w-16 h-1 bg-primary/50 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* ===== Horizontal Timeline (Desktop) ===== */}
        <div className="hidden md:block relative mb-12 mt-24">
          {/* Horizontal line */}
          <div className="absolute h-0.5 bg-primary/20 left-0 right-0 top-1/2 -translate-y-1/2" />
          <div className="flex justify-between relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                {/* Circle */}
                <div
                  className={`w-6 h-6 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-primary scale-125'
                      : 'bg-background-dark border-2 border-primary/50 hover:border-primary'
                  }`}
                />
                {/* Period under the circle */}
                <div
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs ${
                    activeIndex === index ? 'text-primary' : 'text-text-secondary'
                  }`}
                >
                  {exp.period.split('·')[0]}
                </div>
                {/* Company + Role above the circle */}
                <div
                  className={`absolute -top-16 left-1/2 -translate-x-1/2 text-center ${
                    activeIndex === index ? 'text-primary' : 'text-text-secondary'
                  }`}
                >
                  <div className="font-bold">{exp.company}</div>
                  <div className="text-xs">{exp.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Vertical Timeline (Mobile) ===== */}
        <div className="md:hidden relative mb-12 mt-12 flex flex-col items-start border-l border-primary/20 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative cursor-pointer mb-10"
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`
                  w-6 h-6 rounded-full border-2 border-primary/50 
                  absolute -left-[13px] top-6 
                  transition-all duration-300
                  ${activeIndex === index ? 'bg-primary scale-125' : 'bg-background-dark hover:border-primary'}
                `}
              />
              
              {/* Text Content */}
              <div className="ml-4">
                <div className={`${activeIndex === index ? 'text-primary' : 'text-text-secondary'} font-bold`}>
                  {exp.company}
                </div>
                <div className="text-xs text-text-secondary">{exp.title}</div>
                <div className="mt-1 text-xs text-text-secondary">
                  {exp.period} - {exp.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* ===== Active Experience Card ===== */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-background-dark/40 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Image Container (Square) */}
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={experiences[activeIndex].image}
                alt={`${experiences[activeIndex].company} logo`}
                fill
                className="absolute inset-0 object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/70 to-transparent" />
            </div>

            {/* Content Side */}
            <div className="p-6 flex flex-col">
              <div className="flex items-center mb-3">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <FiBriefcase className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{experiences[activeIndex].title}</h3>
                  <p className="text-text-secondary text-sm">{experiences[activeIndex].company}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-text-secondary text-sm">
                <div className="flex items-center">
                  <FiCalendar className="mr-1" />
                  <span>{experiences[activeIndex].period}</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="mr-1" />
                  <span>{experiences[activeIndex].location}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
              {experiences[activeIndex].description.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <p className={`text-text-primary ${experiences[activeIndex].company.toLowerCase().includes('bwtech') ? 'text-sm' : 'text-base'}`}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>

              <div className="flex space-x-4 mt-auto">
                {/* GitHub Link */}
                {experiences[activeIndex].links.github && (
                  <Link
                    href={experiences[activeIndex].links.github}
                    target="_blank"
                    className="bg-background-dark/60 hover:bg-primary/20 p-2 rounded-full text-text-primary hover:text-primary transition-all"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub size={20} />
                  </Link>
                )}

                {/* Additional Repositories Link */}
                {experiences[activeIndex].links.repositories && (
                  <Link
                    href={experiences[activeIndex].links.repositories}
                    target="_blank"
                    className="bg-background-dark/60 hover:bg-primary/20 p-2 rounded-full text-text-primary hover:text-primary transition-all"
                    aria-label="Repositories"
                  >
                    <FiExternalLink size={20} />
                  </Link>
                )}

                {/* Website Link */}
                {experiences[activeIndex].links.website && (
                  <Link
                    href={experiences[activeIndex].links.website}
                    target="_blank"
                    className="bg-background-dark/60 hover:bg-primary/20 p-2 rounded-full text-text-primary hover:text-primary transition-all"
                    aria-label="Website"
                  >
                    <FiExternalLink size={20} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}