import React from 'react';
import { ArrowUp, Heart, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                AG
              </div>
              <span className="font-extrabold text-lg text-white">
                Aryan <span className="text-cyan-400">Goswami</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 text-center md:text-left">
              Python Full Stack Developer • Crafting modern web applications.
            </p>
          </div>

          {/* Center Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aryangoswami2302"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/aryan-goswami2302"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:aryangoswami2309@gmail.com"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-400">
              © {new Date().getFullYear()} Aryan Goswami
            </span>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-md"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
