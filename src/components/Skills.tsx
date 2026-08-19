import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Cpu, ChevronRight, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="expertise"
      className="py-24 sm:py-32 border-b border-[#141414]"
      aria-label="Technical Expertise & Core Skills"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono-code text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
            04 // EXPERTISE
          </span>
          <div className="h-px w-12 bg-[#222222]" />
        </div>

        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5]">
            Technical Competencies
          </h2>
          <p className="mt-3 text-base text-[#888888] font-normal">
            Dual proficiency spanning modern web application engineering and practical IT enterprise systems administration.
          </p>
        </div>

        {/* 2 Main Categorized Columns with Subtle Dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {SKILL_CATEGORIES.map((cat, catIndex) => {
            const isWeb = cat.category.includes('WEB');
            return (
              <div
                key={cat.category}
                id={`skill-category-${catIndex}`}
                className="flex flex-col"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#222222]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#121212] border border-[#222222] flex items-center justify-center text-[#AAAAAA]">
                      {isWeb ? <Code className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                    </div>
                    <h3 className="font-mono-code text-xs tracking-[0.2em] font-semibold text-[#F5F5F5] uppercase">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-mono-code text-xs text-[#555555]">
                    {cat.skills.length} core proficiencies
                  </span>
                </div>

                {/* Skills List with Minimal Editorial Typography & Subtle Separators */}
                <div className="divide-y divide-[#161616]">
                  {cat.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group py-4 sm:py-5 flex items-start justify-between gap-4 transition-all duration-200 hover:pl-2"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-base sm:text-lg font-medium text-[#DCDCDC] group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                            {isHovered && (
                              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 animate-pulse" />
                            )}
                          </div>
                          {skill.description && (
                            <p className="mt-1 text-xs font-mono-code text-[#666666] group-hover:text-[#999999] transition-colors leading-relaxed">
                              {skill.description}
                            </p>
                          )}
                        </div>

                        {/* Minimal Tag Indicator */}
                        <div className="pt-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#262626] group-hover:bg-[#F5F5F5] transition-colors" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Code Philosophy Banner */}
        <div className="mt-16 p-8 rounded-lg bg-[#0B0B0B] border border-[#1C1C1C] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#777777] block mb-1">
              Methodology & Standards
            </span>
            <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed">
              Prioritizing structured version control via Git, documented troubleshooting steps, modular system design, and security best practices across Linux and Windows domains.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 font-mono-code text-xs text-[#888888] bg-[#141414] px-4 py-2 rounded border border-[#222222]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Practical IT Focus</span>
          </div>
        </div>

      </div>
    </section>
  );
};
