import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Zap, Globe, Unlock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BOOKS } from '../constants';
import BookCard from '../components/BookCard';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black/20 via-cosmic-black/60 to-cosmic-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
            alt="Cosmic Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-cosmic-purple/20 border border-cosmic-purple/50 text-cosmic-purple text-sm font-semibold mb-6">
                🌌 Malaysia's Premier Cosmic Bookstore
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                Unlock Worlds Beyond <br />
                <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-purple-400 bg-clip-text text-transparent">
                  Imagination
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Explore a vast universe of knowledge, from Malaysian heritage to the deepest reaches of science fiction. Join our elite reading club today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="px-8 py-4 bg-cosmic-purple hover:bg-cosmic-purple/80 rounded-full text-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105"
                >
                  Shop Now <ArrowRight size={20} />
                </Link>
                <Link
                  to="/read/free"
                  className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full text-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105"
                >
                  Read Free <BookOpen size={20} />
                </Link>
                <Link
                  to="/subscriptions"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-lg font-bold transition-all"
                >
                  View Plans
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-10 top-1/4 hidden lg:block"
        >
          <div className="glass-card p-4 w-48">
            <div className="flex items-center gap-2 mb-2">
              <Star className="text-yellow-400" size={16} fill="currentColor" />
              <span className="text-sm font-bold">4.9/5 Rating</span>
            </div>
            <p className="text-xs text-gray-400">Trusted by 10k+ Malaysian readers</p>
          </div>
        </motion.div>
      </section>

      {/* Featured Books */}
      <section className="py-24 bg-cosmic-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Discoveries</h2>
              <p className="text-gray-400">Hand-picked stellar reads for your collection.</p>
            </div>
            <Link to="/shop" className="text-cosmic-purple hover:underline flex items-center gap-1 font-semibold">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BOOKS.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Reading Access Section */}
      <section className="py-24 bg-cosmic-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="text-gray-400">Choose your reading experience based on your membership.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20"
            >
              <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Unlock className="text-green-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Free Reading Zone</h3>
              <p className="text-gray-400 mb-8">Access a curated selection of free books and guides. Perfect for casual readers and explorers.</p>
              <Link
                to="/read/free"
                className="inline-flex items-center gap-2 text-green-500 font-bold hover:underline"
              >
                Explore Free Books <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 bg-gradient-to-br from-cosmic-purple/10 to-transparent border-cosmic-purple/20"
            >
              <div className="bg-cosmic-purple/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-cosmic-purple" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Reading Lounge</h3>
              <p className="text-gray-400 mb-8">Unlock our entire digital library, exclusive releases, and high-quality Malaysian heritage books.</p>
              <Link
                to="/read/premium"
                className="inline-flex items-center gap-2 text-cosmic-purple font-bold hover:underline"
              >
                Access Premium Library <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscription Highlight */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-purple/10 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Join the Cosmic Elite 🌌</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get unlimited access to thousands of ebooks, exclusive discounts, and monthly physical book deliveries anywhere in Malaysia.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Unlimited Ebook access',
                  'Free shipping across Malaysia',
                  'Exclusive member-only events',
                  'Up to 30% off all physical books'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-200">
                    <div className="bg-cosmic-purple/20 p-1 rounded-full">
                      <Zap size={16} className="text-cosmic-purple" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/subscriptions"
                className="inline-block px-8 py-4 bg-white text-cosmic-black hover:bg-cosmic-purple hover:text-white rounded-full text-lg font-bold transition-all"
              >
                Start Free Trial
              </Link>
            </div>
            <div className="flex-1 relative">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800"
                alt="Reading Club"
                className="rounded-2xl shadow-2xl shadow-cosmic-purple/20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-6 max-w-[200px]">
                <p className="text-sm font-bold mb-1">Most Popular</p>
                <p className="text-2xl font-bold text-cosmic-purple">RM 39.90/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-cosmic-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-cosmic-purple" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-400 text-sm">Industry-standard encryption for all your transactions.</p>
            </div>
            <div className="text-center">
              <div className="bg-cosmic-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-cosmic-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Delivery</h3>
              <p className="text-gray-400 text-sm">Fast and reliable shipping to every corner of Malaysia.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-400 text-sm">Only the best editions and high-quality digital formats.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
