import React from 'react';
import { CONTACT_INFO } from '../data';
import { MapPin, Phone, Mail, Clock, ExternalLink, CalendarDays, Ship } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white border-b border-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block - General Contact Card Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-olive-600 uppercase block font-semibold">
                WALK-INS WELCOME
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl text-olive-950 font-bold tracking-tight">
                Join Us in Redfern
              </h2>
              <p className="text-sm text-olive-800 leading-relaxed font-sans">
                Our cozy corners and warm tables are waiting for you. Walk-ins are highly encouraged! Tables can easily fit small groups or solo workers looking for a premium specialty coffee and nourishing breakfast.
              </p>
            </div>

            {/* Structured Contact Details List */}
            <div className="space-y-5">
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded bg-olive-50 border border-olive-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-olive-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-olive-900 uppercase tracking-widest">Our Sanctuary Address</h4>
                  <p className="text-xs text-olive-700 mt-1">{CONTACT_INFO.address}</p>
                  <a
                    href={CONTACT_INFO.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-olive-600 hover:text-olive-800 hover:underline mt-1.5"
                    id="map-dir-link"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded bg-olive-50 border border-olive-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-olive-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-olive-900 uppercase tracking-widest">Opening Kitchen Hours</h4>
                  <p className="text-xs text-olive-700 mt-1">Open 7 days a week: 7:00 AM – 3:00 PM</p>
                  <p className="text-[10px] text-olive-500 font-mono mt-0.5">All-day breakfast cooked fresh to order.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded bg-olive-50 border border-olive-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-olive-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-olive-900 uppercase tracking-widest">Speak With our Team</h4>
                  <p className="text-xs text-olive-700 mt-1">
                    <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline hover:text-olive-900 text-olive-750">
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded bg-olive-50 border border-olive-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-olive-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-olive-900 uppercase tracking-widest">Group Enquiries (6+ People)</h4>
                  <p className="text-xs text-olive-700 mt-1">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline hover:text-olive-900 text-olive-750 font-semibold text-olive-700">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                  <p className="text-[10px] text-olive-500 leading-normal mt-1 max-w-sm">
                    Walk-ins are standard, but we coordinate special tables for groups of 6 or more. Leave us your name, desired date/time and group size!
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Block - Map Presentation & Inline Contact Request Box */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Elegant visual launcher for navigation & transit details */}
            <div className="rounded-2xl border border-olive-150 shadow-md aspect-[16/10] relative bg-gradient-to-br from-olive-800 to-olive-950 text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden group">
              {/* Abstract decorative graphic representing intersecting streets */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 bottom-0 left-[40%] w-[1px] bg-white" />
                <div className="absolute top-0 bottom-0 left-[41%] w-[1px] bg-white" />
                <div className="absolute left-0 right-0 top-[60%] h-[1px] bg-white" />
                <div className="absolute left-0 right-0 top-[61%] h-[1px] bg-white" />
                <div className="absolute top-[60%] left-[40%] w-12 h-12 rounded-full border-2 border-white -translate-x-1/2 -translate-y-1/2 animate-ping" style={{ animationDuration: '4s' }} />
              </div>

              <div className="space-y-4 relative">
                <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Chelsea & Bourke Corner</span>
                </div>
                
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold leading-tight">
                  Find our leafy Redfern corner
                </h3>
                <p className="text-xs sm:text-sm text-olive-200 leading-relaxed font-sans max-w-md font-light">
                  Our sanctuary sits on the quiet corner of Bourke Street and Chelsea Street. Located a short, beautiful walk from Redfern Station, or right off local bus lines.
                </p>
              </div>

              {/* Transit & Coordinates segment */}
              <div className="grid grid-cols-2 gap-4 relative pt-4 border-t border-white/15 text-left">
                <div>
                  <span className="text-[9px] font-mono uppercase text-olive-300 block tracking-widest font-semibold">
                    Public Transit
                  </span>
                  <p className="text-[11px] text-white/90 mt-1 font-sans font-light">
                    • 12 min walk from Redfern Station<br />
                    • Bus 372 / 393 stops nearby
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-olive-300 block tracking-widest font-semibold">
                    Coordinates & Entry
                  </span>
                  <p className="text-[11px] text-white/90 mt-1 font-sans font-light">
                    • 33.8927° S, 151.2144° E<br />
                    • Sidewalk seating available
                  </p>
                </div>
              </div>

              {/* Launcher overlay trigger button */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                <a
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white hover:bg-olive-50 text-olive-950 font-mono text-xs uppercase tracking-wider rounded-md flex items-center space-x-1.5 transition-all duration-200 shadow shadow-black/20 group-hover:scale-105"
                >
                  <MapPin className="w-3.5 h-3.5 text-olive-700" />
                  <span>Launch Navigation</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-olive-50/60 border border-olive-150 rounded-xl p-6 space-y-4">
              <h3 className="font-playfair text-lg font-bold text-olive-950 flex items-center space-x-2">
                <CalendarDays className="w-5 h-5 text-olive-700" />
                <span>Shoot Us a Quick Message</span>
              </h3>
              
              <form onSubmit={(e) => { e.preventDefault(); alert("Enquiry dispatched successfully! Our team will get back to you shortly."); }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider font-bold text-olive-600 block mb-1">Your Full Name</label>
                  <input type="text" required placeholder="Marcus Vance" className="w-full px-3.5 py-2 border border-olive-200 rounded text-xs bg-white focus:outline-none focus:border-olive-500 text-olive-900" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider font-bold text-olive-600 block mb-1">Email Address</label>
                  <input type="email" required placeholder="marcus@example.com" className="w-full px-3.5 py-2 border border-olive-200 rounded text-xs bg-white focus:outline-none focus:border-olive-500 text-olive-900" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-olive-600 block mb-1">Message or Reservation Request (6+)</label>
                  <textarea rows={3} required placeholder="Tell us if you want a large group booking (include size, date and time) or have a dietary inquiry!" className="w-full px-3.5 py-2 border border-olive-200 rounded text-xs bg-white focus:outline-none focus:border-olive-500 text-olive-900 resize-none" />
                </div>
                <div className="sm:col-span-2 flex justify-end">
                  <button type="submit" className="px-5 py-2.5 bg-olive-700 hover:bg-olive-800 text-white font-mono text-xs uppercase tracking-wider rounded transition-colors w-full sm:w-auto cursor-pointer">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
