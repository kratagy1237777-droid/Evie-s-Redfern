/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import PremiumDishes from './components/PremiumDishes';
import FundraiserSection from './components/FundraiserSection';
import ContactSection from './components/ContactSection';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import { REVIEWS } from './data';
import { Star, Quote } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50/50 flex flex-col font-sans relative">
      
      {/* Premium Olive/White Header */}
      <Header />

      {/* Main Sections Layout */}
      <main className="flex-1">
        
        {/* Editorial Hero Banner */}
        <Hero />

        {/* Detailed About Us Philosophy */}
        <AboutSection />

        {/* Filterable Menu Section */}
        <MenuSection />

        {/* Premium Dishes Spotlights */}
        <PremiumDishes />

        {/* Brand Testimonials Slider/Section */}
        <section className="py-16 bg-olive-700 text-white relative">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -z-10 translate-y-1/2" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-olive-200 uppercase">
                COMMUNITY VOICE
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold tracking-tight">
                Kind Words from our Neighbors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-6.5 flex flex-col justify-between space-y-4 hover:bg-white/10 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-olive-300 opacity-20" />
                    <p className="text-sm font-sans tracking-wide leading-relaxed font-light text-olive-100">
                      "{review.text}"
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white font-serif">{review.author}</h5>
                    <p className="text-[11px] font-mono text-olive-300 mt-0.5">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Run Club & Kids' Cancer Project Fundraiser Meter */}
        <FundraiserSection />

        {/* Direct Contacts & Maps Embedding Area */}
        <ContactSection />

      </main>

      {/* Floating conversational AI concierge supported by Gemini 3.5 */}
      <ChatAssistant />

      {/* Corporate humanized Footer */}
      <Footer />

    </div>
  );
}

