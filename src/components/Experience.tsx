import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 border-b border-[#141414]"
      aria-label="Professional Experience"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono-code text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
            03 // SELECTED EXPERIENCE
          </span>
          <div className="h-px w-12 bg-[#222222]" />
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5]">
            Experience
          </h2>
          <p className="mt-3 text-base text-[#888888] font-normal max-w-xl">
            A chronological progression across data research, IT infrastructure attachment, technical documentation, and computer systems support.
          </p>
        </div>

        {/* Vertical Editorial Timeline List (No bulky cards, pure typography & dividers) */}
        <div className="divide-y divide-[#1A1A1A] border-y border-[#1A1A1A]">
          {EXPERIENCES.map((exp, index) => {
            const isCurrent = exp.period.includes('Present');
            return (
              <div
                key={exp.id}
                id={`experience-row-${index}`}
                className="group py-10 sm:py-12 transition-colors duration-300 hover:bg-[#0C0C0C]/50 px-2 sm:px-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  
                  {/* Column 1: Date & Metadata (3 cols) */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#888888]">
                      <Calendar className="w-3.5 h-3.5 text-[#555555]" />
                      <span className={isCurrent ? 'text-emerald-400 font-medium' : 'text-[#888888]'}>
                        {exp.period}
                      </span>
                    </div>

                    {isCurrent && (
                      <span className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono-code bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current Role
                      </span>
                    )}

                    {exp.company && (
                      <p className="mt-2 text-sm font-medium text-[#B0B0B0]">
                        {exp.company}
                      </p>
                    )}

                    {exp.location && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-[#666666] font-mono-code">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </p>
                    )}
                  </div>

                  {/* Column 2: Role & Narrative (9 cols) */}
                  <div className="lg:col-span-9">
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F0F0F0] tracking-tight group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      {exp.type && (
                        <span className="text-xs font-mono-code text-[#666666] border border-[#222222] px-2.5 py-0.5 rounded bg-[#111111]">
                          {exp.type}
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-base sm:text-lg text-[#8A8A8A] leading-relaxed max-w-3xl">
                      {exp.description}
                    </p>

                    {/* Skill Tags */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-mono-code px-2.5 py-1 rounded bg-[#121212] border border-[#1E1E1E] text-[#888888] group-hover:border-[#2E2E2E] group-hover:text-[#AAAAAA] transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
