import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_CONFIG } from './data/sonnetData';
import { TopNav } from './components/TopNav';
import { SlideController } from './components/SlideController';
import { TeacherNotes } from './components/TeacherNotes';
import { SlideDrawer } from './components/SlideDrawer';
import { HelpModal } from './components/HelpModal';
import { RhythmPlayer } from './components/RhythmPlayer';

// Slides
import { Slide1_Intro } from './slides/Slide1_Intro';
import { Slide2_WordVsRhythm } from './slides/Slide2_WordVsRhythm';
import { Slide3_SyllableSplit } from './slides/Slide3_SyllableSplit';
import { Slide4_FootBrackets } from './slides/Slide4_FootBrackets';
import { Slide5_DramaticReading } from './slides/Slide5_DramaticReading';
import { Slide6_RapEnsemble } from './slides/Slide6_RapEnsemble';
import { Slide7_RhymeScheme } from './slides/Slide7_RhymeScheme';
import { Slide8_RhythmAndMeaning } from './slides/Slide8_RhythmAndMeaning';
import { Slide9_Summary } from './slides/Slide9_Summary';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showTeacherNotes, setShowTeacherNotes] = useState<boolean>(false);
  const [isSlideDrawerOpen, setIsSlideDrawerOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const totalSlides = SLIDES_CONFIG.length;

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleSelectSlide = (slideNum: number) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      setCurrentSlide(slideNum);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 't' || e.key === 'T') {
        setShowTeacherNotes((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === '?' || e.key === 'h' || e.key === 'H') {
        setIsHelpOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsSlideDrawerOpen(false);
        setIsHelpOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Auto-play timer (15 seconds per slide)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= totalSlides) {
          setIsAutoPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 15000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, totalSlides]);

  // Render current slide
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1_Intro onStartLecture={() => setCurrentSlide(2)} />;
      case 2:
        return <Slide2_WordVsRhythm />;
      case 3:
        return <Slide3_SyllableSplit />;
      case 4:
        return <Slide4_FootBrackets />;
      case 5:
        return <Slide5_DramaticReading />;
      case 6:
        return <Slide6_RapEnsemble />;
      case 7:
        return <Slide7_RhymeScheme />;
      case 8:
        return <Slide8_RhythmAndMeaning />;
      case 9:
        return <Slide9_Summary onRestart={() => setCurrentSlide(1)} />;
      default:
        return <Slide1_Intro onStartLecture={() => setCurrentSlide(2)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#221c1f] text-[#f7ede2] flex flex-col font-sans-clean select-none">
      {/* Top Header */}
      <TopNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSelectSlide={handleSelectSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        showTeacherNotes={showTeacherNotes}
        onToggleTeacherNotes={() => setShowTeacherNotes(!showTeacherNotes)}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* Main Slide Deck Canvas */}
      <main className="flex-1 flex flex-col justify-center items-center px-2 sm:px-4 py-4 sm:py-6 overflow-y-auto">
        <div className="w-full max-w-6xl mx-auto transition-all duration-300">
          {renderSlideContent()}
        </div>
      </main>

      {/* Bottom Controller Bar */}
      <SlideController
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
        onSelectSlide={handleSelectSlide}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
        isSlideDrawerOpen={isSlideDrawerOpen}
        onToggleSlideDrawer={() => setIsSlideDrawerOpen(!isSlideDrawerOpen)}
      />

      {/* Slide Drawer (Index Outline) */}
      <SlideDrawer
        isOpen={isSlideDrawerOpen}
        onClose={() => setIsSlideDrawerOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={handleSelectSlide}
      />

      {/* Teacher's Cue Notes Floating Panel */}
      <TeacherNotes
        currentSlide={currentSlide}
        isOpen={showTeacherNotes}
        onClose={() => setShowTeacherNotes(false)}
      />

      {/* Keyboard Shortcuts and Guide Modal */}
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}
