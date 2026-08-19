import React from 'react';
import { CareerFocus } from './CareerFocus';
import { Education } from './Education';

interface FocusAndEducationProps {
  onSelectRole: (roleTitle: string) => void;
}

export const FocusAndEducation: React.FC<FocusAndEducationProps> = ({ onSelectRole }) => {
  return (
    <section
      id="focus-education"
      className="py-24 sm:py-32 border-b border-[#141414]"
      aria-label="Career Direction and Academic Background"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono-code text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
            05 // FOCUS & EDUCATION
          </span>
          <div className="h-px w-12 bg-[#222222]" />
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Career Focus Column (7 cols) */}
          <div className="lg:col-span-7">
            <CareerFocus onSelectRole={onSelectRole} />
          </div>

          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 lg:pl-4">
            <Education />
          </div>

        </div>

      </div>
    </section>
  );
};
