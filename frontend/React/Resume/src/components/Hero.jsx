import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/constants';
import profileImg from '../assets/profile_image_1776075641236.png'; // Make sure this matches the generated filename

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-primary font-semibold mb-2 tracking-wide uppercase"
          >
            Welcome to my portfolio
          </motion.h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-gradient">ARYAN GOSWAMI</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-foreground/80 font-bold mb-6">
            Frontend Developer
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            I craft responsive, modern, and engaging web applications with a focus on premium aesthetics and beautiful user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              View Projects
            </button>
            <a 
              href="#"
              className="px-8 py-3 rounded-full glass border border-white/20 text-foreground font-semibold hover:bg-white/10 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse" />
            <img 
              src={profileImg} 
              alt="Profile" 
              className="relative rounded-full w-full h-full object-cover border-4 border-white/10 shadow-2xl z-10"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Your+Name&background=0D8ABC&color=fff&size=512';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
