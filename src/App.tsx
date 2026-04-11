import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Sparkles, Globe, Cloud, Code, Paintbrush, Boxes, GitBranch, Terminal,
  Menu, X, ExternalLink, Quote, Mail, Phone,
  MapPin, ArrowUp, Send, CheckCircle, AlertCircle, Layers, Zap, Crown
} from 'lucide-react';
// Types
interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'cloud';
  icon: React.ReactNode;
  tags: string[];
  link: string;
  linkText: string;
}

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Data
const projects: Project[] = [
  {
    id: 1,
    title: 'Thikana Dhabla',
    description: 'Heritage website with family tree visualization',
    category: 'web',
    icon: <Globe className="w-10 h-10" />,
    tags: ['React', 'SCSS'],
    link: 'https://www.thikanadhabla.in',
    linkText: 'Visit Site'
  },
  {
    id: 2,
    title: 'Deep Architect',
    description: 'Architecture firm portfolio with project showcase',
    category: 'web',
    icon: <Layers className="w-10 h-10" />,
    tags: ['Next.js', 'Tailwind'],
    link: 'https://deeparchitect.in',
    linkText: 'View Portfolio'
  },
  {
    id: 3,
    title: 'JuzVents',
    description: 'Event management platform with booking system',
    category: 'web',
    icon: <Sparkles className="w-10 h-10" />,
    tags: ['Vue', 'GSAP'],
    link: 'https://www.juzvents.com',
    linkText: 'Explore'
  },
{
  id: 4,
  title: '3-Tier AWS App',
  description: 'VPC, EC2, RDS, ALB architecture setup',
  category: 'cloud',
  icon: <Cloud className="w-10 h-10" />,
  tags: ['AWS', 'CloudFormation'],
  link: 'https://github.com/singhrajvardhan?tab=repositories',
  linkText: 'Case Study'
},
{
  id: 5,
  title: 'K8s Microservices',
  description: 'K3s cluster with Helm charts & monitoring',
  category: 'cloud',
  icon: <Boxes className="w-10 h-10" />,
  tags: ['Kubernetes', 'Docker'],
  link: 'https://github.com/singhrajvardhan?tab=repositories',
  linkText: 'View Repo'
},
{
  id: 6,
  title: 'CI/CD Pipeline',
  description: 'GitHub Actions deployment to EC2',
  category: 'cloud',
  icon: <GitBranch className="w-10 h-10" />,
  tags: ['CI/CD', 'Docker'],
  link: 'https://github.com/singhrajvardhan?tab=repositories',
  linkText: 'See Pipeline'
}
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Rajvardhan doesn't just build websites – he creates digital ecosystems. His cloud insight saved us months of development time.",
    author: 'Ramendra Singh'
  },
  {
    id: 2,
    quote: "A rare talent: design finesse and infrastructure depth combined. He's our go-to for all web projects.",
    author: 'Rupesh Singh'
  },
  {
    id: 3,
    quote: "The website Rajvardhan created for our event management business has significantly boosted our online presence and bookings.",
    author: 'JuzVents Team'
  }
];

const services: Service[] = [
  { id: 1, title: 'Frontend Development', description: 'HTML, CSS, JavaScript, React', icon: <Code className="w-10 h-10" /> },
  { id: 2, title: 'UI/UX Design', description: 'Figma, prototypes, design systems', icon: <Paintbrush className="w-10 h-10" /> },
  { id: 3, title: 'AWS Cloud', description: 'EC2, S3, Lambda, VPC', icon: <Cloud className="w-10 h-10" /> },
  { id: 4, title: 'Kubernetes', description: 'Orchestration, Helm charts', icon: <Boxes className="w-10 h-10" /> },
  { id: 5, title: 'CI/CD Pipelines', description: 'GitHub Actions, Jenkins', icon: <GitBranch className="w-10 h-10" /> },
  { id: 6, title: 'Infrastructure as Code', description: 'Terraform, CloudFormation', icon: <Terminal className="w-10 h-10" /> }
];

const skills = ['UI/UX Design', 'AWS', 'Docker', 'CI/CD', 'Linux', 'React', 'Kubernetes'];

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

// Components
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#03050b]/80 backdrop-blur-xl border-b border-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Rajvardhan
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-slate-400 hover:text-white transition-colors duration-300 font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-[#03050b]/95 backdrop-blur-xl border-b border-purple-500/20"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors py-2 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {[
        { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, href: 'https://github.com/singhrajvardhan', label: 'GitHub' },
        { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, href: 'https://www.linkedin.com/in/rajvardhan-singh-5b76a93a7/', label: 'LinkedIn' },
        { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, href: 'https://www.instagram.com/webbyraj/', label: 'Instagram' }
      ].map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#14182a] border border-purple-500/30 flex items-center justify-center text-slate-400 hover:bg-purple-500 hover:text-white hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/15" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-purple-500/30 backdrop-blur-sm mb-8">
              <Crown className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Web & Cloud Artisan</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">where </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                beauty
              </span>
              <br />
              <span className="text-white">meets </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                infrastructure
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10">
              I'm Rajvardhan – I craft digital masterpieces and the cloud that powers them. Every detail matters.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#portfolio" className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-[1px] bg-[#03050b] rounded-full" />
                <span className="relative flex items-center gap-2 text-white">
                  <Sparkles className="w-5 h-5" /> Witness the Work
                </span>
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full font-semibold border border-white/10 hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 text-white">
                <Send className="w-5 h-5" /> Collaborate
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-rows-2 gap-6 perspective-1000"
          >
            <SphereCard
              icon={<Globe className="w-12 h-12" />}
              title="Web Dev"
              description="4 projects · UI/UX, responsive"
              delay={0}
            />
            <SphereCard
              icon={<Cloud className="w-12 h-12" />}
              title="Cloud & DevOps"
              description="docker · k8s · terraform"
              delay={0.2}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SphereCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ y: 0, rotateX: 0 }}
      animate={{ y: [-10, 10, -10], rotateX: [0, 2, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
      className="bg-[#14182a]/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 hover:border-purple-500/50 transition-all duration-500 group"
    >
      <div className="bg-gradient-to-br from-purple-500 to-cyan-400 bg-clip-text">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mt-6 mb-3">{title}</h3>
      <p className="text-slate-400">{description}</p>
      <div className="flex gap-3 mt-6 text-slate-500">
        <span className="text-sm">React</span>
        <span className="text-sm">Figma</span>
        <span className="text-sm">AWS</span>
      </div>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 mb-6">
              The Alchemist
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Design
              </span>
              <span className="text-white"> · Code · </span>
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Scale</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-[#14182a] rounded-3xl p-3 border border-purple-500/20">
                <img
                  src="/logo.png"
                  alt="Rajvardhan Singh"
                  className="w-full rounded-3xl object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
              <p className="text-xl text-slate-300 leading-relaxed">
                I started as a frontend artist, then fell into the rabbit hole of distributed systems. Now I create holistic experiences – from pixel-perfect UIs to auto-scaling clusters.
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="group px-5 py-3 rounded-full bg-white/5 border border-purple-500/20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:border-transparent transition-all duration-300 cursor-default"
                  >
                    <span className="flex items-center gap-2 text-slate-300 group-hover:text-white">
                      <Zap className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
                      {skill}
                    </span>
                  </span>
                ))}
              </div>

              <a
                href="/rajcv.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300 text-white font-semibold"
              >
                <Terminal className="w-5 h-5" /> Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 mb-6">
              Disciplines
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Craft
              </span>
              <span className="text-white"> · </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Engineer</span>
              <span className="text-white"> · Automate</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="group bg-[#14182a]/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/15 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500 text-center"
              >
                <div className="bg-gradient-to-br from-purple-500 to-cyan-400 bg-clip-text mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, builds: 0, tools: 0 });

  const targetStats = { projects: 4, builds: 3, tools: 15 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        projects: Math.round(targetStats.projects * easeOut),
        builds: Math.round(targetStats.builds * easeOut),
        tools: Math.round(targetStats.tools * easeOut)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-6 lg:mx-16 xl:mx-24 bg-[#0c0f1a] rounded-[4rem] p-12 lg:p-16 border border-purple-500/20 shadow-2xl"
    >
      <div className="flex flex-wrap justify-around gap-12">
        {[
          { value: counts.projects, label: 'Web Projects', suffix: '+' },
          { value: counts.builds, label: 'Cloud Builds', suffix: '' },
          { value: counts.tools, label: 'Tools Mastered', suffix: '+' }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-slate-400 mt-2 text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'web' | 'cloud'>('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  const handleFilter = (newFilter: 'all' | 'web' | 'cloud') => {
    setIsAnimating(true);
    setFilter(newFilter);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 text-orange-300 mb-6">
              Masterworks
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Web
              </span>
              <span className="text-white"> · </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Cloud</span>
              <span className="text-white"> · Fusion</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center gap-4 mb-12 flex-wrap">
            {(['all', 'web', 'cloud'] as const).map((btn) => (
              <button
                key={btn}
                onClick={() => handleFilter(btn)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === btn
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 border border-purple-500/20 text-slate-400 hover:border-purple-500/40 hover:text-white'
                }`}
              >
                {btn.charAt(0).toUpperCase() + btn.slice(1)}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimating ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group bg-[#14182a]/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/15 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
                    {project.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 border border-purple-500/20 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors group/link"
                  >
                    {project.linkText}
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 mb-6">
              Praise
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="text-white">Whispers from </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Clients</span>
            </h2>
          </motion.div>

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-[#14182a]/80 backdrop-blur-xl rounded-[3rem] p-10 lg:p-16 border border-purple-500/20 shadow-2xl text-center"
          >
            <Quote className="w-12 h-12 text-purple-400 mx-auto mb-8" />
            <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed mb-10">
              &quot;{testimonials[current].quote}&quot;
            </p>
            <h4 className="text-lg font-semibold text-white">{testimonials[current].author}</h4>
          </motion.div>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus('idle');

  try {
    const formData = new FormData(e.currentTarget); // ✅ FIX HERE

    const data = Object.fromEntries(formData.entries());

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_key: "fc9c0f68-9961-411e-8a73-c3f600f76de9",
        ...data
      })
    });

    if (response.ok) {
      setStatus("success");
      e.currentTarget.reset(); // clear form
    } else {
      setStatus("error");
    }

  } catch (error) {
    setStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 text-green-300 mb-6">
              Connect
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Initiate
              </span>
              <span className="text-white"> Creation</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 bg-[#0c0f1a] rounded-[4rem] p-10 lg:p-16 border border-purple-500/20">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Dream big?</h3>
              <p className="text-xl text-slate-400 mb-10">Let's build something unforgettable.</p>

              <div className="space-y-6">
                <a href="mailto:rajvardhancoder@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  rajvardhancoder@gmail.com
                </a>

                <a href="tel:+919770289936" className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  +91 97702 89936
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  Indore, Madhya Pradesh, India
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 rounded-full bg-white/5 border border-purple-500/20 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-slate-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 rounded-full bg-white/5 border border-purple-500/20 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-slate-500"
              />
              <textarea
                name="message"
                placeholder="Tell me your vision..."
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 rounded-3xl bg-white/5 border border-purple-500/20 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-slate-500 resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 rounded-full font-semibold overflow-hidden disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-100 hover:opacity-90 transition-opacity" />
                <div className="absolute inset-[1px] bg-[#03050b] rounded-full" />
                <span className="relative flex items-center justify-center gap-3 text-white">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </span>
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-3 text-green-400 justify-center"
                  >
                    <CheckCircle className="w-5 h-5" /> Message sent successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-3 text-red-400 justify-center"
                  >
                    <AlertCircle className="w-5 h-5" /> Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0c0f1a] rounded-t-[4rem] pt-20 pb-10 border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              Rajvardhan
            </h3>
            <p className="text-slate-500">Web + Cloud · {new Date().getFullYear()}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-slate-400 hover:text-white hover:pl-2 transition-all duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="space-y-2">
              {[
                { label: 'GitHub', href: 'https://github.com/singhrajvardhan' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajvardhan-singh-5b76a93a7/' },
                { label: 'Instagram', href: 'https://www.instagram.com/webbyraj/' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 hover:text-white hover:pl-2 transition-all duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 pt-8 border-t border-purple-500/10">
          <p>© {new Date().getFullYear()} — Infused with creativity ✨</p>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#14182a] border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-purple-500/30 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

// JSON-LD Component
function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajvardhan Singh',
    url: 'https://www.rajvardhansingh.in',
    sameAs: [
      'https://github.com/singhrajvardhan',
      'https://www.linkedin.com/in/rajvardhan-singh-5b76a93a7/',
      'https://www.instagram.com/webbyraj/'
    ],
    jobTitle: 'Web Developer',
    worksFor: { '@type': 'Organization', name: 'Freelance' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'India'
    },
    description: 'Web developer specializing in React, JavaScript, and modern frontend technologies.'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Main App
export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#03050b] text-slate-300 antialiased">
      <Header />
      <SocialLinks />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <JsonLd />
    </div>
  );
}
