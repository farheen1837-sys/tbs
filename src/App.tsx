/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  ShieldCheck,
  Menu,
  X,
  MessageSquare,
  Globe,
  Zap,
  BarChart3
} from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Evolution", href: "#about" },
    { name: "Capability", href: "#expertise" },
    { name: "Nexus", href: "#contact" },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "bg-cyber-black/80 backdrop-blur-xl py-4 border-b border-cyber-gold/20" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-cyber-gold rounded-sm rotate-45 flex items-center justify-center">
            <Zap size={16} className="text-cyber-black -rotate-45" />
          </div>
          <span className="hidden sm:inline">TBS<span className="text-cyber-gold">_</span>SYSTEMS</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-cyber-gold hover:glow-text transition-all"
            >
              // {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/917450062599"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 196, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyber-gold text-cyber-black px-8 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] transition-all"
          >
            Initialize
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-cyber-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="md:hidden fixed inset-0 bg-cyber-black z-[49] pt-32 px-8 flex flex-col space-y-12"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-5xl font-display font-light border-b border-cyber-border pb-6 flex justify-between items-center group"
              >
                <span>{link.name}</span>
                <ArrowRight size={32} className="text-cyber-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <a
              href="https://wa.me/917450062599"
              className="mt-8 flex items-center justify-between bg-cyber-gold text-cyber-black p-8 rounded-sm"
            >
              <span className="text-lg font-black uppercase tracking-widest">Connect Now</span>
              <ArrowRight size={24} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BackgroundGrid = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen">
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black" />
    <motion.div 
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-cyber-gold/20 blur-[150px] rounded-full" 
    />
  </div>
);

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-cyber-gold/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyber-gold glow-text">
                PROTOCOL 024 // KOLKATA
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black leading-none tracking-tighter mb-10 text-white">
              FUTURE <br />
              <span className="text-transparent border-t-2 sm:border-t-4 border-cyber-gold bg-clip-text bg-gradient-to-r from-cyber-gold to-white py-2">GARMENT</span> <br />
              LOGISTICS.
            </h1>
            
            <p className="max-w-xl text-base sm:text-lg text-white/50 font-light leading-relaxed mb-12 border-l-2 border-cyber-gold/30 pl-6 sm:pl-8">
              Redefining readymade garment commission agency in the heart of Metiabruz. We don't just facilitate sales; we architect the supply chains of tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-cyber-black px-10 sm:px-12 py-5 sm:py-6 rounded-sm text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-cyber-gold transition-all"
              >
                Launch Engagement <ArrowRight size={18} />
              </motion.button>
              
              <div className="flex items-center gap-4 text-white/40">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <Globe size={16} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Global Standards</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="relative aspect-square glass rounded-sm overflow-hidden p-4 group"
          >
            <img 
              src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2087&auto=format&fit=crop"
              alt="Futuristic Textile"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-gold/20 to-transparent pointer-events-none" />
            
            {/* HUD Elements */}
            <div className="absolute top-8 left-8 text-cyber-gold font-mono text-[8px] tracking-[0.2em]">
              SCANNING_ACTIVE... <br />
              QC_VERIFIED: 100%
            </div>
            <div className="absolute bottom-8 right-8 text-right">
              <div className="text-4xl font-display font-black text-white glow-text">99.8%</div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-white/40">Throughput Index</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Capability = () => {
  const specs = [
    {
      id: "spec-1",
      icon: <TrendingUp className="text-cyber-gold" size={24} />,
      title: "ALGORITHMIC SALES",
      meta: "DATA_DRIVEN",
      desc: "Maximizing market penetration through strategic buyer-seller neural mapping."
    },
    {
      id: "spec-2",
      icon: <Building2 className="text-cyber-gold" size={24} />,
      title: "METIABRUZ HUB",
      meta: "CORE_NODAL",
      desc: "Prime tactical location allowing real-time response to shifting market demands."
    },
    {
      id: "spec-3",
      icon: <ShieldCheck className="text-cyber-gold" size={24} />,
      title: "SECURE CLEARANCE",
      meta: "VERIFIED",
      desc: "End-to-end transparent commissioning protocols protected by full auditability."
    },
    {
      id: "spec-4",
      icon: <BarChart3 className="text-cyber-gold" size={24} />,
      title: "GROWTH MATRIX",
      meta: "SCALABILITY",
      desc: "From local manufacturers to national wholesalers, we scale your operational reach."
    }
  ];

  return (
    <section id="expertise" className="py-20 sm:py-32 px-6 bg-cyber-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-cyber-gold mb-6 block">// SYSTEM CAPABILITIES</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight uppercase tracking-tighter">
              BEYOND <span className="text-cyber-gold italic">COMMISSION.</span> <br />
              WE ARE THE <span className="glow-text underline decoration-cyber-gold decoration-2 underline-offset-8">INFRASTRUCTURE.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {specs.map((spec, i) => (
            <motion.div 
              key={spec.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 sm:p-12 relative overflow-hidden group hover:border-cyber-gold/50 transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="text-6xl sm:text-8xl font-display font-black text-white">0{i+1}</span>
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 h-14 bg-white/5 flex items-center justify-center rounded-sm mb-6 sm:mb-8 group-hover:glow-border transition-all">
                  {spec.icon}
                </div>
                <div className="text-[10px] font-black tracking-widest text-cyber-gold mb-2">{spec.meta}</div>
                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase mb-4">{spec.title}</h3>
                <p className="text-white/50 font-light text-sm leading-relaxed max-w-sm">{spec.desc}</p>
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5 flex items-center gap-4 text-[10px] font-bold tracking-widest text-white/30">
                  <span>STATUS: OPTIMIZED</span>
                  <div className="w-2 h-2 rounded-full bg-cyber-gold animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Evolution = () => {
  return (
    <section id="about" className="py-20 sm:py-32 px-6 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-cyber-gold/5 blur-[100px] sm:blur-[200px] rounded-full mx-auto" />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 sm:gap-24">
        <div className="w-full lg:w-1/2">
          <motion.div 
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            className="relative px-4 sm:px-0"
          >
            <div className="absolute -top-6 sm:-top-10 -left-2 sm:-left-10 w-24 sm:w-40 h-24 sm:h-40 border-l border-t border-cyber-gold/30 pointer-events-none" />
            <div className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-10 w-24 sm:w-40 h-24 sm:h-40 border-r border-b border-cyber-gold/30 pointer-events-none" />
            
            <div className="aspect-[4/5] bg-white/5 rounded-sm overflow-hidden p-2 glass">
              <img 
                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2072&auto=format&fit=crop"
                alt="Factory Evolution"
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute top-1/2 -right-4 sm:-right-12 translate-x-1/2 bg-cyber-gold text-cyber-black p-4 sm:p-8 rounded-sm shadow-2xl rotate-3">
              <div className="text-2xl sm:text-4xl font-display font-black leading-none">2024</div>
              <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest mt-1">FOUNDATION_LINK</div>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <span className="text-xs font-black uppercase tracking-[0.5em] text-cyber-gold mb-6 sm:mb-8 block">// LEGACY + VISION</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mb-8 sm:mb-10 leading-tight uppercase tracking-tighter">
            Architecting the <span className="text-cyber-gold italic">Sales Framework</span> of the Future.
          </h2>
          <div className="space-y-6 sm:space-y-8 text-white/60 font-light leading-relaxed text-base sm:text-lg">
            <p>
              Tirupati Balajee Sales (TBS) operates at the vertex of traditional craftsmanship and modern market efficiency. We are stewards of the textile heritage in West Bengal, empowered by a forward-thinking mindset.
            </p>
            <p className="border-l-4 border-cyber-gold pl-6 sm:pl-8 py-4 bg-white/5">
              "Our mission is to establish a zero-friction commerce environment where manufacturers achieve maximum yield and buyers secure premium quality through a verified, transparent system."
            </p>
          </div>
          
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 border-t border-white/10 pt-10 sm:pt-12">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-cyber-gold mb-2">LOCATION_NODE</div>
              <div className="text-xl sm:text-2xl font-display font-bold">KOLKATA_700082</div>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-cyber-gold mb-2">OPERATIONAL_STATE</div>
              <div className="text-xl sm:text-2xl font-display font-bold">ACTIVE_VERIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Nexus = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 px-6 bg-cyber-black relative overflow-hidden z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.5em] text-cyber-gold mb-8 block">// TERMINAL 01</span>
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-display font-black mb-12 sm:mb-16 leading-[0.8] tracking-widest text-white/5 active-glow select-none">
            NEXUS<br />CONNECT
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
            <div className="space-y-3 sm:space-y-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-cyber-gold">COORDINATES</div>
              <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base">
                Haldar Para Basti, Garden Reach, Maheshtala, West Bengal 700082
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-cyber-gold">VOICE_CHANNEL</div>
              <p className="text-white/60 font-light tracking-widest text-sm sm:text-base">
                +91 74500 62599 <br />
                +91 99037 77911
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-cyber-gold">DIGITAL_ID</div>
              <p className="text-white/60 font-light truncate text-sm sm:text-base">tbsindia23@gmail.com</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-cyber-gold">GST_REGISTRY</div>
              <p className="text-white/60 font-light text-sm sm:text-base">19AAWFT0108L1ZO</p>
            </div>
          </div>
        </div>

        <div className="glass p-8 sm:p-12 md:p-16 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 border-t border-r border-cyber-gold/40" />
          
          <h3 className="text-2xl sm:text-3xl font-display font-black uppercase mb-8 sm:mb-12 flex items-center gap-4">
            <Globe className="text-cyber-gold" />
            SOCIAL_FEED
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            <motion.a 
              href="https://www.facebook.com/tbsindia23"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10, scale: 1.02 }}
              className="flex items-center justify-between p-6 sm:p-8 bg-white/5 border border-white/10 hover:border-cyber-gold transition-all group"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 h-16 rounded-full bg-cyber-gold text-cyber-black flex items-center justify-center group-hover:glow-border transition-all">
                  <Facebook size={24} className="sm:hidden" />
                  <Facebook size={32} className="hidden sm:block" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] font-black tracking-widest text-cyber-gold mb-1 underline decoration-cyber-gold/30 uppercase">ESTABLISH_CONNECTION</div>
                  <div className="text-lg sm:text-2xl font-display font-bold tracking-tight">FACEBOOK_OFFICIAL</div>
                </div>
              </div>
              <ArrowRight size={20} className="text-white/20 group-hover:text-cyber-gold transition-colors" />
            </motion.a>

            <motion.a 
              href="https://www.instagram.com/tbsindia23"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10, scale: 1.02 }}
              className="flex items-center justify-between p-6 sm:p-8 bg-white/5 border border-white/10 hover:border-cyber-gold transition-all group"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 h-16 rounded-full bg-white text-cyber-black flex items-center justify-center group-hover:glow-border transition-all">
                  <Instagram size={24} className="sm:hidden" />
                  <Instagram size={32} className="hidden sm:block" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] font-black tracking-widest text-cyber-gold mb-1 underline decoration-cyber-gold/30 uppercase">SYNC_VISUALS</div>
                  <div className="text-lg sm:text-2xl font-display font-bold tracking-tight">INSTAGRAM_CORE</div>
                </div>
              </div>
              <ArrowRight size={20} className="text-white/20 group-hover:text-cyber-gold transition-colors" />
            </motion.a>

            <motion.a 
              href="https://wa.me/917450062599"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10, scale: 1.02 }}
              className="flex items-center justify-between p-6 sm:p-8 bg-cyber-gold/10 border border-cyber-gold/20 hover:border-cyber-gold transition-all group"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 h-16 rounded-full bg-cyber-gold text-cyber-black flex items-center justify-center group-hover:glow-border transition-all">
                  <MessageSquare size={24} className="sm:hidden" />
                  <MessageSquare size={32} className="hidden sm:block" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] font-black tracking-widest text-cyber-gold mb-1 underline decoration-cyber-gold/30 uppercase">DIRECT_UPLINK</div>
                  <div className="text-lg sm:text-2xl font-display font-bold tracking-tight">WHATSAPP_LIVE</div>
                </div>
              </div>
              <ArrowRight size={20} className="text-white/20 group-hover:text-cyber-gold transition-colors" />
            </motion.a>
          </div>

          <div className="mt-10 sm:mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 text-center">
            LAST_SYNC: {new Date().toLocaleTimeString()} // STATUS: ONLINE
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 sm:py-20 px-6 border-t border-white/5 relative z-10 bg-cyber-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 sm:gap-12">
        <div className="text-2xl sm:text-3xl font-display font-black tracking-tighter flex items-center gap-2">
          TBS<span className="text-cyber-gold animate-pulse">_</span>LOG
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 text-[10px] font-black uppercase tracking-[0.3em] text-white/30 font-display">
          <div className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
            <span className="text-cyber-gold mb-2">SYSTEM_LINKS</span>
            <a href="#about" className="hover:text-white transition-colors underline decoration-white/10 underline-offset-4">EVOLUTION</a>
            <a href="#expertise" className="hover:text-white transition-colors underline decoration-white/10 underline-offset-4">CAPABILITY</a>
            <a href="#contact" className="hover:text-white transition-colors underline decoration-white/10 underline-offset-4">NEXUS</a>
          </div>
          <div className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
             <span className="text-cyber-gold mb-2">STATUS</span>
             <span>UPTIME: 99.9%</span>
             <span>VERSION: 2.0.4B</span>
          </div>
        </div>

        <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 text-center md:text-right">
          © 2024 Tirupati Balajee Sales <br className="hidden sm:block" />
          ALL_RIGHTS_RESERVED // SYSTEM_SECURE
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber-black text-white selection:bg-cyber-gold selection:text-cyber-black overflow-x-hidden">
      <BackgroundGrid />
      
      {/* Mouse Follow Glow */}
      <motion.div 
        animate={{ 
          x: mousePos.x - 100, 
          y: mousePos.y - 100 
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        className="fixed top-0 left-0 w-[200px] h-[200px] bg-cyber-gold/10 blur-[80px] rounded-full pointer-events-none z-[100] hidden lg:block"
      />

      {/* Sticky Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyber-gold origin-left z-[60] shadow-[0_0_10px_#ffc400]" 
        style={{ scaleX }} 
      />

      <Navigation />
      
      <main>
        <Hero />
        <Capability />
        <Evolution />
        <Nexus />
      </main>
      
      <Footer />
      
      {/* Floating CTA */}
      <motion.a
        href="https://wa.me/917450062599"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 196, 0, 0.6)" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 w-16 h-16 sm:w-20 sm:h-20 bg-cyber-gold text-cyber-black flex items-center justify-center shadow-2xl transition-all"
      >
        <div className="relative">
          <MessageSquare size={24} className="sm:hidden" />
          <MessageSquare size={32} className="hidden sm:block" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full border-2 border-cyber-black" 
          />
        </div>
      </motion.a>

      {/* Decorative vertical line */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 h-64 w-px bg-gradient-to-b from-transparent via-cyber-gold/30 to-transparent z-40 hidden xl:block" />
    </div>
  );
}
