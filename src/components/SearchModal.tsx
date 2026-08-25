import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Flame, Clock, ArrowRight, Layers } from 'lucide-react';
import { NewsArticle, LanguageCode, NewsCategory } from '../types';
import { CATEGORY_NAMES, getTranslation } from '../data/translations';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: NewsArticle[];
  currentLang: LanguageCode;
  onSelectArticle: (article: NewsArticle) => void;
  onSelectCategory: (category: NewsCategory) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  currentLang,
  onSelectArticle,
  onSelectCategory,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? articles.filter((art) => {
        const t = currentLang === 'te' ? art.title.te : art.title.en;
        const s = currentLang === 'te' ? art.summary.te : art.summary.en;
        const q = query.toLowerCase();
        return (
          t.toLowerCase().includes(q) ||
          s.toLowerCase().includes(q) ||
          art.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      })
    : [];

  const popularTags = ['Amaravati', 'ISRO', 'Hyderabad', 'Cinema', 'Stock Market', 'AI Tech', 'Jobs'];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-3 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl rounded-2xl bg-[#0b0f17] border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-[#121824]">
          <Search className="w-5 h-5 text-red-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={getTranslation('searchPlaceholder', currentLang)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="p-3 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] text-slate-400 font-bold whitespace-nowrap">
            {currentLang === 'te' ? 'పాపులర్ శోధనలు:' : 'Trending Topics:'}
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-0.5 rounded-full text-xs bg-slate-800 hover:bg-red-600/30 text-slate-300 hover:text-red-300 border border-slate-700 transition-colors whitespace-nowrap"
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Results / Suggestions Feed */}
        <div className="overflow-y-auto p-4 space-y-3 flex-1">
          {query.trim() ? (
            filtered.length > 0 ? (
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Matching Stories ({filtered.length})
                </span>
                {filtered.map((art) => {
                  const title = currentLang === 'te' ? art.title.te : art.title.en;
                  const cat = CATEGORY_NAMES[art.category] || CATEGORY_NAMES['latest'];
                  const catLabel = currentLang === 'te' ? cat.te : cat.en;

                  return (
                    <div
                      key={art.id}
                      onClick={() => {
                        onSelectArticle(art);
                        onClose();
                      }}
                      className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 cursor-pointer flex items-center justify-between gap-3 group transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                            {catLabel}
                          </span>
                          <span className="text-[10px] text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {art.publishedAt}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-red-300 truncate">
                          {title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white flex-shrink-0" />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500 text-xs">
                {getTranslation('noResults', currentLang)} for "{query}".
              </div>
            )
          ) : (
            <div className="py-6 space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Browse All 20 Categories
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.keys(CATEGORY_NAMES) as NewsCategory[]).map((catKey) => {
                  const c = CATEGORY_NAMES[catKey];
                  const label = currentLang === 'te' ? c.te : c.en;
                  return (
                    <button
                      key={catKey}
                      onClick={() => {
                        onSelectCategory(catKey);
                        onClose();
                      }}
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-left text-xs text-slate-300 hover:text-white border border-slate-800 truncate transition-colors"
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
