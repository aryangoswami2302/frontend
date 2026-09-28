import React from 'react';
import { Briefcase, Building2, Calendar, CheckCircle2, Code2, Database, ShieldCheck, Cpu } from 'lucide-react';

const Internship = () => {
  const responsibilities = [
    "Developed robust CRUD (Create, Read, Update, Delete) workflows using Django ORM and MySQL databases.",
    "Integrated Django authentication & authorization protocols for user registration and session management.",
    "Built dynamic web interfaces using Django Template Language (DTL), HTML5, CSS3, and JavaScript.",
    "Engineered form validation handling, data sanitization, and error reporting for seamless user input.",
    "Collaborated with senior developers on database schema modeling, query optimization, and project structure."
  ];

  const technologies = ["Python", "Django", "MySQL", "Django Templates (DTL)", "HTML5", "CSS3", "JavaScript", "Git"];

  return (
    <section id="internship" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hands-on industry exposure and practical software engineering training during my IT diploma.
          </p>
        </div>

        {/* Main Internship Spotlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl relative group">
            
            {/* Header / Company Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    Python with Django Intern
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-cyan-400 font-semibold text-lg">Patel Web Solutions</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400">5th Semester Internship</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-mono self-start md:self-auto">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Academic Internship</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="py-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">Key Responsibilities & Deliverables:</h4>
                <div className="space-y-3">
                  {responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Technologies & Skills Applied:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-mono text-cyan-300 font-medium hover:border-cyan-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer summary bar */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" /> Verified Internship Program
              </span>
              <span className="text-cyan-400">Ahmedabad, Gujarat</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Internship;
