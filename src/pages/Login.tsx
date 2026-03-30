import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book as BookIcon, Lock, Mail, Github, Chrome, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flyingBooks, setFlyingBooks] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Generate random flying books
    const books = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    }));
    setFlyingBooks(books);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate('/');
  };

  return (
    <div className="min-h-screen cosmic-gradient flex items-center justify-center p-4 overflow-hidden relative">
      {/* Flying Books Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {flyingBooks.map((book) => (
          <motion.div
            key={book.id}
            initial={{ 
              x: `${book.x}vw`, 
              y: '110vh', 
              rotate: book.rotation,
              opacity: 0 
            }}
            animate={{ 
              y: '-10vh',
              rotate: book.rotation + 360,
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{ 
              duration: book.duration, 
              repeat: Infinity, 
              delay: book.delay,
              ease: "linear"
            }}
            className="absolute text-white/20"
          >
            <BookIcon size={book.size} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="book-container"
        >
          <div className={`book ${isFlipped ? 'flipped' : ''}`}>
            <div className="book-spine" />
            
            {/* Front Cover - The "Access" Page */}
            <div className="book-front bg-gradient-to-br from-cosmic-purple to-cosmic-blue p-8 flex flex-col items-center justify-center text-center shadow-2xl">
              <div className="mb-8 p-4 bg-white/20 rounded-full backdrop-blur-md">
                <BookIcon size={64} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Cosmic Books</h1>
              <p className="text-white/80 mb-12">Open the book to unlock your universe of knowledge.</p>
              
              <button
                onClick={() => setIsFlipped(true)}
                className="group flex items-center gap-2 bg-white text-cosmic-black px-8 py-3 rounded-full font-bold hover:bg-cosmic-black hover:text-white transition-all"
              >
                Open Book <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-12 text-xs text-white/60 uppercase tracking-widest">
                Malaysia Edition
              </div>
            </div>

            {/* Back Cover - The Login Form */}
            <div className="book-back p-8 flex flex-col shadow-2xl border-l border-white/10">
              <button
                onClick={() => setIsFlipped(false)}
                className="mb-6 flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={16} /> Back to Cover
              </button>
              
              <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
              <p className="text-gray-400 text-sm mb-8">Sign in to continue your journey.</p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-cosmic-purple transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-cosmic-purple transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-white/10 bg-white/5 text-cosmic-purple focus:ring-cosmic-purple" />
                    <span className="text-gray-400">Remember me</span>
                  </label>
                  <a href="#" className="text-cosmic-purple hover:underline">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cosmic-purple hover:bg-cosmic-purple/80 py-3 rounded-lg font-bold transition-all mt-4"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8">
                <div className="relative flex items-center justify-center mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <span className="relative px-4 bg-[#1e293b] text-xs text-gray-500 uppercase">Or continue with</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 py-2 rounded-lg transition-all">
                    <Chrome size={18} />
                    <span className="text-sm">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 py-2 rounded-lg transition-all">
                    <Github size={18} />
                    <span className="text-sm">GitHub</span>
                  </button>
                </div>
              </div>

              <p className="mt-auto text-center text-sm text-gray-400">
                Don't have an account? <Link to="/signup" className="text-cosmic-purple font-bold hover:underline">Sign up</Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
