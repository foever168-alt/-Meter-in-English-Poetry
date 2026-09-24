import React, { useState } from 'react';
import { Scissors, Volume2, Split, Check, Sparkles } from 'lucide-react';
import { METRIC_FEET } from '../data/sonnetData';
import { soundFx, speakText } from '../utils/audioEngine';

export const Slide3_SyllableSplit: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<number | null>(3); // default highlight summer's
  const [isSliced, setIsSliced] = useState<boolean>(true);

  const handleSyllableClick = (text: string, isStressed: boolean) => {
    soundFx.playClick(isStressed, isStressed ? 0.9 : 0.4);
    speakText(text, undefined, undefined, 0.9, isStressed ? 1.15 : 0.95);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
      {/* Slide Header */}
      <div className="text-center mb-6">
        <div className="text-base font-semibold text-[#8fae9b] uppercase tracking-wider mb-1">
          解析步驟 01 · 音節切分
        </div>
        <h2 className="font-poetry text-[32px] sm:text-4xl font-bold text-[#f7ede2] leading-tight">
          切分音節（／）：打破單字邊界
        </h2>
        <p className="text-base sm:text-lg text-[#d8c7b8] mt-2 max-w-2xl mx-auto">
          英文是如何打破單字原本的邊界，重新組合成發音單位的？
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-6 sm:p-7 rounded-3xl bg-[#2b2227]/90 border border-[#4d3d44] shadow-2xl relative overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#4d3d44]">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-base font-semibold text-[#f7ede2]">切分狀態：</span>
            <button
              onClick={() => setIsSliced(!isSliced)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-base font-semibold transition-all ${
                isSliced
                  ? 'bg-[#b86b77] text-white shadow-sm'
                  : 'bg-[#33292f] text-[#d8c7b8] hover:text-[#f7ede2]'
              }`}
            >
              <Scissors className="w-4 h-4" />
              <span>{isSliced ? '已啟用「／」音節切分' : '重組為原始單字'}</span>
            </button>
          </div>

          <div className="text-base text-[#8fae9b] font-medium">
            💡 點擊任一音節即可發音並試聽重音強弱
          </div>
        </div>

        {/* The 5 Foot Segments with Slashes */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 py-6">
          {METRIC_FEET.map((foot, index) => {
            const isTargetHighlight = foot.id === 4 || foot.id === 5;
            const isSelected = activeSegment === index;

            return (
              <div
                key={foot.id}
                onClick={() => setActiveSegment(index)}
                className={`relative flex items-center p-3 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#36272e] border-[#df9b9b] ring-2 ring-[#df9b9b]/30 shadow-lg scale-105'
                    : isTargetHighlight
                    ? 'bg-[#30262b] border-[#b86b77]/60 hover:border-[#df9b9b]'
                    : 'bg-[#211a1d] border-[#4d3d44] hover:border-[#5a434d]'
                }`}
              >
                {/* Foot Tag */}
                <div className="absolute -top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#33292f] border border-[#4d3d44] text-base font-mono text-[#8fae9b]">
                  音部 {foot.id}
                </div>

                {/* Left (Unstressed) Syllable */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSyllableClick(foot.unstressed.text, false);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-lg sm:text-2xl font-poetry font-normal transition-colors ${
                    foot.unstressed.isWordBreak
                      ? 'text-[#df9b9b] font-bold bg-[#3d2931]'
                      : 'text-[#d8c7b8] hover:text-[#f7ede2]'
                  }`}
                  title={`輕音: ${foot.unstressed.text} (來自: ${foot.unstressed.parentWord})`}
                >
                  {foot.unstressed.text}
                </button>

                {/* Slash Divider */}
                <span className="text-[#8fae9b] font-bold text-xl sm:text-3xl px-1.5 font-mono select-none">
                  ／
                </span>

                {/* Right (Stressed) Syllable */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSyllableClick(foot.stressed.text, true);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-lg sm:text-2xl font-poetry font-extrabold transition-colors ${
                    foot.stressed.isWordBreak
                      ? 'text-[#f4d3d8] bg-[#3d2931]'
                      : 'text-[#df9b9b] hover:text-[#f4d3d8]'
                  }`}
                  title={`重音: ${foot.stressed.text} (來自: ${foot.stressed.parentWord})`}
                >
                  {foot.stressed.text}
                </button>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Box: Focus on "summer's" */}
        <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-[#36272e]/80 border border-[#b86b77]/50">
          <div className="flex items-center gap-2.5 text-[#f4d3d8] font-bold text-base sm:text-lg mb-3">
            <Sparkles className="w-5 h-5 text-[#df9b9b]" />
            <span>特寫聚焦：名詞 "summer's" 被巧妙切分在兩個不同音部中！</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-[#f7ede2] leading-relaxed">
            <div className="p-4 bg-[#231b1f] rounded-xl border border-[#5a434d] space-y-2.5">
              <div className="font-bold text-[#f7ede2] flex items-center justify-between text-base">
                <span>第 4 音部：[a／<strong className="text-[#df9b9b] text-lg">sum</strong>]</span>
                <span className="text-base px-2.5 py-0.5 rounded bg-[#b86b77]/30 text-[#f4d3d8] font-bold">
                  sum 是重音！
                </span>
              </div>
              <p className="text-[#d8c7b8]">
                冠詞 <strong>"a"</strong>（輕音）和 <strong>"summer's"</strong> 的前半截 <strong>"sum"</strong>（重音）被組合成一個拍子。
              </p>
            </div>

            <div className="p-4 bg-[#231b1f] rounded-xl border border-[#5a434d] space-y-2.5">
              <div className="font-bold text-[#f7ede2] flex items-center justify-between text-base">
                <span>第 5 音部：[<strong className="text-[#8fae9b] text-lg">mer's</strong>／day]</span>
                <span className="text-base px-2.5 py-0.5 rounded bg-[#5e826e]/30 text-[#8fae9b] font-bold">
                  mer's 變成輕音！
                </span>
              </div>
              <p className="text-[#d8c7b8]">
                <strong>"summer's"</strong> 的後半截 <strong>"mer's"</strong> 則與下一個單字 <strong>"day"</strong>（重音）組合成最後一個音部。
              </p>
            </div>
          </div>

          <div className="mt-4 text-base text-[#f7ede2] font-medium flex items-start gap-2">
            <Check className="w-5 h-5 text-[#8fae9b] shrink-0 mt-0.5" />
            <span>
              <strong>為什麼要這樣切？</strong> 因為在英語詩歌中，<strong>「節奏律動 (Rhythm)」</strong>大於單字的書寫邊界。發音器官自然而然地按照輕重拍換氣與彈跳。
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
