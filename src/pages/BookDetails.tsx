import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Shield, Truck, RefreshCw, BookOpen } from 'lucide-react';
import { BOOKS } from '../constants';
import { motion } from 'framer-motion';

export default function BookDetails() {
  const { id } = useParams();
  const book = BOOKS.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold">Book not found</h2>
        <Link to="/shop" className="text-cosmic-purple hover:underline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-cosmic-purple/20">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right: Book Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <span className="px-3 py-1 bg-cosmic-purple/20 text-cosmic-purple text-xs font-bold rounded-full uppercase tracking-wider">
                {book.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-2">{book.title}</h1>
              <p className="text-xl text-gray-400">by {book.author}</p>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill={i < Math.floor(book.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-gray-300 font-medium">{book.rating} ({book.reviews} reviews)</span>
            </div>

            <div className="mb-8">
              {book.discountPrice ? (
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-white">RM {book.discountPrice.toFixed(2)}</span>
                  <span className="text-2xl text-gray-500 line-through">RM {book.price.toFixed(2)}</span>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SAVE RM {(book.price - book.discountPrice).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-4xl font-bold text-white">RM {book.price.toFixed(2)}</span>
              )}
            </div>

            <p className="text-gray-300 leading-relaxed mb-10 text-lg">
              {book.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex-1 bg-cosmic-purple hover:bg-cosmic-purple/80 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                <ShoppingCart size={20} /> Add to Cart
              </button>
              {book.isDigital && (
                <Link 
                  to={`/read/${book.id}`}
                  className="flex-1 bg-green-500 hover:bg-green-600 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                >
                  <BookOpen size={20} /> {book.isFree ? 'Read Free' : 'Read Now'}
                </Link>
              )}
              <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 py-4 rounded-full font-bold transition-all">
                Wishlist
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Truck className="text-cosmic-purple" size={24} />
                <div className="text-xs">
                  <p className="font-bold">Free Shipping</p>
                  <p className="text-gray-500">Orders over RM150</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-cosmic-purple" size={24} />
                <div className="text-xs">
                  <p className="font-bold">Secure Payment</p>
                  <p className="text-gray-500">100% Protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="text-cosmic-purple" size={24} />
                <div className="text-xs">
                  <p className="font-bold">Easy Returns</p>
                  <p className="text-gray-500">14-day policy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
