import React from 'react';
import { CONTACT_INFO, IMAGES } from '../data';
import { Heart, Landmark, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-olive-950 text-white py-12 border-t border-olive-900 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-10">
          
          {/* Logo & Slogan Column */}
          <div className="col-span-1 md:col-span-4 space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-olive-900 flex items-center justify-center mb-1">
              <img
                src={IMAGES.logo}
                alt="Evie's Cherub Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-playfair text-2xl font-bold tracking-widest uppercase">
              Evie's
            </h3>
            <p className="text-[10px] font-mono tracking-[0.3em] text-olive-300 uppercase -mt-1.5">
              Redfern Sydney
            </p>
            <p className="text-xs text-olive-100 font-sans font-light leading-relaxed max-w-sm pt-2">
              Sourcing sulfite and additive-free wholesome ingredients to cultivate pristine gut health and positive neighborhood vibes.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 md:col-span-3 text-center">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-olive-200 mb-3 font-semibold">
              Eatery Navigation
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs text-olive-200">
              <a href="#about" className="hover:text-white transition-colors">Our Sourcing Philosophy</a>
              <a href="#menu" className="hover:text-white transition-colors">All-Day Offerings</a>
              <a href="#premium" className="hover:text-white transition-colors">Premium Signatures</a>
              <a href="#fundraiser" className="hover:text-white transition-colors">Evie's Run Club</a>
            </div>
          </div>

          {/* Community Actions Column */}
          <div className="col-span-1 md:col-span-3 text-center md:text-right flex flex-col md:items-end space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-olive-200 font-semibold mb-1">
              Social Communities
            </h4>
            <div className="flex items-center justify-center md:justify-end space-x-4">
              <a
                href={CONTACT_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-olive-950 transition-all duration-200 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.fundraiserLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-olive-950 transition-all duration-200 shadow-sm"
                aria-label="Fundraiser"
              >
                <Heart className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-olive-300 font-sans">
              Connect with us on Instagram @eviesredfern
            </p>
          </div>

          {/* Scroll to Top */}
          <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

        {/* Bottom Credits Block */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-olive-350 tracking-wider space-y-3 sm:space-y-0 text-center sm:text-left text-neutral-400">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Evie’s Redfern. All rights reserved.</p>
            <p className="opacity-80 text-olive-400">Evie’s is operated by Night Howl PTY LTD.</p>
          </div>
          <div>
            <span className="inline-flex items-center space-x-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px]">Sydney, Australia</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
