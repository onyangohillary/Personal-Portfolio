import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#050505] text-[#888888] py-16 border-t border-[#161616]"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Brand & Meta */}
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-sm font-semibold tracking-wider text-[#F5F5F5] uppercase">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[#333333]">/</span>
              <span className="text-xs font-mono-code text-[#777777]">
                © {PERSONAL_INFO.year}
              </span>
            </div>
            <p className="mt-2 text-xs font-mono-code text-[#666666]">
              IT Graduate · Freelancer · Technology
            </p>
            <p className="mt-1 text-xs font-mono-code text-[#555555]">
              {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono-code text-xs">
            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#F5F5F5] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F5] transition-colors flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111111] hover:bg-[#1C1C1C] border border-[#222222] text-[#AAAAAA] hover:text-white transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              aria-label="Scroll to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Minimal Bottom Baseline */}
        <div className="mt-12 pt-8 border-t border-[#121212] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono-code text-[#444444]">
          <p>
            Built with responsive architecture, modern typography, and strict semantic accessibility.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Operational & Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
