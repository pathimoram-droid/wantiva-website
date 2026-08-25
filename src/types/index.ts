export type LanguageCode =
  | 'en'
  | 'te'
  | 'hi'
  | 'ta'
  | 'kn'
  | 'ml'
  | 'mr'
  | 'bn'
  | 'gu';

export type NewsCategory =
  | 'breaking'
  | 'latest'
  | 'trending'
  | 'politics'
  | 'andhra-pradesh'
  | 'telangana'
  | 'india'
  | 'world'
  | 'cinema'
  | 'sports'
  | 'jobs'
  | 'education'
  | 'business'
  | 'technology'
  | 'health'
  | 'agriculture'
  | 'auto'
  | 'lifestyle'
  | 'science'
  | 'viral';

export interface LocalizedString {
  en: string;
  te: string;
  hi?: string;
  ta?: string;
  kn?: string;
  ml?: string;
  mr?: string;
  bn?: string;
  gu?: string;
  [key: string]: string | undefined;
}

export interface NewsArticle {
  id: string;
  title: LocalizedString;
  summary: LocalizedString;
  content: LocalizedString;
  category: NewsCategory;
  imageUrl: string;
  publishedAt: string;
  author: string;
  readTime: string;
  tags: string[];
  isBreaking?: boolean;
  isTrending?: boolean;
  viewsCount: number;
  sharesCount: number;
  commentsCount: number;
  location?: string;
  factChecked?: boolean;
}

export type MainNavTab = 'news' | 'ai-studio' | 'create-hub';

export type AISubTab =
  | 'tools'
  | 'news'
  | 'writer'
  | 'summarizer'
  | 'translator'
  | 'image'
  | 'video'
  | 'voice'
  | 'prompts'
  | 'tutorials';

export type CreatorSubTab =
  | 'article'
  | 'youtube'
  | 'social'
  | 'image-prompt'
  | 'video-prompt'
  | 'thumbnail'
  | 'tools';

export interface CommentItem {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
}
