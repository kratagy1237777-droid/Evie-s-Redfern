import React from 'react';
import { ShieldCheck, Heart, Users, Sparkles, AlertCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white border-y border-olive-50 relative overflow-hidden">
      {/* Decorative leaf sketch in backdrop using CSS shapes */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-olive-50/40 rounded-full blur-2xl -z-10 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block - The Story Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono tracking-wider text-olive-600 uppercase flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-olive-500" />
              <span>Sourcing Philosophy</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl text-olive-950 font-bold tracking-tight">
              A Neighbourhood Eatery built around <span className="italic text-olive-600 font-playfair font-normal">health & connection</span>.
            </h2>

            <p className="text-olive-800 leading-relaxed font-sans text-sm sm:text-base">
              Since May 2025, we’ve been carving out our own space on the quiet, leafy corner of Bourke and Chelsea Streets in Redfern. We started fresh, with a simple but radical mission: to prove that dining out could be both exceptionally delicious and profoundly nourishing.
            </p>

            <p className="text-olive-700 leading-relaxed font-sans text-sm">
              Most commercial foods are loaded with hidden sulfites, nitrates, synthetic additives, and stabilizers that disrupt our delicate microbiomes. At Evie's, we painstakingly source every single ingredient—from local wild sourdough bakers to free-range poultry farmers—guaranteeing they are entirely sulfite and chemical-additive free. We build with dynamic digestive health in mind, so you leave feeling energized, light, and restored.
            </p>

            {/* Feature lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 bg-olive-50/50 p-3 rounded-lg border border-olive-100/50">
                <ShieldCheck className="w-5 h-5 text-olive-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-olive-900 uppercase tracking-wide">Lacto-Fermented Sides</h4>
                  <p className="text-xs text-olive-600 mt-1">Our sauerkraut, kimchi & kombuchas are wild-fermented in-house.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-olive-50/50 p-3 rounded-lg border border-olive-100/50">
                <Heart className="w-5 h-5 text-olive-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-olive-900 uppercase tracking-wide">Sulfite & Nitrate Free</h4>
                  <p className="text-xs text-olive-600 mt-1">Zero sulfites. Premium proteins made with clean natural curing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - Community Sourcing Info Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            
            {/* Callout Card */}
            <div className="sm:col-span-2 bg-gradient-to-br from-olive-600 to-olive-700 rounded-xl p-6 sm:p-8 text-white shadow-lg space-y-4 relative">
              <div className="absolute top-4 right-4 text-olive-200/20">
                <Users className="w-24 h-24 stroke-[1]" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase bg-white/15 px-2.5 py-1 rounded text-olive-100">
                Community Focused
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold leading-tight">
                "A cafe should be more than just a place to eat—it should be a neighborhood hearth."
              </h3>
              <p className="text-xs text-olive-100 leading-relaxed">
                Whether you're stopping by for a silent dawn espresso, catching up on business, or celebrating with Evie’s Run Club, our warm team is here to make you feel completely at home. Walk-ins are always accommodated, and large groups find a natural place at our central communal timber table.
              </p>
              
              <div className="flex items-center space-x-2 pt-2 text-xs font-mono text-olive-200">
                <AlertCircle className="w-4 h-4 fill-current text-white stroke-olive-600 shrink-0" />
                <span>Group bookings (6+) are taken via email: Hello@eviesredfern.au</span>
              </div>
            </div>

            {/* Double grid metrics */}
            <div className="bg-olive-50 border border-olive-100 rounded-xl p-5 text-center">
              <span className="font-playfair text-3xl font-extrabold text-olive-800">100%</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-olive-900 mt-1">Traceable Sourcing</h4>
              <p className="text-[11px] text-olive-500 mt-1">Every coffee bean and slice of sourdough is fully traceable.</p>
            </div>

            <div className="bg-olive-50 border border-olive-100 rounded-xl p-5 text-center">
              <span className="font-playfair text-3xl font-extrabold text-olive-800">Sulfite</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-olive-900 mt-1">Free Kitchen</h4>
              <p className="text-[11px] text-olive-500 mt-1">Perfect for people with dietary sensitivities or asthma.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
