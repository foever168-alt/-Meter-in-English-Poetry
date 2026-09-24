import React, { useState } from 'react';
import { Sparkles, Play, Volume2, ArrowRight, Heart, Music, CheckCircle } from 'lucide-react';
import { speakText, stopSpeaking, soundFx } from '../utils/audioEngine';

interface Slide1Props {
  onStartLecture: () => void;
}

export const Slide1_Intro: React.FC<Slide1Props> = ({ onStartLecture }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handlePlayHeroSpeech = () => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);
    speakText(
      "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.",
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false),
      0.82
    );
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-4 py-6 sm:py-10">
      {/* Editorial Category Pill */}
      <div className="inline-flex flex-wrap items-center justify-center gap-2 text-base font-semibold tracking-wider text-[#df9b9b] uppercase mb-4">
        <span>William Shakespeare</span>
        <span aria-hidden="true" className="text-[#645059]">·</span>
        <span className="text-[#8fae9b]">Sonnet 18 Masterclass</span>
        <span aria-hidden="true" className="text-[#645059]">·</span>
        <span className="text-[#f4d3d8]">抑揚格五音步與押韻美學</span>
      </div>

      {/* Main Title */}
      <h1 className="font-poetry text-[32px] sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f7ede2] max-w-4xl text-balance leading-tight">
        聽見詩歌的心跳：
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df9b9b] via-[#f4d3d8] to-[#8fae9b] block mt-2">
          莎士比亞十四行詩節奏大解密
        </span>
      </h1>

      {/* Subtitle quote */}
      <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#2b2227]/90 border border-[#4d3d44] max-w-2xl w-full shadow-xl">
        <p className="font-poetry text-2xl sm:text-3xl text-[#f4d3d8] italic tracking-wide">
          “Shall I compare thee to a summer's day?”
        </p>
        <p className="text-base sm:text-lg text-[#d8c7b8] mt-2.5">
          「我能否將你比作炎炎夏日？你卻比它更為可愛，更為溫婉。」
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handlePlayHeroSpeech}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-semibold border transition-all ${
              isPlayingAudio
                ? 'bg-[#b86b77] text-white border-[#df9b9b] animate-pulse'
                : 'bg-[#33292f] hover:bg-[#3d3238] border-[#4d3d44] text-[#f7ede2]'
            }`}
          >
            <Volume2 className="w-5 h-5 text-[#df9b9b]" />
            <span>{isPlayingAudio ? '朗誦示範中…' : '聆聽莎翁原詩發音'}</span>
          </button>

          <button
            onClick={() => soundFx.playHeartbeat(true, 0.9)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-base font-medium bg-[#33292f]/70 hover:bg-[#3d3238] border border-[#4d3d44] text-[#d8c7b8]"
            title="聆聽心跳聲"
          >
            <Heart className="w-4 h-4 text-[#df9b9b]" />
            <span>試聽心跳節律 (lub-DUB)</span>
          </button>
        </div>
      </div>

      {/* 4 Core Learning Objectives Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full text-left">
        <div className="p-4 rounded-xl bg-[#2b2227]/70 border border-[#4d3d44] hover:border-[#8fae9b]/60 transition-colors">
          <div className="text-base font-mono font-bold text-[#8fae9b] mb-1">01. 切分音節（／）</div>
          <div className="text-lg font-bold text-[#f7ede2]">打破單字固有邊界</div>
          <div className="text-base text-[#d8c7b8] mt-1.5 leading-relaxed">
            展示英文如何將 "summer's" 巧妙拆開，重組為跨詞發音單位。
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#2b2227]/70 border border-[#4d3d44] hover:border-[#df9b9b]/60 transition-colors">
          <div className="text-base font-mono font-bold text-[#df9b9b] mb-1">02. 框出音部（[ ]）</div>
          <div className="text-lg font-bold text-[#f7ede2]">5 個 [輕／重] 抑揚格</div>
          <div className="text-base text-[#d8c7b8] mt-1.5 leading-relaxed">
            完美切分 5 個音部，體驗宛如人類心跳 "da-DUM" 的 10 音節律動。
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#2b2227]/70 border border-[#4d3d44] hover:border-[#8fae9b]/60 transition-colors">
          <div className="text-base font-mono font-bold text-[#8fae9b] mb-1">03. 戲劇化朗讀示範</div>
          <div className="text-lg font-bold text-[#f7ede2]">莫蘭迪玫瑰重音 & Rap 齊唸</div>
          <div className="text-base text-[#d8c7b8] mt-1.5 leading-relaxed">
            誇張凸顯「I, pare, to, sum, day」，帶領全班像唸 Rap 一樣打拍子！
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#2b2227]/70 border border-[#4d3d44] hover:border-[#df9b9b]/60 transition-colors">
          <div className="text-base font-mono font-bold text-[#df9b9b] mb-1">04. 押韻格律解析</div>
          <div className="text-lg font-bold text-[#f7ede2]">ABAB CDCD EFEF GG</div>
          <div className="text-base text-[#d8c7b8] mt-1.5 leading-relaxed">
            探討 3 個四行詩節與對句結構如何推動詩意發展與永恆昇華。
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="mt-8">
        <button
          onClick={onStartLecture}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#b86b77] hover:bg-[#c97b87] text-[#f7ede2] font-bold text-base shadow-lg shadow-[#b86b77]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>開始拆解與朗讀教學</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
