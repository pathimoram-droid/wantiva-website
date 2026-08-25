import React, { useState } from 'react';
import { 
  Flame, 
  Clock, 
  TrendingUp, 
  Landmark, 
  MapPin, 
  Building2, 
  Film, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  Globe, 
  Flag, 
  ArrowRight, 
  Sparkles, 
  Wand2, 
  Zap, 
  Share2, 
  Bookmark, 
  Eye, 
  Tv, 
  Compass, 
  ChevronRight, 
  ExternalLink,
  Bot,
  Layers,
  HeartPulse,
  Sprout,
  Car,
  Leaf,
  Microscope,
  Radio,
  Newspaper,
  CheckCircle2,
  BellRing
} from 'lucide-react';
import { NewsArticle, LanguageCode, NewsCategory, MainNavTab } from '../types';
import { CATEGORY_NAMES, getTranslation } from '../data/translations';
import { NewsCard } from './NewsCard';

interface NewsHomePageProps {
  articles: NewsArticle[];
  currentLang: LanguageCode;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (article: NewsArticle) => void;
  onSelectArticle: (article: NewsArticle) => void;
  onSelectCategory: (category: NewsCategory) => void;
  onNavigateTab: (tab: MainNavTab) => void;
  onShare: (article: NewsArticle) => void;
}

export const NewsHomePage: React.FC<NewsHomePageProps> = ({
  articles,
  currentLang,
  bookmarkedIds,
  onToggleBookmark,
  onSelectArticle,
  onSelectCategory,
  onNavigateTab,
  onShare,
}) => {
  // Sub-filter states
  const [politicsFilter, setPoliticsFilter] = useState<'all' | 'ap' | 'ts' | 'national'>('all');
  const [jobsFilter, setJobsFilter] = useState<'all' | 'govt' | 'private'>('all');

  // Helper to fetch articles by category with fallback
  const getCategoryArticles = (cat: NewsCategory, count = 3): NewsArticle[] => {
    const list = articles.filter(a => a.category === cat);
    if (list.length > 0) return list.slice(0, count);
    return articles.slice(0, count);
  };

  // Section 1: Breaking News
  const breakingList = articles.filter(a => a.isBreaking || a.category === 'breaking');
  const heroBreaking = breakingList[0] || articles[0];
  const sideBreaking = (breakingList.length > 1 ? breakingList.slice(1, 4) : articles.slice(1, 4));

  // Section 2: Latest News
  const latestList = articles.slice(0, 4);

  // Section 3: Trending News (Top 5 numbered)
  const trendingList = articles.filter(a => a.isTrending || a.viewsCount > 30000).slice(0, 5);

  // Section 4: Politics
  const politicsList = articles.filter(a => {
    if (a.category === 'politics') {
      if (politicsFilter === 'ap') return a.tags.some(t => t.toLowerCase().includes('andhra') || t.toLowerCase().includes('amaravati'));
      if (politicsFilter === 'ts') return a.tags.some(t => t.toLowerCase().includes('telangana') || t.toLowerCase().includes('hyderabad'));
      if (politicsFilter === 'national') return a.tags.some(t => t.toLowerCase().includes('national') || t.toLowerCase().includes('parliament'));
      return true;
    }
    return false;
  });
  const displayPolitics = politicsList.length > 0 ? politicsList.slice(0, 3) : getCategoryArticles('politics', 3);

  // Section 5: Andhra Pradesh
  const apList = getCategoryArticles('andhra-pradesh', 3);

  // Section 6: Telangana
  const tsList = getCategoryArticles('telangana', 3);

  // Section 7: India (National)
  const indiaList = getCategoryArticles('india', 3);

  // Section 8: World (International)
  const worldList = getCategoryArticles('world', 3);

  // Section 9: Cinema & Entertainment
  const cinemaList = getCategoryArticles('cinema', 3);

  // Section 10: Sports
  const sportsList = getCategoryArticles('sports', 3);

  // Section 11: Jobs & Careers
  const jobsListRaw = articles.filter(a => a.category === 'jobs');
  const filteredJobs = jobsListRaw.filter(a => {
    if (jobsFilter === 'govt') return a.tags.some(t => t.toLowerCase().includes('govt') || t.toLowerCase().includes('dsc'));
    if (jobsFilter === 'private') return a.tags.some(t => t.toLowerCase().includes('private') || t.toLowerCase().includes('software') || t.toLowerCase().includes('it'));
    return true;
  });
  const displayJobs = filteredJobs.length > 0 ? filteredJobs.slice(0, 3) : getCategoryArticles('jobs', 3);

  // Section 12: Education
  const eduList = getCategoryArticles('education', 3);

  // Section 13: Business
  const businessList = getCategoryArticles('business', 3);

  // Section 14: Technology
  const techList = getCategoryArticles('technology', 3);

  // Section 15: Health
  const healthList = getCategoryArticles('health', 3);

  // Section 16: Agriculture
  const agriList = getCategoryArticles('agriculture', 3);

  // Section 17: Auto
  const autoList = getCategoryArticles('auto', 3);

  // Section 18: Lifestyle
  const lifestyleList = getCategoryArticles('lifestyle', 3);

  // Section 19: Science
  const scienceList = getCategoryArticles('science', 3);

  // Section 20: Viral News
  const viralList = getCategoryArticles('viral', 3);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-12">
      
      {/* =========================================================================
          SECTION 1: 🔴 BREAKING NEWS (Featured Hero Card + 3 Supporting Cards)
          ========================================================================= */}
      <section id="section-1-breaking" className="border-b border-slate-800/80 pb-8">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span className="text-red-500">1.</span>
              <span>{currentLang === 'te' ? 'బ్రేకింగ్ న్యూస్ & ముఖ్యాంశాలు' : 'Breaking News & Top Headlines'}</span>
            </h2>
          </div>
          <button
            onClick={() => onSelectCategory('breaking')}
            className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 font-semibold transition-colors group"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Featured Hero Card */}
          <div className="lg:col-span-8">
            <NewsCard
              article={heroBreaking}
              currentLang={currentLang}
              variant="hero"
              isBookmarked={bookmarkedIds.has(heroBreaking.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          </div>

          {/* Side 3 Top Stories */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1 pb-1 border-b border-slate-800 flex items-center justify-between">
              <span>{currentLang === 'te' ? 'తాజా బులెటిన్స్' : 'Fast Bulletins'}</span>
              <span className="text-red-400 font-semibold">{sideBreaking.length} Stories</span>
            </div>
            
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              {sideBreaking.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  currentLang={currentLang}
                  variant="horizontal"
                  isBookmarked={bookmarkedIds.has(article.id)}
                  onToggleBookmark={onToggleBookmark}
                  onSelectArticle={onSelectArticle}
                  onShare={onShare}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2 & 3: 📰 LATEST NEWS & 🔥 TRENDING NEWS (Side-by-Side Power Layout)
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-slate-800/80 pb-8">
        
        {/* SECTION 2: 📰 LATEST NEWS */}
        <div id="section-2-latest" className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Clock className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="text-blue-400">2.</span>
                <span>{currentLang === 'te' ? 'లేటెస్ట్ న్యూస్ ఫీడ్' : 'Latest News'}</span>
              </h2>
            </div>
            <button
              onClick={() => onSelectCategory('latest')}
              className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <span>{getTranslation('viewAll', currentLang)}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {latestList.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                currentLang={currentLang}
                variant="grid"
                isBookmarked={bookmarkedIds.has(article.id)}
                onToggleBookmark={onToggleBookmark}
                onSelectArticle={onSelectArticle}
                onShare={onShare}
              />
            ))}
          </div>
        </div>

        {/* SECTION 3: 🔥 TRENDING NEWS (#1, #2, #3, #4, #5 Ranking) */}
        <div id="section-3-trending" className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <Flame className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="text-red-500">3.</span>
                <span>{currentLang === 'te' ? 'ట్రెండింగ్ న్యూస్' : 'Trending News'}</span>
              </h2>
            </div>
            <button
              onClick={() => onSelectCategory('trending')}
              className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              <span>{getTranslation('viewAll', currentLang)}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {trendingList.map((article, idx) => (
              <NewsCard
                key={article.id}
                article={article}
                currentLang={currentLang}
                variant="trending"
                rank={idx + 1}
                isBookmarked={bookmarkedIds.has(article.id)}
                onToggleBookmark={onToggleBookmark}
                onSelectArticle={onSelectArticle}
                onShare={onShare}
              />
            ))}
          </div>
        </div>

      </section>


      {/* =========================================================================
          SECTION 4: 🏛️ POLITICS
          ========================================================================= */}
      <section id="section-4-politics" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Landmark className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-amber-400">4.</span>
              <span>{currentLang === 'te' ? 'రాజకీయం (ఆంధ్రప్రదేశ్, తెలంగాణ & జాతీయం)' : 'Politics'}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {[
              { id: 'all', lTe: 'అన్నీ', lEn: 'All' },
              { id: 'ap', lTe: 'ఏపీ', lEn: 'AP' },
              { id: 'ts', lTe: 'తెలంగాణ', lEn: 'Telangana' },
              { id: 'national', lTe: 'జాతీయం', lEn: 'National' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setPoliticsFilter(f.id as any)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  politicsFilter === f.id
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {currentLang === 'te' ? f.lTe : f.lEn}
              </button>
            ))}

            <button
              onClick={() => onSelectCategory('politics')}
              className="ml-2 flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold"
            >
              <span>{getTranslation('viewAll', currentLang)}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayPolitics.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: 🌏 ANDHRA PRADESH
          ========================================================================= */}
      <section id="section-5-andhra-pradesh" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <MapPin className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-orange-400">5.</span>
              <span>{currentLang === 'te' ? 'ఆంధ్రప్రదేశ్ వార్తలు (Amaravati, Vizag & Districts)' : 'Andhra Pradesh News'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('andhra-pradesh')}
            className="flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {apList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: TELANGANA
          ========================================================================= */}
      <section id="section-6-telangana" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Building2 className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-pink-400">6.</span>
              <span>{currentLang === 'te' ? 'తెలంగాణ వార్తలు (Hyderabad, Warangal & Districts)' : 'Telangana News'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('telangana')}
            className="flex items-center gap-1 text-xs text-pink-400 hover:text-pink-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tsList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 7: 🇮🇳 INDIA (National)
          ========================================================================= */}
      <section id="section-7-india" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Flag className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-emerald-400">7.</span>
              <span>{currentLang === 'te' ? 'జాతీయ వార్తలు (India News)' : 'India News'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('india')}
            className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {indiaList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 8: 🌍 WORLD (International)
          ========================================================================= */}
      <section id="section-8-world" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Globe className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-sky-400">8.</span>
              <span>{currentLang === 'te' ? 'అంతర్జాతీయ వార్తలు (World News & Geopolitics)' : 'World News'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('world')}
            className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {worldList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 9: 🎬 CINEMA & ENTERTAINMENT
          ========================================================================= */}
      <section id="section-9-cinema" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Film className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-rose-400">9.</span>
              <span>{currentLang === 'te' ? 'సినిమా & వినోదం (Tollywood, OTT, Reviews)' : 'Cinema & Entertainment'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('cinema')}
            className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cinemaList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 10: ⚽ SPORTS
          ========================================================================= */}
      <section id="section-10-sports" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Trophy className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-cyan-400">10.</span>
              <span>{currentLang === 'te' ? 'క్రీడలు (Cricket, Badminton & Tournaments)' : 'Sports'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('sports')}
            className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sportsList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 11: 💼 JOBS & CAREERS
          ========================================================================= */}
      <section id="section-11-jobs" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-lime-400">11.</span>
              <span>{currentLang === 'te' ? 'ఉద్యోగాలు & కెరీర్ (Govt, IT & Private)' : 'Jobs & Careers'}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {[
              { id: 'all', l: 'All Jobs' },
              { id: 'govt', l: 'Govt / DSC' },
              { id: 'private', l: 'IT & Private' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setJobsFilter(f.id as any)}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  jobsFilter === f.id ? 'bg-lime-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {f.l}
              </button>
            ))}
            <button
              onClick={() => onSelectCategory('jobs')}
              className="ml-2 flex items-center gap-1 text-xs text-lime-400 hover:text-lime-300 font-semibold"
            >
              <span>{getTranslation('viewAll', currentLang)}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayJobs.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 12: 🎓 EDUCATION
          ========================================================================= */}
      <section id="section-12-education" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-400">12.</span>
              <span>{currentLang === 'te' ? 'విద్య & పరీక్షలు (Exams, Results & Scholarships)' : 'Education'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('education')}
            className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {eduList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 13: 💰 BUSINESS
          ========================================================================= */}
      <section id="section-13-business" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-teal-400">13.</span>
              <span>{currentLang === 'te' ? 'వ్యాపారం & ఆర్థికం (Markets, Startups & Sensex)' : 'Business & Finance'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('business')}
            className="flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {businessList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 14: 📱 TECHNOLOGY
          ========================================================================= */}
      <section id="section-14-technology" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <Cpu className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-violet-400">14.</span>
              <span>{currentLang === 'te' ? 'టెక్నాలజీ & మొబైల్స్ (AI, Gadgets & Software)' : 'Technology'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('technology')}
            className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 15: 🏥 HEALTH
          ========================================================================= */}
      <section id="section-15-health" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <HeartPulse className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-red-400">15.</span>
              <span>{currentLang === 'te' ? 'ఆరోగ్యం & వెల్‌నెస్ (Health, Nutrition & Medicine)' : 'Health'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('health')}
            className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {healthList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 16: 🌾 AGRICULTURE
          ========================================================================= */}
      <section id="section-16-agriculture" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400">
              <Sprout className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-green-400">16.</span>
              <span>{currentLang === 'te' ? 'వ్యవసాయం & రైతు సమాచారం (Farming & Crop Tech)' : 'Agriculture'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('agriculture')}
            className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {agriList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 17: 🚗 AUTO
          ========================================================================= */}
      <section id="section-17-auto" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Car className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-blue-400">17.</span>
              <span>{currentLang === 'te' ? 'ఆటోమొబైల్ (Cars, Bikes & EVs)' : 'Auto'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('auto')}
            className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {autoList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 18: 🌿 LIFESTYLE
          ========================================================================= */}
      <section id="section-18-lifestyle" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Leaf className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-emerald-400">18.</span>
              <span>{currentLang === 'te' ? 'జీవనశైలి & ప్రయాణం (Lifestyle, Food & Travel)' : 'Lifestyle'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('lifestyle')}
            className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {lifestyleList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 19: 🔬 SCIENCE
          ========================================================================= */}
      <section id="section-19-science" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Microscope className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-purple-400">19.</span>
              <span>{currentLang === 'te' ? 'సైన్స్ & అంతరిక్షం (Space Exploration & Discoveries)' : 'Science'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('science')}
            className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scienceList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 20: 🔥 VIRAL NEWS
          ========================================================================= */}
      <section id="section-20-viral" className="border-b border-slate-800/80 pb-8 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Zap className="w-4 h-4" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-red-400">20.</span>
              <span>{currentLang === 'te' ? 'వైరల్ న్యూస్ & సోషల్ ట్రెండ్స్ (Viral Buzz)' : 'Viral News'}</span>
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('viral')}
            className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 font-semibold"
          >
            <span>{getTranslation('viewAll', currentLang)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {viralList.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              variant="grid"
              isBookmarked={bookmarkedIds.has(article.id)}
              onToggleBookmark={onToggleBookmark}
              onSelectArticle={onSelectArticle}
              onShare={onShare}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          WANTIVA ECOSYSTEM HIGHLIGHTS: AI STUDIO & CREATE HUB
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        {/* AI Studio Card */}
        <div className="relative rounded-2xl overflow-hidden border border-blue-800/40 bg-gradient-to-br from-[#0c1527] via-[#101b33] to-[#080d19] p-6 shadow-xl shadow-blue-950/20 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentLang === 'te' ? 'వాంటివా ఏఐ స్టూడియో' : 'WANTIVA AI STUDIO'}</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {currentLang === 'te' ? 'ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ న్యూస్ టూల్స్' : 'AI-Powered News Intelligence Tools'}
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {currentLang === 'te' 
                ? 'ఏఐ సారాంశాలు, బహుభాషా అనువాదం, మరియు ఫ్యాక్ట్ వెరిఫికేషన్ టూల్స్‌ను ఉపయోగించండి.' 
                : 'Accelerate reading with smart bullet summaries, instant Indian language translation, and verification.'}
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('ai-studio')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md transition-all"
          >
            <span>Explore AI Studio →</span>
          </button>
        </div>

        {/* Create Hub Card */}
        <div className="relative rounded-2xl overflow-hidden border border-purple-800/40 bg-gradient-to-br from-[#1b0d2b] via-[#140b24] to-[#0a0614] p-6 shadow-xl shadow-purple-950/20 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-bold">
              <Wand2 className="w-3.5 h-3.5 text-pink-400" />
              <span>{currentLang === 'te' ? 'వాంటివా క్రియేట్ హబ్' : 'WANTIVA CREATE HUB'}</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {currentLang === 'te' ? 'కంటెంట్ క్రియేటర్ & పబ్లిషింగ్ వర్క్‌స్పేస్' : 'Publishing & Social Card Creator'}
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {currentLang === 'te'
                ? 'రిచ్ ఆర్టికల్ ఎడిటర్, ఆటో-టాగింగ్ మరియు బ్రాండెడ్ సోషల్ కార్డ్స్ సులభంగా క్రియేట్ చేయండి.'
                : 'Write publishing-ready articles, generate smart tags, and craft branded visual cards effortlessly.'}
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('create-hub')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs shadow-md transition-all"
          >
            <span>Create with Hub →</span>
          </button>
        </div>
      </div>

    </div>
  );
};
