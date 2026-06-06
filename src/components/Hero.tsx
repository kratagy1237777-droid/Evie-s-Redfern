import React from 'react';
import { IMAGES } from '../data';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-olive-50/70 to-transparent">
      {/* Subtle organic decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-olive-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-olive-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Block */}
          <div className="md:col-span-7 space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-olive-100/60 border border-olive-200/50 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider text-olive-800 uppercase">
              <Sparkles className="w-3 h-3 text-olive-600 animate-pulse" />
              <span>Sulfite-Free & Organic Cafe • Redfern Sydney</span>
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-olive-950 font-bold tracking-tight leading-[1.1]">
              A premium space built on <span className="italic text-olive-600 font-playfair font-normal">pure gut health</span> and community.
            </h1>

            <p className="text-base sm:text-lg text-olive-800/90 leading-relaxed font-sans max-w-2xl">
              Nestled on the vibrant corner of Bourke & Chelsea Streets, we offer sustainably sourced, bespoke single-origin coffees, alongside a carefully curated menu featuring wild fermented lacto-toasties and raw wellness bowls. Completely sulfite-free, additive-free, and crafted for nourishment.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#menu"
                className="px-6 py-4 text-sm font-mono tracking-wider uppercase bg-olive-800 hover:bg-olive-900 text-white rounded-md flex items-center justify-center space-x-2 transition-all duration-200 shadow-sm"
              >
                <span>Explore Wholesome Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.google.com/maps/place/Evie's+Redfern/@-33.892701,151.2144219,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12b1e1248516b3:0xbc528c71c5cd3a81!8m2!3d-33.892701!4d151.2144219"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-sm font-mono tracking-wider uppercase border border-olive-250 hover:bg-olive-50 text-olive-800 rounded-md flex items-center justify-center space-x-2 transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-olive-600" />
                <span>688 Bourke St, Redfern</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-olive-100">
              <div className="space-y-1">
                <span className="font-playfair text-2xl font-bold text-olive-800">100%</span>
                <p className="text-[11px] font-mono tracking-wider uppercase text-olive-500">Sulfite-Free</p>
              </div>
              <div className="space-y-1">
                <span className="font-playfair text-2xl font-bold text-olive-800">Zero</span>
                <p className="text-[11px] font-mono tracking-wider uppercase text-olive-500">No Additives</p>
              </div>
              <div className="space-y-1">
                <span className="font-playfair text-2xl font-bold text-olive-800">7 AM</span>
                <p className="text-[11px] font-mono tracking-wider uppercase text-olive-500">Open Daily</p>
              </div>
            </div>
          </div>

          {/* Styled Image Frame Block */}
          <div className="md:col-span-5 relative">
            <div className="relative mx-auto max-w-[400px] md:max-w-none">
              
              {/* Back framing border decorative */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-olive-200 rounded-xl -z-10 transition-transform duration-300 hover:translate-x-1 hover:translate-y-1" />
              
              {/* Main image */}
              <div className="rounded-xl overflow-hidden shadow-xl border border-olive-100 bg-white p-3 aspect-[4/5] object-cover">
                <img
                  src={IMAGES.hero}
                  alt="Evie's Redfern Cafe Interior"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-700 hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float-badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-olive-100 rounded-lg p-3.5 shadow-lg flex items-center space-x-3 max-w-[240px]">
                <div className="w-10 h-10 rounded bg-olive-50 flex items-center justify-center border border-olive-100">
                  <span className="font-serif text-lg font-bold text-olive-700">7</span>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-olive-900 leading-tight">Serving 7 Days</h4>
                  <p className="text-[11px] text-olive-500 font-mono leading-none mt-1">7:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
