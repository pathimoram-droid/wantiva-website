import React from 'react';
import { Bookmark, X, Trash2, ArrowRight, Clock } from 'lucide-react';
import { NewsArticle, LanguageCode } from '../types';
import { getTranslation, CATEGORY_NAMES } from '../data/translations';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedArticles: NewsArticle[];
  currentLang: LanguageCode;
  onSelectArticle: (article: NewsArticle) => void;
  onRemoveBookmark: (article: NewsArticle) => void;
  onClearAll: () => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  bookmarkedArticles,
  currentLang,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 animate-in fade-in duration-150">
      <div className="w-full max-w-xl rounded-2xl bg-[#0b0f17] border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-[#121824] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h2 className="text-sm sm:text-base font-bold text-white">
              {getTranslation('savedBookmarks', currentLang)} ({bookmarkedArticles.length})
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {bookmarkedArticles.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-slate-400 hover:text-red-400 transition-colors px-2 py-1"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {bookmarkedArticles.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <Bookmark className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <p className="text-xs sm:text-sm font-semibold text-slate-300">No saved articles yet.</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Tap the bookmark icon on any news story to save it for reading later.
              </p>
            </div>
          ) : (
            bookmarkedArticles.map((art) => {
              const title = currentLang === 'te' ? art.title.te : art.title.en;
              const cat = CATEGORY_NAMES[art.category] || CATEGORY_NAMES['latest'];
              const catLabel = currentLang === 'te' ? cat.te : cat.en;

              return (
                <div
                  key={art.id}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 group hover:border-slate-700 transition-all"
                >
                  <div
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="flex-1 min-w-0 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1 text-[10px] text-slate-400">
                      <span className="font-bold text-amber-400 uppercase">{catLabel}</span>
                      <span>•</span>
                      <span>{art.publishedAt}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-red-300 line-clamp-1">
                      {title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRemoveBookmark(art)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600/30 text-slate-400 hover:text-red-400 transition-colors"
                      title="Remove Bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectArticle(art);
                        onClose();
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                      title="Read Article"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
