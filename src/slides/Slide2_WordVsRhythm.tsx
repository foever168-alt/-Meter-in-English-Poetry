import React, { useState } from 'react';
import { ArrowDown, AlertCircle, Lightbulb, Play, Volume2 } from 'lucide-react';
import { METRIC_FEET } from '../data/sonnetData';
import { soundFx } from '../utils/audioEngine';

export const Slide2_WordVsRhythm: React.FC = () => {
  const [viewMode, setViewMode] = useState<'words' | 'feet'>('feet');

  const words = [
    { text: 'Shall', count: '1音節' },
    { text: 'I', count: '1音節' },
    { text: 'compare', count: '2音節 (com·pare)' },
    { text: 'thee', count: '1音節' },
    { text: 'to', count: '1音節' },
    { text: 'a', count: '1音節' },
    { text: "summer's", count: "2音節 (sum·mer's)", highlight: true },
    { text: 'day', count: '1音節' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
      {/* Slide Header */}
      <div className="text-center mb-6">
        <div className="text-base font-semibold text-[#8fae9b] uppercase tracking-wider mb-1">
          直觀反思 · 認知突破
        </div>
        <h2 className="font-poetry text-[32px] sm:text-4xl font-bold text-[#f7ede2] leading-tight">
          為什麼我們常常「唸不出」英文詩的節奏？
        </h2>
        <p className="text-base sm:text-lg text-[#d8c7b8] mt-2 max-w-2xl mx-auto">
          眼睛看見的是「獨立單字」，但詩人的耳朵聽見的是「流動的音節與音步」。
        </p>
      </div>

      {/* Interactive Switch */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-[#272024] border border-[#4d3d44] gap-1">
          <button
            onClick={() => setViewMode('words')}
            className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
              viewMode === 'words'
                ? 'bg-[#3d3238] text-[#f7ede2] shadow-sm'
                : 'text-[#c4b5a5] hover:text-[#f7ede2]'
            }`}
          >
            眼睛看到的：紙本單字視角（7 個單字）
          </button>
          <button
            onClick={() => setViewMode('feet')}
            className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
              viewMode === 'feet'
                ? 'bg-[#b86b77] text-[#f7ede2] shadow-sm'
                : 'text-[#c4b5a5] hover:text-[#f7ede2]'
            }`}
          >
            詩人聽到的：音部節奏視角（5 個音部）
          </button>
        </div>
      </div>

      {/* Comparative Visual Stage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Box A: The Word-by-Word intuition */}
        <div
          className={`p-6 rounded-2xl border transition-all ${
            viewMode === 'words'
              ? 'bg-[#2b2227]/90 border-[#8fae9b] ring-2 ring-[#8fae9b]/20 shadow-xl'
              : 'bg-[#211a1d]/60 border-[#4d3d44] opacity-60'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#4d3d44]">
            <span className="text-base font-semibold text-[#f7ede2]">一般學生的直覺：看空格停頓</span>
            <span className="text-base font-mono text-[#c4b5a5]">8 個詞彙單位</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {words.map((w, idx) => (
              <div
                key={idx}
                className={`px-3.5 py-2.5 rounded-xl text-center border ${
                  w.highlight
                    ? 'bg-[#3d2931] border-[#b86b77] text-[#f4d3d8]'
                    : 'bg-[#251e22] border-[#4d3d44] text-[#f7ede2]'
                }`}
              >
                <div className="font-poetry text-lg font-bold">{w.text}</div>
                <div className="text-base text-[#c4b5a5] font-mono mt-0.5">{w.count}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-xl bg-[#211a1d] border border-[#4d3d44] text-base text-[#d8c7b8] space-y-1.5">
            <div className="flex items-center gap-2 text-[#f7ede2] font-bold">
              <AlertCircle className="w-5 h-5 text-[#df9b9b] shrink-0" />
              <span>直覺陷阱：</span>
            </div>
            <p className="leading-relaxed">
              如果按著單字死板停頓唸，就像機器人跳針，完全丟失了英語天然的抑揚頓挫與美感。
            </p>
          </div>
        </div>

        {/* Box B: The Rhythmic Foot Reality */}
        <div
          className={`p-6 rounded-2xl border transition-all ${
            viewMode === 'feet'
              ? 'bg-[#2b2227]/90 border-[#df9b9b] ring-2 ring-[#df9b9b]/20 shadow-xl'
              : 'bg-[#211a1d]/60 border-[#4d3d44] opacity-60'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#4d3d44]">
            <span className="text-base font-bold text-[#df9b9b]">英語母語者與詩人的聽覺：重組音部</span>
            <span className="text-base font-mono text-[#8fae9b] font-bold">5 個音步（Feet）</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {METRIC_FEET.map((foot) => (
              <div
                key={foot.id}
                className="px-3.5 py-2.5 rounded-xl bg-[#251e22] border border-[#5a434d] text-center hover:border-[#df9b9b] transition-colors"
              >
                <div className="font-poetry text-lg font-bold text-[#f7ede2]">
                  [{foot.unstressed.text}／
                  <span className="text-[#df9b9b] font-extrabold">{foot.stressed.text}</span>]
                </div>
                <div className="text-base text-[#8fae9b] font-mono mt-0.5">
                  音部 {foot.id} (輕／重)
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-xl bg-[#36272e] border border-[#b86b77]/50 text-base text-[#f7ede2] space-y-1.5">
            <div className="flex items-center gap-2 text-[#f4d3d8] font-bold">
              <Lightbulb className="w-5 h-5 text-[#df9b9b] shrink-0" />
              <span>核心發現：打破單字邊界！</span>
            </div>
            <p className="leading-relaxed">
              注意看 <strong className="text-[#df9b9b]">"summer's"</strong>：在發音時，它被切成了兩半！<strong>"sum"</strong> 跟在第四個音部當重音，而 <strong>"mer's"</strong> 則被丟給了第五個音部當輕音！
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Summary callout */}
      <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#2b2227] via-[#33292f] to-[#252f2a] border border-[#4d3d44] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-base text-[#f7ede2] leading-relaxed">
          <strong className="text-[#df9b9b]">記住口訣：</strong> 詩歌是用「耳朵」聽的，不是用「眼睛」切的。發音永遠順應節拍流動！
        </div>
        <button
          onClick={() => {
            soundFx.playClick(false);
            setTimeout(() => soundFx.playClick(true), 250);
          }}
          className="shrink-0 px-4 py-2.5 rounded-xl bg-[#5e826e] hover:bg-[#6c947e] border border-[#8fae9b] text-[#f7ede2] text-base font-semibold flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          <span>試聽「輕·重」拍</span>
        </button>
      </div>
    </div>
  );
};
