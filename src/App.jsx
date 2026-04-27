import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Sun, Moon, Briefcase, Award, Mail, ExternalLink, 
  CheckCircle2, Cloud, Zap, Globe, Cpu, ArrowRight, Phone
} from 'lucide-react';

const Section = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className={`py-24 px-6 max-w-6xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const experience = [
    {
      company: "Blueprint Technologies",
      role: "SAP CX Senior Consultant",
      period: "2023 - PRESENT",
      description: "Leading strategic V1 → V2 transitions. Architecting cross-module solutions with SAP Sales Cloud, Service Cloud & Enterprise Service Management.",
      skills: ["BPM", "Stakeholder Management", "Solution Architecture"]
    },
    {
      company: "Colgate-Palmolive",
      role: "SAP CX Inhouse Consultant",
      period: "2019 - 2022",
      description: "Key contributor in homogenizing splintered CRM systems and multiple service providers into a unified 'OneCRM' global application powered by SAP C4C. Led rollouts across 12 countries to achieve a singular, high-performance customer vision.",
      skills: ["System Homogenization", "Global Strategy", "End-to-End Implementation"]
    },
    {
      company: "Neeyamo",
      role: "Business Analyst",
      period: "2017 - 2019",
      description: "Bridged the gap between business needs and technical execution for Fortune 500 telecommunications giants using SAP Service Cloud and Employee Central Service Centre.",
      skills: ["Requirements", "Mapping", "ECSC"]
    }
  ];

  const certifications = [
    "SAP Sales Cloud Version 2",
    "SAP Service Cloud 2111",
    "SAP Integration Developer",
    "SAP Analytics Cloud",
    "SAP Business Data Cloud"
  ];

  return (
    <div className="min-h-screen transition-colors duration-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-[100] origin-left" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="glass px-8 py-4 rounded-full flex justify-between items-center shadow-xl">
          <motion.span className="text-xl font-extrabold tracking-tighter">
            KS<span className="text-cyan-400">.</span>
          </motion.span>
          <div className="flex items-center gap-6">
            <a href="#journey" className="hidden md:block text-sm font-semibold hover:text-cyan-400 transition-colors uppercase tracking-widest text-zinc-600 dark:text-zinc-400">Journey</a>
            <a href="#skills" className="hidden md:block text-sm font-semibold hover:text-cyan-400 transition-colors uppercase tracking-widest text-zinc-600 dark:text-zinc-400">Expertise</a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              {darkMode ? <Sun size={20} className="text-cyan-400" /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-cyan-400/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
        
        <div className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-500 font-mono text-xs tracking-widest uppercase mb-8 inline-block">
              Certified SAP CX Specialist
            </span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
              Karthik <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-500 font-black">Sridhar.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed mb-12 px-4">
              Bridging the gap between business strategy and technical execution. With end-to-end expertise across SAP Sales Cloud, Service Cloud, and Enterprise Service Management, I turn complex requirements into seamless implementations. Based in Hamburg and ready to elevate your SAP landscape across Germany.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="group px-10 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-400/20 transition-all flex items-center gap-2">
                Start a Conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Professional Journey */}
      <Section id="journey">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-4">Evolution</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight">Professional Journey</h3>
        </div>

        <div className="grid gap-8">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bento-card relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h4 className="text-sm font-mono text-cyan-400 mb-2">{exp.period}</h4>
                  <h5 className="text-3xl font-bold">{exp.company}</h5>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                  {exp.role}
                </div>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-3xl">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((s, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold tracking-wider uppercase border border-zinc-200 dark:border-zinc-700">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Expertise & Certs - Bento Grid */}
      <Section id="skills">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-4">Core Strengths</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight">Expertise Hub</h3>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7 bento-card bg-zinc-900 text-zinc-100 dark:bg-white dark:text-zinc-900 border-none shadow-2xl">
            <Zap className="text-cyan-400 mb-8" size={40} />
            <h4 className="text-3xl font-black mb-4">SAP CX Core</h4>
            <p className="opacity-70 text-lg mb-8">
              Full-lifecycle in Sales and Service Cloud implementation with a focus on mid-tier and large-tier industries complemented by a deep proficiency in <span className="text-cyan-400 dark:text-cyan-600 font-bold">Strategic BPM</span> and excellent <span className="text-cyan-400 dark:text-cyan-600 font-bold">Stakeholder Management</span>.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/10 dark:bg-zinc-100/10 border border-white/10">
                <Globe size={20} className="mb-2 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider">SAP Integration</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 dark:bg-zinc-100/10 border border-white/10">
                <Cpu size={20} className="mb-2 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider">SAP Analytics</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bento-card flex flex-col justify-between">
            <div>
              <Award className="text-cyan-400 mb-8" size={40} />
              <h4 className="text-2xl font-bold mb-6">Certifications</h4>
              <div className="space-y-4">
                {certifications.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle2 size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bento-card bg-cyan-400/5 border-cyan-400/20">
            <Cloud className="text-cyan-400 mb-8" size={40} />
            <h4 className="text-2xl font-bold mb-4">Strategic BPM</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              Expertise in Business Process Management—breaking down complex, multi-layered problems into simple, actionable solutions.
            </p>
          </div>

          <div className="md:col-span-7 bento-card">
            <Briefcase className="text-cyan-400 mb-8" size={40} />
            <h4 className="text-2xl font-bold mb-4">Stakeholder Management</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              Adept at managing global stakeholders, bridging the gap between high-level business vision and granular technical execution.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold tracking-widest uppercase text-zinc-600 dark:text-zinc-400">Communication</span>
              <span className="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold tracking-widest uppercase text-zinc-600 dark:text-zinc-400">Leadership</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="text-center pb-64">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-none">
            Let's build <br /> <span className="text-cyan-400 underline decoration-cyan-400/30">the future.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-8">
            <a 
              href="tel:+4917623685301" 
              className="w-full md:w-auto px-12 py-5 bg-white/5 border border-white/10 text-cyan-400 font-black rounded-full hover:scale-105 transition-all flex items-center justify-center gap-3 dark:bg-zinc-900/50"
            >
              <Phone size={22} />
              +49 176 23685301
            </a>
            <a 
              href="mailto:karthikexped@gmail.com" 
              className="w-full md:w-auto px-12 py-5 bg-cyan-400 text-zinc-900 font-black rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-3"
            >
              <Mail size={22} />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/karthik-sridhar-66408a187/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-12 py-5 glass font-black rounded-full hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <Globe size={22} />
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium opacity-40 uppercase tracking-widest text-zinc-600 dark:text-zinc-400">© 2026 Karthik Sridhar</p>
          <div className="flex gap-8 opacity-40">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600 dark:text-zinc-400">SAP CX Certified</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600 dark:text-zinc-400">Digital Transformation</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
