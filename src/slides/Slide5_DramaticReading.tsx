import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, Mic, Play, Pause, Flame, Heart } from 'lucide-react';
import { METRIC_FEET } from '../data/sonnetData';
import { soundFx, speakText, stopSpeaking } from '../utils/audioEngine';

export const Slide5_DramaticReading: React.FC = () => {
  const [isPlayingDemo, setIsPlayingDemo] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [accentLevel, setAccentLevel] = useState<'exaggerated' | 'monotone'>('exaggerated');

  // Trigger dramatic recitation sequence
  const startDramaticReading = () => {
    if (isPlayingDemo) {
      setIsPlayingDemo(false);
      stopSpeaking();
      setCurrentStep(-1);
      return;
    }

    setIsPlayingDemo(true);
    setCurrentStep(0);

    const stepInterval = 420; // ms per syllable
    let step = 0;

    const intervalId = window.setInterval(() => {
      step++;
      if (step >= 10) {
        clearInterval(intervalId);
        setIsPlayingDemo(false);
        setCurrentStep(-1);
        return;
      }
      setCurrentStep(step);

      const isStressed = step % 2 === 1;
      if (isStressed) {
        soundFx.playKick(0.9);
        soundFx.playClick(true, 0.9);
      } else {
        soundFx.playClick(false, 0.35);
      }
    }, stepInterval);

    // British accent recitation
    speakText(
      "Shall I compare thee to a summer's day?",
      undefined,
      () => {
        clearInterval(intervalId);
        setIsPlayingDemo(false);
        setCurrentStep(-1);
      },
      accentLevel === 'exaggerated' ? 0.76 : 1.0,
      accentLevel === 'exaggerated' ? 1.15 : 0.9
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
      {/* Slide Header */}
      <div className="text-center mb-6">
        <div className="text-base font-semibold text-[#8fae9b] uppercase tracking-wider mb-1">
          解析步驟 03 · 老師示範
        </div>
        <h2 className="font-poetry text-[32px] sm:text-4xl font-bold text-[#f7ede2] leading-tight">
          大聲朗讀：戲劇化誇張重音
        </h2>
        <p className="text-base sm:text-lg text-[#d8c7b8] mt-2 max-w-2xl mx-auto">
          請您以戲劇化的方式，誇張地強調莫蘭迪粉玫瑰重音（
          <span className="text-[#df9b9b] font-black">I, pare, to, sum, day</span>
          ）！
        </p>
      </div>

      {/* Main Dramatic Stage */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#2b2227]/90 border border-[#4d3d44] shadow-2xl relative">
        {/* Accent Mode Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#4d3d44]">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-base text-[#d8c7b8]">朗讀風格：</span>
            <div className="inline-flex flex-wrap p-1 rounded-xl bg-[#211a1d] border border-[#4d3d44]">
              <button
                onClick={() => setAccentLevel('exaggerated')}
                data-tab="true"
                className={`tab-text px-3.5 py-1.5 rounded-lg !text-[14px] font-bold transition-all ${
                  accentLevel === 'exaggerated'
                    ? 'bg-[#b86b77] text-white shadow-sm'
                    : 'text-[#d8c7b8] hover:text-[#f7ede2]'
                }`}
              >
                🎭 戲劇化誇張強調玫瑰重音
              </button>
              <button
                onClick={() => setAccentLevel('monotone')}
                data-tab="true"
                className={`tab-text px-3.5 py-1.5 rounded-lg !text-[14px] font-medium transition-all ${
                  accentLevel === 'monotone'
                    ? 'bg-[#3d3238] text-[#f7ede2] shadow-sm'
                    : 'text-[#c4b5a5] hover:text-[#f7ede2]'
                }`}
              >
                平淡機械念法（反面示範）
              </button>
            </div>
          </div>

          <button
            onClick={startDramaticReading}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-base transition-all shadow-lg active:scale-95 ${
              isPlayingDemo
                ? 'bg-[#b86b77] text-white animate-pulse'
                : 'bg-[#5e826e] hover:bg-[#6c947e] text-[#f7ede2] shadow-[#5e826e]/25 ring-2 ring-[#8fae9b]/30'
            }`}
          >
            {isPlayingDemo ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            <span>{isPlayingDemo ? '暫停朗誦示範' : '啟動戲劇化誇張朗讀'}</span>
          </button>
        </div>

        {/* Huge Visual Display of the 5 Feet with Morandi Pink Accents */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-6">
          {METRIC_FEET.map((foot, fIdx) => {
            const unstressedStep = fIdx * 2;
            const stressedStep = fIdx * 2 + 1;
            const isUnstressedActive = currentStep === unstressedStep;
            const isStressedActive = currentStep === stressedStep;

            return (
              <div
                key={foot.id}
                className="flex items-center p-3.5 sm:p-5 rounded-2xl bg-[#211a1d] border border-[#4d3d44] text-center"
              >
                <span className="text-[#8fae9b] font-sans text-2xl sm:text-3xl font-light">[</span>

                {/* Unstressed part: quiet, subtle */}
                <span
                  className={`font-poetry text-xl sm:text-3xl px-1.5 transition-all duration-150 ${
                    isUnstressedActive
                      ? 'text-[#f7ede2] font-bold scale-110'
                      : 'text-[#8fae9b] font-normal'
                  }`}
                >
                  {foot.unstressed.text}
                </span>

                <span className="text-[#645059] font-mono text-2xl sm:text-3xl px-1">／</span>

                {/* Stressed part: MORANDI PINK, EXAGGERATED BOLD */}
                <span
                  className={`font-poetry text-2xl sm:text-4xl px-2 transition-all duration-150 rounded-lg ${
                    isStressedActive
                      ? 'bg-[#df9b9b] text-[#221c1f] font-black scale-125 shadow-xl shadow-[#df9b9b]/50 ring-2 ring-[#f4d3d8]'
                      : 'text-[#df9b9b] font-black tracking-wide'
                  }`}
                  style={{
                    textShadow: isStressedActive
                      ? '0 0 20px #df9b9b'
                      : '0 0 12px rgba(223, 155, 155, 0.4)',
                  }}
                >
                  {foot.stressed.text}
                </span>

                <span className="text-[#8fae9b] font-sans text-2xl sm:text-3xl font-light">]</span>
              </div>
            );
          })}
        </div>

        {/* Visual Callout for the 5 Morandi Pink Accents */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#36272e]/70 border border-[#b86b77]/50">
          <div className="flex items-center gap-2 text-[#f4d3d8] font-bold text-base sm:text-lg mb-3.5">
            <Sparkles className="w-5 h-5 text-[#df9b9b]" />
            <span>5 大莫蘭迪玫瑰靈魂重音清單：</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 text-center">
            <div className="p-4 bg-[#231b1f] rounded-xl border border-[#5a434d]">
              <div className="text-base text-[#8fae9b] font-mono">第 1 重音</div>
              <div className="text-2xl font-poetry font-black text-[#df9b9b] mt-1">I</div>
              <div className="text-base text-[#d8c7b8] mt-1">Shall <strong className="text-[#df9b9b]">I</strong></div>
            </div>

            <div className="p-4 bg-[#231b1f] rounded-xl border border-[#5a434d]">
              <div className="text-base text-[#8fae9b] font-mono">第 2 重音</div>
              <div className="text-2xl font-poetry font-black text-[#df9b9b] mt-1">pare</div>
              <div className="text-base text-[#d8c7b8] mt-1">com·<strong className="text-[#df9b9b]">PARE</strong></div>
            </div>

            <div className="p-4 bg-[#231b1f] rounded-xl border border-[#5a434d]">
              <div className="text-base text-[#8fae9b] font-mono">第 3 重音</div>
              <div className="text-2xl font-poetry font-black text-[#df9b9b] mt-1">to</div>
              <div className="text-base text-[#d8c7b8] mt-1">thee <strong className="text-[#df9b9b]">TO</strong></div>
            </div>

            <div className="p-4 bg-[#231b1f] rounded-xl border border-[#5a434d]">
              <div className="text-base text-[#8fae9b] font-mono">第 4 重音</div>
              <div className="text-2xl font-poetry font-black text-[#df9b9b] mt-1">sum</div>
              <div className="text-base text-[#d8c7b8] mt-1">a <strong className="text-[#df9b9b]">SUM</strong></div>
            </div>

            <div className="p-4 bg-[#231b1f] rounded-xl border border-[#5a434d]">
              <div className="text-base text-[#8fae9b] font-mono">第 5 重音</div>
              <div className="text-2xl font-poetry font-black text-[#df9b9b] mt-1">day</div>
              <div className="text-base text-[#d8c7b8] mt-1">mer's <strong className="text-[#df9b9b]">DAY</strong></div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-[#211a1d] rounded-xl text-base text-[#f7ede2] leading-relaxed">
            🎭 <strong>老師講台示範要訣：</strong>
            讀到輕音時身體放鬆、音量調低；一碰到莫蘭迪粉色重音（I, pare, to, sum, day），立刻加重語氣、稍微拉長音調並加強重音共鳴，就像在唸一段古典 Hip-Hop！
          </div>
        </div>
      </div>
    </div>
  );
};
