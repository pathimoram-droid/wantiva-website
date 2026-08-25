import React from 'react';
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
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { NewsArticle, NewsCategory, LanguageCode } from '../types';
import { CATEGORY_NAMES, getTranslation } from '../data/translations';
import { NewsCard } from './NewsCard';

interface NewsSectionProps {
  category: NewsCategory;
  articles: NewsArticle[];
  currentLang: LanguageCode;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (article: NewsArticle) => void;
  onSelectArticle: (article: NewsArticle) => void;
  onViewAllCategory: (category: NewsCategory) => void;
  onShare: (article: NewsArticle) => void;
  layout?: 'grid' | 'trending-split' | 'compact-grid';
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

export const NewsSection: React.FC<NewsSectionProps> = ({
  category,
  articles,
  currentLang,
  bookmarkedIds,
  onToggleBookmark,
  onSelectArticle,
  onViewAllCategory,
  onShare,
  layout = 'grid',
}) => {
  const catConfig = CATEGORY_NAMES[category] || { en: 'News Section', te: 'వార్తా విభాగం', icon: 'Flame' };
  const IconComponent = ICON_MAP[catConfig.icon] || Flame;
  const title = currentLang === 'te' ? catConfig.te : catConfig.en;

  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-5 sm:py-7 border-b border-slate-800/60 last:border-b-0">
      
      {/* Section Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <IconComponent className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
              <span>{title}</span>
            </h2>
          </div>
        </div>

        {/* View All Button */}
        <button
          onClick={() => onViewAllCategory(category)}
          className="group flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-red-600 text-slate-300 hover:text-white border border-slate-700 hover:border-red-500 text-xs font-semibold transition-all duration-200"
        >
          <span>{getTranslation('viewAll', currentLang)}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Content Rendering based on Section Style */}
      {layout === 'trending-split' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <NewsCard
              article={articles[0]}
              currentLang={currentLang}
              variant="hero"
              isBookmarked={bookmarkedIds.has(articles[0].id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          </div>
          <div className="space-y-2.5 flex flex-col justify-between">
            {articles.slice(1, 4).map((art, idx) => (
              <NewsCard
                key={art.id}
                article={art}
                currentLang={currentLang}
                variant="horizontal"
                isBookmarked={bookmarkedIds.has(art.id)}
                onToggleBookmark={onToggleBookmark}
                onSelectArticle={onSelectArticle}
                onShare={onShare}
              />
            ))}
          </div>
        </div>
      ) : layout === 'compact-grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.slice(0, 3).map((art) => (
            <NewsCard
              key={art.id}
              article={art}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(art.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.slice(0, 4).map((art) => (
            <NewsCard
              key={art.id}
              article={art}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(art.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      )}

    </section>
  );
};
