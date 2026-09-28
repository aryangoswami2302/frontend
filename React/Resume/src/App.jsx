import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="font-sans min-h-screen selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-foreground/50 text-sm border-t border-white/10 glass">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </main>
  );
}

export default App;
