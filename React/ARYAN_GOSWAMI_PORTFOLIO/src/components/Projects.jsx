import React from 'react';
import { ExternalLink, FolderGit2, Dumbbell, Hotel, ShoppingBag, ArrowUpRight, Sparkles, Shield, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 'gymprohub',
      title: 'Gym Management Web App',
      category: 'Full Stack App',
      icon: Dumbbell,
      gradient: 'from-cyan-500 to-blue-600',
      badgeColor: 'bg-cyan-950/80 border-cyan-500/30 text-cyan-300',
      description: 'Comprehensive fitness center platform featuring membership registration, interactive calculators, WhatsApp integration, and full admin management.',
      features: [
        'Membership Plans & Online Registration',
        'Firebase Authentication & Database',
        'Direct WhatsApp Enquiry Flow',
        'Fitness Calculators & Admin Dashboard'
      ],
      tags: ['React.js', 'Vite', 'Firebase', 'Bootstrap', 'Tailwind CSS'],
      liveUrl: 'https://gymprohub.vercel.app'
    },
    {
      id: 'hotelier',
      title: 'Hotelier – Hotel Management Web App',
      category: 'Booking Platform',
      icon: Hotel,
      gradient: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-950/80 border-blue-500/30 text-blue-300',
      description: 'Modern hotel room booking platform with dynamic room availability, user authentication, responsive UI components, and administrative control.',
      features: [
        'Interactive Room Catalog & Search',
        'Reservation & Booking System',
        'Firebase Auth & Secure User Portals',
        'Modular Reusable React Architecture'
      ],
      tags: ['React.js', 'Vite', 'Firebase', 'Bootstrap', 'Tailwind CSS'],
      liveUrl: 'https://hoteliar.netlify.app/'
    },
    {
      id: 'fruitables',
      title: 'Fruitables – E-commerce Web App',
      category: 'Django Web App',
      icon: ShoppingBag,
      gradient: 'from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-950/80 border-emerald-500/30 text-emerald-300',
      description: 'Feature-rich organic food e-commerce website built with Python & Django backend, providing seamless product catalog navigation and checkout flow.',
      features: [
        'Dynamic Product Catalog & Filtering',
        'Shopping Cart & Checkout Workflows',
        'Django Backend & Template Engine',
        'Responsive Mobile-Optimized Design'
      ],
      tags: ['HTML', 'Python', 'Django', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://aryangoswami2309.pythonanywhere.com'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/90">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world full-stack web applications engineered for scalability, responsiveness, and intuitive user experiences.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-2xl group"
              >
                <div>
                  {/* Banner / Card Header */}
                  <div className={`p-6 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                    
                    <div className="flex items-center justify-between relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-950/60 border border-white/20 text-white text-xs font-mono">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-5 group-hover:translate-x-1 transition-transform relative z-10 drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-5">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Key Highlights:</h4>
                      <ul className="space-y-1.5">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-slate-400 flex items-start gap-2">
                            <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-3 border-t border-slate-800">
                      <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA Button */}
                <div className="p-6 pt-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 group/btn"
                  >
                    <span>View Live</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
