import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lock, Star, ArrowRight, Zap } from 'lucide-react';
import { BOOKS } from '../constants';
import { Link } from 'react-router-dom';

export default function OnlineReading() {
  // Digital books that are not free (premium) or all digital books for paid members
  const digitalBooks = BOOKS.filter(book => book.isDigital || !book.isFree);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 bg-cosmic-purple/20 rounded-full mb-4"
          >
            <Zap className="text-cosmic-purple" size={32} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium <span className="text-cosmic-purple">Reading Lounge</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exclusive access to our entire digital library, new releases, and premium Malaysian heritage books.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {digitalBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to={`/read/${book.id}`}
                    className="px-6 py-3 bg-cosmic-purple text-white rounded-full font-bold flex items-center gap-2 hover:bg-cosmic-purple/80 transition-colors"
                  >
                    <BookOpen size={20} /> Read Now
                  </Link>
                </div>
                {!book.isFree && (
                  <div className="absolute top-4 right-4 bg-cosmic-purple text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Lock size={12} /> PREMIUM
                  </div>
                )}
                {book.isFree && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FREE
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-medium text-gray-300">{book.rating}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cosmic-purple transition-colors">{book.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{book.description}</p>
                <Link
                  to={`/read/${book.id}`}
                  className="text-cosmic-purple font-bold flex items-center gap-1 hover:underline"
                >
                  Start Reading <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 glass-card p-12 text-center bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20">
          <h2 className="text-3xl font-bold mb-4">Your Cosmic Library</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Enjoy unlimited reading on any device. Your progress is synced across all your cosmic devices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
              Sync Across Devices
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
              Offline Reading
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
              Custom Reader Themes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
