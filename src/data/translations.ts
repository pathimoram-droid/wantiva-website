import { LanguageCode, NewsCategory } from '../types';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  isReady: boolean;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', isReady: true },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🌐', isReady: true },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', isReady: false },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', isReady: false },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', isReady: false },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', isReady: false },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', isReady: false },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', isReady: false },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', isReady: false },
];

export const CATEGORY_NAMES: Record<NewsCategory, { en: string; te: string; hi?: string; icon: string }> = {
  'breaking': { en: 'Breaking News', te: 'తాజా బ్రేకింగ్ న్యూస్', icon: 'Flame' },
  'latest': { en: 'Latest News', te: 'లేటెస్ట్ వార్తలు', icon: 'Clock' },
  'trending': { en: 'Trending News', te: 'ట్రెండింగ్ న్యూస్', icon: 'TrendingUp' },
  'politics': { en: 'Politics', te: 'రాజకీయం', icon: 'Landmark' },
  'andhra-pradesh': { en: 'Andhra Pradesh', te: 'ఆంధ్రప్రదేశ్', icon: 'MapPin' },
  'telangana': { en: 'Telangana', te: 'తెలంగాణ', icon: 'Building2' },
  'india': { en: 'India', te: 'జాతీయం', icon: 'Flag' },
  'world': { en: 'World', te: 'అంతర్జాతీయం', icon: 'Globe' },
  'cinema': { en: 'Cinema & Entertainment', te: 'సినిమా & వినోదం', icon: 'Film' },
  'sports': { en: 'Sports', te: 'క్రీడలు', icon: 'Trophy' },
  'jobs': { en: 'Jobs & Careers', te: 'ఉద్యోగాలు & కెరీర్', icon: 'Briefcase' },
  'education': { en: 'Education', te: 'విద్య', icon: 'GraduationCap' },
  'business': { en: 'Business', te: 'వ్యాపారం & ఆర్థికం', icon: 'TrendingUp' },
  'technology': { en: 'Technology', te: 'టెక్నాలజీ', icon: 'Cpu' },
  'health': { en: 'Health', te: 'ఆరోగ్యం', icon: 'HeartPulse' },
  'agriculture': { en: 'Agriculture', te: 'వ్యవసాయం', icon: 'Wheat' },
  'auto': { en: 'Auto', te: 'ఆటోమొబైల్', icon: 'Car' },
  'lifestyle': { en: 'Lifestyle', te: 'జీవనశైలి', icon: 'Sparkles' },
  'science': { en: 'Science', te: 'సైన్స్ & పరిశోధన', icon: 'Atom' },
  'viral': { en: 'Viral / Trending', te: 'వైరల్ న్యూస్', icon: 'Zap' },
};

export const UI_TRANSLATIONS: Record<string, { en: string; te: string }> = {
  // Navigation & Brand
  brandName: { en: 'WANTIVA', te: 'వాంటివా' },
  brandTagline: { en: 'Multilingual News, AI Studio & Creator Hub', te: 'బహుభాషా వార్తలు, ఏఐ స్టూడియో & క్రియేటర్ హబ్' },
  navNews: { en: 'NEWS', te: 'వార్తలు' },
  navAiStudio: { en: 'AI STUDIO', te: 'ఏఐ స్టూడియో' },
  navCreateHub: { en: 'CREATE HUB', te: 'క్రియేట్ హబ్' },
  
  // Actions & Buttons
  viewAll: { en: 'View All', te: 'అన్నీ చూడండి' },
  readMore: { en: 'Read More', te: 'మరింత చదవండి' },
  share: { en: 'Share', te: 'షేర్ చేయండి' },
  bookmark: { en: 'Bookmark', te: 'సేవ్ చేయండి' },
  savedBookmarks: { en: 'Saved Articles', te: 'సేవ్ చేసిన వార్తలు' },
  listenAudio: { en: 'Listen Article', te: 'వార్త వినండి' },
  fontSize: { en: 'Text Size', te: 'అక్షరాల సైజు' },
  searchPlaceholder: { en: 'Search news, topics, or AI tools...', te: 'వార్తలు, అంశాలు లేదా ఏఐ టూల్స్ శోధించండి...' },
  backToHome: { en: 'Back to Home', te: 'హోమ్ పేజీకి వెళ్లండి' },
  backToNews: { en: 'Back to News', te: 'వార్తలకు వెళ్లండి' },
  copyLink: { en: 'Copy Link', te: 'లింక్ కాపీ చేయండి' },
  copied: { en: 'Copied!', te: 'కాపీ అయింది!' },
  liveUpdates: { en: 'LIVE UPDATES', te: 'లైవ్ అప్‌డేట్స్' },
  topHeadlines: { en: 'Top Headlines', te: 'ముఖ్య వార్తలు' },
  relatedStories: { en: 'Related Stories', te: 'సంబంధిత వార్తలు' },
  comments: { en: 'Comments', te: 'వ్యాఖ్యలు' },
  leaveComment: { en: 'Write a response...', te: 'మీ అభిప్రాయాన్ని రాయండి...' },
  postComment: { en: 'Post Comment', te: 'వ్యాఖ్యానించండి' },
  disclaimer: { en: 'Demo / Sample Content for UI Demonstration', te: 'యూజర్ ఇంటర్‌ఫేస్ ప్రదర్శన కోసం రూపొందించిన నమూనా కంటెంట్' },
  quickFilters: { en: 'Quick Categories', te: 'త్వరిత విభాగాలు' },
  publishedOn: { en: 'Published on', te: 'ప్రచురితం' },
  readTime: { en: 'min read', te: 'నిమిషాల రీడ్' },
  views: { en: 'views', te: 'వీక్షణలు' },
  noResults: { en: 'No results found', te: 'ఫలితాలు కనుగొనబడలేదు' },
  clearSearch: { en: 'Clear', te: 'క్లియర్ చేయండి' },
  switchLanguage: { en: 'Language', te: 'భాష' },
  comingSoon: { en: 'Support for this language is rolling out soon', te: 'ఈ భాష మద్దతు త్వరలో అందుబాటులోకి రానుంది' },
  
  // Footer
  aboutUs: { en: 'About WANTIVA', te: 'వాంటివా గురించి' },
  aboutDesc: { 
    en: 'WANTIVA is a next-generation multilingual news portal, AI productivity engine, and content creator workstation designed for mobile-first audiences.',
    te: 'వాంటివా అనేది సరికొత్త బహుభాషా వార్తా పోర్టల్, ఏఐ ప్రొడక్టివిటీ ఇంజిన్ మరియు కంటెంట్ క్రియేటర్ వర్క్‌స్టేషన్.' 
  },
  quickLinks: { en: 'Quick Sections', te: 'ముఖ్య విభాగాలు' },
  editorialStandards: { en: 'Editorial Standards', te: 'ఎడిటోరియల్ విధానాలు' },
  privacyPolicy: { en: 'Privacy Policy', te: 'గోప్యతా విధానం' },
  termsOfService: { en: 'Terms of Service', te: 'నిబంధనలు' },
  contactUs: { en: 'Contact Editorial Desk', te: 'సంపాదక బృందాన్ని సంప్రదించండి' },
  allRightsReserved: { en: 'All rights reserved.', te: 'అన్ని హక్కులూ ప్రత్యేకించబడినవి.' }
};

export function getTranslation(key: string, lang: LanguageCode = 'en'): string {
  const item = UI_TRANSLATIONS[key];
  if (!item) return key;
  return item[lang as 'en' | 'te'] || item.en || key;
}
