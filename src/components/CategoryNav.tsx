import React, { useRef, useState, useEffect } from 'react';
import { 
  Flame, 
  Clock, 
  TrendingUp, 
  Landmark, 
  MapPin, 
  Building2, 
  Flag, 
  Globe, 
  Film, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  HeartPulse, 
  Wheat, 
  Car, 
  Sparkles, 
  Atom, 
  Zap,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  Check
} from 'lucide-react';
import { NewsCategory, LanguageCode } from '../types';
import { CATEGORY_NAMES } from '../data/translations';

interface CategoryNavProps {
  currentLang: LanguageCode;
  selectedCategory: NewsCategory | 'all';
  onSelectCategory: (category: NewsCategory | 'all') => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Flame,
  Clock,
  TrendingUp,
  Landmark,
  MapPin,
  Building2,
  Flag,
  Globe,
  Film,
  Trophy,
  Briefcase,
  GraduationCap,
  Cpu,
  HeartPulse,
  Wheat,
  Car,
  Sparkles,
  Atom,
  Zap,
};

// Strict ordering per requested categories
const PRIMARY_CATEGORY_ORDER: NewsCategory[] = [
  'breaking',
  'latest',
  'andhra-pradesh',
  'telangana',
  'india',
  'world',
  'politics',
  'business',
  'technology',
  'sports',
  'cinema',
  'education',
  'health',
  'agriculture',
  'lifestyle',
  'science',
  'viral',
];

export const CategoryNav: React.FC<CategoryNavProps> = ({
  currentLang,
  selectedCategory,
  onSelectCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#0b0f17] border-b border-slate-800/80 sticky top-[98px] sm:top-[103px] z-30 py-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative flex items-center">
        
        {/* Left scroll chevron */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-1 z-10 p-1.5 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 shadow-md border border-slate-700"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 px-1 sm:px-8 w-full scroll-smooth"
        >
          {/* "All News" Pill */}
          <button
            onClick={() => onSelectCategory('all')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/50 scale-105'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{currentLang === 'te' ? 'అన్ని విభాగాలు' : 'All Feeds'}</span>
          </button>

          {/* Primary Specified Categories */}
          {PRIMARY_CATEGORY_ORDER.map((catKey) => {
            const cat = CATEGORY_NAMES[catKey];
            if (!cat) return null;
            const IconComponent = ICON_MAP[cat.icon] || Flame;
            const isSelected = selectedCategory === catKey;
            const label = currentLang === 'te' ? cat.te : cat.en;

            return (
              <button
                key={catKey}
                onClick={() => onSelectCategory(catKey)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold shadow-md shadow-red-950/40 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                <span>{label}</span>
              </button>
            );
          })}

          {/* More Categories Dropdown */}
          <div className="relative flex-shrink-0" ref={moreDropdownRef}>
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 whitespace-nowrap transition-colors"
            >
              <span>{currentLang === 'te' ? 'మరిన్ని విభాగాలు' : 'More'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMoreOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-[#121824] border border-slate-700 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 border-b border-slate-800 mb-1">
                  {currentLang === 'te' ? 'వార్తా విభాగాలు' : 'News Categories'}
                </div>
                <div className="max-h-64 overflow-y-auto space-y-1">
                  {PRIMARY_CATEGORY_ORDER.map((catKey) => {
                    const cat = CATEGORY_NAMES[catKey];
                    const IconComp = ICON_MAP[cat.icon] || Flame;
                    const isSelected = selectedCategory === catKey;
                    return (
                      <button
                        key={catKey}
                        onClick={() => {
                          onSelectCategory(catKey);
                          setIsMoreOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                          isSelected
                            ? 'bg-red-600/20 text-red-300 font-semibold'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <IconComp className="w-3.5 h-3.5 text-red-400" />
                          <span>{currentLang === 'te' ? cat.te : cat.en}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-red-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right scroll chevron */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-1 z-10 p-1.5 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 shadow-md border border-slate-700"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
