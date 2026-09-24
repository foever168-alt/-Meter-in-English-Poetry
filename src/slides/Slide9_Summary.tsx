import React, { useState } from 'react';
import { CheckCircle2, Trophy, Sparkles, RefreshCw, Volume2, ArrowRight } from 'lucide-react';
import { METRIC_FEET } from '../data/sonnetData';
import { speakText, soundFx } from '../utils/audioEngine';

interface Slide9Props {
  onRestart: () => void;
}

export const Slide9_Summary: React.FC<Slide9Props> = ({ onRestart }) => {
  const [activeNextVerseStep, setActiveNextVerseStep] = useState<number | null>(null);

  const nextVerseFeet = [
    { foot: '[Thou／art]', note: '輕·重' },
    { foot: '[more／love]', note: '輕·重' },
    { foot: '[ly／and]', note: '輕·重 (love·ly 拆開)' },
    { foot: '[more／tem]', note: '輕·重 (tem·per·ate)' },
    { foot: '[per／ate]', note: '輕·重 (結尾輕重)' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
      {/* Slide Header */}
      <div className="text-center mb-6">
        <div className="text-base font-semibold text-[#8fae9b] uppercase tracking-wider mb-1 flex items-center justify-center gap-2">
          <Trophy className="w-5 h-5 text-[#df9b9b]" />
          <span>課程驗收 · 大師精通心法</span>
        </div>
        <h2 className="font-poetry text-[32px] sm:text-4xl font-bold text-[#f7ede2] leading-tight">
          課堂總結：莎翁音律三大心法
        </h2>
        <p className="text-base sm:text-lg text-[#d8c7b8] mt-2 max-w-2xl mx-auto">
          掌握這三步，往後任何英文詩歌都能像讀 Rap 饒舌歌一樣讀出鮮活律動！
        </p>
      </div>

      {/* 3 Core Steps Review Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-base font-bold text-[#8fae9b] mb-2.5">
              <span className="w-9 h-9 rounded-full bg-[#5e826e]/30 flex items-center justify-center text-[#f7ede2] text-base shrink-0 font-bold">1</span>
              <span>切分音節（／）</span>
            </div>
            <h4 className="font-bold text-[#f7ede2] text-base sm:text-lg">打破單字原本邊界</h4>
            <p className="text-base text-[#d8c7b8] mt-2.5 leading-relaxed">
              單字不是孤島。英文是依據發音連綴重組的。例如 <strong className="text-[#df9b9b]">"summer's"</strong> 被切分在 <strong>sum</strong>（第4音步重音）與 <strong>mer's</strong>（第5音步輕音）兩個不同箱子中。
            </p>
          </div>
          <div className="mt-4 pt-2.5 border-t border-[#4d3d44] text-base font-mono text-[#8fae9b]">
            [a／sum] [mer's／day]
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-base font-bold text-[#8fae9b] mb-2.5">
              <span className="w-9 h-9 rounded-full bg-[#5e826e]/30 flex items-center justify-center text-[#f7ede2] text-base shrink-0 font-bold">2</span>
              <span>框出音部（[ ]）</span>
            </div>
            <h4 className="font-bold text-[#f7ede2] text-base sm:text-lg">5 個 [輕／重] 抑揚格</h4>
            <p className="text-base text-[#d8c7b8] mt-2.5 leading-relaxed">
              整句話完美切分成 5 個 [輕／重] 音部（Iambic Pentameter）。宛如心臟跳動聲 <strong>da-DUM × 5 = 10 個音節</strong>，是深呼吸最優雅的長度。
            </p>
          </div>
          <div className="mt-4 pt-2.5 border-t border-[#4d3d44] text-base font-mono text-[#8fae9b]">
            Penta (5) + Meter (步)
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#36272e]/80 border border-[#b86b77]/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-base font-bold text-[#df9b9b] mb-2.5">
              <span className="w-9 h-9 rounded-full bg-[#b86b77] flex items-center justify-center text-white text-base shrink-0 font-bold">3</span>
              <span>大聲朗讀（Rap 齊唸）</span>
            </div>
            <h4 className="font-bold text-white text-base sm:text-lg">誇張強調玫瑰重音</h4>
            <p className="text-base text-[#f7ede2] mt-2.5 leading-relaxed">
              戲劇化強調莫蘭迪粉色重音（<strong className="text-[#df9b9b]">I, pare, to, sum, day</strong>）。輕音拍桌、重音拍手，全班像唸 Rap 饒舌歌一樣跟著節奏喊出來！
            </p>
          </div>
          <div className="mt-4 pt-2.5 border-t border-[#5a434d] text-base font-mono text-[#df9b9b]">
            ABAB CDCD EFEF GG
          </div>
        </div>
      </div>

      {/* Bonus Challenge: Try Line 2 */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#4d3d44] mb-4">
          <div className="flex items-center gap-2 text-base font-bold text-[#df9b9b]">
            <Sparkles className="w-5 h-5" />
            <span>進階挑戰：第 2 行朗讀實戰（你能找出 5 個重音嗎？）</span>
          </div>
          <button
            onClick={() => speakText("Thou art more lovely and more temperate.", undefined, undefined, 0.82)}
            className="text-base text-[#8fae9b] hover:text-[#a3c4b0] flex items-center gap-1.5 font-semibold transition-colors"
          >
            <Volume2 className="w-4 h-4" />
            <span>聆聽示範</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-2">
          {nextVerseFeet.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-[#211a1d] border border-[#4d3d44] text-center"
            >
              <div className="font-poetry text-lg sm:text-2xl font-bold text-[#f7ede2]">
                {item.foot}
              </div>
              <div className="text-base text-[#d8c7b8] font-mono mt-1.5">
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* End Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#211a1d] hover:bg-[#33292f] border border-[#4d3d44] text-[#d8c7b8] hover:text-white text-base font-semibold transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>回到課程第一頁重新複習</span>
        </button>
      </div>
    </div>
  );
};
