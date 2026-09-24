import React from 'react';
import { Maximize2, Minimize2, BookOpen, Volume2, HelpCircle } from 'lucide-react';

interface TopNavProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (slideNumber: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showTeacherNotes: boolean;
  onToggleTeacherNotes: () => void;
  onOpenHelp: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
  isFullscreen,
  onToggleFullscreen,
  showTeacherNotes,
  onToggleTeacherNotes,
  onOpenHelp,
}) => {
  const navSections = [
    { label: '導言', slide: 1 },
    { label: '切分音節', slide: 3 },
    { label: '框出音部', slide: 4 },
    { label: '誇張重音', slide: 5 },
    { label: 'Rap齊唸', slide: 6 },
    { label: '押韻結構', slide: 7 },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#272024]/95 border-b border-[#4d3d44] backdrop-blur-md px-4 sm:px-6 py-3 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectSlide(1)}
            className="text-left font-poetry font-bold text-xl sm:text-2xl tracking-tight text-[#f7ede2] hover:text-[#df9b9b] transition-colors whitespace-nowrap cursor-pointer"
          >
            Sonnet 18 聲韻大師課
          </button>
          <span className="hidden sm:inline text-base text-[#c4b5a5] font-mono">
            {currentSlide} / {totalSlides}
          </span>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-5 font-medium text-[#d8c7b8]">
          {navSections.map((item) => {
            const isActive = currentSlide === item.slide;
            return (
              <button
                key={item.slide}
                onClick={() => onSelectSlide(item.slide)}
                data-tab="true"
                className={`tab-text transition-colors whitespace-nowrap pb-0.5 cursor-pointer !text-[14px] ${
                  isActive
                    ? 'text-[#df9b9b] font-bold border-b-2 border-[#df9b9b]'
                    : 'hover:text-[#f7ede2]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary action buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Teacher Notes Toggle */}
          <button
            onClick={onToggleTeacherNotes}
            data-tab="true"
            className={`tab-text flex items-center gap-1.5 px-3 py-1.5 rounded-lg !text-[14px] font-medium transition-colors border ${
              showTeacherNotes
                ? 'bg-[#df9b9b]/25 border-[#df9b9b] text-[#f4d3d8]'
                : 'bg-[#33292f] border-[#4d3d44] text-[#d8c7b8] hover:bg-[#3d3238] hover:text-[#f7ede2]'
            }`}
            title="開啟/關閉老師教學備忘稿"
          >
            <BookOpen className="w-4 h-4 text-[#df9b9b]" />
            <span className="hidden sm:inline">教學指引</span>
          </button>

          {/* Quick Help Guide */}
          <button
            onClick={onOpenHelp}
            data-tab="true"
            className="tab-text p-2 sm:px-3 sm:py-1.5 rounded-lg bg-[#33292f] border border-[#4d3d44] text-[#d8c7b8] hover:text-[#f7ede2] hover:bg-[#3d3238] !text-[14px] font-medium transition-colors flex items-center gap-1.5"
            title="快捷鍵與說明"
          >
            <HelpCircle className="w-4 h-4 text-[#8fae9b]" />
            <span className="hidden md:inline">快捷指南</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            data-tab="true"
            className="tab-text p-2 sm:px-3 sm:py-1.5 rounded-lg bg-[#5e826e] hover:bg-[#6c947e] text-[#f7ede2] !text-[14px] font-semibold shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
            title="切換簡報全螢幕放映"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4" />
                <span className="hidden sm:inline">退出全螢幕</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">全螢幕放映</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
