import React from 'react';
import { Newspaper, Sparkles, Wand2, Search, Bookmark } from 'lucide-react';
import { MainNavTab, LanguageCode } from '../types';
import { getTranslation } from '../data/translations';

interface MobileBottomNavProps {
  activeTab: MainNavTab;
  onTabChange: (tab: MainNavTab) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  bookmarksCount: number;
  currentLang: LanguageCode;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
  onOpenSearch,
  onOpenBookmarks,
  bookmarksCount,
  currentLang,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0b0f17]/95 backdrop-blur-lg border-t border-slate-800/90 py-1.5 px-3">
      <div className="flex items-center justify-around">
        
        {/* NEWS */}
        <button
          onClick={() => onTabChange('news')}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
            activeTab === 'news'
              ? 'text-red-500 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Newspaper className="w-4 h-4" />
          <span className="text-[10px]">{getTranslation('navNews', currentLang)}</span>
        </button>

        {/* AI STUDIO */}
        <button
          onClick={() => onTabChange('ai-studio')}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
            activeTab === 'ai-studio'
              ? 'text-cyan-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px]">AI Studio</span>
        </button>

        {/* SEARCH */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl text-slate-400 hover:text-slate-200"
        >
          <Search className="w-4 h-4" />
          <span className="text-[10px]">Search</span>
        </button>

        {/* CREATE HUB */}
        <button
          onClick={() => onTabChange('create-hub')}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
            activeTab === 'create-hub'
              ? 'text-pink-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Wand2 className="w-4 h-4" />
          <span className="text-[10px]">Create</span>
        </button>

        {/* SAVED BOOKMARKS */}
        <button
          onClick={onOpenBookmarks}
          className="relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl text-slate-400 hover:text-slate-200"
        >
          <Bookmark className="w-4 h-4" />
          <span className="text-[10px]">Saved</span>
          {bookmarksCount > 0 && (
            <span className="absolute top-0 right-3 w-3.5 h-3.5 rounded-full bg-amber-500 text-slate-950 font-black text-[9px] flex items-center justify-center">
              {bookmarksCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
};
