import React, { useState } from 'react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Sparkles, Leaf, Info, HelpCircle, FileText, ExternalLink } from 'lucide-react';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'drink'>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const fullMenuPdfUrl = "https://static1.squarespace.com/static/67d225ef719952337c0a394b/t/69b86769e2625038c28355db/1773692777597/march+Menu+Draft+.pdf?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnBCr6aPBsmDBMDwSZdODAT8kLrLDuvvlyBFZeu5suqSZ0hc3l_aA_I1UoazE_aem_uN9meCfLMpfJ7g28hwFtKQ";

  return (
    <section id="menu" className="py-20 bg-olive-50/20 border-b border-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-mono tracking-[0.2em] text-olive-600 uppercase">
            Sourced for Gut-Health
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl text-olive-950 font-bold tracking-tight">
            Wholesome All-Day Menu
          </h2>
          <div className="w-16 h-1 bg-olive-400 mx-auto rounded" />
          <p className="text-sm sm:text-base text-olive-800 font-sans leading-relaxed">
            Locally sourced, organic, and beautifully crafted dishes that are 100% sulfite and additive free. Perfect nutrition with zero hidden preservatives.
          </p>

          {/* Quick PDF Action button underneath title */}
          <div className="pt-2">
            <a
              href={fullMenuPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-olive-100 hover:bg-olive-200 text-olive-800 font-mono text-xs uppercase tracking-wider rounded-md border border-olive-200/60 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              id="title-view-full-pdf"
            >
              <FileText className="w-4 h-4 text-olive-600" />
              <span>View Full March Menu Draft (PDF)</span>
              <ExternalLink className="w-3 h-3 text-olive-500" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-3 mb-10">
          {(['all', 'food', 'drink'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider rounded-md border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-olive-800 border-olive-800 text-white shadow-sm'
                  : 'bg-white border-olive-200 text-olive-700 hover:border-olive-400 hover:text-olive-900'
              }`}
            >
              {cat === 'all' ? 'All Offerings' : cat === 'food' ? 'Wholesome Food' : 'Organic Drinks'}
            </button>
          ))}
        </div>

        {/* Grid of Dishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-6 border transition-all duration-300 relative select-none ${
                item.isPremium
                  ? 'border-olive-300 shadow-md ring-1 ring-olive-100/50'
                  : 'border-olive-100 shadow-sm hover:shadow-md'
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Premium Badge Spotlights */}
              {item.isPremium && (
                <span className="absolute -top-3 left-6 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest bg-olive-700 text-white rounded-full flex items-center space-x-1 shadow-sm">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Chef's Choice</span>
                </span>
              )}

              <div className="flex flex-col h-full justify-between space-y-4">
                
                {/* Header Information */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-playfair text-lg sm:text-xl font-bold text-olive-950 flex items-center gap-1.5 hover:text-olive-600 transition-colors">
                      {item.name}
                      {item.isPremium && <Leaf className="w-4 h-4 text-olive-500 shrink-0" />}
                    </h3>
                    <span className="font-mono text-sm sm:text-base font-bold text-olive-800 bg-olive-100/50 px-2.5 py-0.5 rounded shrink-0">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-olive-700 mt-2.5 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>

                {/* Dietary Tags / Markers */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[9px] font-mono tracking-wide rounded bg-olive-50 border border-olive-100 text-olive-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Callout Card to direct to Squarespace Full Menu PDF */}
        <div className="mt-12 bg-gradient-to-br from-olive-800 to-olive-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-olive-750">
          <div className="space-y-2 text-center sm:text-left max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded text-olive-200">
              Comprehensive List
            </span>
            <h3 className="font-playfair text-xl sm:text-2xl font-bold leading-tight">
              Looking for our complete selection of fresh brews & toasts?
            </h3>
            <p className="text-xs text-olive-200 leading-relaxed font-sans max-w-xl">
              We frequently iterate on our wholesome specialties depending on weekly harvests and fresh sourdough yields. Redirect to see our official full March Menu Draft containing all specialty roasts, loose leaf tea pairings, and custom dietary pricing!
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={fullMenuPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-olive-50 text-olive-900 font-mono text-xs uppercase tracking-widest font-bold rounded-lg flex items-center justify-center space-x-2 shadow-sm transition-all duration-200 hover:scale-[1.03] cursor-pointer"
              id="card-view-full-pdf"
            >
              <FileText className="w-4 h-4 text-olive-700" />
              <span>Open Menu PDF</span>
              <ExternalLink className="w-3.5 h-3.5 text-olive-500" />
            </a>
          </div>
        </div>

        {/* Informative Footer Box on Sulfites */}
        <div className="mt-8 bg-white border border-olive-150 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-olive-50 flex items-center justify-center shrink-0">
            <Info className="w-6 h-6 text-olive-600" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-olive-900">Why Sulfite & Additive-Free Matters</h4>
            <p className="text-xs text-olive-700 max-w-4xl leading-relaxed">
              Sulfites are chemical preservatives used broadly in food handling to prevent browning. In many individuals, particularly those with respiratory sensitivities or digestive imbalances, they can trigger systemic inflammation and degrade gut wellness. We guarantee 100% clean sourcing—zero synthetic chemicals, ever.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
