'use client';

import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiGlobe, 
  FiLayers, 
  FiLayout, 
  FiTool 
} from 'react-icons/fi';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Experienced';
  icon: React.ReactNode;
}

/**
 * Example updated skill sets. 
 * Feel free to rename categories or adjust skill items.
 */
const skills: Record<string, Skill[]> = {
  'Languages & Tools': [
    { name: 'JavaScript', level: 'Experienced', icon: <FiCode /> },
    { name: 'TypeScript', level: 'Experienced', icon: <FiCode /> },
    { name: 'Python', level: 'Experienced', icon: <FiCode /> },
    { name: 'C++', level: 'Experienced', icon: <FiCode /> },
    { name: 'Java', level: 'Intermediate', icon: <FiCode /> },
    { name: 'HTML/CSS', level: 'Experienced', icon: <FiLayout /> },
    { name: 'mySQL', level: 'Intermediate', icon: <FiDatabase /> },
    { name: 'postgresSQL', level: 'Intermediate', icon: <FiLayers /> },
  ],
  'Frameworks & Cloud': [
    { name: 'React', level: 'Experienced', icon: <FiCode /> },
    { name: 'Next.js', level: 'Experienced', icon: <FiServer /> },
    { name: 'React Native', level: 'Intermediate', icon: <FiLayout /> },
    { name: 'AWS Cloud', level: 'Experienced', icon: <FiGlobe /> },
    { name: 'Cloud Computing', level: 'Experienced', icon: <FiGlobe /> },
    { name: 'Docker', level: 'Beginner', icon: <FiTool /> },
    { name: 'Digital Ocean', level: 'Beginner', icon: <FiServer /> },
    { name: 'shadcn UI', level: 'Intermediate', icon: <FiLayout /> },
  ],
};

const getLevelColor = (level: Skill['level']) => {
  switch (level) {
    case 'Beginner':
      return 'bg-blue-400/20 text-blue-400';
    case 'Intermediate':
      return 'bg-yellow-400/20 text-yellow-400';
    case 'Experienced':
      return 'bg-green-400/20 text-green-400';
    default:
      return 'bg-primary/20 text-primary';
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background-dark/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-text-secondary text-lg mb-2">Explore My</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <div className="w-16 h-1 bg-primary/50 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-background-dark/40 p-6 rounded-2xl border border-primary/10"
            >
              <h3 className="text-xl font-bold mb-6 inline-block border-b-2 border-primary/30 pb-2">
                {category}
              </h3>

              {/* On mobile: single column, on sm: 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {skillList.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-xl bg-background-dark/60 border border-primary/5 hover:border-primary/20 transition-all group flex items-start gap-3"
                  >
                    {/* Icon container */}
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-all shrink-0">
                      {skill.icon}
                    </div>

                    {/* Text area */}
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{skill.name}</h4>
                      <span 
                        className={`
                          text-xs px-2 py-1 rounded-full inline-block mt-1 whitespace-nowrap
                          ${getLevelColor(skill.level)}
                        `}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
