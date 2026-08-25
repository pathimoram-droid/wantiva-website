import React, { useState, useEffect } from 'react';
import { 
  LanguageCode, 
  MainNavTab, 
  NewsCategory, 
  NewsArticle 
} from './types';
import { SAMPLE_NEWS_ARTICLES } from './data/newsData';
import { CATEGORY_NAMES, getTranslation } from './data/translations';

// Components
import { Header } from './components/Header';
import { BreakingTicker } from './components/BreakingTicker';
import { CategoryNav } from './components/CategoryNav';
import { NewsHomePage } from './components/NewsHomePage';
import { ArticleView } from './components/ArticleView';
import { CategoryPage } from './components/CategoryPage';
import { AiStudioView } from './components/AiStudio/AiStudioView';
import { CreateHubView } from './components/CreateHub/CreateHubView';
import { SearchModal } from './components/SearchModal';
import { BookmarksModal } from './components/BookmarksModal';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { 
  Check, 
} from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('te');
  const [activeTab, setActiveTab] = useState<MainNavTab>('news');
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'all'>('all');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  
  // Bookmarks State
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('wantiva_bookmarks');
      return saved ? new Set(JSON.parse(saved)) : new Set(['breaking-1', 'cinema-1']);
    } catch {
      return new Set(['breaking-1', 'cinema-1']);
    }
  });

  // Modal States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wantiva_bookmarks', JSON.stringify(Array.from(bookmarkedIds)));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleToggleBookmark = (article: NewsArticle) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(article.id)) {
        next.delete(article.id);
        showToast(currentLang === 'te' ? 'వార్త సేవ్ చేయబడిన జాబితా నుండి తొలగించబడింది' : 'Removed from bookmarks');
      } else {
        next.add(article.id);
        showToast(currentLang === 'te' ? 'వార్త విజయవంతంగా సేవ్ చేయబడింది' : 'Story bookmarked successfully');
      }
      return next;
    });
  };

  const handleShare = async (article: NewsArticle) => {
    const title = currentLang === 'te' ? article.title.te : article.title.en;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `WANTIVA: ${title}`,
          text: currentLang === 'te' ? article.summary.te : article.summary.en,
          url: window.location.href,
        });
      } catch {
        // Fallback
        navigator.clipboard.writeText(window.location.href);
        showToast(currentLang === 'te' ? 'లింక్ కాపీ చేయబడింది!' : 'Link copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast(currentLang === 'te' ? 'లింక్ కాపీ చేయబడింది!' : 'Link copied to clipboard!');
    }
  };

  const handleSelectCategory = (cat: NewsCategory | 'all') => {
    setSelectedCategory(cat);
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (art: NewsArticle) => {
    setSelectedArticle(art);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveTab('news');
    setSelectedCategory('all');
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bookmarkedArticles = SAMPLE_NEWS_ARTICLES.filter((a) =>
    bookmarkedIds.has(a.id)
  );

  // List of all 20 required news homepage sections
  const homepageSectionCategories: NewsCategory[] = [
    'breaking',
    'latest',
    'trending',
    'politics',
    'andhra-pradesh',
    'telangana',
    'india',
    'world',
    'cinema',
    'sports',
    'jobs',
    'education',
    'business',
    'technology',
    'health',
    'agriculture',
    'auto',
    'lifestyle',
    'science',
    'viral',
  ];

  // Helper to retrieve articles for a specific section
  const getArticlesForCategory = (cat: NewsCategory) => {
    if (cat === 'breaking') {
      return SAMPLE_NEWS_ARTICLES.filter((a) => a.isBreaking || a.category === 'breaking');
    }
    if (cat === 'trending') {
      return SAMPLE_NEWS_ARTICLES.filter((a) => a.isTrending || a.category === 'trending');
    }
    if (cat === 'latest') {
      return SAMPLE_NEWS_ARTICLES.slice(0, 4);
    }
    const directMatches = SAMPLE_NEWS_ARTICLES.filter((a) => a.category === cat);
    if (directMatches.length > 0) return directMatches;
    // Fallback sample for demonstration if category has 1 item
    return SAMPLE_NEWS_ARTICLES.slice(0, 3);
  };

  const heroFeaturedArticle = SAMPLE_NEWS_ARTICLES.find((a) => a.isBreaking) || SAMPLE_NEWS_ARTICLES[0];
  const sideTrendingArticles = SAMPLE_NEWS_ARTICLES.filter((a) => a.id !== heroFeaturedArticle.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-red-600 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-16 sm:bottom-6 right-4 z-50 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSelectedArticle(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarksCount={bookmarkedIds.size}
        onSelectCategory={(cat) => handleSelectCategory(cat)}
        onGoHome={handleGoHome}
      />

      {/* 1. NEWS MAIN IDENTITY & PORTAL */}
      {activeTab === 'news' && (
        <main className="flex-1">
          {/* Breaking News Ticker */}
          <BreakingTicker
            articles={SAMPLE_NEWS_ARTICLES}
            currentLang={currentLang}
            onSelectArticle={handleSelectArticle}
          />

          {/* Quick Category Navigation Pill Bar */}
          <CategoryNav
            currentLang={currentLang}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* If an article is currently open for reading */}
          {selectedArticle ? (
            <ArticleView
              article={selectedArticle}
              allArticles={SAMPLE_NEWS_ARTICLES}
              currentLang={currentLang}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onSelectArticle={handleSelectArticle}
              onBack={() => setSelectedArticle(null)}
              onShare={handleShare}
            />
          ) : selectedCategory !== 'all' ? (
            /* If a single category page is active */
            <CategoryPage
              category={selectedCategory}
              allArticles={SAMPLE_NEWS_ARTICLES}
              currentLang={currentLang}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onSelectArticle={handleSelectArticle}
              onBack={() => setSelectedCategory('all')}
              onShare={handleShare}
            />
          ) : (
            /* Dedicated 16-Point NEWS HOMEPAGE */
            <NewsHomePage
              articles={SAMPLE_NEWS_ARTICLES}
              currentLang={currentLang}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onSelectArticle={handleSelectArticle}
              onSelectCategory={handleSelectCategory}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                setSelectedArticle(null);
                setSelectedCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onShare={handleShare}
            />
          )}
        </main>
      )}

      {/* 2. AI STUDIO SECTION */}
      {activeTab === 'ai-studio' && (
        <main className="flex-1">
          <AiStudioView currentLang={currentLang} />
        </main>
      )}

      {/* 3. CREATE HUB SECTION */}
      {activeTab === 'create-hub' && (
        <main className="flex-1">
          <CreateHubView currentLang={currentLang} />
        </main>
      )}

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onSelectCategory={(cat) => {
          setActiveTab('news');
          handleSelectCategory(cat);
        }}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSelectedArticle(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onLanguageChange={setCurrentLang}
      />

      {/* Mobile 1-Touch Bottom Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSelectedArticle(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarksCount={bookmarkedIds.size}
        currentLang={currentLang}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={SAMPLE_NEWS_ARTICLES}
        currentLang={currentLang}
        onSelectArticle={handleSelectArticle}
        onSelectCategory={(cat) => {
          setActiveTab('news');
          handleSelectCategory(cat);
        }}
      />

      {/* Saved Bookmarks Modal */}
      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedArticles={bookmarkedArticles}
        currentLang={currentLang}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={() => {
          setBookmarkedIds(new Set());
          showToast(currentLang === 'te' ? 'అన్ని సేవ్ చేసిన కథనాలు తొలగించబడ్డాయి' : 'Cleared all saved bookmarks');
        }}
      />

    </div>
  );
}
