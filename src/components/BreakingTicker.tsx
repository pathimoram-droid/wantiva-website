import React, { useState, useEffect } from 'react';
import { Flame, ChevronRight, ChevronLeft, Pause, Play, Bell } from 'lucide-react';
import { NewsArticle, LanguageCode } from '../types';
import { getTranslation } from '../data/translations';

interface BreakingTickerProps {
  articles: NewsArticle[];
  currentLang: LanguageCode;
  onSelectArticle: (article: NewsArticle) => void;
}

export const BreakingTicker: React.FC<BreakingTickerProps> = ({
  articles,
  currentLang,
  onSelectArticle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const breakingArticles = articles.filter(a => a.isBreaking || a.isTrending);
  const activeList = breakingArticles.length > 0 ? breakingArticles : articles;

  useEffect(() => {
    if (isPaused || activeList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeList.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, activeList.length]);

  if (activeList.length === 0) return null;

  const currentItem = activeList[currentIndex];
  const title = currentLang === 'te' ? currentItem.title.te : currentItem.title.en;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % activeList.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + activeList.length) % activeList.length);
  };

  return (
    <div className="bg-[#121824] border-b border-slate-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-3 text-xs">
        
        {/* Left Badge */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gradient-to-r from-red-600 to-rose-600 text-white font-extrabold tracking-wider text-[11px] shadow-md shadow-red-950/50">
            <Flame className="w-3.5 h-3.5 fill-current animate-bounce" />
            <span className="uppercase">{currentLang === 'te' ? 'తాజా బ్రేకింగ్' : 'BREAKING'}</span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
            {getTranslation('liveUpdates', currentLang)}
          </span>
        </div>

        {/* Center Animated Headline */}
        <div 
          onClick={() => onSelectArticle(currentItem)}
          className="flex-1 overflow-hidden cursor-pointer group flex items-center gap-2"
          title="Click to read breaking story"
        >
          <span className="text-slate-400 text-[11px] hidden sm:inline-block font-mono">
            [{currentIndex + 1}/{activeList.length}]
          </span>
          <p className="truncate font-semibold text-slate-100 group-hover:text-red-400 transition-colors">
            {title}
          </p>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1 flex-shrink-0 text-slate-400">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200"
            title={isPaused ? 'Play Ticker' : 'Pause Ticker'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handlePrev}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200"
            title="Previous Story"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200"
            title="Next Story"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
