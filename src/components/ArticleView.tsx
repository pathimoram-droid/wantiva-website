import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Volume2, 
  VolumeX, 
  Type, 
  Clock, 
  Calendar, 
  Eye, 
  MessageSquare, 
  ThumbsUp, 
  Copy, 
  Check, 
  Send,
  Sparkles,
  ExternalLink,
  Flame
} from 'lucide-react';
import { NewsArticle, LanguageCode, CommentItem } from '../types';
import { CATEGORY_NAMES, getTranslation } from '../data/translations';
import { NewsCard } from './NewsCard';

interface ArticleViewProps {
  article: NewsArticle;
  allArticles: NewsArticle[];
  currentLang: LanguageCode;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (article: NewsArticle) => void;
  onSelectArticle: (article: NewsArticle) => void;
  onBack: () => void;
  onShare: (article: NewsArticle) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  allArticles,
  currentLang,
  bookmarkedIds,
  onToggleBookmark,
  onSelectArticle,
  onBack,
  onShare,
}) => {
  const [readingLang, setReadingLang] = useState<LanguageCode>(currentLang);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  
  // Interactive Comments State
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'c1',
      author: 'Kiran Varma',
      avatar: 'KV',
      time: '45 mins ago',
      content: readingLang === 'te' 
        ? 'ఇది చాలా ప్రాముఖ్యమైన ప్రాజెక్ట్. దీని వల్ల రెండు రాష్ట్రాల ఆర్థిక ప్రగతికి ఎంతగానో మేలు జరుగుతుంది.' 
        : 'Crucial development for South Indian trade infrastructure. Will drastically improve logistics turnaround time.',
      likes: 14,
    },
    {
      id: 'c2',
      author: 'Sneha Reddy',
      avatar: 'SR',
      time: '1 hour ago',
      content: readingLang === 'te' 
        ? 'పర్యావరణ అనుమతులు మరియు భూసేకరణ పారదర్శకంగా జరగడం శుభపరిణామం.' 
        : 'Glad to see strict environmental standards and green expressway specifications in the DPR.',
      likes: 8,
    },
  ]);
  const [newComment, setNewComment] = useState('');

  const title = readingLang === 'te' ? (article.title.te || article.title.en) : (article.title.en || article.title.te);
  const summary = readingLang === 'te' ? (article.summary.te || article.summary.en) : (article.summary.en || article.summary.te);
  const content = readingLang === 'te' ? (article.content.te || article.content.en) : (article.content.en || article.content.te);
  const catObj = CATEGORY_NAMES[article.category] || CATEGORY_NAMES['latest'];
  const catLabel = readingLang === 'te' ? catObj.te : catObj.en;

  const isBookmarked = bookmarkedIds.has(article.id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const added: CommentItem = {
      id: `c-${Date.now()}`,
      author: 'You (Reader)',
      avatar: 'ME',
      time: 'Just now',
      content: newComment.trim(),
      likes: 0,
    };

    setComments([added, ...comments]);
    setNewComment('');
  };

  const handleLikeComment = (commentId: string) => {
    setComments(prev =>
      prev.map(c => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  // Related articles
  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && (a.category === article.category || a.isTrending))
    .slice(0, 3);

  const getFontSizeClass = () => {
    if (fontSize === 'large') return 'text-lg sm:text-xl leading-relaxed';
    if (fontSize === 'xl') return 'text-xl sm:text-2xl leading-loose';
    return 'text-base sm:text-lg leading-relaxed';
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6 animate-in fade-in duration-200">
      
      {/* Top Navigation & Action Controls */}
      <div className="flex items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{getTranslation('backToNews', currentLang)}</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Quick Bilingual Switch within Article */}
          <div className="flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5">
            <button
              onClick={() => setReadingLang('te')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                readingLang === 'te' ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              తెలుగు
            </button>
            <button
              onClick={() => setReadingLang('en')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                readingLang === 'en' ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              English
            </button>
          </div>

          {/* Font Size Adjuster */}
          <div className="hidden sm:flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5 text-xs text-slate-400">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-1 rounded font-bold ${fontSize === 'normal' ? 'bg-slate-800 text-white' : 'hover:text-white'}`}
              title="Normal text"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-1 rounded font-bold text-sm ${fontSize === 'large' ? 'bg-slate-800 text-white' : 'hover:text-white'}`}
              title="Large text"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xl')}
              className={`px-2 py-1 rounded font-bold text-base ${fontSize === 'xl' ? 'bg-slate-800 text-white' : 'hover:text-white'}`}
              title="Extra large text"
            >
              A++
            </button>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(article)}
            className={`p-2 rounded-lg border transition-all ${
              isBookmarked
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700 hover:bg-slate-700'
            }`}
            title="Bookmark this article"
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>
        </div>
      </div>

      {/* Article Header Metadata */}
      <div className="mb-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600/20 text-red-400 border border-red-500/30">
            {catLabel}
          </span>
          {article.isBreaking && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-red-600 text-white flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-current animate-bounce" />
              BREAKING
            </span>
          )}
          <span className="text-xs text-slate-400">
            {article.location && <span className="font-semibold text-slate-300">{article.location} • </span>}
            {article.publishedAt}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-4 border-l-4 border-red-600 pl-3.5 bg-slate-900/40 py-2 rounded-r-lg">
          {summary}
        </p>

        {/* Author & Stats Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-y border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-amber-600 flex items-center justify-center font-bold text-white text-xs">
              {article.author.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="font-bold text-slate-200">{article.author}</p>
              <p className="text-[11px] text-slate-400">WANTIVA Verified Newsroom Desk</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {article.viewsCount.toLocaleString()} {getTranslation('views', currentLang)}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Image with Caption */}
      <div className="relative rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800 shadow-xl">
        <img
          src={article.imageUrl}
          alt={title}
          className="w-full max-h-[480px] object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="p-2.5 bg-slate-900/90 text-slate-400 text-xs flex items-center justify-between border-t border-slate-800">
          <span>Photo Credit: WANTIVA Image Archive / Unsplash</span>
          <span className="text-[11px] text-slate-400">Sample for UI Demo</span>
        </div>
      </div>

      {/* Audio Reader Player (Mock Voice Synthesizer) */}
      <div className="mb-6 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className={`p-2.5 rounded-full text-white transition-all ${
              isPlayingAudio ? 'bg-red-600 animate-pulse' : 'bg-blue-600 hover:bg-blue-500'
            }`}
            title="Listen to this article"
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <div>
            <p className="text-xs font-bold text-slate-200">
              {isPlayingAudio ? 'Playing AI Voice Broadcast...' : getTranslation('listenAudio', currentLang)}
            </p>
            <p className="text-[11px] text-slate-400">
              {readingLang === 'te' ? 'వార్తను తెలుగు వాయిస్‌లో వినండి (3 నిమిషాలు)' : 'Listen in studio broadcast narration (3 min)'}
            </p>
          </div>
        </div>

        {isPlayingAudio && (
          <div className="flex items-center gap-1">
            <span className="w-1 h-4 bg-red-500 animate-bounce"></span>
            <span className="w-1 h-6 bg-red-400 animate-bounce delay-75"></span>
            <span className="w-1 h-3 bg-red-500 animate-bounce delay-150"></span>
            <span className="w-1 h-5 bg-red-400 animate-bounce delay-100"></span>
          </div>
        )}
      </div>

      {/* Article Body Content */}
      <article className="prose prose-invert max-w-none mb-8">
        <div className={`text-slate-200 space-y-5 whitespace-pre-line ${getFontSizeClass()}`}>
          {content}
        </div>
      </article>

      {/* Key Takeaways & Fact-Check Badge */}
      <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 mb-8 shadow-inner">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>WANTIVA Editorial Fast-Facts</span>
        </div>
        <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside">
          <li>Verified via official government releases & authorized field bureaus.</li>
          <li>Real-time regional translation available in Telugu and English.</li>
          <li>Readers can bookmark and share updates directly to WhatsApp & social networks.</li>
        </ul>
      </div>

      {/* Social Share Strip */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-3 mb-8">
        <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
          <Share2 className="w-4 h-4 text-blue-400" />
          {getTranslation('share', currentLang)} this story:
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onShare(article)}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>WhatsApp</span>
          </button>
          <button
            onClick={() => onShare(article)}
            className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>X / Twitter</span>
          </button>
          <button
            onClick={handleCopyLink}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition-colors"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? getTranslation('copied', currentLang) : getTranslation('copyLink', currentLang)}</span>
          </button>
        </div>
      </div>

      {/* Interactive Comments Section */}
      <div className="mb-10 border-t border-slate-800 pt-6">
        <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-red-500" />
          <span>{getTranslation('comments', currentLang)} ({comments.length})</span>
        </h3>

        {/* Comment Input Box */}
        <form onSubmit={handleAddComment} className="mb-6">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 focus-within:border-red-500 transition-colors">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={getTranslation('leaveComment', currentLang)}
              rows={3}
              className="w-full bg-transparent text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none resize-none"
            />
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-500">Respect editorial community guidelines</span>
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white text-xs font-bold transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{getTranslation('postComment', currentLang)}</span>
              </button>
            </div>
          </div>
        </form>

        {/* Comments Feed */}
        <div className="space-y-3">
          {comments.map((comment) => (
            <div key={comment.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">
                    {comment.avatar}
                  </div>
                  <span className="text-xs font-bold text-slate-200">{comment.author}</span>
                  <span className="text-[10px] text-slate-500">• {comment.time}</span>
                </div>
                <button
                  onClick={() => handleLikeComment(comment.id)}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-red-400 transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{comment.likes}</span>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Stories */}
      {relatedArticles.length > 0 && (
        <div className="border-t border-slate-800 pt-6">
          <h3 className="text-lg font-black text-white mb-4">
            {getTranslation('relatedStories', currentLang)}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <NewsCard
                key={rel.id}
                article={rel}
                currentLang={currentLang}
                variant="grid"
                isBookmarked={bookmarkedIds.has(rel.id)}
                onToggleBookmark={onToggleBookmark}
                onSelectArticle={onSelectArticle}
                onShare={onShare}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
