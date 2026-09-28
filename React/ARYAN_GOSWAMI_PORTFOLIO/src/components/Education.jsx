import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      degree: "Full Stack Development – Python",
      institution: "TOPS Technologies",
      location: "Ahmedabad, Gujarat",
      period: "2025 - 2026",
      status: "Completed / Professional Training",
      icon: Award,
      badgeColor: "from-cyan-500 to-blue-600",
      description: "Intensive 1-year professional hands-on program focusing on Python, Django framework, REST API development, MySQL, React.js frontend integration, and full stack deployment.",
      keyTopics: ["Python Core & OOP", "Django MVC Architecture", "RESTful Web APIs", "React & Frontend Integration", "Database Design & MySQL"]
    },
    {
      degree: "Diploma in Information Technology",
      institution: "R.C. Technical Institute",
      location: "Ahmedabad, Gujarat",
      period: "2022 - 2025",
      status: "Graduated",
      icon: GraduationCap,
      badgeColor: "from-teal-400 to-cyan-500",
      description: "Comprehensive 3-year diploma in IT covering computer fundamentals, algorithms, software engineering principles, web technologies, and database management.",
      keyTopics: ["C / C++ Programming", "Database Management Systems (DBMS)", "Web Development Fundamentals", "Software Engineering Principles", "Operating Systems"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Shree Surajba High School",
      location: "Gabat, Gujarat",
      period: "2022",
      status: "Completed",
      icon: BookOpen,
      badgeColor: "from-blue-500 to-indigo-600",
      description: "Foundational secondary education with strong focus on Mathematics, Science, and Information Technology.",
      keyTopics: ["General Science", "Mathematics", "Basic Computer Knowledge"]
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My formal education background and professional training in information technology.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800 -translate-x-1/2"></div>

          <div className="space-y-12">
            {educationItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Center Node Bullet */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 z-20 group-hover:scale-125 transition-transform duration-300">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                    <div className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                      
                      {/* Period Badge & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {item.status}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 font-medium mt-1 mb-3">
                        <span className="text-cyan-400">{item.institution}</span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Learnings */}
                      <div className="pt-3 border-t border-slate-800/80 space-y-2">
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">Key Focus Areas:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.keyTopics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
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

export default Education;
