import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Terminal, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-8 pb-16 lg:py-24 border-b border-[#141414]"
      aria-label="Introduction & Overview"
    >
      {/* Background subtle radial ambient highlight */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Dominant Typographic Identity */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Editorial Header Tag */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="font-mono-code text-[11px] tracking-[0.25em] text-[#777777] uppercase">
                PORTFOLIO / {PERSONAL_INFO.year}
              </span>
              <div className="h-px flex-1 max-w-[80px] bg-[#222222]" />
            </div>

            {/* Typographic Name Treatment */}
            <h1 className="text-left font-extrabold tracking-tighter leading-[0.9] select-none">
              <span className="block text-[#F5F5F5] text-6xl sm:text-7xl md:text-8xl xl:text-[7.25rem]">
                {PERSONAL_INFO.firstName}
              </span>
              <span className="block text-[#707070] text-6xl sm:text-7xl md:text-8xl xl:text-[7.25rem] mt-1">
                {PERSONAL_INFO.lastName}
              </span>
            </h1>

            {/* Professional Role Title */}
            <div className="mt-8 sm:mt-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#DCDCDC] tracking-tight">
                {PERSONAL_INFO.roleHeadline}
              </h2>
              
              {/* Introduction statement */}
              <p className="mt-4 text-base sm:text-lg text-[#8A8A8A] leading-relaxed max-w-xl font-normal">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Status Row */}
            <div className="mt-8 pt-6 border-t border-[#1C1C1C] flex flex-wrap items-center gap-6 sm:gap-8 font-mono-code text-xs">
              <div className="flex items-center gap-2 text-[#E0E0E0]">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <span>Open to opportunities</span>
              </div>

              <div className="flex items-center gap-2 text-[#777777]">
                <MapPin className="w-3.5 h-3.5 text-[#555555]" />
                <span>{PERSONAL_INFO.country}</span>
              </div>

              <div className="flex items-center gap-2 text-[#777777]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#555555]" />
                <span>BSc Information Technology</span>
              </div>
            </div>

            {/* Mobile / Tablet Quick CTA Row */}
            <div className="mt-8 flex items-center gap-3">
              <button
                id="hero-contact-button"
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#F5F5F5] hover:bg-white text-[#080808] text-xs font-semibold tracking-wide uppercase transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#121212] hover:bg-[#1A1A1A] border border-[#222222] hover:border-[#333333] text-xs font-mono-code text-[#AAAAAA] hover:text-[#F5F5F5] transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Compact Professional Information Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-4">
            
            {/* Panel 1: Currently & Looking For */}
            <div
              id="hero-info-card"
              className="p-6 sm:p-7 rounded-lg bg-[#0F0F0F] border border-[#1C1C1C] hover:border-[#282828] transition-colors"
            >
              {/* CURRENTLY */}
              <div>
                <span className="font-mono-code text-[10px] tracking-[0.2em] uppercase text-[#666666] block mb-2 font-medium">
                  CURRENTLY
                </span>
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <h3 className="text-lg font-semibold text-[#F5F5F5]">
                    {PERSONAL_INFO.currentRole.title}
                  </h3>
                  <span className="text-xs font-mono-code text-[#888888] px-2 py-0.5 rounded bg-[#161616] border border-[#222222]">
                    {PERSONAL_INFO.currentRole.type}
                  </span>
                </div>
                <p className="font-mono-code text-xs text-[#777777] mt-1">
                  {PERSONAL_INFO.currentRole.period}
                </p>
              </div>

              <div className="my-5 h-px bg-[#181818]" />

              {/* LOOKING FOR */}
              <div>
                <span className="font-mono-code text-[10px] tracking-[0.2em] uppercase text-[#666666] block mb-3 font-medium">
                  LOOKING FOR
                </span>
                <ul className="space-y-2.5">
                  {PERSONAL_INFO.lookingFor.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#444444] group-hover:bg-[#F5F5F5] transition-colors" />
                      <span className="text-sm text-[#CCCCCC] group-hover:text-white transition-colors font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Panel 2: TECH STACK Pills */}
            <div
              id="hero-tech-stack"
              className="p-6 sm:p-7 rounded-lg bg-[#0F0F0F] border border-[#1C1C1C] hover:border-[#282828] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-[10px] tracking-[0.2em] uppercase text-[#666666] font-medium">
                  TECH STACK
                </span>
                <Terminal className="w-3.5 h-3.5 text-[#555555]" />
              </div>

              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1.5 rounded-full bg-[#141414] hover:bg-[#1C1C1C] border border-[#222222] hover:border-[#333333] text-xs font-mono-code text-[#AAAAAA] hover:text-[#F5F5F5] transition-all cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Profile Summary Badge */}
            <div className="px-6 py-4 rounded-lg bg-[#0B0B0B] border border-[#181818] flex items-center justify-between font-mono-code text-xs text-[#777777]">
              <span>Location</span>
              <span className="text-[#AAAAAA]">{PERSONAL_INFO.location}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
