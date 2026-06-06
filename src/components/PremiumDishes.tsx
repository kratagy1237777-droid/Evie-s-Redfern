import React from 'react';
import { MENU_ITEMS } from '../data';
import { Sparkles, Award, Star, ShieldCheck } from 'lucide-react';

export default function PremiumDishes() {
  const premiumDishes = MENU_ITEMS.filter((item) => item.isPremium);

  // Simple icon selector matching premium items
  const getPremiumIcon = (id: string) => {
    switch (id) {
      case 'f1': // Reuben
        return <Award className="w-8 h-8 text-olive-600" />;
      case 'f2': // Mushroom Toastie
        return <Star className="w-8 h-8 text-olive-600" />;
      case 'f4': // Wellness Bowl
        return <ShieldCheck className="w-8 h-8 text-olive-600" />;
      default:
        return <Sparkles className="w-8 h-8 text-olive-600" />;
    }
  };

  return (
    <section id="premium" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative frame elements to make it feel premium & editorial */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-olive-300 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-olive-600 uppercase">
            Artisanal Spotlights
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl text-olive-950 font-bold tracking-tight">
            Our Premium Signatures
          </h2>
          <p className="text-sm sm:text-base text-olive-700 leading-relaxed font-sans max-w-2xl mx-auto">
            These dishes represent the pinnacle of our culinary philosophy. Beautifully complex flavors combined with meticulously sourced ingredients to support full digestive well-being.
          </p>
        </div>

        {/* Feature Layout (Cards that feel premium) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {premiumDishes.slice(0, 3).map((dish) => (
            <div
              key={dish.id}
              className="group bg-olive-50/40 hover:bg-olive-50 rounded-2xl p-8 border border-olive-150 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 relative h-full"
            >
              <div className="space-y-6">
                {/* Decorative Icon circle */}
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-olive-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {getPremiumIcon(dish.id)}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-playfair text-xl font-bold text-olive-950 group-hover:text-olive-700 transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-mono text-sm font-bold text-olive-800 bg-white border border-olive-100 px-2 py-0.5 rounded">
                      ${dish.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-xs text-olive-600 line-clamp-1 font-mono tracking-wider uppercase font-medium">
                    {dish.subCategory} • spotlight
                  </p>
                </div>

                <p className="text-xs text-olive-700 leading-relaxed font-sans font-light">
                  {dish.description}
                </p>
              </div>

              {/* Bullet details on Gut Health */}
              <div className="pt-6 mt-6 border-t border-olive-200/50 space-y-2 text-[11px] text-olive-600 font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-olive-500 rounded-full shrink-0" />
                  <span>100% Sulfite-Free Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-olive-500 rounded-full shrink-0" />
                  <span>No Artificial Curing Agents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-olive-500 rounded-full shrink-0" />
                  <span>Sustainably Sourced Protecs</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Feature highlight - Ceremonial Matcha spotlight */}
        <div className="mt-16 bg-gradient-to-br from-olive-900 to-olive-950 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-mono tracking-widest bg-olive-800 text-olive-200 px-3 py-1 rounded-full uppercase">
              Wellness Signature
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
              Uji Ceremonial Matcha Pairing
            </h3>
            <p className="text-sm text-olive-100 leading-relaxed max-w-3xl">
              Whisked traditionally and sourced from organic shade-grown tea farms in Kyoto, Japan, our matcha is packed with L-Theanine for steady, calm focus. Perfectly paired with toasted Sourdough Banana Bread slathered in whipped organic honey-butter. Ask Evie, our AI dining assistant, for other pairing recommendations!
            </p>
            <div className="flex items-center space-x-4 text-xs font-mono text-olive-300 pt-2">
              <span>🍵 Organic Ceremonial Grade</span>
              <span>•</span>
              <span>🥛 House-made Hazelnut Milk</span>
              <span>•</span>
              <span>🌱 Rich Antioxidants</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <div className="bg-olive-800 border border-olive-700 rounded-xl p-6 text-center w-full max-w-sm">
              <span className="text-[10px] font-mono text-olive-300 uppercase tracking-wider block">Signature Beverage</span>
              <span className="font-playfair text-2xl font-bold block my-1">Ceremonial Matcha</span>
              <span className="text-xl font-mono text-olive-200 font-bold block mb-4">$6.50</span>
              <a
                href="#menu"
                className="w-full bg-white hover:bg-olive-50 text-olive-900 font-mono text-xs uppercase tracking-wider py-2.5 rounded block transition-colors shadow-sm"
              >
                View Drinks Menu
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
