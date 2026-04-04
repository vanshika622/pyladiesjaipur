import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@data/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 transition-all duration-300">
      <div className="bg-[#0A0A0B]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] rounded-full pl-6 pr-2 py-2 flex justify-between items-center gap-4 md:gap-16">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 cursor-pointer">
          <img 
            alt="PyLadies Jaipur Logo" 
            className="h-5 md:h-6 w-auto opacity-90 hover:opacity-100 transition-opacity" 
            src="/images/brand/logo.png"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              className="font-headline font-semibold uppercase text-[10px] tracking-widest text-white/50 hover:text-white transition-colors" 
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="bg-white text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full font-headline font-black uppercase tracking-[0.2em] text-[9px] hover:bg-accent hover:text-white transition-all transition-colors whitespace-nowrap">
            Join Us
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-4 lg:hidden"
          >
            <div className="bg-[#0A0A0B]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a 
                    key={item.label} 
                    className="font-headline font-black uppercase text-xs tracking-[0.3em] text-white/50 hover:text-white transition-colors border-b border-white/5 pb-4" 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
