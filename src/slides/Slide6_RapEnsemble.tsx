import React, { useState } from 'react';
import { Flame, Music, Users, Volume2, Sparkles, Award } from 'lucide-react';
import { RhythmPlayer } from '../components/RhythmPlayer';
import { METRIC_FEET } from '../data/sonnetData';

export const Slide6_RapEnsemble: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [drillMode, setDrillMode] = useState<'together' | 'call_response'>('together');

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
      {/* Slide Header */}
      <div className="text-center mb-6">
        <div className="text-base font-semibold text-[#df9b9b] uppercase tracking-wider mb-1 flex items-center justify-center gap-2">
          <Flame className="w-5 h-5 fill-current" />
          <span>全班動起來 · 節奏 Rap 大合唸</span>
        </div>
        <h2 className="font-poetry text-[32px] sm:text-4xl font-bold text-[#f7ede2] leading-tight">
          像唸 Rap 一樣跟著節奏讀一次！
        </h2>
        <p className="text-base sm:text-lg text-[#d8c7b8] mt-2 max-w-2xl mx-auto">
          跟隨下方鼓點與律動跳點，全班一起拍桌拍手，唸出十四行詩的 Hip-Hop 靈魂！
        </p>
      </div>

      {/* Classroom Physical Body Percussion Routine */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#33292f] flex items-center justify-center font-bold text-[#8fae9b] text-2xl shrink-0">
            🖐️
          </div>
          <div>
            <div className="text-base font-mono text-[#8fae9b]">輕音動作 (da)</div>
            <div className="text-lg font-bold text-[#f7ede2]">雙手輕拍桌面（Quiet Tap）</div>
            <div className="text-base text-[#d8c7b8] mt-0.5">Shall · com · thee · a · mer's</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#36272e]/80 border border-[#b86b77]/60 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#b86b77] flex items-center justify-center font-bold text-white text-2xl shrink-0 shadow-lg shadow-[#b86b77]/40">
            👏
          </div>
          <div>
            <div className="text-base font-mono text-[#df9b9b] font-bold">莫蘭迪玫瑰重音動作 (DUM)</div>
            <div className="text-lg font-bold text-[#f7ede2]">響亮大力拍手（Loud Clap）</div>
            <div className="text-base text-[#df9b9b] font-semibold mt-0.5">I · PARE · TO · SUM · DAY</div>
          </div>
        </div>
      </div>

      {/* Embedded Live Rhythm Engine & Visualizer */}
      <RhythmPlayer
        currentActiveSyllableIndex={activeStep}
        onSyllableTick={(step) => setActiveStep(step)}
      />

      {/* Interactive Rap Lyrics Display */}
      <div className="mt-6 p-6 sm:p-7 rounded-3xl bg-[#2b2227]/90 border border-[#4d3d44] text-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#4d3d44] mb-4">
          <div className="flex flex-wrap items-center gap-2 text-base font-semibold text-[#f7ede2]">
            <Users className="w-5 h-5 text-[#8fae9b]" />
            <span>合唸模式：</span>
            <button
              onClick={() => setDrillMode('together')}
              className={`px-3.5 py-1.5 rounded-xl text-base font-semibold transition-colors ${
                drillMode === 'together'
                  ? 'bg-[#b86b77] text-white'
                  : 'text-[#d8c7b8] hover:text-[#f7ede2]'
              }`}
            >
              全班齊聲唸
            </button>
            <button
              onClick={() => setDrillMode('call_response')}
              className={`px-3.5 py-1.5 rounded-xl text-base font-semibold transition-colors ${
                drillMode === 'call_response'
                  ? 'bg-[#5e826e] text-white'
                  : 'text-[#d8c7b8] hover:text-[#f7ede2]'
              }`}
            >
              呼應對答 (老師唸輕音 / 學生吼重音)
            </button>
          </div>

          <span className="text-base text-[#8fae9b] font-mono">
            Beat: 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10
          </span>
        </div>

        {drillMode === 'together' ? (
          <div className="py-4">
            <p className="text-base text-[#d8c7b8] mb-2">【全班齊聲大聲唸】</p>
            <div className="font-poetry text-2xl sm:text-4xl text-[#f7ede2] tracking-wider flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>[Shall／<strong className="text-[#df9b9b] font-black">I</strong>]</span>
              <span>[com／<strong className="text-[#df9b9b] font-black">PARE</strong>]</span>
              <span>[thee／<strong className="text-[#df9b9b] font-black">TO</strong>]</span>
              <span>[a／<strong className="text-[#df9b9b] font-black">SUM</strong>]</span>
              <span>[mer's／<strong className="text-[#df9b9b] font-black">DAY</strong>]</span>
            </div>
            <p className="font-mono text-base sm:text-lg text-[#df9b9b] mt-4 tracking-widest">
              da-DUM · da-DUM · da-DUM · da-DUM · da-DUM !
            </p>
          </div>
        ) : (
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-[#211a1d] border border-[#4d3d44]">
              <span className="text-base font-bold text-[#8fae9b] block mb-1">【老師領唸（輕音拍桌）】</span>
              <p className="font-poetry text-2xl text-[#f7ede2]">
                “Shall... com... thee... a... mer's...”
              </p>
              <p className="text-base text-[#c4b5a5] mt-2.5">提示：聲音輕而快，將重音的爆發空間留給全體同學！</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#36272e] border border-[#b86b77]/70">
              <span className="text-base font-bold text-[#df9b9b] block mb-1">【全班響應（重音拍手！）】</span>
              <p className="font-poetry text-2xl sm:text-3xl font-black text-[#df9b9b]">
                “...I! ...PARE! ...TO! ...SUM! ...DAY!”
              </p>
              <p className="text-base text-[#f4d3d8] mt-2.5">提示：跟隨重音同時大力拍手，氣勢如虹！</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
