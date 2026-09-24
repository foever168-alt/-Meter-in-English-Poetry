import React from 'react';
import { X, Check } from 'lucide-react';
import { SLIDES_CONFIG } from '../data/sonnetData';

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (n: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-start animate-in fade-in duration-200">
      <div className="w-full max-w-sm sm:max-w-md bg-[#272024] border-r border-[#4d3d44] h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#4d3d44]">
          <div>
            <h3 className="font-bold text-[#f7ede2] text-lg">投影片導航索引</h3>
            <p className="text-base text-[#c4b5a5]">共 {SLIDES_CONFIG.length} 頁課程內容</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#c4b5a5] hover:text-[#f7ede2] hover:bg-[#33292f] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* List of slides */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {SLIDES_CONFIG.map((slide, index) => {
            const slideNum = index + 1;
            const isCurrent = slideNum === currentSlide;

            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slideNum);
                  onClose();
                }}
                data-tab="true"
                className={`tab-text w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#df9b9b]/25 border-[#df9b9b] text-[#f7ede2] shadow-md'
                    : 'bg-[#211a1d]/60 border-[#3d3238] text-[#d8c7b8] hover:bg-[#33292f] hover:border-[#4d3d44]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center !text-[14px] font-mono font-bold shrink-0 ${
                    isCurrent ? 'bg-[#df9b9b] text-[#221c1f]' : 'bg-[#33292f] text-[#c4b5a5]'
                  }`}
                >
                  {slideNum}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="!text-[14px] font-semibold text-[#8fae9b]">{slide.category}</span>
                    {isCurrent && <Check className="w-4 h-4 text-[#df9b9b] shrink-0" />}
                  </div>
                  <div className="!text-[14px] font-bold text-[#f7ede2] truncate mt-0.5">
                    {slide.title}
                  </div>
                  <div className="!text-[14px] text-[#c4b5a5] truncate mt-0.5">
                    {slide.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1" onClick={onClose} />
    </div>
  );
};
