import React, { useState } from 'react';
import { Volume2, Sparkles, Layout, Layers, Bookmark } from 'lucide-react';
import { SONNET_18_LINES } from '../data/sonnetData';
import { speakText } from '../utils/audioEngine';

export const Slide7_RhymeScheme: React.FC = () => {
  const [selectedRhyme, setSelectedRhyme] = useState<string | null>(null);

  const rhymeColors: Record<string, { bg: string; text: string; border: string; label: string }> = {
    A: { bg: 'bg-[#df9b9b]/25', text: 'text-[#f4d3d8]', border: 'border-[#df9b9b]/60', label: 'Rhyme A (day / May)' },
    B: { bg: 'bg-[#5e826e]/30', text: 'text-[#8fae9b]', border: 'border-[#8fae9b]/60', label: 'Rhyme B (temperate / date)' },
    C: { bg: 'bg-[#b86b77]/30', text: 'text-[#df9b9b]', border: 'border-[#b86b77]/60', label: 'Rhyme C (shines / declines)' },
    D: { bg: 'bg-[#405349]/40', text: 'text-[#a3c4b0]', border: 'border-[#5e826e]/60', label: 'Rhyme D (dimm\'d / untrimm\'d)' },
    E: { bg: 'bg-[#b07d62]/30', text: 'text-[#e0b19b]', border: 'border-[#b07d62]/60', label: 'Rhyme E (fade / shade)' },
    F: { bg: 'bg-[#6d597a]/35', text: 'text-[#cba3d8]', border: 'border-[#8d799a]/60', label: 'Rhyme F (ow\'st / grow\'st)' },
    G: { bg: 'bg-[#df9b9b]/40', text: 'text-[#f7ede2]', border: 'border-[#f4d3d8]', label: 'Rhyme G (see / thee)' },
  };

  const handleReadLine = (text: string) => {
    speakText(text, undefined, undefined, 0.86);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
      {/* Slide Header */}
      <div className="text-center mb-6">
        <div className="text-base font-semibold text-[#8fae9b] uppercase tracking-wider mb-1">
          格律架構 · 押韻密碼
        </div>
        <h2 className="font-poetry text-[32px] sm:text-4xl font-bold text-[#f7ede2] leading-tight">
          押韻格律深度剖析：ABAB CDCD EFEF GG
        </h2>
        <p className="text-base sm:text-lg text-[#d8c7b8] mt-2 max-w-2xl mx-auto">
          莎士比亞十四行詩（English / Shakespearean Sonnet）由 3 個四行詩節與 1 個雙行對句構成。
        </p>
      </div>

      {/* Rhyme Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setSelectedRhyme(null)}
          data-tab="true"
          className={`tab-text px-3 py-1.5 rounded-lg !text-[14px] font-semibold transition-all ${
            selectedRhyme === null
              ? 'bg-[#b86b77] text-white font-bold'
              : 'bg-[#211a1d] border border-[#4d3d44] text-[#d8c7b8] hover:text-[#f7ede2]'
          }`}
        >
          全部 14 行一覽
        </button>

        {Object.entries(rhymeColors).map(([letter, style]) => {
          const isSelected = selectedRhyme === letter;
          return (
            <button
              key={letter}
              onClick={() => setSelectedRhyme(letter)}
              data-tab="true"
              className={`tab-text px-3 py-1.5 rounded-lg !text-[14px] font-bold transition-all border ${
                isSelected
                  ? `${style.bg} ${style.text} ${style.border} ring-2 ring-[#df9b9b]/50 scale-105`
                  : 'bg-[#211a1d] border-[#4d3d44] text-[#d8c7b8] hover:text-[#f7ede2]'
              }`}
            >
              韻腳 {letter}
            </button>
          );
        })}
      </div>

      {/* 4 Structural Sections Cards */}
      <div className="space-y-5">
        {/* Section 1: Quatrain 1 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 mb-3.5 border-b border-[#4d3d44] text-base">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono px-2.5 py-1 rounded bg-[#36272e] text-[#df9b9b] font-bold text-base">
                第一四行詩節 (Quatrain 1)
              </span>
              <span className="font-mono text-[#d8c7b8] text-base">押韻：A - B - A - B</span>
            </div>
            <span className="text-[#8fae9b] text-base">主題：對比夏日的缺陷（酷熱、短暫）</span>
          </div>

          <div className="space-y-2.5">
            {SONNET_18_LINES.filter((l) => l.section === 'Q1').map((line) => {
              const isRhymeMatch = selectedRhyme === null || selectedRhyme === line.rhymeLetter;
              const color = rhymeColors[line.rhymeLetter];

              return (
                <div
                  key={line.num}
                  onClick={() => handleReadLine(line.text)}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all cursor-pointer ${
                    isRhymeMatch
                      ? 'bg-[#211a1d] border-[#4d3d44] hover:border-[#8fae9b]'
                      : 'opacity-30 bg-transparent border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[#8fae9b] font-mono text-base w-8 sm:w-10 shrink-0 text-right font-bold">{line.num}</span>
                    <span className="font-poetry text-base sm:text-lg text-[#f7ede2] truncate">
                      {line.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-3 py-1 rounded-lg text-base font-mono font-bold border ${color.bg} ${color.text} ${color.border}`}>
                      {line.rhymeLetter} ({line.rhymeWord})
                    </span>
                    <Volume2 className="w-4 h-4 text-[#c4b5a5] hover:text-[#df9b9b]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Quatrain 2 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 mb-3.5 border-b border-[#4d3d44] text-base">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono px-2.5 py-1 rounded bg-[#252f2a] text-[#8fae9b] font-bold text-base">
                第二四行詩節 (Quatrain 2)
              </span>
              <span className="font-mono text-[#d8c7b8] text-base">押韻：C - D - C - D</span>
            </div>
            <span className="text-[#df9b9b] text-base">主題：自然萬物盛極必衰的殘酷規律</span>
          </div>

          <div className="space-y-2.5">
            {SONNET_18_LINES.filter((l) => l.section === 'Q2').map((line) => {
              const isRhymeMatch = selectedRhyme === null || selectedRhyme === line.rhymeLetter;
              const color = rhymeColors[line.rhymeLetter];

              return (
                <div
                  key={line.num}
                  onClick={() => handleReadLine(line.text)}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all cursor-pointer ${
                    isRhymeMatch
                      ? 'bg-[#211a1d] border-[#4d3d44] hover:border-[#df9b9b]'
                      : 'opacity-30 bg-transparent border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[#8fae9b] font-mono text-base w-8 sm:w-10 shrink-0 text-right font-bold">{line.num}</span>
                    <span className="font-poetry text-base sm:text-lg text-[#f7ede2] truncate">
                      {line.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-3 py-1 rounded-lg text-base font-mono font-bold border ${color.bg} ${color.text} ${color.border}`}>
                      {line.rhymeLetter} ({line.rhymeWord})
                    </span>
                    <Volume2 className="w-4 h-4 text-[#c4b5a5] hover:text-[#df9b9b]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Quatrain 3 (The Volta) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#2b2227]/90 border border-[#8fae9b]/50 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 mb-3.5 border-b border-[#4d3d44] text-base">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono px-2.5 py-1 rounded bg-[#33292f] text-[#f4d3d8] font-bold text-base">
                第三四行詩節 (Quatrain 3 · Volta 詩意大轉折)
              </span>
              <span className="font-mono text-[#d8c7b8] text-base">押韻：E - F - E - F</span>
            </div>
            <span className="text-[#8fae9b] font-semibold text-base">轉折：以 "But" 開頭，宣告愛人永不褪色</span>
          </div>

          <div className="space-y-2.5">
            {SONNET_18_LINES.filter((l) => l.section === 'Q3').map((line) => {
              const isRhymeMatch = selectedRhyme === null || selectedRhyme === line.rhymeLetter;
              const color = rhymeColors[line.rhymeLetter];

              return (
                <div
                  key={line.num}
                  onClick={() => handleReadLine(line.text)}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all cursor-pointer ${
                    isRhymeMatch
                      ? 'bg-[#211a1d] border-[#4d3d44] hover:border-[#8fae9b]'
                      : 'opacity-30 bg-transparent border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[#8fae9b] font-mono text-base w-8 sm:w-10 shrink-0 text-right font-bold">{line.num}</span>
                    <span className="font-poetry text-base sm:text-lg text-[#f7ede2] truncate">
                      {line.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-3 py-1 rounded-lg text-base font-mono font-bold border ${color.bg} ${color.text} ${color.border}`}>
                      {line.rhymeLetter} ({line.rhymeWord})
                    </span>
                    <Volume2 className="w-4 h-4 text-[#c4b5a5] hover:text-[#df9b9b]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Heroic Couplet (GG) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#36272e]/80 border border-[#b86b77]/70 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 mb-3.5 border-b border-[#4d3d44] text-base">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono px-2.5 py-1 rounded bg-[#b86b77] text-white font-bold text-base">
                英雄雙行對句 (Heroic Couplet)
              </span>
              <span className="font-mono text-[#df9b9b] font-bold text-base">押韻：G - G（緊密相扣）</span>
            </div>
            <span className="text-[#f4d3d8] font-bold text-base">結論：詩歌不朽，愛人即獲永生</span>
          </div>

          <div className="space-y-2.5">
            {SONNET_18_LINES.filter((l) => l.section === 'Couplet').map((line) => {
              const isRhymeMatch = selectedRhyme === null || selectedRhyme === line.rhymeLetter;
              const color = rhymeColors[line.rhymeLetter];

              return (
                <div
                  key={line.num}
                  onClick={() => handleReadLine(line.text)}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all cursor-pointer ${
                    isRhymeMatch
                      ? 'bg-[#211a1d] border-[#5a434d] hover:border-[#df9b9b]'
                      : 'opacity-30 bg-transparent border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[#df9b9b] font-mono text-base w-8 sm:w-10 shrink-0 text-right font-bold">{line.num}</span>
                    <span className="font-poetry text-base sm:text-lg text-[#f7ede2] font-bold truncate">
                      {line.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-3 py-1 rounded-lg text-base font-mono font-bold border ${color.bg} ${color.text} ${color.border}`}>
                      {line.rhymeLetter} ({line.rhymeWord})
                    </span>
                    <Volume2 className="w-4 h-4 text-[#df9b9b] hover:text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
