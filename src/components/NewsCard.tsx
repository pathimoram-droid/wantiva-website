import React from 'react';
import { 
  Bookmark, 
  Share2, 
  Eye, 
  Clock, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { NewsArticle, LanguageCode } from '../types';
import { CATEGORY_NAMES, getTranslation } from '../data/translations';

interface NewsCardProps {
  article: NewsArticle;
  currentLang: LanguageCode;
  variant?: 'hero' | 'grid' | 'horizontal' | 'trending' | 'compact';
  rank?: number;
  isBookmarked?: boolean;
  onToggleBookmark?: (article: NewsArticle) => void;
  onSelectArticle: (article: NewsArticle) => void;
  onShare?: (article: NewsArticle) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  article,
  currentLang,
  variant = 'grid',
  rank,
  isBookmarked = false,
  onToggleBookmark,
  onSelectArticle,
  onShare,
}) => {
  const title = currentLang === 'te' ? article.title.te : article.title.en;
  const summary = currentLang === 'te' ? article.summary.te : article.summary.en;
  const catObj = CATEGORY_NAMES[article.category] || CATEGORY_NAMES['latest'];
  const catLabel = currentLang === 'te' ? catObj.te : catObj.en;

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleBookmark) onToggleBookmark(article);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onShare) onShare(article);
  };

  // 1. HERO VARIANT (Large featured banner)
  if (variant === 'hero') {
    return (
      <div
        onClick={() => onSelectArticle(article)}
        className="group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-800 bg-[#121824] shadow-xl hover:border-slate-700 transition-all duration-300"
      >
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
          <img
            src={article.imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/60 to-transparent"></div>

          {/* Top badges */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
            {article.isBreaking && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-red-600 text-white shadow-lg shadow-red-950/80">
                <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
                {currentLang === 'te' ? 'బ్రేకింగ్' : 'BREAKING'}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900/80 backdrop-blur-md text-slate-200 border border-slate-700/80">
              {catLabel}
            </span>
          </div>

          {/* Top Right Actions */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2">
            <button
              onClick={handleBookmarkClick}
              className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                isBookmarked
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-900/70 text-slate-300 hover:text-white border-slate-700 hover:bg-slate-800'
              }`}
              title="Bookmark story"
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={handleShareClick}
              className="p-2 rounded-full bg-slate-900/70 backdrop-blur-md text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-all"
              title="Share story"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Content inside Hero */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
            <div className="flex items-center gap-3 text-xs text-slate-300 mb-2 font-medium">
              <span className="text-red-400 font-semibold">{article.location || 'WANTIVA'}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {article.publishedAt}
              </span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 group-hover:text-red-300 transition-colors">
              {title}
            </h2>

            <p className="hidden sm:block text-slate-300 text-xs sm:text-sm line-clamp-2 max-w-4xl">
              {summary}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 2. HORIZONTAL / COMPACT LIST VARIANT (Great for mobile & sidebars)
  if (variant === 'horizontal') {
    return (
      <div
        onClick={() => onSelectArticle(article)}
        className="group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-[#121824] hover:bg-[#182234] border border-slate-800 hover:border-slate-700 cursor-pointer transition-all duration-200"
      >
        <div className="relative w-24 h-24 sm:w-28 sm:h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-900">
          <img
            src={article.imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {article.isBreaking && (
            <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-600 text-white">
              LIVE
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
              {catLabel}
            </span>
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.publishedAt}
            </span>
          </div>

          <h4 className="text-xs sm:text-sm font-bold text-slate-100 line-clamp-2 group-hover:text-red-300 transition-colors leading-snug">
            {title}
          </h4>

          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
            <span className="truncate max-w-[120px]">{article.author}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleBookmarkClick}
                className="hover:text-amber-400 transition-colors"
                title="Bookmark"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
              </button>
              <button
                onClick={handleShareClick}
                className="hover:text-white transition-colors"
                title="Share"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. TRENDING NUMBERED VARIANT (01, 02, 03 ranking)
  if (variant === 'trending') {
    return (
      <div
        onClick={() => onSelectArticle(article)}
        className="group flex items-start gap-3 p-3 rounded-xl bg-[#121824] hover:bg-[#182234] border border-slate-800/80 hover:border-slate-700 cursor-pointer transition-all duration-200"
      >
        <span className="text-2xl sm:text-3xl font-black text-slate-600 group-hover:text-red-500 transition-colors font-mono select-none w-8 text-center flex-shrink-0">
          {rank ? String(rank).padStart(2, '0') : '•'}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {catLabel}
            </span>
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {article.viewsCount.toLocaleString()} {getTranslation('views', currentLang)}
            </span>
          </div>

          <h4 className="text-xs sm:text-sm font-bold text-slate-100 line-clamp-2 group-hover:text-red-300 transition-colors">
            {title}
          </h4>

          <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400">
            <span>{article.publishedAt}</span>
            <span className="text-slate-400">{article.readTime}</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. DEFAULT GRID CARD VARIANT
  return (
    <div
      onClick={() => onSelectArticle(article)}
      className="group rounded-xl overflow-hidden bg-[#121824] border border-slate-800 hover:border-slate-700 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <img
          src={article.imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-black/30"></div>

        {/* Category & Status Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-slate-200 border border-slate-700 backdrop-blur-sm">
            {catLabel}
          </span>
          {article.isBreaking && (
            <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-red-600 text-white">
              HOT
            </span>
          )}
        </div>

        {/* Top Right Quick Actions */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleBookmarkClick}
            className={`p-1.5 rounded-full backdrop-blur-sm border transition-all ${
              isBookmarked
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-700 hover:bg-slate-800'
            }`}
            title="Bookmark"
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </button>
          <button
            onClick={handleShareClick}
            className="p-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-all"
            title="Share"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
            <span className="text-red-400 font-medium">{article.location || 'Special Desk'}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.publishedAt}
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-slate-100 line-clamp-2 leading-snug group-hover:text-red-300 transition-colors mb-2">
            {title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
            {summary}
          </p>
        </div>

        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="truncate max-w-[130px] font-medium">{article.author}</span>
          <div className="flex items-center gap-2 font-mono">
            <span>{article.readTime}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-slate-400" />
              {article.viewsCount > 1000 ? `${(article.viewsCount / 1000).toFixed(1)}k` : article.viewsCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
