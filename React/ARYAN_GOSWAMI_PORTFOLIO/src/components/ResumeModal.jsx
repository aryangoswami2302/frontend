import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate downloadable text formatted resume file
    const resumeText = `ARYAN GOSWAMI
Python Full Stack Developer
Email: aryangoswami2309@gmail.com | Phone: +91 9687577089
GitHub: https://github.com/aryangoswami2302
LinkedIn: https://linkedin.com/in/aryan-goswami2302
Location: Ahmedabad, Gujarat

SUMMARY:
Entry-level Full Stack Developer with a Diploma in Information Technology (2025) and a year of professional training in Python Full Stack Development at TOPS Technologies. Builds responsive web applications with React.js, JavaScript, Firebase, Bootstrap, and Tailwind CSS, with hands-on backend experience in Python, Django, and MySQL.

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Bootstrap, Tailwind CSS
- Backend: Python, Django
- Databases: MySQL, Firebase
- Tools: Git, GitHub, VS Code, Postman, Docker, Vite, REST APIs
- Languages: C, C++

PROJECTS:
1. Gym Management Web App (React.js, Vite, Firebase, Bootstrap, Tailwind CSS)
   Live: https://gymprohub.vercel.app
   Features: Membership plans, registration, WhatsApp enquiry flow, Firebase Auth, fitness calculators, admin dashboard.

2. Hotelier – Hotel Management Web App (React.js, Vite, Firebase, Bootstrap, Tailwind CSS)
   Live: https://hoteliar.netlify.app/
   Features: Room listing, booking system, admin dashboard, reusable React components, Firebase Auth.

3. Fruitables – E-commerce Web App (HTML, Python, Django, JavaScript, Bootstrap)
   Live: https://aryangoswami2309.pythonanywhere.com
   Features: Dynamic product listing, cart, checkout, responsive UI.

WORK EXPERIENCE:
Python with Django Intern | Patel Web Solutions (5th Semester)
- Performed CRUD operations, database integration, custom forms, authentication, and Django templates.

EDUCATION:
- Diploma in Information Technology (R.C. Technical Institute, Ahmedabad - 2025)
- Full Stack Development – Python (TOPS Technologies, Ahmedabad - 2026)
- SSC (Shree Surajba High School, Gabat - 2022)
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Aryan_Goswami_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <h3 className="text-lg font-bold text-white">Aryan Goswami - Professional Resume</h3>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text File</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 overflow-y-auto space-y-8 font-sans text-slate-200 text-sm">
          
          {/* Header Contact Block */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white">Aryan Goswami</h1>
            <p className="text-cyan-400 font-mono text-base font-semibold">Python Full Stack Developer</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono pt-2">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> aryangoswami2309@gmail.com</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> +91 9687577089</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Ahmedabad, Gujarat</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Summary</h2>
            <p className="text-slate-300 leading-relaxed">
              Entry-level Full Stack Developer with a Diploma in Information Technology and a year of professional training in Python Full Stack Development at TOPS Technologies. Builds responsive web applications with React.js, JavaScript, Firebase, Bootstrap and Tailwind CSS, with hands-on backend experience in Python, Django and MySQL.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">Frontend</span>
                <p className="text-slate-400">HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Bootstrap, Tailwind CSS</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">Backend & Databases</span>
                <p className="text-slate-400">Python, Django, MySQL, Firebase</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">Developer Tools</span>
                <p className="text-slate-400">Git, GitHub, VS Code, Postman, Docker, Vite, REST APIs</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">Languages</span>
                <p className="text-slate-400">C, C++</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Key Projects</h2>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>Gym Management Web App</span>
                  <span className="text-cyan-400">gymprohub.vercel.app</span>
                </div>
                <p className="text-slate-400">React.js, Vite, Firebase, Bootstrap, Tailwind CSS. Features: Membership plans, registration, WhatsApp enquiry flow, Firebase Auth, fitness calculators, admin dashboard.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>Hotelier – Hotel Management Web App</span>
                  <span className="text-cyan-400">hoteliar.netlify.app</span>
                </div>
                <p className="text-slate-400">React.js, Vite, Firebase, Bootstrap, Tailwind CSS. Features: Room listing, booking, admin dashboard, reusable components, Firebase auth.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>Fruitables – E-commerce Web App</span>
                  <span className="text-cyan-400">aryangoswami2309.pythonanywhere.com</span>
                </div>
                <p className="text-slate-400">HTML, Python, Django, JavaScript, Bootstrap. Features: Product listing, cart, checkout, responsive UI.</p>
              </div>
            </div>
          </div>

          {/* Internship */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Internship Experience</h2>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
              <div className="flex justify-between font-bold text-white">
                <span>Python with Django Intern — Patel Web Solutions</span>
                <span className="text-slate-400">5th Semester</span>
              </div>
              <p className="text-slate-400">CRUD operations, database integration, forms, authentication, Django templates.</p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Education</h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span><strong>Diploma in Information Technology</strong> — R.C. Technical Institute, Ahmedabad</span>
                <span className="font-mono text-cyan-400">2025</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span><strong>Full Stack Development – Python</strong> — TOPS Technologies, Ahmedabad</span>
                <span className="font-mono text-cyan-400">2026</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span><strong>SSC</strong> — Shree Surajba High School, Gabat</span>
                <span className="font-mono text-cyan-400">2022</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
