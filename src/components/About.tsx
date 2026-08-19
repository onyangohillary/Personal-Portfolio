import React from 'react';
import { ABOUT_PILLARS } from '../data/portfolioData';
import { Code2, Server, Network, Database, CheckCircle2 } from 'lucide-react';

const ICONS = [Code2, Server, Network, Database];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 border-b border-[#141414] relative"
      aria-label="About Hillary Onyango"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="font-mono-code text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
            02 // ABOUT
          </span>
          <div className="h-px w-12 bg-[#222222]" />
        </div>

        {/* Big Editorial Statement */}
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-[#F5F5F5] leading-[1.15]">
            Building practical technology solutions with code, systems, and problem-solving.
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#8A8A8A] text-base sm:text-lg leading-relaxed">
            <p>
              I am an Information Technology graduate with a strong foundation across full-stack web development, system administration, and technical IT infrastructure. My focus is rooted in delivering robust, pragmatic software and maintaining the reliability of critical business systems.
            </p>
            <p>
              Whether engineering responsive web applications with clean, maintainable code, investigating network connectivity faults, or managing database systems, I approach every challenge with thorough technical diagnostic rigor and user-centric clarity.
            </p>
          </div>
        </div>

        {/* 4 Core Competence Pillars (Editorial Matrix) */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#181818] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ABOUT_PILLARS.map((pillar, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={pillar.title}
                id={`about-pillar-${index}`}
                className="group p-6 rounded-lg bg-[#0C0C0C] border border-[#1A1A1A] hover:border-[#2C2C2C] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-9 h-9 rounded-md bg-[#141414] border border-[#222222] flex items-center justify-center text-[#AAAAAA] group-hover:text-white group-hover:border-[#383838] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono-code text-[11px] text-[#555555]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#F0F0F0] mb-2.5 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#777777] leading-relaxed group-hover:text-[#999999] transition-colors">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#181818] flex items-center gap-2 font-mono-code text-[11px] text-[#555555] group-hover:text-[#888888]">
                  <CheckCircle2 className="w-3 h-3 text-[#444444] group-hover:text-emerald-500 transition-colors" />
                  <span>Verified Competency</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Capabilities Summary Strip */}
        <div className="mt-12 p-6 rounded-lg bg-[#0E0E0E] border border-[#1A1A1A] flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-mono-code text-xs text-[#CCCCCC] uppercase tracking-wider">
              Core Diagnostic Focus:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-[#888888]">
            <span>• System Error Diagnostics</span>
            <span>• User Support & Incident Escalation</span>
            <span>• SQL Data Structuring</span>
            <span>• Cross-Platform OS Deployment</span>
          </div>
        </div>

      </div>
    </section>
  );
};
