import React from 'react';
import { ArrowRight, Mail, Sparkles, Terminal, Code, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-cyan-400 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Full-time Roles & Internships</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
            
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Aryan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Goswami</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-300 flex items-center justify-center lg:justify-start gap-2 pt-1">
                
                <span>Python Full Stack Developer</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Building responsive, high-performance web applications with <span className="text-cyan-300 font-semibold">React.js</span>, <span className="text-cyan-300 font-semibold">Python</span>, <span className="text-cyan-300 font-semibold">Django</span>, and modern database solutions. Passionate about writing clean code and crafting seamless digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-semibold transition-all duration-300 hover:border-slate-700"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect:</span>
              
              <a
                href="https://github.com/aryangoswami2302"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-md group"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://linkedin.com/in/aryan-goswami2302"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-md group"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Hero Profile Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Glowing Gradient Border Aura */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 opacity-40 blur-xl animate-pulse-glow"></div>

              {/* Profile Card Container */}
              <div className="relative glass-card rounded-3xl p-3 border border-slate-800 shadow-2xl overflow-hidden group">
                
                {/* Image Wrapper */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900 border border-slate-800/80">
                  <img
                    src="/aryan_goswami.jpg"
                    alt="Aryan Goswami - Python Full Stack Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.03]"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                    <span>Full Stack Developer</span>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800 space-y-1">
                    <h3 className="text-lg font-extrabold text-white">Aryan Goswami</h3>
                    <p className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-cyan-400" /> Python • Django • React.js
                    </p>
                  </div>
                </div>

                {/* Floating Tech Badges Below */}
                <div className="pt-3 px-2 pb-1 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" /> Django
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-300 flex items-center gap-1">
                    <Code className="w-3 h-3 text-blue-400" /> React.js
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                    <Database className="w-3 h-3 text-emerald-400" /> MySQL
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
