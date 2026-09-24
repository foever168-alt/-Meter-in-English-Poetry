import React, { useState } from 'react';
import { Box, Heart, Activity, CheckCircle2, Volume2 } from 'lucide-react';
import { METRIC_FEET } from '../data/sonnetData';
import { soundFx, speakText } from '../utils/audioEngine';

export const Slide4_FootBrackets: React.FC = () => {
  const [activeFootId, setActiveFootId] = useState<number | null>(null);

  const handlePlayFoot = (foot: (typeof METRIC_FEET)[0]) => {
    setActiveFootId(foot.id);
    // Play da-DUM sound
    soundFx.playHeartbeat(false, 0.6);
    setTimeout(() => {
      soundFx.playHeartbeat(true, 0.95);
    }, 220);

    // Speak foot
    speakText(`${foot.unstressed.text} ${foot.stressed.text}`, undefined, () => {
      // keep active for a moment
    }, 0.85);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
      {/* Slide Header */}
      <div className="text-center mb-6">
        <div className="text-base font-semibold text-[#8fae9b] uppercase tracking-wider mb-1">
          解析步驟 02 · 框出音部
        </div>
        <h2 className="font-poetry text-[32px] sm:text-4xl font-bold text-[#f7ede2] leading-tight">
          框出音部（[ ]）：完美的 5 個 [輕／重] 音部
        </h2>
        <p className="text-base sm:text-lg text-[#d8c7b8] mt-2 max-w-2xl mx-auto">
          這句話剛好被完美切分成 5 個 [輕／重] 抑揚格音步（Iambic Pentameter）。
        </p>
      </div>

      {/* Main 5 Bracket Stage */}
      <div className="p-6 sm:p-7 rounded-3xl bg-[#2b2227]/90 border border-[#4d3d44] shadow-2xl">
        <div className="text-base text-center text-[#d8c7b8] mb-6 font-medium">
          點選下方任一個方括號音部，聆聽其「da-DUM（輕-重）」心跳律動：
        </div>

        {/* 5 Bracket Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 mb-6">
          {METRIC_FEET.map((foot) => {
            const isActive = activeFootId === foot.id;

            return (
              <div
                key={foot.id}
                onClick={() => handlePlayFoot(foot)}
                className={`flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#36272e] border-[#df9b9b] shadow-xl shadow-[#df9b9b]/30 scale-105 ring-2 ring-[#df9b9b]/50'
                    : 'bg-[#211a1d] border-[#4d3d44] hover:border-[#8fae9b] hover:bg-[#282025]'
                }`}
              >
                {/* Foot number */}
                <div className="flex items-center gap-1.5 text-base font-mono font-semibold text-[#8fae9b] mb-3">
                  <Box className="w-4 h-4" />
                  <span>音部 0{foot.id}</span>
                </div>

                {/* The Bracket Text */}
                <div className="text-center py-2">
                  <div className="font-poetry text-2xl sm:text-3xl font-bold text-[#f7ede2] tracking-wide">
                    <span className="text-[#8fae9b] font-sans font-light">[</span>
                    <span className="text-[#d8c7b8] font-normal">{foot.unstressed.text}</span>
                    <span className="text-[#8fae9b] px-0.5">／</span>
                    <span className="text-[#df9b9b] font-black underline decoration-[#b86b77] underline-offset-4">
                      {foot.stressed.text}
                    </span>
                    <span className="text-[#8fae9b] font-sans font-light">]</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-2.5 font-mono text-base">
                    <span className="text-[#8fae9b]">da (輕)</span>
                    <span className="text-[#645059]">·</span>
                    <span className="text-[#df9b9b] font-bold">DUM (重)</span>
                  </div>
                </div>

                {/* Translation Note */}
                <div className="text-base text-[#c4b5a5] text-center mt-3 pt-2.5 border-t border-[#4d3d44] w-full">
                  {foot.translationNote}
                </div>
              </div>
            );
          })}
        </div>

        {/* Theoretical Framework Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#4d3d44]">
          <div className="p-4 rounded-xl bg-[#211a1d] border border-[#4d3d44]">
            <div className="flex items-center gap-2 text-base font-bold text-[#df9b9b] mb-1.5">
              <Heart className="w-5 h-5 text-[#df9b9b]" />
              <span>什麼是 Iamb（抑揚格）？</span>
            </div>
            <p className="text-base text-[#d8c7b8] leading-relaxed">
              一個「輕音」接一個「重音」的組合。英文叫做 Iamb，發音如 <strong>da-DUM</strong>，恰似心臟收縮舒張時的 <strong>lub-DUB</strong>。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#211a1d] border border-[#4d3d44]">
            <div className="flex items-center gap-2 text-base font-bold text-[#8fae9b] mb-1.5">
              <Activity className="w-5 h-5 text-[#8fae9b]" />
              <span>什麼是 Pentameter（五音步）？</span>
            </div>
            <p className="text-base text-[#d8c7b8] leading-relaxed">
              Penta 代表 <strong>數字 5</strong>，Meter 代表 <strong>音步/拍子</strong>。一行詩恰好包含 5 個抑揚格，也就是 <strong>整整 10 個音節</strong>。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#211a1d] border border-[#4d3d44]">
            <div className="flex items-center gap-2 text-base font-bold text-[#f4d3d8] mb-1.5">
              <CheckCircle2 className="w-5 h-5 text-[#df9b9b]" />
              <span>為什麼是 10 個音節？</span>
            </div>
            <p className="text-base text-[#d8c7b8] leading-relaxed">
              10 個音節剛好是人類一次<strong>自然深呼吸</strong>能流暢朗讀完畢的長度，不會太長讓人喘不過氣，也不會短得破碎。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
