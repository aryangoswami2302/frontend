import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/30 rounded-full blur-[50px]" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Get to know me!</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                I am a passionate Frontend Developer with a strong focus on building highly polished, modern web applications. My journey in web development started with a curiosity for creating beautiful interfaces, and it has evolved into a career dedicated to delivering exceptional user experiences.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I thrive on solving complex problems and turning ideas into responsive, interactive realities. When I'm not coding, I love exploring new design trends, contributing to open-source, and continuously pushing the boundaries of what's possible on the web.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-6 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                <h4 className="font-bold text-lg mb-2 text-primary">Mission</h4>
                <p className="text-sm text-foreground/70">To bridge the gap between stunning design and flawless functionality.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                <h4 className="font-bold text-lg mb-2 text-secondary">Vision</h4>
                <p className="text-sm text-foreground/70">To create accessible and inclusive web experiences that inspire and engage users worldwide.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
