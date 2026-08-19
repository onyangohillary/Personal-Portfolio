import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, ExternalLink, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';

interface ContactProps {
  onOpenContactModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 border-b border-[#141414] relative overflow-hidden"
      aria-label="Contact Hillary Onyango"
    >
      {/* Background Accent Grid / Glow */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-neutral-900/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono-code text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
            06 // GET IN TOUCH
          </span>
          <div className="h-px w-12 bg-[#222222]" />
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tighter text-[#F5F5F5] leading-[0.95]">
            LET'S BUILD SOMETHING USEFUL.
          </h2>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-[#8A8A8A] font-normal leading-relaxed max-w-2xl">
            I'm open to opportunities in application support, technical support engineering, and full-stack development.
          </p>
        </div>

        {/* Action Blocks & Prominent Links */}
        <div className="mt-16 pt-12 border-t border-[#1C1C1C] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct Email Card (8 cols) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-xl bg-[#0E0E0E] border border-[#1E1E1E] hover:border-[#2C2C2C] transition-all">
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="font-mono-code text-xs uppercase tracking-[0.2em] text-[#666666]">
                PRIMARY INBOX
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono-code text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Replies within 24h
              </span>
            </div>

            {/* Clickable Large Email Mailto */}
            <a
              id="contact-mailto-link"
              href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Inquiry%20for%20Hillary%20Onyango`}
              className="group block"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xl sm:text-2xl md:text-3xl font-mono-code font-bold text-[#F5F5F5] group-hover:text-white transition-colors break-all">
                  {PERSONAL_INFO.email}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#181818] group-hover:bg-white text-[#888888] group-hover:text-[#080808] flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </a>

            {/* Auxiliary actions row */}
            <div className="mt-8 pt-6 border-t border-[#181818] flex flex-wrap items-center gap-4">
              <button
                id="contact-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#161616] hover:bg-[#202020] border border-[#262626] text-xs font-mono-code text-[#AAAAAA] hover:text-[#F5F5F5] transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <button
                id="contact-compose-btn"
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#F5F5F5] hover:bg-white text-[#080808] text-xs font-semibold tracking-wide uppercase transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Quick Note</span>
              </button>
            </div>
          </div>

          {/* Connect & Location Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* LinkedIn Card */}
            <a
              id="contact-linkedin-card"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-7 rounded-xl bg-[#0E0E0E] border border-[#1E1E1E] hover:border-[#2C2C2C] transition-all flex items-center justify-between"
            >
              <div>
                <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#666666] block mb-1">
                  PROFESSIONAL NETWORK
                </span>
                <span className="text-lg font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                  LinkedIn Profile
                </span>
                <p className="text-xs font-mono-code text-[#888888] mt-1 truncate max-w-[220px]">
                  {PERSONAL_INFO.linkedin}
                </p>
              </div>

              <div className="w-9 h-9 rounded-full bg-[#181818] group-hover:bg-white text-[#888888] group-hover:text-[#080808] flex items-center justify-center transition-all duration-300">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Location & Availability Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#0A0A0A] border border-[#181818]">
              <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#666666] block mb-2">
                BASE LOCATION
              </span>
              <div className="flex items-center gap-2 text-[#E0E0E0] font-medium text-base">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <p className="text-xs font-mono-code text-[#777777] mt-2">
                Open to local, hybrid, and international remote positions.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
