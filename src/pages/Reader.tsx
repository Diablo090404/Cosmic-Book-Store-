import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Settings, Bookmark, Share2, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { BOOKS } from '../constants';

export default function Reader() {
  const { id } = useParams();
  const book = BOOKS.find(b => b.id === id);
  const [fontSize, setFontSize] = useState(18);
  const [theme, setTheme] = useState('dark');

  if (!book) return <div className="pt-32 text-center">Book not found</div>;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-cosmic-black text-gray-200' : 
      theme === 'sepia' ? 'bg-[#f4ecd8] text-[#5b4636]' : 
      'bg-white text-gray-900'
    }`}>
      {/* Reader Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-white/10 bg-inherit z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link to={book.isFree ? "/read/free" : "/read/premium"} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="font-bold text-sm line-clamp-1">{book.title}</h1>
            <p className="text-[10px] opacity-60 uppercase tracking-widest">Chapter 1: The Beginning</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Bookmark size={20} /></button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Share2 size={20} /></button>
          <div className="h-6 w-px bg-white/10 mx-2" />
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Settings size={20} /></button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Maximize2 size={20} /></button>
        </div>
      </header>

      {/* Reader Content */}
      <main className="pt-32 pb-32 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: `${fontSize}px` }}
          className="leading-relaxed space-y-8"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Chapter 1</h2>
          <p>
            The stars were different in this part of the galaxy. They didn't twinkle; they pulsed with a rhythmic, low-frequency hum that seemed to vibrate in the very marrow of Elara's bones. She stood at the observation deck of the <i>Stellar Voyager</i>, her eyes fixed on the swirling nebula ahead.
          </p>
          <p>
            "Status report," she whispered, her voice barely audible over the hum of the ship's engines.
          </p>
          <p>
            "All systems normal, Captain," the AI's cool, synthetic voice responded. "We are approaching the event horizon of the Silent Nebula. Estimated time to entry: four minutes."
          </p>
          <p>
            Elara tightened her grip on the railing. This was it. The culmination of years of research, of countless hours spent deciphering ancient Malaysian star charts that spoke of a hidden gateway within this very nebula. Her grandfather had always said that the secrets of the cosmos were woven into the patterns of the universe, much like the intricate designs of a batik sarong.
          </p>
          <p>
            As the ship plunged into the nebula, the colors shifted from deep purples to vibrant, electric blues. It was as if they were flying through a sea of liquid light. Elara felt a sudden surge of adrenaline. Whatever lay ahead, she was ready.
          </p>
          <div className="h-24 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-cosmic-purple mx-1" />
            <div className="w-2 h-2 rounded-full bg-cosmic-purple mx-1" />
            <div className="w-2 h-2 rounded-full bg-cosmic-purple mx-1" />
          </div>
          <p>
            The transition was smoother than expected. One moment they were surrounded by the chaotic beauty of the nebula, and the next, they were in a void so absolute it felt like a physical weight. But it wasn't empty.
          </p>
          <p>
            "Captain," the AI said, its voice flickering with what sounded like... surprise? "I am detecting a massive structure directly ahead. It... it matches the descriptions in the heritage archives."
          </p>
          <p>
            Elara leaned forward, her breath catching in her throat. Emerging from the darkness was a structure of impossible geometry, its surfaces shimmering with a familiar iridescent glow. It was the Cosmic Loom.
          </p>
        </motion.div>
      </main>

      {/* Reader Footer Controls */}
      <footer className="fixed bottom-0 left-0 right-0 h-20 border-t border-white/10 bg-inherit z-50 flex items-center justify-between px-6">
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
          <ChevronLeft size={20} /> Previous
        </button>
        
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setTheme('light')}
              className={`w-8 h-8 rounded-full border-2 ${theme === 'light' ? 'border-cosmic-purple' : 'border-transparent'} bg-white`} 
            />
            <button 
              onClick={() => setTheme('sepia')}
              className={`w-8 h-8 rounded-full border-2 ${theme === 'sepia' ? 'border-cosmic-purple' : 'border-transparent'} bg-[#f4ecd8]`} 
            />
            <button 
              onClick={() => setTheme('dark')}
              className={`w-8 h-8 rounded-full border-2 ${theme === 'dark' ? 'border-cosmic-purple' : 'border-transparent'} bg-[#020617]`} 
            />
          </div>
          <div className="h-6 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-3">
            <button onClick={() => setFontSize(Math.max(12, fontSize - 2))} className="p-2 hover:bg-white/10 rounded-lg">A-</button>
            <span className="text-xs font-mono">{fontSize}px</span>
            <button onClick={() => setFontSize(Math.min(32, fontSize + 2))} className="p-2 hover:bg-white/10 rounded-lg">A+</button>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-cosmic-purple hover:bg-cosmic-purple/80 rounded-lg transition-colors font-bold">
          Next Chapter <ChevronRight size={20} />
        </button>
      </footer>
    </div>
  );
}
