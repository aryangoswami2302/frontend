import { motion } from 'framer-motion';
import { SKILLS } from '../data/constants';
import * as ToolIcons from 'react-icons/fa';
import * as ToolIconsSi from 'react-icons/si';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            These are the technologies and tools I work with to bring digital ideas to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {SKILLS.map((skill) => {
            // Find icon dynamically from imported libraries
            const IconComponent = ToolIcons[skill.icon] || ToolIconsSi[skill.icon] || ToolIcons['FaCode'];
            
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card flex flex-col items-center justify-center p-6 w-36 h-36 border border-white/5 hover:border-white/20 transition-all cursor-default"
              >
                <div 
                  className="text-5xl mb-4 transition-colors"
                  style={{ color: skill.color }}
                >
                  <IconComponent />
                </div>
                <span className="font-semibold text-sm text-foreground/90">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
