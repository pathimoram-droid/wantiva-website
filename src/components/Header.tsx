import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  Search, 
  Menu, 
  X, 
  Bookmark, 
  Sparkles, 
  Newspaper, 
  Wand2, 
  Radio, 
  ChevronDown,
  Check,
  Flame,
  Calendar,
  Share2
} from 'lucide-react';
import { LanguageCode, MainNavTab, NewsCategory } from '../types';
import { SUPPORTED_LANGUAGES, CATEGORY_NAMES, getTranslation } from '../data/translations';

interface HeaderProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  activeTab: MainNavTab;
  onTabChange: (tab: MainNavTab) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  bookmarksCount: number;
  onSelectCategory: (category: NewsCategory) => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  onOpenSearch,
  onOpenBookmarks,
  bookmarksCount,
  onSelectCategory,
  onGoHome,
}) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentDateStr, setCurrentDateStr] = useState('');
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    setCurrentDateStr(now.toLocaleDateString(currentLang === 'te' ? 'te-IN' : 'en-US', options));
  }, [currentLang]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  return (
    <header className="sticky top-0 z-40 bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80 transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="border-b border-slate-800/50 bg-[#070a10] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-red-500" />
              <span>{currentDateStr || 'Today'}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium">Hyderabad / Amaravati • 28°C Clear</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center text-[11px] text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
              <span className="text-red-400 font-semibold mr-1.5">EDITION:</span>
              <span className="text-slate-200">{currentLang === 'te' ? 'ఆంధ్రప్రదేశ్ & తెలంగాణ' : 'India & Global'}</span>
            </div>

            {/* Language Selector Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                id="language-selector-btn"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
                title="Switch Language"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold text-blue-300">{currentLangObj.nativeName}</span>
                <span className="text-slate-400 text-[10px]">({currentLangObj.name})</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-64 rounded-lg bg-[#121824] border border-slate-700 shadow-2xl py-1 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 border-b border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>{getTranslation('switchLanguage', currentLang)}</span>
                    <span className="text-[10px] text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded">Multilingual Ready</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto py-1">
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                          currentLang === lang.code
                            ? 'bg-blue-600/20 text-blue-300 font-semibold'
                            : 'text-slate-300 hover:bg-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{lang.flag}</span>
                          <div>
                            <span className="font-medium text-slate-100">{lang.nativeName}</span>
                            <span className="text-[11px] text-slate-400 ml-1.5">({lang.name})</span>
                          </div>
                        </div>
                        {currentLang === lang.code ? (
                          <Check className="w-3.5 h-3.5 text-blue-400" />
                        ) : !lang.isReady ? (
                          <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                            Upcoming
                          </span>
                        ) : null}
                      </button>
                    ))}
                  </div>
                  <div className="px-3 py-1.5 bg-slate-900/60 border-t border-slate-800 text-[10px] text-slate-400">
                    {currentLang === 'te' 
                      ? 'పూర్తి తెలుగు మరియు ఇంగ్లీష్ మద్దతుతో ప్రారంభమైంది' 
                      : 'More Indian languages launching continuously'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Brand & Navigation Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button
              onClick={onGoHome}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-red-600 via-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-red-900/30 group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-black text-xl tracking-tighter">W</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors">
                    WANTIVA
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-600/20 text-red-400 border border-red-500/30">
                    LIVE
                  </span>
                </div>
                <span className="hidden sm:block text-[10px] text-slate-400 font-medium tracking-wide">
                  {currentLang === 'te' ? 'బహుభాషా న్యూస్ • ఏఐ స్టూడియో • క్రియేట్ హబ్' : 'News • AI Studio • Creator Hub'}
                </span>
              </div>
            </button>
          </div>

          {/* Primary Navigation Tabs (NEWS | AI STUDIO | CREATE HUB) */}
          <nav className="hidden lg:flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
            <button
              id="main-nav-news"
              onClick={() => onTabChange('news')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === 'news'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-900/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>{getTranslation('navNews', currentLang)}</span>
              {activeTab === 'news' && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              )}
            </button>

            <button
              id="main-nav-ai-studio"
              onClick={() => onTabChange('ai-studio')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === 'ai-studio'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-900/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>{getTranslation('navAiStudio', currentLang)}</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-blue-950 text-blue-300 font-bold border border-blue-700/50">
                PRO
              </span>
            </button>

            <button
              id="main-nav-create-hub"
              onClick={() => onTabChange('create-hub')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === 'create-hub'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-900/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Wand2 className="w-4 h-4 text-pink-300" />
              <span>{getTranslation('navCreateHub', currentLang)}</span>
            </button>
          </nav>

          {/* Quick Actions (Search, Bookmarks, Live TV/Ticker) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors"
              title="Search News & Topics"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span className="hidden md:inline text-slate-400">
                {currentLang === 'te' ? 'శోధించండి...' : 'Search...'}
              </span>
              <kbd className="hidden md:inline-block text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-700">
                /
              </kbd>
            </button>

            <button
              id="header-bookmarks-btn"
              onClick={onOpenBookmarks}
              className="relative p-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
              title="Saved Articles"
            >
              <Bookmark className="w-4 h-4 text-amber-400" />
              {bookmarksCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] flex items-center justify-center">
                  {bookmarksCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Segment Pills (Visible on small & medium screens) */}
        <div className="lg:hidden mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-1.5">
          <button
            onClick={() => onTabChange('news')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'news'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-slate-800/60 text-slate-300'
            }`}
          >
            <Newspaper className="w-3.5 h-3.5" />
            <span>{getTranslation('navNews', currentLang)}</span>
          </button>

          <button
            onClick={() => onTabChange('ai-studio')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'ai-studio'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-800/60 text-slate-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>AI STUDIO</span>
          </button>

          <button
            onClick={() => onTabChange('create-hub')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'create-hub'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-800/60 text-slate-300'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5 text-pink-300" />
            <span>CREATE HUB</span>
          </button>
        </div>
      </div>

      {/* Mobile Full Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[102px] z-50 bg-[#080c14]/98 border-t border-slate-800 overflow-y-auto px-4 py-5 animate-in fade-in">
          <div className="space-y-6">
            
            {/* Primary Section Switcher */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Primary Sections
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    onTabChange('news');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    activeTab === 'news'
                      ? 'bg-red-600/20 border-red-500 text-white'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300'
                  }`}
                >
                  <Newspaper className="w-5 h-5 mx-auto mb-1 text-red-400" />
                  <span className="text-xs font-bold block">NEWS</span>
                </button>

                <button
                  onClick={() => {
                    onTabChange('ai-studio');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    activeTab === 'ai-studio'
                      ? 'bg-blue-600/20 border-blue-500 text-white'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300'
                  }`}
                >
                  <Sparkles className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
                  <span className="text-xs font-bold block">AI STUDIO</span>
                </button>

                <button
                  onClick={() => {
                    onTabChange('create-hub');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    activeTab === 'create-hub'
                      ? 'bg-purple-600/20 border-purple-500 text-white'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300'
                  }`}
                >
                  <Wand2 className="w-5 h-5 mx-auto mb-1 text-pink-400" />
                  <span className="text-xs font-bold block">CREATE HUB</span>
                </button>
              </div>
            </div>

            {/* All 20 News Categories */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {getTranslation('quickFilters', currentLang)} (20 Categories)
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(CATEGORY_NAMES) as NewsCategory[]).map((catKey) => {
                  const cat = CATEGORY_NAMES[catKey];
                  const label = currentLang === 'te' ? cat.te : cat.en;
                  return (
                    <button
                      key={catKey}
                      onClick={() => {
                        onTabChange('news');
                        onSelectCategory(catKey);
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/60 text-left text-xs text-slate-200 flex items-center justify-between group transition-colors"
                    >
                      <span className="truncate group-hover:text-red-400">{label}</span>
                      <span className="text-slate-500 group-hover:text-slate-300">→</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Language Quick Switch */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-2 font-medium">
                {getTranslation('switchLanguage', currentLang)}:
              </span>
              <div className="flex flex-wrap gap-2">
                {SUPPORTED_LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                      currentLang === lang.code
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    {lang.flag} {lang.nativeName}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
