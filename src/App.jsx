import React, { useState, useEffect } from 'react';

// SVG Icons
const Icon = {
  Download: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Github: () => <svg width="28" height="28" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
  Linkedin: () => <svg width="28" height="28" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Eye: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
};

const DATA = {
  header: { name: 'Badr Eldin Qabbari', title: 'Software Engineer', subtitle: 'Full-Stack Developer | ASP.NET • Flutter • SQL Server', location: 'Alexandria, Egypt', email: 'badreldinahmedqabbari@gmail.com', phone: '+20 128 494 0906', whatsapp: 'https://wa.me/201284940906', linkedin: 'https://www.linkedin.com/in/badr-eldin-ahmed-5b541b2b9', github: 'https://github.com/BadrQabbari274', profileImage: 'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870109/profile_image_f7i4zl.jpg' },
  summary: 'Software Engineer specializing in full-stack web development, desktop applications, and database management. Experienced in building scalable MVC applications, WPF desktop systems, and RESTful APIs.',
  skills: {
    technical: [
      { category: 'Programming Languages', items: ['C++ (Problem Solving & Algorithms)', 'C# (Desktop & Web Applications)', 'Python (Multimedia Processing)', 'SQL (Database Management)'] },
      { category: 'Web Development', items: ['ASP.NET MVC', 'ASP.NET Web API', 'RESTful API Design', 'Entity Framework'] },
      { category: 'Desktop Development', items: ['Windows Presentation Foundation (WPF)', 'Entity Framework', 'MVVM Pattern'] },
      { category: 'Frameworks & Technologies', items: ['Flutter (Mobile Development)', '.NET Framework', 'SQL Server', 'Git & Version Control'] },
      { category: 'Design & Tools', items: ['Figma', 'Canva'] },
      { category: 'IT & Infrastructure', items: ['Network Basics', 'Hardware Troubleshooting', 'System Configuration', 'Technical Support'] }
    ],
    soft: ['Leadership & Team Management', 'Public Speaking & Presentation', 'Effective Communication', 'Time Management', 'Body Language', 'Problem Analysis & Critical Thinking']
  },
  projects: [
    { id: 'p1', title: 'School Management System', tech: ['ASP.NET MVC', 'SQL Server', 'Entity Framework'], duration: '2025', description: 'Enterprise-level web application for educational management with student registration, attendance tracking, and role-based access control.', images: [] },
    { id: 'p2', title: 'Gym Management System', tech: ['WPF', 'Entity Framework', 'SQL Server'], duration: '2024', description: 'Desktop application for fitness center operations with member management and subscription tracking.', images: [] }
  ],
  certifications: [
    { name: 'Applications of AI', org: 'Great Learing', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870112/Screenshot_2024-06-05_145406_pce0ym.png'] },
    { name: 'Human Resources Training', org: 'Bright Bridge Center', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870110/HR_h0tk69.jpg'] },
    { name: 'English International Certificate', org: 'Bright Bridge Center', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/a_-90/English_wckfmd.jpg'] },
    { name: 'Visual Arts Workshop', org: 'The General Authority for Cultural Palaces', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870115/WhatsApp_Image_2023-12-10_at_00.53.13_0f03819a_yavyrh.jpg'] },
    { name: 'Effective Leadership', org: 'HP LIFE', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870114/Screenshot_2024-03-09_102254_tuespo.png'] },
    { name: 'Effective Presentations', org: 'HP LIFE', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870114/Screenshot_2024-03-09_102320_qchsa6.png'] },
    { name: 'Business Communications', org: 'Great Learing', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870114/Screenshot_2024-03-09_102254_tuespo.png'] },
    { name: 'Hiring Staff', org: 'HP LIFE', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870114/Screenshot_2024-03-09_102337_bmci3k.png'] },
    { name: 'Get Started with Figma', org: 'Coursera', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870113/Get_started_with_figma_w6wmxl.png'] }
  ],
  activities: [
    { title: 'Soft Skills Instructor', org: 'IATS Camp, 6th of October City', year: '2024', images: [] },
    { title: 'Organizer', org: 'Al-Haramain Youth Center', year: '2024', images: [] },
    { title: 'Ambassador', org: 'ISEF', year: '2024', images: [] },
    { title: 'Ambassador', org: 'PHP Team, Workforce Egypt', year: '2024', images: [] }
  ],
  competitions: [
    { name: 'Egyptian Collegiate Programming Contest (ECPC)', year: '2025', images: [] },
    { name: 'International Science and Engineering Fair (ISEF)', year: '2023', images: [] }
  ],
  cv: { pdfUrl: 'https://drive.google.com/file/d/1y7M8p_rO1gAdJV2kply9urhD5ykJ41CU/view?usp=sharing' }
};

function ModalGallery({ images, onClose }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);
  if (!images?.length) return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"><div className="bg-gray-900 rounded-xl p-8 max-w-md text-center border border-gray-700 relative"><button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">✕</button><div className="text-6xl mb-4">📷</div><h3 className="text-xl font-bold mb-2">No Images Available</h3><p className="text-gray-400 mb-6">Images will be added soon.</p><button onClick={onClose} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">Close</button></div></div>;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"><button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl z-10">✕</button><div className="max-w-5xl w-full"><div className="bg-gray-900 rounded-xl overflow-hidden"><div className="h-96 md:h-[600px] flex items-center justify-center bg-gray-800"><img src={images[idx]} alt="" className="object-contain max-h-full max-w-full"/></div><div className="flex justify-between p-4"><div className="flex gap-2"><button onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">← Prev</button><button onClick={() => setIdx((i) => (i + 1) % images.length)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">Next →</button></div><div className="text-gray-400">{idx + 1} / {images.length}</div></div></div></div></div>;
}

export default function Portfolio() {
  const [gallery, setGallery] = useState({ open: false, images: [] });
  const [scrolled, setScrolled] = useState(false);
  
  // removed form state here

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  
  const openGallery = (imgs) => setGallery({ open: true, images: imgs || [] });
  
  // removed handleSubmit here
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <nav className={`fixed top-0 w-full z-40 transition-all ${scrolled ? 'bg-gray-900/95 backdrop-blur shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{DATA.header.name.split(' ')[0] + '...404'}</div>
          <div className="flex gap-4 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"/>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"/>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{DATA.header.name}</h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-4">{DATA.header.title}</div>
          <p className="text-lg text-blue-400 mb-8">{DATA.header.subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href={DATA.cv.pdfUrl} target="_blank" rel="noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center gap-2"><Icon.Download/>Download CV</a>
            <a href="#contact" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold shadow-lg border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105 flex items-center gap-2"><Icon.Mail/>Contact Me</a>
            <a href="#projects" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold shadow-lg border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105 flex items-center gap-2"><Icon.Eye/>View Projects</a>
          </div>
          <div className="flex gap-6 justify-center">
            <a href={DATA.header.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"><Icon.Github/></a>
            <a href={DATA.header.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"><Icon.Linkedin/></a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-20">
        <section id="about" className="mb-32">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
              <div className="md:col-span-1 flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition"/>
                  <img src={DATA.header.profileImage} alt={DATA.header.name} className="relative w-full max-w-sm rounded-xl border-4 border-gray-800 shadow-2xl object-cover"/>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">{DATA.summary}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"><div className="text-blue-400 font-semibold">Location</div><div className="text-gray-300">{DATA.header.location}</div></div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"><div className="text-blue-400 font-semibold">Email</div><div className="text-gray-300 text-sm break-all">{DATA.header.email}</div></div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"><div className="text-blue-400 font-semibold">Phone</div><div className="text-gray-300">{DATA.header.phone}</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {DATA.skills.technical.map((sg,i)=>
              <div key={i} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20 transition-all transform hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{sg.category}</h3>
                <ul className="space-y-2">{sg.items.map((it,j)=><li key={j} className="text-gray-400 flex items-start gap-2"><span className="text-blue-400 mt-1">▹</span>{it}</li>)}</ul>
              </div>
            )}
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">{DATA.skills.soft.map((s,i)=><span key={i} className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">{s}</span>)}</div>
          </div>
        </section>

        <section id="projects" className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {DATA.projects.map(p=>
              <div key={p.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6"><h3 className="text-2xl font-bold mb-2">{p.title}</h3><div className="text-blue-100 text-sm">{p.duration}</div></div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">{p.tech.map((t,i)=><span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm">{t}</span>)}</div>
                  <button onClick={()=>openGallery(p.images)} className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2"><Icon.Eye/>View Images</button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Training & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.certifications.map((c,i)=>
              <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition flex justify-between items-center">
                <div><h3 className="font-semibold text-white mb-1">{c.name}</h3><p className="text-sm text-gray-400">{c.org}</p></div>
                <button onClick={()=>openGallery(c.images)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition flex items-center gap-2"><Icon.Eye/>View</button>
              </div>
            )}
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Leadership & Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.activities.map((a,i)=>
              <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition">
                <div className="flex justify-between items-start mb-4">
                  <div><h3 className="font-semibold text-white mb-1">{a.title}</h3><p className="text-sm text-gray-400">{a.org}</p></div>
                  <span className="text-blue-400 text-sm">{a.year}</span>
                </div>
                <button onClick={()=>openGallery(a.images)} className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition flex items-center justify-center gap-2"><Icon.Eye/>View Images</button>
              </div>
            )}
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Competitions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.competitions.map((c,i)=>
              <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition">
                <div className="flex justify-between items-start mb-4"><h3 className="font-semibold text-white">{c.name}</h3><span className="text-blue-400 text-sm">{c.year}</span></div>
                <button onClick={()=>openGallery(c.images)} className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition flex items-center justify-center gap-2"><Icon.Eye/>View Images</button>
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-12 border border-blue-500/30 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">I'm always interested in hearing about new opportunities, projects, or just having a chat.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {/* Email Card */}
              <a href={`mailto:${DATA.header.email}`} className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all flex flex-col items-center gap-4">
                <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 group-hover:scale-110 transition-transform">
                  <Icon.Mail />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-sm text-gray-400 group-hover:text-blue-300">Send an email</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a href={DATA.header.whatsapp} target="_blank" rel="noreferrer" className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500 hover:bg-gray-800/80 transition-all flex flex-col items-center gap-4">
                <div className="p-4 bg-green-500/10 rounded-full text-green-400 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <p className="text-sm text-gray-400 group-hover:text-green-300">Chat with me</p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a href={DATA.header.linkedin} target="_blank" rel="noreferrer" className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400 hover:bg-gray-800/80 transition-all flex flex-col items-center gap-4">
                <div className="p-4 bg-blue-400/10 rounded-full text-blue-400 group-hover:scale-110 transition-transform">
                  <Icon.Linkedin />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">LinkedIn</h3>
                  <p className="text-sm text-gray-400 group-hover:text-blue-300">Connect professionally</p>
                </div>
              </a>

              {/* GitHub Card */}
              <a href={DATA.header.github} target="_blank" rel="noreferrer" className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 hover:bg-gray-800/80 transition-all flex flex-col items-center gap-4">
                <div className="p-4 bg-purple-500/10 rounded-full text-purple-400 group-hover:scale-110 transition-transform">
                  <Icon.Github />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">GitHub</h3>
                  <p className="text-sm text-gray-400 group-hover:text-purple-300">View code</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} {DATA.header.name}</p>
          <p className="text-gray-500 text-sm mt-2">Built with React + Tailwind</p>
        </div>
      </footer>

      {gallery.open && <ModalGallery images={gallery.images} onClose={()=>setGallery({open:false,images:[]})}/>}
    </div>
  );
}