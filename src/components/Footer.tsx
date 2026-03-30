import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cosmic-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="text-cosmic-purple w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-blue bg-clip-text text-transparent">
                COSMIC BOOKS
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Malaysia's premier destination for cosmic knowledge and interstellar storytelling. Join our community of readers today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/shop" className="hover:text-cosmic-purple transition-colors">Shop Catalog</Link></li>
              <li><Link to="/subscriptions" className="hover:text-cosmic-purple transition-colors">Subscription Plans</Link></li>
              <li><Link to="/about" className="hover:text-cosmic-purple transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-cosmic-purple transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cosmic-purple transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-cosmic-purple transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-cosmic-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cosmic-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest cosmic updates and exclusive deals.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-cosmic-purple"
              />
              <button className="bg-cosmic-purple hover:bg-cosmic-purple/80 p-2 rounded-lg transition-colors">
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2026 Cosmic Books Malaysia. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Made with 💜 in Kuala Lumpur</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
