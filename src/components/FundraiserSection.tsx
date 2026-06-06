import React from 'react';
import { CONTACT_INFO } from '../data';
import { Heart, Users, Calendar, Award, ExternalLink, Smile, BookOpen, ShieldCheck } from 'lucide-react';

export default function FundraiserSection() {
  return (
    <section id="fundraiser" className="py-20 bg-olive-50/40 border-b border-olive-50 relative overflow-hidden">
      {/* Decorative floral backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-50/40 rounded-full blur-3xl -z-10 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-olive-100/20 rounded-full blur-3xl -z-10 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider text-rose-700 uppercase">
            <Heart className="w-3.5 h-3.5 fill-rose-600 animate-pulse" />
            <span>Community Cause • Active Outreach</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl text-olive-950 font-bold tracking-tight">
            Evie's Run Club & Support for Childhood Cancer Science
          </h2>
          <div className="w-16 h-1 bg-rose-400 mx-auto rounded" />
          <p className="text-sm sm:text-base text-olive-800 leading-relaxed font-sans max-w-2xl mx-auto">
            We believe a neighborhood space is a center of care. Join us in our training sessions and our support for independent pediatric oncology research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: The Campaign/Meetups Story */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-olive-950">
              Our Journey to the Brisbane Marathon 2026
            </h3>
            <p className="text-sm sm:text-base text-olive-800 leading-relaxed font-sans font-light">
              At Evie's, we are more than just sulfur-free coffee and wild fermented toasties—we are a neighborhood hearth. Our group meets weekly on the corner of Chelsea & Bourke streets, supporting runners of all paces to stay fit, connect, and fuel a vital mission.
            </p>
            <p className="text-xs sm:text-sm text-olive-750 leading-relaxed font-sans font-light">
              Led by our fellow regular <strong>Luke</strong>, our team is currently preparing for the <strong>Brisbane Marathon Festival on Sunday, 7 June 2026</strong>. Through every kilometer of this journey, we have committed ourselves to raising awareness and rallying donations for <strong>The Kids' Cancer Project</strong> to fund bold childhood cancer research and clinical drug therapies.
            </p>

            {/* Run Club Training Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white border border-olive-100 p-4.5 rounded-lg flex items-center space-x-3.5 shadow-sm">
                <Calendar className="w-8 h-8 text-olive-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-olive-900 leading-none">Sundays 7:00 AM</h4>
                  <p className="text-[10px] text-olive-500 font-mono mt-1">Cafe Meeting Point</p>
                </div>
              </div>

              <div className="bg-white border border-olive-100 p-4.5 rounded-lg flex items-center space-x-3.5 shadow-sm">
                <Users className="w-8 h-8 text-olive-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-olive-900 leading-none">All Paces Welcome</h4>
                  <p className="text-[10px] text-olive-500 font-mono mt-1">Slow & fast groups</p>
                </div>
              </div>

              <div className="bg-white border border-olive-100 p-4.5 rounded-lg flex items-center space-x-3.5 shadow-sm">
                <Award className="w-8 h-8 text-olive-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-olive-900 leading-none">Brisbane Marathon</h4>
                  <p className="text-[10px] text-olive-500 font-mono mt-1">Sunday, 7 June 2026</p>
                </div>
              </div>
            </div>

            {/* Auto-playing Brisbane Marathon Video with loop */}
            <div className="rounded-xl overflow-hidden aspect-video border border-olive-150 shadow-md relative bg-neutral-900">
              <iframe
                src="https://www.youtube.com/embed/P1uf-1rPHIE?autoplay=1&mute=1&loop=1&playlist=P1uf-1rPHIE&playsinline=1&controls=1"
                title="Brisbane Marathon Festival"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Block: Redirection Card and Kids' Cancer Project details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Detailed Info Card about the charity */}
            <div className="bg-white border border-olive-150 rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-olive-100 bg-neutral-50 shrink-0 p-1 flex items-center justify-center">
                  <img
                    src="https://cdn.grassrootz.com/organization/logo/KMIqZINEIjCU47tsFeCsC2oE.jpg"
                    alt="The Kids' Cancer Project Logo"
                    className="w-full h-full object-contain rounded referrer-policy-safe"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-wider uppercase text-rose-600 font-semibold block">
                    Our Chosen Charity Partner
                  </span>
                  <h4 className="font-playfair text-lg font-bold text-olive-950">
                    The Kids' Cancer Project
                  </h4>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-olive-700 leading-relaxed font-sans font-light">
                  The Kids’ Cancer Project is an independent national charity dedicated to supporting bold scientific research that has the greatest chance of clinical success.
                </p>
                <p className="text-xs text-olive-700 leading-relaxed font-sans font-light">
                  Their focus is to fund pioneering childhood cancer treatments to improve survival rates and reduce the harmful side effects of standard therapies.
                </p>
              </div>

              {/* Highlights List */}
              <div className="bg-olive-50/50 p-4 rounded-xl border border-olive-100 space-y-3">
                <div className="flex items-start space-x-3 text-xs text-olive-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="font-sans"><strong>Direct Funding:</strong> Sustaining researchers in oncology labs working on clinical trials.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-olive-800">
                  <BookOpen className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="font-sans"><strong>Scientific Integrity:</strong> Backed by independent medical boards and peer-reviewed trials.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-olive-800">
                  <Smile className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="font-sans"><strong>100% Tax Deductible:</strong> Every donation tier supports Australian childhood cancer research.</span>
                </div>
              </div>

              {/* Simple Redirection Section */}
              <div className="border-t border-olive-100 pt-6 space-y-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h5 className="text-xs font-bold text-olive-900 uppercase tracking-widest">
                    Support Kids' Cancer Project
                  </h5>
                  <p className="text-xs text-olive-650 font-sans">
                    You will be redirected securely to our official live campaign page on the Grassrootz platform to make your donation.
                  </p>
                </div>

                <a
                  href={CONTACT_INFO.fundraiserLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-xs font-mono tracking-widest uppercase font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg flex items-center justify-center space-x-2.5 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  id="external-redirection-button"
                >
                  <span>Go to Grassrootz Campaign</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="text-center">
                  <p className="text-[10px] text-olive-500 font-mono">
                    Luke’s Brisbane Marathon campaign page: bmf26.grassrootz.com
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
