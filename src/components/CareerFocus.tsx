import React, { useState } from 'react';
import { CAREER_PATHS } from '../data/portfolioData';
import { ArrowUpRight, Target, Sparkles, Check } from 'lucide-react';

interface CareerFocusProps {
  onSelectRole?: (roleTitle: string) => void;
}

export const CareerFocus: React.FC<CareerFocusProps> = ({ onSelectRole }) => {
  const [activeCareerIndex, setActiveCareerIndex] = useState<number>(0);

  return (
    <div id="career-focus-subpart" className="flex flex-col">
      {/* Sub-Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono-code text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
          CAREER DIRECTION
        </span>
        <div className="h-px w-12 bg-[#222222]" />
      </div>

      <div className="mb-8">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
          WHERE I'M HEADING
        </h3>
        <p className="mt-3 text-base text-[#888888] font-normal max-w-xl">
          Focused on high-impact roles where technical diagnostics, problem resolution, and scalable software intersect.
        </p>
      </div>

      {/* 3 Large Typographic Interactive Career Tracks */}
      <div className="divide-y divide-[#1A1A1A] border-y border-[#1A1A1A]">
        {CAREER_PATHS.map((career, index) => {
          const isSelected = activeCareerIndex === index;
          return (
            <div
              key={career.id}
              id={`career-track-${index}`}
              onClick={() => {
                setActiveCareerIndex(index);
                if (onSelectRole) onSelectRole(career.title);
              }}
              className="group py-8 sm:py-10 transition-all duration-300 cursor-pointer hover:bg-[#0C0C0C]/60 px-2 sm:px-4"
            >
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex-1">
                  
                  {/* Category Pill Tag */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono-code text-[11px] text-[#555555]">
                      0{index + 1}
                    </span>
                    <span className="font-mono-code text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded bg-[#141414] border border-[#222222] text-[#8A8A8A] group-hover:text-white group-hover:border-[#383838] transition-colors">
                      {career.tag}
                    </span>
                  </div>

                  {/* Large Typographic Title with Interactive Underline Animation */}
                  <div className="relative inline-block">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#D5D5D5] group-hover:text-white transition-all transform group-hover:translate-x-1.5 duration-300">
                      {career.title}
                    </h4>
                    {/* Animated Underline */}
                    <div className="h-[2px] w-0 bg-[#F5F5F5] group-hover:w-full transition-all duration-300 mt-1" />
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base text-[#808080] group-hover:text-[#A0A0A0] transition-colors leading-relaxed max-w-2xl">
                    {career.description}
                  </p>

                  {/* Key focus chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {career.keySkills.map((kSkill) => (
                      <span
                        key={kSkill}
                        className="text-xs font-mono-code px-2 py-0.5 rounded bg-[#101010] border border-[#1C1C1C] text-[#707070] group-hover:text-[#999999] transition-colors"
                      >
                        {kSkill}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Interactive Arrow Indicator */}
                <div className="pt-2">
                  <div className="w-10 h-10 rounded-full border border-[#222222] group-hover:border-[#F5F5F5] group-hover:bg-[#F5F5F5] flex items-center justify-center text-[#666666] group-hover:text-[#080808] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
