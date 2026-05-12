'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const items = [
  {
    type: 'project',
    title: 'NexSys Web',
    image: '/Nexsys.PNG',
    description:
      'Website for NexSys Labs, to the point I worked on it, built with React and Tailwind CSS, plus a contact form. Deployed using AWS Amplify, Route 53, & CloudFlare for DNS. Contact form uses Resend to send emails.',
    skills: ['React', 'Tailwind CSS', 'AWS', 'CloudFlare'],
    links: {
      github: 'https://github.com/darshp623/NexSys-Web',
      live: 'https://nexsyslabs.vercel.app/'
    },
  },
  {
    type: 'project',
    title: 'hackUMBC Website',
    image: '/hackumbc2025.png',
    description:
      'Created & maintained the hackUMBC website from Aug 2024-Oct 2025, as a centralized information hub for the hackathon. Also has as a detailed registration form. Integrated DynamoDB and S3 for participant data, & resume storage.',
    skills: ['Next.js', 'JavaScript', 'Tailwind CSS', 'AWS'],
    links: {
      github: 'https://github.com/darshp623/hackumbc-web',
      live: 'https://hackumbc.vercel.app',
    },
  },
  {
    type: 'project',
    title: 'Bisyn AI Web App',
    image: '/raman.png',
    description:
      'A cloud-based AI-driven web application to automate Raman spectroscopy data processing, material classification, and spectral binning for remote sensing applications. No links due to NDA.',
    skills: ['React', 'S3', 'Python', 'Digital Ocean'],
  },
  {
    type: 'project',
    title: 'TaskTracker',
    image: '/task.jpg',
    description:
      'A task managementconsole app built with C# and MySQL, supporting full CRUD operations with secure, parameterized database queries.',
    skills: ['C#', '.NET', 'MySQL', 'Git'],
    links: {
      github: 'https://github.com/darshp623/TaskTracker',
    },
  },
  {
    type: 'project',
    title: 'ML Sign Language Proj',
    image: '/asl-background.jpg',
    description:
      'A machine learning project focusing on sign language recognition using a few python libarires to yield good results.',
    skills: ['Python', 'TensorFlow', 'Machine Learning'],
    links: {
      github: 'https://github.com/darshp623/ML_SignLanguage',
      live: 'https://mlasl.netlify.app/',
    },
  },
  {
    type: 'project',
    title: 'NoteUs',
    image: '/logo-icon.png',
    description:
      'A note-taking tool designed to organize and manage notes effectively, built with React and Next.js.',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/darshp623/NoteUs',
    },
  },
  {
    type: 'certification',
    title: 'AWS Certified Cloud Practitioner',
    image: '/awsCert.png',
    description:
      "Earned AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge of AWS cloud services and infrastructure.",
    issuer: 'Amazon Web Services',
    date: 'March 2023',
    links: {
      verify:
        'https://www.credly.com/badges/43f05253-97c8-4d73-848b-387dba662687/public_url',
    },
  },
  {
    type: 'certification',
    title: 'Cyber Essentials Certification',
    image: '/cyberEssentials.png',
    description:
      'Completed certification in cybersecurity fundamentals, covering essential knowledge for securing digital systems and networks.',
    issuer: 'Cisco',
    date: 'January 2023',
    links: {
      verify:
        'https://www.credly.com/badges/4f831a90-a2ef-4984-90a7-8c06554c5f7c/public_url',
    },
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'project', or 'certification'

  const filteredItems =
    filter === 'all'
      ? items
      : items.filter((item) => item.type === filter);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-text-secondary text-lg mb-2">Browse My Recent</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects & Certifications</h2>
          <div className="w-16 h-1 bg-primary/50 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === 'all'
                ? 'bg-primary text-background-dark'
                : 'bg-background-dark/40 text-text-primary hover:bg-primary/20'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('project')}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === 'project'
                ? 'bg-primary text-background-dark'
                : 'bg-background-dark/40 text-text-primary hover:bg-primary/20'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setFilter('certification')}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === 'certification'
                ? 'bg-primary text-background-dark'
                : 'bg-background-dark/40 text-text-primary hover:bg-primary/20'
            }`}
          >
            Certifications
          </button>
        </motion.div>

        {/* projects & certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-dark/40 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
            >
              {/* image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-primary/80 text-background-dark text-xs font-bold px-3 py-1 rounded-full">
                  {item.type === 'project' ? 'Project' : 'Certification'}
                </div>
              </div>

              {/* content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm mb-4 flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills &&
                    item.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                </div>
                <div className="flex space-x-4">
                  {item.links?.github && (
                    <Link
                      href={item.links.github}
                      target="_blank"
                      className="bg-background-dark/60 hover:bg-primary/20 p-2 rounded-full text-text-primary hover:text-primary transition-all"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={20} />
                    </Link>
                  )}
                  {item.links?.live && (
                    <Link
                      href={item.links.live}
                      target="_blank"
                      className="bg-background-dark/60 hover:bg-primary/20 p-2 rounded-full text-text-primary hover:text-primary transition-all"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </Link>
                  )}
                  {item.links?.verify && (
                    <Link
                      href={item.links.verify}
                      target="_blank"
                      className="bg-background-dark/60 hover:bg-primary/20 p-2 rounded-full text-text-primary hover:text-primary transition-all"
                      aria-label="Verify Certification"
                    >
                      <FiExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
