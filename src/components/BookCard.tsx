import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Eye, BookOpen } from 'lucide-react';
import { Book } from '../types';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: Book;
  key?: string | number;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Link
            to={`/book/${book.id}`}
            className="p-3 bg-white text-cosmic-black rounded-full hover:bg-cosmic-purple hover:text-white transition-colors"
          >
            <Eye size={20} />
          </Link>
          {book.isDigital && (
            <Link
              to={`/read/${book.id}`}
              className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <BookOpen size={20} />
            </Link>
          )}
          <button className="p-3 bg-cosmic-purple text-white rounded-full hover:bg-cosmic-blue transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
        {book.discountPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-yellow-400 mb-1">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-medium text-gray-300">{book.rating}</span>
        </div>
        <h3 className="font-bold text-lg line-clamp-1 mb-1 group-hover:text-cosmic-purple transition-colors">
          {book.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{book.author}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {book.discountPrice ? (
              <>
                <span className="text-cosmic-purple font-bold text-lg">RM {book.discountPrice.toFixed(2)}</span>
                <span className="text-gray-500 text-xs line-through">RM {book.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-white font-bold text-lg">RM {book.price.toFixed(2)}</span>
            )}
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wider">
            {book.stock < 5 ? `Only ${book.stock} left!` : 'In Stock'}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
