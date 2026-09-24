import React from 'react';
import { BookOpen, X, Sparkles, MessageSquareQuote, Mic } from 'lucide-react';
import { SLIDES_CONFIG } from '../data/sonnetData';

interface TeacherNotesProps {
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherNotes: React.FC<TeacherNotesProps> = ({
  currentSlide,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const currentConfig = SLIDES_CONFIG[currentSlide - 1];

  return (
    <div className="fixed bottom-16 right-4 sm:right-8 z-50 w-[28rem] max-w-[calc(100vw-2rem)] max-h-[80vh] overflow-y-auto bg-[#2b2227] border border-[#b86b77]/50 rounded-2xl shadow-2xl p-5 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="flex items-center justify-between pb-3 border-b border-[#4d3d44]">
        <div className="flex items-center gap-2 text-[#df9b9b]">
          <BookOpen className="w-5 h-5" />
          <span className="text-base font-bold tracking-wide text-[#f7ede2]">教師備課引導 · 投影片 {currentSlide}</span>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-[#c4b5a5] hover:text-[#f7ede2] hover:bg-[#3d3238] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <h4 className="text-base font-bold text-[#f7ede2]">{currentConfig.title}</h4>
          <p className="text-base text-[#c4b5a5] mt-1">{currentConfig.subtitle}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#231b1f] border border-[#5a434d] text-[#f7ede2] text-base leading-relaxed">
          <div className="flex items-start gap-2.5">
            <MessageSquareQuote className="w-5 h-5 text-[#8fae9b] shrink-0 mt-0.5" />
            <div>{currentConfig.teacherNotes}</div>
          </div>
        </div>

        {/* Special hints for Slide 5 & Slide 6 as requested */}
        {currentSlide === 5 && (
          <div className="p-3 rounded-xl bg-[#36272e] border border-[#b86b77]/60 text-[#f7ede2] text-base flex items-start gap-2.5">
            <Mic className="w-5 h-5 text-[#df9b9b] shrink-0 mt-0.5" />
            <span>
              <strong>課堂關鍵秘訣：</strong>先誇張朗讀重音「<strong className="text-[#df9b9b]">I</strong>, <strong className="text-[#df9b9b]">pare</strong>, <strong className="text-[#df9b9b]">to</strong>, <strong className="text-[#df9b9b]">sum</strong>, <strong className="text-[#df9b9b]">day</strong>」，讓學生深刻感受起伏，隨後跟隨節奏齊聲複誦！
            </span>
          </div>
        )}

        {currentSlide === 6 && (
          <div className="p-3 rounded-xl bg-[#252f2a] border border-[#5e826e]/60 text-[#f7ede2] text-base flex items-start gap-2.5">
            <Sparkles className="w-5 h-5 text-[#8fae9b] shrink-0 mt-0.5" />
            <span>
              <strong>節奏 Rap 指引：</strong>雙手拍桌代表輕音 (da)，大力拍手代表重音 (DUM)！全班像唸 Rap 饒舌歌一樣動起來！
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
