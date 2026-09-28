import React from 'react';
import { Layout, Server, Database, Wrench, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      color: "from-cyan-500 to-blue-600",
      accentBorder: "hover:border-cyan-500/50",
      skills: [
        { name: "HTML5", level: "Expert" },
        { name: "CSS3", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Bootstrap", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-blue-600 to-indigo-600",
      accentBorder: "hover:border-blue-500/50",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Django", level: "Advanced" },
      ]
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      color: "from-teal-400 to-emerald-500",
      accentBorder: "hover:border-emerald-500/50",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "Firebase", level: "Intermediate" },
      ]
    },
    {
      title: "Tools & Workflow",
      icon: Wrench,
      color: "from-sky-500 to-cyan-500",
      accentBorder: "hover:border-sky-500/50",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Expert" },
        { name: "Postman", level: "Advanced" },
        { name: "Docker", level: "Basic / Familiar" },
        { name: "Vite", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-indigo-500 to-purple-600",
      accentBorder: "hover:border-purple-500/50",
      skills: [
        { name: "C", level: "Proficient" },
        { name: "C++", level: "Proficient" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my technical stack across full-stack development, frameworks, and modern developer tooling.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className={`glass-card rounded-3xl p-6 border border-slate-800/90 ${category.accentBorder} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl group`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-800">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        {category.skills.length} Skills
                      </span>
                    </div>
                  </div>

                  {/* Skills Pill Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/90 transition-all duration-200 flex items-center gap-2 group/skill"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 group-hover/skill:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/skill:text-white">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Proficiency Verified</span>
                  <span className="text-cyan-400">Hands-on Experience</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
