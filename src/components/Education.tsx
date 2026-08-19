import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div id="education-subpart" className="flex flex-col">
      {/* Sub-Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono-code text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
          ACADEMIC BACKGROUND
        </span>
        <div className="h-px w-12 bg-[#222222]" />
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-8">
        Education
      </h3>

      {/* Editorial Timeline */}
      <div className="divide-y divide-[#1A1A1A] border-y border-[#1A1A1A]">
        {EDUCATION_LIST.map((edu, index) => (
          <div
            key={edu.id}
            id={`edu-item-${index}`}
            className="py-8 group transition-colors duration-200 hover:bg-[#0C0C0C]/40 px-2 sm:px-4"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono-code text-xs text-emerald-400 font-medium">
                    {edu.period}
                  </span>
                  {index === 0 && (
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                      Degree
                    </span>
                  )}
                </div>

                <h4 className="text-xl sm:text-2xl font-semibold text-[#F0F0F0] group-hover:text-white transition-colors">
                  {edu.institution}
                </h4>

                <p className="text-sm sm:text-base text-[#AAAAAA] mt-1 font-medium">
                  {edu.degree}
                </p>

                {edu.details && (
                  <p className="mt-3 text-xs sm:text-sm text-[#777777] leading-relaxed max-w-2xl">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="w-10 h-10 rounded-md bg-[#121212] border border-[#222222] flex items-center justify-center text-[#666666] group-hover:text-[#AAAAAA] transition-colors">
                {index === 0 ? <GraduationCap className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
