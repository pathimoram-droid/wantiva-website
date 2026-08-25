import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Flame, 
  Sparkles, 
  Filter, 
  Grid, 
  List, 
  SlidersHorizontal,
  Clock,
  Eye,
  TrendingUp,
  Bookmark
} from 'lucide-react';
import { NewsArticle, NewsCategory, LanguageCode } from '../types';
import { CATEGORY_NAMES, getTranslation } from '../data/translations';
import { NewsCard } from './NewsCard';

interface CategoryPageProps {
  category: NewsCategory;
  allArticles: NewsArticle[];
  currentLang: LanguageCode;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (article: NewsArticle) => void;
  onSelectArticle: (article: NewsArticle) => void;
  onBack: () => void;
  onShare: (article: NewsArticle) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  allArticles,
  currentLang,
  bookmarkedIds,
  onToggleBookmark,
  onSelectArticle,
  onBack,
  onShare,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'breaking' | 'trending' | 'recent'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const catConfig = CATEGORY_NAMES[category] || { en: 'Category', te: 'విభాగం', icon: 'Flame' };
  const catTitle = currentLang === 'te' ? catConfig.te : catConfig.en;

  // Filter articles belonging to this category
  const categoryArticles = allArticles.filter(art => {
    if (category === 'breaking') return art.isBreaking || art.category === 'breaking';
    if (category === 'trending') return art.isTrending || art.category === 'trending';
    if (category === 'latest') return true;
    return art.category === category;
  });

  // Apply sub-filters and search
  const filteredArticles = categoryArticles.filter(art => {
    const title = currentLang === 'te' ? art.title.te : art.title.en;
    const summary = currentLang === 'te' ? art.summary.te : art.summary.en;
    const matchesSearch = searchQuery
      ? title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;

    if (!matchesSearch) return false;

    if (filterType === 'breaking') return art.isBreaking;
    if (filterType === 'trending') return art.isTrending || art.viewsCount > 30000;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 animate-in fade-in duration-200">
      
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{getTranslation('backToNews', currentLang)}</span>
        </button>

        <div className="text-xs text-slate-400">
          <span>{filteredArticles.length} {currentLang === 'te' ? 'కథనాలు అందుబాటులో ఉన్నాయి' : 'Articles found'}</span>
        </div>
      </div>

      {/* Category Hero Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#121824] to-slate-900 border border-slate-800 mb-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-red-600/30 text-red-400 border border-red-500/40">
              CATEGORY DESK
            </span>
            <span className="text-xs text-slate-400">• WANTIVA Verified Reporting</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            {catTitle}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {currentLang === 'te'
              ? `${catTitle} విభాగానికి సంబంధించిన తాజా వార్తలు, ప్రత్యక్ష సమాచారం, విశ్లేషణలు మరియు ప్రత్యేక కథనాలు.`
              : `Comprehensive verified reporting, breaking developments, investigative reports and real-time updates for ${catTitle}.`}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              filterType === 'all' ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {currentLang === 'te' ? 'అన్నీ' : 'All Updates'}
          </button>
          <button
            onClick={() => setFilterType('breaking')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
              filterType === 'breaking' ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>{currentLang === 'te' ? 'బ్రేకింగ్' : 'Breaking'}</span>
          </button>
          <button
            onClick={() => setFilterType('trending')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
              filterType === 'trending' ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{currentLang === 'te' ? 'పాపులర్' : 'Trending'}</span>
          </button>
        </div>

        {/* Search within Category & View Mode Switch */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
          <div className="relative flex-1 md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'te' ? 'ఈ విభాగంలో శోధించండి...' : 'Search in this category...'}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 placeholder-slate-500 text-xs border border-slate-700 focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              title="Grid View"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Articles Content */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-[#121824] rounded-2xl border border-slate-800">
          <Search className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-200 mb-1">
            {getTranslation('noResults', currentLang)}
          </h3>
          <p className="text-xs text-slate-400">
            {currentLang === 'te' ? 'దయచేసి వేరే కీవర్డ్‌తో శోధించండి.' : 'Try adjusting your search query or filter tags.'}
          </p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredArticles.map((art) => (
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
        <div className="space-y-3 max-w-4xl mx-auto">
          {filteredArticles.map((art) => (
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
      )}

    </div>
  );
};
