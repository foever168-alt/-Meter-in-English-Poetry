import React from 'react';
import { ChevronLeft, ChevronRight, Grid, Play, Pause } from 'lucide-react';
import { SLIDES_CONFIG } from '../data/sonnetData';

interface SlideControllerProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (n: number) => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
  isSlideDrawerOpen: boolean;
  onToggleSlideDrawer: () => void;
}

export const SlideController: React.FC<SlideControllerProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  isAutoPlaying,
  onToggleAutoPlay,
  isSlideDrawerOpen,
  onToggleSlideDrawer,
}) => {
  const currentConfig = SLIDES_CONFIG[currentSlide - 1];

  return (
    <footer className="sticky bottom-0 z-40 w-full bg-[#272024]/95 border-t border-[#4d3d44] backdrop-blur-md px-4 sm:px-6 py-2.5 transition-colors shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Slide Drawer toggle & current category */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSlideDrawer}
            data-bottom-ctrl="true"
            className={`bottom-ctrl flex items-center gap-1.5 px-3 py-1.5 rounded-lg !text-[12px] font-medium border transition-colors ${
              isSlideDrawerOpen
                ? 'bg-[#df9b9b]/25 border-[#df9b9b] text-[#f4d3d8]'
                : 'bg-[#33292f] border-[#4d3d44] text-[#d8c7b8] hover:text-[#f7ede2] hover:bg-[#3d3238]'
            }`}
            title="開啟投影片大綱索引"
          >
            <Grid className="w-3.5 h-3.5 text-[#df9b9b]" />
            <span className="hidden sm:inline">大綱索引</span>
          </button>

          <div className="hidden lg:flex items-center gap-2 bottom-ctrl !text-[12px] text-[#d8c7b8]" data-bottom-ctrl="true">
            <span className="text-[#8fae9b] font-medium">{currentConfig?.category}</span>
            <span className="text-[#645059]">·</span>
            <span className="text-[#f7ede2] font-medium truncate max-w-xs">{currentConfig?.title}</span>
          </div>
        </div>

        {/* Center: Slide Progress Dots / Bar */}
        <div className="flex items-center gap-1.5">
          {SLIDES_CONFIG.map((s, index) => {
            const slideNum = index + 1;
            const isCurrent = slideNum === currentSlide;
            return (
              <button
                key={s.id}
                onClick={() => onSelectSlide(slideNum)}
                className={`transition-all duration-200 rounded-full cursor-pointer ${
                  isCurrent
                    ? 'w-8 sm:w-10 h-2.5 bg-[#df9b9b] shadow-sm shadow-[#df9b9b]/50'
                    : 'w-2.5 h-2.5 bg-[#4d3d44] hover:bg-[#8fae9b]'
                }`}
                title={`第 ${slideNum} 頁: ${s.title}`}
              />
            );
          })}
        </div>

        {/* Right: Navigation Buttons (Previous, Next, AutoPlay) */}
        <div className="flex items-center gap-2">
          {/* Autoplay toggle */}
          <button
            onClick={onToggleAutoPlay}
            data-bottom-ctrl="true"
            className={`bottom-ctrl px-3 py-1.5 rounded-lg !text-[12px] transition-colors border hidden sm:flex items-center gap-1.5 ${
              isAutoPlaying
                ? 'bg-[#df9b9b]/25 border-[#df9b9b] text-[#f4d3d8]'
                : 'bg-[#33292f] border-[#4d3d44] text-[#d8c7b8] hover:text-[#f7ede2] hover:bg-[#3d3238]'
            }`}
            title={isAutoPlaying ? '暫停自動輪播' : '自動前進播放 (15秒/頁)'}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-[#df9b9b]" /> : <Play className="w-3.5 h-3.5 text-[#8fae9b]" />}
            <span>{isAutoPlaying ? '播放中' : '輪播'}</span>
          </button>

          {/* Prev Button */}
          <button
            onClick={onPrev}
            disabled={currentSlide === 1}
            data-bottom-ctrl="true"
            className={`bottom-ctrl flex items-center gap-1 px-3 py-1.5 rounded-lg !text-[12px] font-semibold border transition-all ${
              currentSlide === 1
                ? 'opacity-40 border-[#3d3238] text-[#7a656f] cursor-not-allowed'
                : 'bg-[#33292f] border-[#4d3d44] text-[#f7ede2] hover:bg-[#3d3238] active:scale-95'
            }`}
            title="上一頁 (鍵盤 ←)"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">上一頁</span>
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            data-bottom-ctrl="true"
            className={`bottom-ctrl flex items-center gap-1 px-3.5 py-1.5 rounded-lg !text-[12px] font-bold transition-all shadow-md ${
              currentSlide === totalSlides
                ? 'opacity-40 bg-[#33292f] text-[#7a656f] cursor-not-allowed'
                : 'bg-[#b86b77] hover:bg-[#c97b87] text-[#f7ede2] shadow-[#b86b77]/30 active:scale-95'
            }`}
            title="下一頁 (鍵盤 → 或 空白鍵)"
          >
            <span>{currentSlide === totalSlides ? '已達末頁' : '下一頁'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
