import React from 'react';
import { NAV_ITEMS } from '../data/portfolioData';

interface SideNavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const SideNavigation: React.FC<SideNavigationProps> = ({
  activeSection,
  onNavigate,
}) => {
  return (
    <>
      {/* Desktop Vertical Fixed Side Indicator */}
      <aside
        id="side-nav-desktop"
        className="hidden lg:flex fixed left-8 xl:left-12 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-4 select-none"
        aria-label="Section Navigation"
      >
        <div className="flex flex-col gap-3 py-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-btn-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 py-1 transition-all duration-300"
                aria-label={`Scroll to section ${item.label}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {/* Vertical bar indicator */}
                <div
                  className={`w-[2px] rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-8 bg-[#F5F5F5]'
                      : 'h-4 bg-[#262626] group-hover:h-6 group-hover:bg-[#8A8A8A]'
                  }`}
                />

                {/* Section number and label */}
                <div className="flex items-baseline gap-2 overflow-hidden">
                  <span
                    className={`font-mono-code text-[11px] tracking-wider transition-colors duration-300 ${
                      isActive
                        ? 'text-[#F5F5F5] font-medium'
                        : 'text-[#555555] group-hover:text-[#8A8A8A]'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`text-xs tracking-widest uppercase transition-all duration-300 ${
                      isActive
                        ? 'text-[#F5F5F5] opacity-100 translate-x-0'
                        : 'text-[#8A8A8A] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile / Tablet Compact Floating Indicator */}
      <nav
        id="side-nav-mobile"
        className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#121212]/90 backdrop-blur-md border border-[#222222] px-4 py-2 rounded-full shadow-2xl flex items-center gap-4 select-none"
        aria-label="Mobile Section Navigation"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={`mob-${item.id}`}
              id={`mob-nav-btn-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className="group flex flex-col items-center gap-1 focus:outline-none py-1"
              aria-label={`Scroll to ${item.label}`}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-6 bg-[#F5F5F5]'
                    : 'w-2 bg-[#333333] group-hover:bg-[#8A8A8A]'
                }`}
              />
              <span
                className={`font-mono-code text-[9px] ${
                  isActive ? 'text-[#F5F5F5] font-semibold' : 'text-[#555555]'
                }`}
              >
                {item.number}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
