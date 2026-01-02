import React, { useState, useEffect } from 'react';

// --- SVG Icons ---
const Icon = {
  Download: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Github: () => <svg width="28" height="28" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
  Linkedin: () => <svg width="28" height="28" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Instagram: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  Eye: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Briefcase: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  Graduation: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Palette: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
};

// --- DATA ---
const DATA = {
  header: { 
    name: 'Badr Eldin Qabbari', 
    title: 'Software Engineer', 
    subtitle: 'Full-Stack Developer | ASP.NET • Flutter  • SQL Server', 
    location: 'Alexandria, Egypt', 
    email: 'badreldinahmedqabbari@gmail.com', 
    phone: '+20 128 494 0906', 
    whatsapp: 'https://wa.me/201284940906', 
    linkedin: 'https://www.linkedin.com/in/badr-eldin-qabbari-5b541b2b9', 
    github: 'https://github.com/BadrQabbari274', 
    instagram: 'https://www.instagram.com/badr_qabbari274?igsh=MTJ0ODV0cDJqdHZ1Ng==',
    profileImage: 'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870109/profile_image_f7i4zl.jpg',
  },
  activities: [
    { 
      title: 'My Activities Gallery', 
      images: [
      
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957266/%D8%B5%D9%88%D8%B1%D8%A9_%D9%88%D8%A7%D8%AA%D8%B3%D8%A7%D8%A8_%D8%A8%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE_2023-10-21_%D9%81%D9%8A_16.38.30_232d7808_zisxqm.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957266/WhatsApp_Image_2023-11-30_at_22.14.54_4617d7f7_djyhfm.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957264/WhatsApp_Image_2023-11-30_at_20.50.14_5cc74110_uiyhji.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/c_crop,g_north_west,h_621,w_539,x_181/WhatsApp_Image_2023-12-10_at_01.48.06_b2ed642c_fdsyzr.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957262/402033733_684943557064149_1718479183318703315_n_xlwyti.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957262/WhatsApp_Image_2025-12-28_22-59-27_qq6yhs.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957262/WhatsApp_Image_2025-12-23_at_8.41.44_PM_xzyagb.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957260/WhatsApp_Image_2025-12-23_at_8.41.41_PM_depnfc.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957257/WhatsApp_Image_2025-12-23_at_8.41.33_PM_kjfmtm.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957917/WhatsApp_Image_2025-11-18_at_9.44.15_PM_thrlxk.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766959067/WhatsApp_Image_2025-12-23_at_8.41.43_PM_qdw10k.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767033558/IMG-20250808-WA0048_viejwj.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767033558/IMG-20250808-WA0030_fy0ly5.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767033557/IMG-20250809-WA0003_dd462q.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766957261/WhatsApp_Image_2025-12-28_23-00-11_ap8l2m.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767037323/IMG-20250719-WA0016_cvcmfj.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767037316/IMG-20250719-WA0013_uoqlsw.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767037315/20250812_100856_zgphkg.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767037889/20250726_123739_vz4ck1.jpg',
        'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767037890/20251224_130439_pbdbec.jpg'
        
      ] 
    }
  ],
  // Updated "Killer" Summary
  summary: "A visionary Software Engineer and Full-Stack Developer with an unrelenting drive for innovation. I don't just write code; I architect scalable, high-performance solutions that bridge the gap between complex logic and intuitive user experiences. With deep expertise in the .NET ecosystem and a creative mindset honed through visual arts, I transform abstract concepts into robust, enterprise-grade applications. From algorithms to architecture, I am committed to engineering excellence.",
  skills: {
    technical: [
      { category: 'Programming Languages', items: ['C++ (Problem Solving & Algorithms)', 'C# (Desktop & Web Applications)', 'Python (Multimedia Processing)', 'SQL (Database Management)'] },
      { category: 'Web Development', items: ['ASP.NET MVC', 'ASP.NET Web API', 'RESTful API Design', 'Entity Framework Core'] },
      { category: 'Desktop Development', items: ['Windows Presentation Foundation (WPF)', 'MVVM Architecture', 'Prism Library'] },
      { category: 'Frameworks & Tools', items: ['Flutter (Cross-Platform)', '.NET Core', 'MS SQL Server', 'Git & DevOps'] },
      { category: 'Design & Creative', items: ['Figma UI/UX', 'Adobe Photoshop', 'Canva'] },
      { category: 'IT Infrastructure', items: ['Network Administration', 'Hardware Troubleshooting', 'System Configuration', 'Server Management'] }
    ],
    soft: ['Strategic Leadership', 'Public Speaking', 'Analytical Thinking', 'Team Synergy', 'Adaptability', 'Creative Problem Solving']
  },
  projects: [{ 
    id: 'p3', 
    title: 'Full-Stack E-Commerce Platform', 
    tech: ['Flutter', 'ASP.NET Web API', 'SQL Server', 'JWT Auth'], 
    duration: '2025 - Present', 
    description: 'An advanced e-commerce ecosystem featuring a high-performance mobile application built with Flutter and a secure RESTful API back-end. The system handles complex operations including secure user authentication (JWT), dynamic product cataloging, shopping cart logic, and real-time order processing.', 
    images: [] 
    },{
      id: 'p4',
      title: "Green Pack",
      duration: "2025 – 2026",
      description: "Smart eco-reward mobile application built with Flutter and Firebase Realtime Database. The app is connected to a physical recycling box powered by Arduino and ESP modules. When a customer inserts recyclable items, points are automatically sent to their account in real time, encouraging sustainable behavior through a digital reward system.",
      tech: [
        "Flutter",
        "Firebase Realtime Database",
        "Arduino",
        "ESP8266 / ESP32",
        "IoT"
      ],
      images: []
    },
    { id: 'p1', title: 'School Management System', tech: ['MVC.NET Core', 'SQL Server', 'Entity Framework'], duration: '2025', description: 'A comprehensive enterprise web application for educational institutions featuring student registration, attendance tracking, grade management, and role-based security access.', images: [] },
    { id: 'p2', title: 'Gym Management System', tech: ['WPF', 'Entity Framework', 'SQL Server'], duration: '2024', description: 'A high-performance desktop application for fitness centers, managing member subscriptions, trainer schedules, and financial reporting with a modern UI.', images: [] }
    
    
    
    
  ],
  // Merged Timeline Data (Education, Work, Activities)
  journey: [
    { 
      id: 1, type: 'education', year: '2023 – Present', title: 'Computer Science Major', org: 'Fathalla International Applied Technology School (FIATS)',
      desc: 'Specializing in Software Engineering. Relevant Coursework: Algorithms, Database Management, Web & Desktop Development (ASP.NET, WPF), Network Basics.',
      tags: ['GPA 4.0', 'Top of Class']
    },
    { 
      id: 2, type: 'work', year: '2025', title: 'Web Developer – ASP.NET MVC Project', org: 'FIATS School Project',
      desc: 'Participated in full software development lifecycle. Designed database architecture using SQL Server. Developed responsive UI components and core business logic. Delivered scalable code following MVC patterns.',
      tags: ['ASP.NET', 'MVC', 'SQL']
    },
    { 
      id: 3, type: 'activity', year: '2024', title: 'Soft Skills Instructor', org: 'IATS Camp, 6th of October City',
      desc: 'Led workshops on communication and leadership for diverse student groups.',
      tags: ['Leadership', 'Mentoring']
    },
    { 
      id: 4, type: 'work', year: '2024', title: 'IT Support Specialist', org: 'Baraem Egypt Digital',
      desc: 'Provided technical support for digital learning platforms. Assisted students/instructors with technical issues, ensuring smooth operation of online learning systems.',
      tags: ['EdTech', 'Support']
    },
    { 
      id: 5, type: 'work', year: '2024', title: 'Technical Support – IT Dept', org: 'Fathalla Market',
      desc: 'Provided hardware/software troubleshooting. Assisted staff with system installations and updates. Monitored system performance to ensure operational stability.',
      tags: ['Hardware', 'Networking']
    },
    { 
      id: 6, type: 'activity', year: '2021 – 2024', title: 'Sea Scout Member', org: 'Alexandria Scout Group - Al-Haramain Youth Center',
      desc: 'Active member for 3 years. Developed survival skills, teamwork, and community service discipline within the Marine Scouts division.',
      tags: ['Scouts', 'Teamwork']
    },
    { 
      id: 7, type: 'work', year: '2023', title: 'Technical Support Specialist', org: 'PC World',
      desc: 'Installed and configured computer hardware/software. Diagnosed IT-related issues and provided customer training and technical guidance.',
      tags: ['Maintenance', 'Customer Service']
    }
  ],
  certifications: [
    { name: 'Applications of AI', org: 'Great Learning', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870112/Screenshot_2024-06-05_145406_pce0ym.png'] },
    { name: 'Human Resources Training', org: 'Bright Bridge Center', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870110/HR_h0tk69.jpg'] },
    { name: 'English International Certificate', org: 'Bright Bridge Center', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/a_-90/English_wckfmd.jpg'] },
    { name: 'Effective Leadership', org: 'HP LIFE', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870114/Screenshot_2024-03-09_102254_tuespo.png'] },
    { name: 'Business Communications', org: 'HP LIFE', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870114/Screenshot_2024-03-09_102254_tuespo.png'] },
    { name: 'Get Started with Figma', org: 'Coursera', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1766870113/Get_started_with_figma_w6wmxl.png'] }
  ],
  competitions: [
    { name: 'Egyptian Collegiate Programming Contest (ECPC)', year: '2025', images: ['https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767035830/WhatsApp_Image_2025-12-29_at_9.16.28_PM_xweiqz.jpg','https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767035830/WhatsApp_Image_2025-12-29_at_9.15.26_PM_booa7i.jpg','https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto/v1767035830/WhatsApp_Image_2025-12-29_at_9.16.02_PM_c8qzpc.jpg'] },
    { name: 'International Science and Engineering Fair (ISEF)', year: '2023', images: [] }
  ],
  artworks: [
    // Placeholders for your art - replace URLs when ready
    { url: 'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto//v1766959562/WhatsApp_Image_2025-12-29_at_12.05.01_AM_afq7jd.jpg' },
    { url: 'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto//v1766959561/WhatsApp_Image_2025-12-29_00-05-48_etmlsn.jpg' },
    { url: 'https://res.cloudinary.com/dmheu8ano/image/upload/f_auto,q_auto//v1766959563/WhatsApp_Image_2025-12-29_at_12.05.02_AM_fm6gud.jpg' }
  ],
  cv: { pdfUrl: 'https://drive.google.com/file/d/1eUnU_vU0IvHTnaQc86SOlHkiwnHuAxHp/view?usp=sharing' }
};

function ModalGallery({ images, onClose }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  if (!images?.length) return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"><div className="bg-gray-900 rounded-2xl p-8 max-w-md text-center border border-gray-700 shadow-2xl relative"><button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-red-500 transition text-2xl">✕</button><div className="text-6xl mb-4">📷</div><h3 className="text-xl font-bold mb-2">Gallery Empty</h3><p className="text-gray-400 mb-6">Images coming soon.</p><button onClick={onClose} className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition">Close</button></div></div>;
  
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-fade-in"><button onClick={onClose} className="absolute top-6 right-6 text-white text-4xl z-50 hover:text-gray-300 transition">✕</button><div className="max-w-6xl w-full relative"><div className="bg-transparent rounded-xl overflow-hidden shadow-2xl"><div className="h-[80vh] flex items-center justify-center"><img src={images[idx]} alt="" className="object-contain max-h-full max-w-full rounded-md shadow-[0_0_50px_rgba(0,0,0,0.5)]"/></div><div className="absolute inset-x-0 bottom-4 flex justify-between px-8"><button onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)} className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full transition text-white">← Prev</button><button onClick={() => setIdx((i) => (i + 1) % images.length)} className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full transition text-white">Next →</button></div></div></div></div>;
}

export default function Portfolio() {
  // ==========================================
  // 1. المتغيرات والـ Hooks (تتحط في الأول)
  // ==========================================
  const [gallery, setGallery] = useState({ open: false, images: [] });
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // (جديد) ضيف السطر ده هنا مع باقي الـ useState
  const [isVisible, setIsVisible] = useState(true); 

  // ==========================================
  // 2. الـ useEffect (تعديل دالة السكرول)
  // ==========================================
  useEffect(() => {
    let lastScrollY = window.scrollY; // متغير مساعد

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // (جديد) اللوجيك بتاع اختفاء الـ Navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // نازل لتحت -> اخفي
      } else {
        setIsVisible(true);  // طالع لفوق -> اظهر
      }
      lastScrollY = currentScrollY;

      // الكود القديم بتاعك
      setScrolled(currentScrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'certificates', 'art', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && currentScrollY >= (el.offsetTop - 100)) {
          setActiveSection(sec);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const openGallery = (imgs) => setGallery({ open: true, images: imgs || [] });

  const NavLink = ({ to, label, icon: IconComp }) => (
    <a href={to} className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all duration-300 group ${activeSection === to.replace('#','') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}>
      {IconComp && <IconComp />}
      {label}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === to.replace('#','') ? 'w-full' : 'w-0 group-hover:w-full'}`}/>
    </a>
  );
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
         <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"/>
         <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-purple-600/10 rounded-full blur-[100px] animate-pulse delay-1000"/>
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-500 transform
        ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5 py-3' : 'py-6'}
        ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
        `}
      >
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
    
    {/* Logo */}
    <div
      className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
    >
      BADR<span className="font-light text-white/50">.DEV</span>
    </div>

    {/* Navigation Links */}
    <div className="flex w-full overflow-x-auto scrollbar-hide">
      <div className="flex flex-nowrap justify-start md:justify-center gap-4 min-w-max">
        <NavLink to="#home" label="Home" />
        <NavLink to="#about" label="About" />
        <NavLink to="#skills" label="Skills" />
        <NavLink to="#journey" label="Education & Exp" />
        <NavLink to="#projects" label="Projects" />
        <NavLink to="#certificates" label="Certificates" />
        <NavLink to="#art" label="Gallery" />
        <NavLink to="#contact" label="Contact" />
      </div>
    </div>

  </div>
</nav>



      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            <span className="block text-white mb-2">{DATA.header.name}</span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Software Engineer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {DATA.header.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-200">
            <a href={DATA.cv.pdfUrl} target="_blank" rel="noreferrer" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2"><Icon.Download/> Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </a>
            <a href="#projects" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold backdrop-blur-sm transition-all hover:scale-105 flex items-center gap-2">
              <Icon.Eye/> Explore Work
            </a>
          </div>
          <div className="mt-12 flex gap-8 justify-center opacity-60 hover:opacity-100 transition-opacity">
            <a href={DATA.header.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-125 transition-all"><Icon.Github/></a>
            <a href={DATA.header.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-125 transition-all"><Icon.Linkedin/></a>
            <a href={DATA.header.instagram} target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-125 transition-all"><Icon.Instagram /></a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-20 space-y-32">
        
        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition-all duration-700"/>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Who Am I?</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8 border-l-4 border-blue-500 pl-6">
                  {DATA.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</div>
                    <div className="font-mono text-blue-300 text-sm truncate">{DATA.header.email}</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</div>
                    <div className="font-mono text-blue-300 text-sm">{DATA.header.location}</div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center perspective-1000">
                <div className="relative w-72 h-72 md:w-96 md:h-96 group-hover:rotate-y-12 transition-transform duration-700 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-50 blur-lg" />
                  <img
                    src={DATA.header.profileImage}
                    alt="Profile"
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/10"/>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">Technical Arsenal</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.skills.technical.map((sg, i) => (
              <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">{sg.category}</h3>
                <ul className="space-y-3">
                  {sg.items.map((it, j) => (
                    <li key={j} className="text-gray-400 flex items-start gap-3 text-sm group-hover:text-gray-200 transition-colors">
                      <span className="text-blue-500 mt-0.5"><Icon.Check/></span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Soft Skills Banner */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 flex flex-wrap justify-center gap-4">
             {DATA.skills.soft.map((s,i) => (
               <span key={i} className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition cursor-default">{s}</span>
             ))}
          </div>
        </section>

        {/* My Journey (Education & Experience Timeline) */}
        <section id="journey" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent inline-block">My Professional Journey</h2>
            <p className="text-gray-400 mt-4">Education, Experience & Leadership</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:-ml-px"></div>

            <div className="space-y-12">
              {DATA.journey.map((item, idx) => (
                <div key={item.id} className={`relative flex items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
                  
                  {/* Icon Node */}
                  <div className="absolute left-[20px] md:left-1/2 -ml-[20px] flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 group-hover:scale-125 transition-transform duration-300">
                    {item.type === 'education' && <span className="text-blue-400"><Icon.Graduation/></span>}
                    {item.type === 'work' && <span className="text-green-400"><Icon.Briefcase/></span>}
                    {item.type === 'activity' && <span className="text-yellow-400">★</span>}
                  </div>

                  <div className="hidden md:block w-1/2" />

                  <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-[#161616] p-6 rounded-xl border border-white/5 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-50"/>
                        <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wide text-blue-300 bg-blue-900/30 rounded-full">{item.year}</span>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <div className="text-sm font-semibold text-gray-400 mb-3">{item.org}</div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags?.map((t, k) => <span key={k} className="text-[10px] px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5">{t}</span>)}
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Button */}
            <div className="mt-16 text-center">
              <button onClick={() => openGallery(DATA.activities[0]?.images)} className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 transition-all flex items-center gap-2 mx-auto text-white">
                <Icon.Eye/> Open Activities Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent inline-block">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {DATA.projects.map((p) => (
              <div key={p.id} className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-80"/>
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
                   {/* Fallback pattern if no image */}
                   <div className="w-16 h-16 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-3xl">💻</div>
                </div>
                <div className="relative p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{p.title}</h3>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-500/20">{p.duration}</span>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t, i) => <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/5 group-hover:border-blue-500/30 transition-colors">{t}</span>)}
                  </div>
                  <button onClick={() => openGallery(p.images)} className="w-full py-3 bg-white/5 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-transparent">
                    <Icon.Eye/> View Gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="scroll-mt-24">
           <h2 className="text-3xl font-bold mb-10 border-l-4 border-yellow-500 pl-4">Certifications & Competitions</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...DATA.certifications, ...DATA.competitions].map((c, i) => (
                <div key={i} className="bg-[#111] p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-all flex flex-col justify-between group">
                  <div className="mb-4">
                     <div className="text-yellow-500 mb-2"><Icon.Check/></div>
                     <h3 className="font-bold text-white mb-1 group-hover:text-yellow-400 transition">{c.name}</h3>
                     <p className="text-sm text-gray-500">{c.org || c.year}</p>
                  </div>
                  <button onClick={() => openGallery(c.images)} className="text-sm text-blue-400 hover:text-white flex items-center gap-1 mt-auto">View Certificate →</button>
                </div>
              ))}
           </div>
        </section>

        {/* Creative Gallery (Art) */}
        <section id="art" className="scroll-mt-24">
          <div className="bg-[#111] rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"/>
             <div className="text-center mb-12">
               <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                 <span className="text-pink-500"><Icon.Palette/></span> Creative Gallery
               </h2>
               <p className="text-gray-400">Beyond code, I express creativity through visual arts.</p>
             </div>
             
             <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {DATA.artworks.map((art, i) => (
                  <div key={i} className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer" onClick={() => openGallery([art.url])}>
                     <img src={art.url} alt={art.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold text-lg border-b-2 border-pink-500 pb-1">{art.title}</span>
                     </div>
                  </div>
                ))}
             </div>
             
             <div className="mt-8 text-center">
                <button onClick={() => openGallery(DATA.artworks.map(a => a.url))} className="px-6 py-2 border border-pink-500/50 text-pink-400 rounded-full hover:bg-pink-500 hover:text-white transition">View All Artworks</button>
             </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 mb-10">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-3xl p-10 md:p-20 text-center border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">Let's Build Something <span className="text-blue-400">Amazing</span></h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href={`mailto:${DATA.header.email}`} className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-110 transition-transform flex items-center gap-2 shadow-xl">
                 <Icon.Mail/> Send Email
              </a>
              <a href={DATA.header.whatsapp} target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:scale-110 transition-transform flex items-center gap-2 shadow-xl">
                 <span>💬</span> WhatsApp
              </a>
              <a href={DATA.header.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold hover:scale-110 transition-transform flex items-center gap-2 shadow-xl">
                 <Icon.Linkedin/> LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">© {new Date().getFullYear()} Badr Eldin Qabbari. All rights reserved.</div>
          <div className="flex gap-6 text-gray-500">
             <a href="#home" className="hover:text-white transition">Home</a>
             <a href="#journey" className="hover:text-white transition">Journey</a>
             <a href="#projects" className="hover:text-white transition">Projects</a>
          </div>
        </div>
      </footer>

      {gallery.open && <ModalGallery images={gallery.images} onClose={() => setGallery({ open: false, images: [] })} />}
    </div>
  );
}