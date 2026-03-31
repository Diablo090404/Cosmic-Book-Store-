import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Book as BookIcon, Lock, Mail, Github, Chrome, ArrowLeft, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Particle component for the starfield
const StarField = () => {
  const stars = Array.from({ length: 150 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    color: ['#fff', '#e0f2fe', '#fef3c7', '#c084fc'][Math.floor(Math.random() * 4)],
  }));

  const shootingStars = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 50,
    duration: Math.random() * 2 + 3,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            width: '150px',
            left: `${star.x}%`,
            top: `${star.y}%`,
            rotate: '-45deg',
            opacity: 0,
          }}
          animate={{
            x: [0, -500],
            y: [0, 500],
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

export default function Login() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const bgX = useTransform(springX, [-500, 500], [-30, 30]);
  const bgY = useTransform(springY, [-500, 500], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#020617] flex items-center justify-center p-4 overflow-hidden relative"
      style={{ perspective: '1500px' }}
    >
      {/* Deep Space Background with Parallax Nebulae */}
      <motion.div 
        className="absolute inset-[-20%] pointer-events-none"
        style={{ x: bgX, y: bgY }}
      >
        <div 
          className="absolute inset-0 opacity-70 bg-cover bg-center mix-blend-screen"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2048&auto=format&fit=crop")',
            filter: 'hue-rotate(10deg) saturate(1.5) blur(4px)'
          }}
        />
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay animate-pulse"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2048&auto=format&fit=crop")',
            animationDuration: '25s'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/70 to-[#020617]" />
      </motion.div>

      <StarField />

      {/* Main Login Book */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -15, 0],
            rotateX: [0, 2, 0],
            rotateY: [0, -2, 0]
          }}
          transition={{ 
            opacity: { duration: 1.2, ease: "easeOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="book-container"
        >
          <div className={`book ${isFlipped ? 'flipped' : ''}`}>
            <div className="book-spine">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="flex flex-col items-center justify-center h-full gap-10 opacity-30">
                <div className="w-1 h-16 bg-gold-gradient rounded-full" />
                <div className="w-1 h-16 bg-gold-gradient rounded-full" />
                <div className="w-1 h-16 bg-gold-gradient rounded-full" />
              </div>
            </div>
            
            {/* Front Cover - Realistic Leather & Gold Foil */}
            <div className="book-front relative overflow-hidden group">
              {/* Leather Texture Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-50 mix-blend-overlay" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] p-10 flex flex-col items-center justify-between text-center">
                {/* Gold Border */}
                <div className="absolute inset-4 border-2 border-[#d4af37]/40 rounded-sm pointer-events-none" />
                <div className="absolute inset-6 border border-[#d4af37]/20 rounded-sm pointer-events-none" />

                <div className="mt-16 relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-12 opacity-30"
                  >
                    <div className="w-full h-full border-2 border-dashed border-[#d4af37] rounded-full" />
                  </motion.div>
                  <div className="p-8 bg-gradient-to-br from-[#d4af37] via-[#f97316] to-[#d4af37] rounded-full shadow-[0_0_50px_rgba(212,175,55,0.5)] relative z-10">
                    <BookIcon size={56} className="text-[#1e1b4b]" />
                  </div>
                </div>

                <div className="space-y-6 relative">
                  <h1 className="text-5xl font-serif font-bold tracking-tight text-[#d4af37] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    COSMIC BOOKS
                  </h1>
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
                  <p className="text-white/80 font-medium italic text-lg">Explore the Universe of Knowledge</p>
                </div>

                <button
                  onClick={() => setIsFlipped(true)}
                  className="group relative flex items-center gap-4 bg-[#d4af37] text-[#1e1b4b] px-12 py-5 rounded-sm font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  OPEN UNIVERSE <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="mb-10 text-[12px] text-[#d4af37]/70 uppercase tracking-[0.4em] font-bold">
                  EST. 2024 • MALAYSIA
                </div>
              </div>
            </div>

            {/* Back Cover - The Login Form (Inside Page) */}
            <div className="book-back bg-[#fcfcfc] p-12 flex flex-col shadow-2xl relative">
              {/* Paper Texture */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-15 pointer-events-none" />
              
              <button
                onClick={() => setIsFlipped(false)}
                className="mb-10 flex items-center gap-2 text-sm text-slate-500 hover:text-cosmic-purple transition-colors font-semibold"
              >
                <ArrowLeft size={20} /> Back to Cover
              </button>
              
              <div className="mb-10">
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-3">Welcome Back</h2>
                <div className="h-1.5 w-16 bg-cosmic-purple rounded-full" />
                <p className="text-slate-500 mt-5 text-lg">Sign in to continue your cosmic journey.</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full bg-slate-100 border-2 border-transparent rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-cosmic-purple focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full bg-slate-100 border-2 border-transparent rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-cosmic-purple focus:bg-white transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-cosmic-purple focus:ring-cosmic-purple" />
                    <span className="text-slate-500 group-hover:text-slate-700 transition-colors font-medium">Remember me</span>
                  </label>
                  <a href="#" className="text-cosmic-purple font-bold hover:underline">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cosmic-purple hover:bg-cosmic-purple/90 text-white py-5 rounded-2xl font-bold transition-all mt-6 shadow-xl shadow-cosmic-purple/30 hover:scale-[1.02] active:scale-[0.98] text-lg"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-12">
                <div className="relative flex items-center justify-center mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <span className="relative px-6 bg-[#fcfcfc] text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Or continue with</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <button className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:border-slate-200 py-4 rounded-2xl transition-all shadow-sm group">
                    <Chrome size={24} className="text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-slate-700">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:border-slate-200 py-4 rounded-2xl transition-all shadow-sm group">
                    <Github size={24} className="text-slate-900 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-slate-700">GitHub</span>
                  </button>
                </div>
              </div>

              <p className="mt-auto text-center text-slate-500 font-medium">
                Don't have an account? <Link to="/signup" className="text-cosmic-purple font-black hover:underline">Sign up</Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
