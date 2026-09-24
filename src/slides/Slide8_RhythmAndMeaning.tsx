import React, { useState } from 'react';
import { Waves, Sparkles, Compass, Zap, ArrowRight, BookOpen, Quote } from 'lucide-react';
import { speakText } from '../utils/audioEngine';

export const Slide8_RhythmAndMeaning: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rhythm' | 'meaning'>('rhythm');

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
      {/* Slide Header */}
      <div className="text-center mb-6">
        <div className="text-base font-semibold text-[#8fae9b] uppercase tracking-wider mb-1">
          意境昇華 · 結構哲學
        </div>
        <h2 className="font-poetry text-[32px] sm:text-4xl font-bold text-[#f7ede2] leading-tight">
          結構如何塑造「節奏」與「詩意」？
        </h2>
        <p className="text-base sm:text-lg text-[#d8c7b8] mt-2 max-w-2xl mx-auto">
          ABAB CDCD EFEF GG 並非死板的格式，而是莎士比亞精密調度的「節奏推進機」與「意義辯證法」。
        </p>
      </div>

      {/* Mode Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-[#211a1d] border border-[#4d3d44] gap-1">
          <button
            onClick={() => setActiveTab('rhythm')}
            data-tab="true"
            className={`tab-text flex items-center gap-2 px-4 py-2 rounded-xl !text-[14px] font-bold transition-all ${
              activeTab === 'rhythm'
                ? 'bg-[#b86b77] text-white shadow-md'
                : 'text-[#c4b5a5] hover:text-[#f7ede2]'
            }`}
          >
            <Waves className="w-4 h-4" />
            <span>對「節奏律動 (Rhythm)」的深遠影響</span>
          </button>
          <button
            onClick={() => setActiveTab('meaning')}
            data-tab="true"
            className={`tab-text flex items-center gap-2 px-4 py-2 rounded-xl !text-[14px] font-bold transition-all ${
              activeTab === 'meaning'
                ? 'bg-[#5e826e] text-white shadow-md'
                : 'text-[#c4b5a5] hover:text-[#f7ede2]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>對「詩意層次 (Meaning)」的辯證推動</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Influence on Rhythm */}
      {activeTab === 'rhythm' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Rhythm Aspect 1: Cross-Rhyme Momentum */}
            <div className="p-6 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] shadow-xl">
              <div className="flex items-center gap-2 text-[#df9b9b] font-bold text-base sm:text-lg mb-3">
                <Waves className="w-5 h-5" />
                <span>1. 交叉韻（ABAB）形成的「潮汐式向前推力」</span>
              </div>
              <p className="text-base text-[#d8c7b8] leading-relaxed">
                在四行詩節中，第 1 行的韻腳（day）並不立刻在第 2 行解開，而是<strong>懸置</strong>到第 3 行（May）；第 2 行的（temperate）則懸置到第 4 行（date）。
              </p>
              <div className="mt-4 p-4 rounded-xl bg-[#211a1d] border border-[#4d3d44] text-base font-mono text-[#d8c7b8] space-y-1.5">
                <div className="flex justify-between text-[#df9b9b] font-semibold">
                  <span>Line 1 (A: day) ─── 懸念拉長 ───┐</span>
                </div>
                <div className="flex justify-between text-[#8fae9b] font-semibold">
                  <span>Line 2 (B: temperate) ─ 懸念拉長 ─┼──┐</span>
                </div>
                <div className="flex justify-between text-[#df9b9b] font-semibold">
                  <span>Line 3 (A: May) ◀── 呼應釋放 ───┘  │</span>
                </div>
                <div className="flex justify-between text-[#8fae9b] font-semibold">
                  <span>Line 4 (B: date) ◀── 呼應釋放 ─────┘</span>
                </div>
              </div>
              <p className="text-base text-[#d8c7b8] mt-4 leading-relaxed">
                這種交錯的引力，就像海浪波濤<strong>「推一步、蓄一步、再拍岸」</strong>，驅使聽眾的注意力永不中斷地滑向下一行。
              </p>
            </div>

            {/* Rhythm Aspect 2: Couplet Snap */}
            <div className="p-6 rounded-2xl bg-[#36272e]/80 border border-[#b86b77]/60 shadow-xl">
              <div className="flex items-center gap-2 text-[#f4d3d8] font-bold text-base sm:text-lg mb-3">
                <Zap className="w-5 h-5 text-[#df9b9b]" />
                <span>2. 雙行對句（GG）的「節奏急剎與鐘鳴共振」</span>
              </div>
              <p className="text-base text-[#d8c7b8] leading-relaxed">
                在前 12 行聽慣了寬廣的交叉波浪後，最後兩行突然變成<strong>緊挨著的隨韻（see / thee）</strong>！
              </p>
              <div className="mt-4 p-4 rounded-xl bg-[#211a1d] border border-[#5a434d] text-base text-[#f7ede2] space-y-2">
                <div className="font-poetry text-lg sm:text-xl italic">
                  “So long as men can breathe or eyes can <strong className="text-[#df9b9b]">see</strong>,”
                </div>
                <div className="font-poetry text-lg sm:text-xl italic">
                  “So long lives this, and this gives life to <strong className="text-[#df9b9b]">thee</strong>.”
                </div>
              </div>
              <p className="text-base text-[#d8c7b8] mt-4 leading-relaxed">
                節奏在此處<strong>驟然加速收束</strong>，發出清脆有力的撞擊聲，彷彿教堂最後落下的沉重金鐘，給整首詩帶來不可動搖的終極定局感。
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-base text-[#f7ede2] leading-relaxed">
              💡 <strong>節奏總結：</strong> 抑揚格五音步（da-DUM）提供了底層<strong>心跳脈搏</strong>，而 ABAB 押韻提供了上層<strong>潮汐波浪</strong>，兩者交織出無與倫比的律動。
            </span>
            <button
              onClick={() => speakText("So long as men can breathe or eyes can see, So long lives this, and this gives life to thee.", undefined, undefined, 0.84)}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-[#5e826e] hover:bg-[#6c947e] text-white text-base font-semibold transition-colors"
            >
              聆聽 GG 對句鏗鏘聲
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Influence on Meaning */}
      {activeTab === 'meaning' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] flex flex-col justify-between">
              <div>
                <span className="text-base font-mono font-bold text-[#df9b9b] px-2.5 py-1 rounded-md bg-[#3a2c33]">
                  Q1 (ABAB) · 提問立論
                </span>
                <h4 className="font-bold text-[#f7ede2] text-base sm:text-lg mt-3">自然夏日的缺陷</h4>
                <p className="text-base text-[#d8c7b8] mt-2 leading-relaxed">
                  將戀人比作夏天，但夏日風暴搖落花蕊、租期太短，暴露出大自然美景的短暫與不可靠。
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#4d3d44] text-base text-[#8fae9b] font-serif italic">
                “too short a date”
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] flex flex-col justify-between">
              <div>
                <span className="text-base font-mono font-bold text-[#8fae9b] px-2.5 py-1 rounded-md bg-[#252f2a]">
                  Q2 (CDCD) · 廣義泛化
                </span>
                <h4 className="font-bold text-[#f7ede2] text-base sm:text-lg mt-3">萬物衰亡的鐵律</h4>
                <p className="text-base text-[#d8c7b8] mt-2 leading-relaxed">
                  擴展到宇宙自然規律：太陽會被烏雲遮蔽，世間任何美麗的事物都終將凋謝褪色。
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#4d3d44] text-base text-[#8fae9b] font-serif italic">
                “every fair declines”
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-[#36272e]/80 border border-[#8fae9b]/60 flex flex-col justify-between">
              <div>
                <span className="text-base font-mono font-bold text-[#f4d3d8] px-2.5 py-1 rounded-md bg-[#4d3540]">
                  Q3 (EFEF) · Volta 轉折
                </span>
                <h4 className="font-bold text-[#f7ede2] text-base sm:text-lg mt-3">反抗命運的宣言</h4>
                <p className="text-base text-[#d8c7b8] mt-2 leading-relaxed">
                  第 9 行以石破天驚的 <strong>"But"</strong> 突轉！宣告「你的永恆之夏絕不褪色」，死神也無能為力！
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#5a434d] text-base text-[#df9b9b] font-serif italic">
                “eternal summer”
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-[#36272e] border border-[#b86b77]/70 flex flex-col justify-between">
              <div>
                <span className="text-base font-mono font-bold text-white px-2.5 py-1 rounded-md bg-[#b86b77]">
                  Couplet (GG) · 終極頓悟
                </span>
                <h4 className="font-bold text-white text-base sm:text-lg mt-3">詩歌藝術賦予永生</h4>
                <p className="text-base text-[#f7ede2] mt-2 leading-relaxed">
                  揭示秘密：為何能永不凋謝？因為只要人類還在呼吸閱讀，<strong>這首詩就活著，並賦予你永恆生命！</strong>
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#5a434d] text-base text-[#df9b9b] font-serif italic font-semibold">
                “this gives life to thee”
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] text-base text-[#d8c7b8] leading-relaxed">
            <strong className="text-[#df9b9b]">總結意義昇華：</strong>
            四行詩節的遞進（短暫夏日 $\to$ 萬物衰退 $\to$ 逆轉死亡），最終在 GG 雙行對句完成了從「感嘆自然無常」到「慶祝藝術永恆」的哲學跳躍！
          </div>
        </div>
      )}
    </div>
  );
};
