import { motion } from 'framer-motion';
import { PROJECTS } from '../data/constants';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Import images directly
import img1 from '../assets/project_1_1776075777282.png';
import img2 from '../assets/project_2_1776075954763.png';
import img3 from '../assets/project_3_1776076049279.png';

const images = {
  project_1: img1,
  project_2: img2,
  project_3: img3
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of some of my recent work. Each project is built from scratch and showcases my approach to problem-solving and UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity z-10" />
                <img 
                  src={images[project.image]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded font-semibold text-primary/90">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                  <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                    <FiGithub /> Code
                  </a>
                  <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-semibold hover:text-secondary transition-colors">
                    <FiExternalLink /> Live Demo
                  </a>
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
