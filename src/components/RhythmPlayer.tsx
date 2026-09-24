import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Volume2, VolumeX, Sparkles, Flame, Heart, Clock } from 'lucide-react';
import { soundFx, speakText, stopSpeaking } from '../utils/audioEngine';
import { METRIC_FEET } from '../data/sonnetData';
import { BeatStyle } from '../types';

interface RhythmPlayerProps {
  currentActiveSyllableIndex?: number;
  onSyllableTick?: (index: number) => void;
  compact?: boolean;
}

export const RhythmPlayer: React.FC<RhythmPlayerProps> = ({
  onSyllableTick,
  compact = false,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(84);
  const [beatStyle, setBeatStyle] = useState<BeatStyle>('boombap');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);
  const stepRef = useRef<number>(0);

  // Toggle mute
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundFx.setMuted(nextMuted);
  };

  // Play beat step
  const handleTick = (step: number) => {
    setActiveStep(step);
    if (onSyllableTick) {
      onSyllableTick(step);
    }

    const isStressed = step % 2 === 1; // 1, 3, 5, 7, 9 are stressed

    if (beatStyle === 'boombap') {
      // Boom-bap rap beat
      if (step === 0 || step === 4) {
        soundFx.playKick(0.9);
      } else if (step === 2 || step === 6 || step === 8) {
        soundFx.playSnare(0.85);
      } else {
        soundFx.playHiHat(0.4);
      }
      // If it's stressed, add accent click
      if (isStressed) {
        soundFx.playClick(true, 0.4);
      }
    } else if (beatStyle === 'metronome') {
      soundFx.playClick(isStressed, isStressed ? 0.9 : 0.4);
    } else if (beatStyle === 'heartbeat') {
      soundFx.playHeartbeat(isStressed, isStressed ? 0.95 : 0.55);
    }
  };

  // Rhythm loop
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setActiveStep(-1);
      stepRef.current = 0;
      return;
    }

    // Interval calculation: 10 syllables per cycle, each syllable is an eighth note
    // Interval ms = (60,000 / bpm) / 2
    const intervalMs = Math.round((60000 / bpm) / 2);

    timerRef.current = window.setInterval(() => {
      handleTick(stepRef.current);
      stepRef.current = (stepRef.current + 1) % 10;
    }, intervalMs);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, bpm, beatStyle]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      stepRef.current = 0;
      setIsPlaying(true);
    }
  };

  // Synchronized Dramatic Speech
  const handlePlayVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(true);
    // Dramatic cadence with exaggerated accents
    speakText(
      "Shall I compare thee to a summer's day?",
      () => {
        setIsSpeaking(true);
      },
      () => {
        setIsSpeaking(false);
      },
      0.82,
      1.05
    );
  };

  // Flattened syllables for visual track
  const allSyllables = METRIC_FEET.flatMap((f) => [
    { ...f.unstressed, footId: f.id },
    { ...f.stressed, footId: f.id },
  ]);

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-3 bg-[#2b2227]/95 border border-[#4d3d44] rounded-xl px-4 py-2.5 backdrop-blur-md">
        <button
          onClick={handleTogglePlay}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-base font-semibold transition-all shadow-sm ${
            isPlaying
              ? 'bg-[#df9b9b] hover:bg-[#e6abab] text-[#221c1f] font-bold'
              : 'bg-[#5e826e] hover:bg-[#6c947e] text-[#f7ede2]'
          }`}
        >
          {isPlaying ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
          <span>{isPlaying ? '停止節拍' : '播放節奏'}</span>
        </button>

        <div className="flex items-center gap-2 text-base text-[#d8c7b8]">
          <Clock className="w-4 h-4 text-[#8fae9b]" />
          <span className="font-mono tabular-nums text-[#f7ede2]">{bpm} BPM</span>
        </div>

        {/* 10 Syllable Indicator Bar */}
        <div className="flex items-center gap-1.5">
          {allSyllables.map((syl, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={i}
                className={`h-6 rounded-md transition-all duration-75 flex items-center justify-center text-base font-mono px-2 ${
                  isActive
                    ? syl.isStressed
                      ? 'w-10 bg-[#df9b9b] text-[#221c1f] font-bold ring-2 ring-[#f4d3d8] scale-110 shadow-lg'
                      : 'w-9 bg-[#8fae9b] text-[#221c1f] font-semibold scale-105'
                    : syl.isStressed
                    ? 'w-8 bg-[#3d2931] border border-[#b86b77]/60 text-[#f4d3d8]'
                    : 'w-7 bg-[#251e22] text-[#c4b5a5]'
                }`}
                title={`${syl.text} (${syl.isStressed ? '重音' : '輕音'})`}
              >
                {syl.isStressed ? '重' : '輕'}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#2b2227]/95 border border-[#4d3d44] rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-2xl">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-4 border-b border-[#4d3d44]">
        {/* Left: Mode Title & Main Action */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleTogglePlay}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-base transition-all shadow-md active:scale-95 ${
              isPlaying
                ? 'bg-[#b86b77] hover:bg-[#c97b87] text-[#f7ede2] ring-2 ring-[#df9b9b]/40'
                : 'bg-[#5e826e] hover:bg-[#6c947e] text-[#f7ede2] shadow-[#5e826e]/25 ring-2 ring-[#8fae9b]/30'
            }`}
          >
            {isPlaying ? (
              <>
                <Square className="w-5 h-5 fill-current" />
                <span>停止節奏伴奏</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span>啟動節拍伴奏（Rap Beat）</span>
              </>
            )}
          </button>

          <button
            onClick={handlePlayVoice}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-base font-semibold border transition-all ${
              isSpeaking
                ? 'bg-[#df9b9b]/25 border-[#df9b9b] text-[#f4d3d8] ring-2 ring-[#df9b9b]/40 animate-pulse'
                : 'bg-[#33292f] hover:bg-[#3d3238] border-[#4d3d44] text-[#d8c7b8] hover:text-[#f7ede2]'
            }`}
          >
            <Sparkles className="w-5 h-5 text-[#df9b9b]" />
            <span>{isSpeaking ? '語音朗誦中…' : '真人語音示範'}</span>
          </button>

          <button
            onClick={toggleMute}
            className="p-2.5 rounded-xl bg-[#33292f] hover:bg-[#3d3238] text-[#c4b5a5] hover:text-[#f7ede2] transition-colors"
            title={isMuted ? '取消靜音' : '靜音'}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-[#df9b9b]" /> : <Volume2 className="w-5 h-5 text-[#8fae9b]" />}
          </button>
        </div>

        {/* Right: Sound Style Selector */}
        <div className="flex flex-wrap items-center gap-2 bg-[#211a1d] p-2 rounded-xl border border-[#4d3d44]">
          <button
            onClick={() => setBeatStyle('boombap')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-base font-medium transition-colors ${
              beatStyle === 'boombap'
                ? 'bg-[#df9b9b] text-[#221c1f] font-bold shadow-sm'
                : 'text-[#d8c7b8] hover:text-[#f7ede2]'
            }`}
          >
            <Flame className="w-4 h-4 text-[#b86b77]" />
            <span>嘻哈 Rap 鼓點</span>
          </button>

          <button
            onClick={() => setBeatStyle('metronome')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-base font-medium transition-colors ${
              beatStyle === 'metronome'
                ? 'bg-[#df9b9b] text-[#221c1f] font-bold shadow-sm'
                : 'text-[#d8c7b8] hover:text-[#f7ede2]'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>古典節拍機</span>
          </button>

          <button
            onClick={() => setBeatStyle('heartbeat')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-base font-medium transition-colors ${
              beatStyle === 'heartbeat'
                ? 'bg-[#df9b9b] text-[#221c1f] font-bold shadow-sm'
                : 'text-[#d8c7b8] hover:text-[#f7ede2]'
            }`}
          >
            <Heart className="w-4 h-4 text-[#b86b77]" />
            <span>心跳律動 (da-DUM)</span>
          </button>
        </div>
      </div>

      {/* Syllable Track & Interactive Visualizer */}
      <div className="mt-5 pt-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-base text-[#d8c7b8] mb-3 px-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#c4b5a5] font-semibold">音節拍點導引：</span>
            <span className="text-[#f7ede2] font-medium">
              莫蘭迪鼠尾草綠 = 輕音 (da) · <span className="text-[#df9b9b] font-bold">莫蘭迪玫瑰高亮 = 重音 (DUM)</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#d8c7b8] font-mono">速度: {bpm} BPM</span>
            <input
              type="range"
              min="55"
              max="125"
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="w-28 sm:w-36 accent-[#df9b9b] cursor-pointer"
            />
          </div>
        </div>

        {/* 10 Syllables Visual Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5">
          {allSyllables.map((syl, idx) => {
            const isActive = activeStep === idx;
            const isStressed = syl.isStressed;

            return (
              <div
                key={idx}
                className={`relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-100 ${
                  isActive
                    ? isStressed
                      ? 'bg-[#df9b9b] border-[#f4d3d8] text-[#221c1f] shadow-xl shadow-[#df9b9b]/40 scale-105 z-10'
                      : 'bg-[#8fae9b] border-[#d8c7b8] text-[#221c1f] scale-102 z-10'
                    : isStressed
                    ? 'bg-[#3a2830] border-[#b86b77]/70 hover:border-[#df9b9b] text-[#f4d3d8]'
                    : 'bg-[#251e22]/90 border-[#4d3d44] hover:border-[#5a434d] text-[#d8c7b8]'
                }`}
              >
                {/* Metric mark: breve ˘ or acute accent ´ */}
                <div className={`text-base font-mono leading-none mb-1 ${isActive ? 'text-[#221c1f]' : isStressed ? 'text-[#df9b9b]' : 'text-[#8fae9b]'}`}>
                  {isStressed ? '´ 重' : '˘ 輕'}
                </div>

                {/* Syllable text */}
                <div
                  className={`text-2xl font-poetry tracking-wide font-bold ${
                    isActive
                      ? 'text-[#221c1f]'
                      : isStressed
                      ? 'text-[#f4d3d8]'
                      : 'text-[#f7ede2]'
                  }`}
                >
                  {syl.text}
                </div>

                {/* Word affiliation */}
                <div className={`text-base mt-1 text-center font-sans ${isActive ? 'text-[#36272e]' : 'text-[#c4b5a5]'}`}>
                  {syl.parentWord}
                </div>

                {/* Beat Pulse Halo */}
                {isActive && (
                  <div
                    className={`absolute -inset-1 rounded-xl -z-10 animate-ping opacity-60 ${
                      isStressed ? 'bg-[#df9b9b]' : 'bg-[#8fae9b]'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
