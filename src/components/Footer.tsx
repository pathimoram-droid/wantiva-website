import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Mail, 
  Send, 
  Sparkles, 
  Newspaper, 
  Wand2, 
  Flame,
  ArrowUp
} from 'lucide-react';
import { LanguageCode, NewsCategory, MainNavTab } from '../types';
import { CATEGORY_NAMES, SUPPORTED_LANGUAGES, getTranslation } from '../data/translations';

interface FooterProps {
  currentLang: LanguageCode;
  onSelectCategory: (cat: NewsCategory) => void;
  onTabChange: (tab: MainNavTab) => void;
  onLanguageChange: (lang: LanguageCode) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onSelectCategory,
  onTabChange,
  onLanguageChange,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = Object.keys(CATEGORY_NAMES) as NewsCategory[];

  return (
    <footer className="bg-[#070a10] border-t border-slate-800 text-slate-400 text-xs mt-12 pb-20 lg:pb-8">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 bg-[#0a0f18] py-8 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 via-rose-600 to-amber-500 flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-red-950/60">
              W
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-white tracking-tight">WANTIVA</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  MULTILINGUAL PLATFORM
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 max-w-lg">
                {getTranslation('aboutDesc', currentLang)}
              </p>
            </div>
          </div>

          {/* Newsletter / Notifications Box */}
          <div className="w-full md:w-auto flex-1 max-w-md">
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email for daily editorial digest..."
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-red-500"
              />
              <button
                onClick={() => alert('Thank you for subscribing to WANTIVA Daily Updates!')}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs whitespace-nowrap flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Directory Links */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          
          {/* Primary Pillars */}
          <div className="col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Primary Platforms
            </h4>
            <div className="space-y-2">
              <button
                onClick={() => onTabChange('news')}
                className="flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors"
              >
                <Newspaper className="w-4 h-4 text-red-500" />
                <span className="font-semibold">WANTIVA News (20 Categories)</span>
              </button>
              <button
                onClick={() => onTabChange('ai-studio')}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold">WANTIVA AI Studio (AI Suite)</span>
              </button>
              <button
                onClick={() => onTabChange('create-hub')}
                className="flex items-center gap-2 text-slate-300 hover:text-pink-400 transition-colors"
              >
                <Wand2 className="w-4 h-4 text-pink-400" />
                <span className="font-semibold">WANTIVA Create Hub (Creator Tools)</span>
              </button>
            </div>

            {/* Multilingual Network */}
            <div className="pt-3">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Multilingual Editions</span>
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`px-2 py-0.5 rounded text-[11px] border transition-colors ${
                      currentLang === lang.code
                        ? 'bg-blue-600 text-white border-blue-500 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Regional & National Categories */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Regional & National
            </h4>
            {['breaking', 'latest', 'politics', 'andhra-pradesh', 'telangana', 'india', 'world'].map((catKey) => {
              const cat = CATEGORY_NAMES[catKey as NewsCategory];
              const label = currentLang === 'te' ? cat.te : cat.en;
              return (
                <button
                  key={catKey}
                  onClick={() => {
                    onTabChange('news');
                    onSelectCategory(catKey as NewsCategory);
                  }}
                  className="block text-left text-slate-400 hover:text-red-400 transition-colors truncate"
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Economy & Careers */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Business & Careers
            </h4>
            {['business', 'jobs', 'education', 'agriculture', 'auto'].map((catKey) => {
              const cat = CATEGORY_NAMES[catKey as NewsCategory];
              const label = currentLang === 'te' ? cat.te : cat.en;
              return (
                <button
                  key={catKey}
                  onClick={() => {
                    onTabChange('news');
                    onSelectCategory(catKey as NewsCategory);
                  }}
                  className="block text-left text-slate-400 hover:text-red-400 transition-colors truncate"
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Tech, Science & Lifestyle */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Tech & Science
            </h4>
            {['technology', 'science', 'health', 'lifestyle', 'cinema', 'sports', 'viral'].map((catKey) => {
              const cat = CATEGORY_NAMES[catKey as NewsCategory];
              const label = currentLang === 'te' ? cat.te : cat.en;
              return (
                <button
                  key={catKey}
                  onClick={() => {
                    onTabChange('news');
                    onSelectCategory(catKey as NewsCategory);
                  }}
                  className="block text-left text-slate-400 hover:text-red-400 transition-colors truncate"
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Editorial & Legal */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Editorial Policy
            </h4>
            <span className="block text-slate-400">Fact-Checking Code</span>
            <span className="block text-slate-400">Ethics & Corrections</span>
            <span className="block text-slate-400">Privacy & Terms</span>
            <span className="block text-slate-400">Editorial Board</span>
            <span className="block text-slate-400">Careers at WANTIVA</span>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            <span>© 2026 WANTIVA Digital Network. {getTranslation('allRightsReserved', currentLang)}</span>
            <span className="block sm:inline sm:ml-2 text-slate-400 font-medium">
              ({getTranslation('disclaimer', currentLang)})
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
