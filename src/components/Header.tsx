import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Check, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);
  const [kenyaTime, setKenyaTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Nairobi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setKenyaTime(timeString);
      } catch {
        setKenyaTime('EAT (UTC+3)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-30 w-full bg-[#080808]/85 backdrop-blur-md border-b border-[#181818] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* Left: Brand / Title */}
        <a
          href="#hero"
          id="header-brand-link"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 rounded-sm"
        >
          <span className="font-mono-code text-xs tracking-widest text-[#F5F5F5] font-semibold uppercase group-hover:text-white transition-colors">
            Hillary Onyango
          </span>
          <span className="hidden sm:inline-block text-[#333333]">/</span>
          <span className="hidden sm:inline-block text-xs font-mono-code text-[#666666] tracking-wider">
            IT Graduate
          </span>
        </a>

        {/* Center / Right: Meta status & actions */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Kenya Local Time */}
          <div
            id="kenya-time-display"
            className="hidden md:flex items-center gap-2 font-mono-code text-[11px] text-[#777777]"
            title="Local time in Kenya (EAT / UTC+3)"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#444444]" />
            <span>RONGO, KE</span>
            <span className="text-[#AAAAAA]">{kenyaTime}</span>
          </div>

          {/* Availability Indicator */}
          <div
            id="availability-indicator-pill"
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#222222] text-[11px] font-mono-code text-[#AAAAAA]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[#E0E0E0] hidden sm:inline">Available for Opportunities</span>
            <span className="text-[#E0E0E0] sm:hidden">Available</span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Copy / Direct Email */}
            <button
              id="header-copy-email-btn"
              onClick={handleCopyEmail}
              className="group relative flex items-center justify-center p-2 rounded-md bg-[#121212] hover:bg-[#1C1C1C] border border-[#222222] hover:border-[#333333] text-[#8A8A8A] hover:text-[#F5F5F5] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              title={copied ? "Email Copied!" : "Copy Hillary's email address"}
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Mail className="w-3.5 h-3.5" />
              )}
              {copied && (
                <span className="absolute -bottom-8 right-0 bg-[#1E1E1E] text-white text-[10px] font-mono-code px-2 py-0.5 rounded border border-[#333333] shadow-lg whitespace-nowrap">
                  Copied to clipboard
                </span>
              )}
            </button>

            {/* LinkedIn external button */}
            <a
              id="header-linkedin-link"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#121212] hover:bg-[#1C1C1C] border border-[#222222] hover:border-[#333333] text-xs font-mono-code text-[#8A8A8A] hover:text-[#F5F5F5] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              aria-label="Visit LinkedIn Profile"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#666666]" />
            </a>

            {/* Message Modal Trigger */}
            <button
              id="header-contact-btn"
              onClick={onOpenContactModal}
              className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-md bg-[#F5F5F5] hover:bg-white text-[#080808] text-xs font-medium transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
