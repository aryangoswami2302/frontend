import React from 'react';
import { User, Award, BookOpen, Layers, CheckCircle2, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    "Diploma in Information Technology (R.C. Technical Institute, 2025)",
    "1 Year Intensive Python Full Stack Professional Training (TOPS Technologies)",
    "Frontend Craftsmanship with React.js, Tailwind CSS, Bootstrap & Modern ES6+",
    "Backend Development using Python, Django, REST APIs & MySQL",
    "Cloud & Database Integration with Firebase Authentication & Storage",
    "Hands-on Industry Internship Experience at Patel Web Solutions"
  ];

  const stats = [
    { label: "Full Stack Projects", value: "3+", icon: Layers, color: "from-cyan-500 to-blue-500" },
    { label: "Year Professional Training", value: "1", icon: Award, color: "from-teal-400 to-cyan-500" },
    { label: "Diploma in IT", value: "2025", icon: BookOpen, color: "from-blue-500 to-indigo-500" },
    { label: "Core Technologies", value: "10+", icon: Cpu, color: "from-cyan-400 to-teal-400" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Aryan Goswami</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dedicated Full Stack Developer combining creative frontend design with robust Python backend solutions.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-cyan-500/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-4 pb-2 border-b border-slate-800/80">
                <img
                  src="/aryan_goswami.jpg"
                  alt="Aryan Goswami"
                  className="w-14 h-14 rounded-2xl object-cover object-top ring-2 ring-cyan-500/50 shadow-md"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <span>Passionate Python Full Stack Developer</span>
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">TOPS Technologies Alumnus • Diploma in IT</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                I am an entry-level <strong className="text-cyan-300">Full Stack Developer</strong> with a solid academic foundation in Information Technology. I hold a <strong className="text-cyan-300">Diploma in IT from R.C. Technical Institute, Ahmedabad (2025)</strong> and completed a comprehensive <strong className="text-cyan-300">1-year professional training program in Python Full Stack Development at TOPS Technologies</strong>.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                My passion lies in crafting high-performance, visually responsive web applications using modern web standards. On the frontend, I specialize in building sleek user interfaces with <strong className="text-white">React.js, JavaScript (ES6+), Firebase, Bootstrap, and Tailwind CSS</strong>. On the backend, I engineer robust server logic, forms, authentication flows, and relational databases using <strong className="text-white">Python, Django, and MySQL</strong>.
              </p>
            </div>

            {/* Highlights Bullet Grid */}
            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-3">Key Competencies & Foundation:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">{stat.label}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Verified Knowledge</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
