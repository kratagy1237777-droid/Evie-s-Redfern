import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Heart, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Premium Dishes', href: '#premium' },
    { name: 'Run Club & Fundraiser', href: '#fundraiser' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-olive-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section - Cherub Logo + Elegant Typography */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-olive-500 bg-olive-50 transition-all duration-300 group-hover:border-olive-600 group-hover:scale-105 shrink-0 flex items-center justify-center">
              <img
                src={IMAGES.logo}
                alt="Evie's Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl font-bold tracking-widest text-olive-800 uppercase group-hover:text-olive-600 transition-colors">
                Evie's
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-olive-500 uppercase -mt-1">
                Redfern
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-olive-800 hover:text-olive-500 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-olive-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-y-0 space-x-4">
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-mono tracking-wider uppercase border border-olive-500 text-olive-700 hover:bg-olive-50 rounded-md transition-all duration-200"
            >
              Walk-Ins Only
            </a>
            <a
              href="#fundraiser"
              className="px-4 py-2 text-xs font-mono tracking-wider uppercase bg-olive-600 hover:bg-olive-700 text-white rounded-md flex items-center space-x-1.5 transition-all duration-200 shadow-sm"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Support Kid's Cancer</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-olive-800 hover:text-olive-500 transition-colors focus:outline-none p-1.5 border border-olive-200 rounded"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-olive-100 px-4 pt-4 pb-6 space-y-4 shadow-md transition-all duration-300">
          <div className="flex flex-col space-y-3.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-olive-800 hover:text-olive-500 py-2 border-b border-olive-50/50 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-center py-2.5 text-xs font-mono uppercase tracking-wider border border-olive-400 text-olive-700 rounded hover:bg-olive-50 transition-colors"
                id="mob-walk-in"
              >
                Walk-ins Encouraged (6+ Booking via Email)
              </a>
              <a
                href="#fundraiser"
                onClick={() => setIsOpen(false)}
                className="text-center py-2.5 text-xs font-mono uppercase tracking-wider bg-olive-600 hover:bg-olive-700 text-white rounded flex items-center justify-center space-x-2 transition-colors"
                id="mob-donate"
              >
                <Heart className="w-4 h-4 fill-current text-white" />
                <span>Support Run Club Fundraiser</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
