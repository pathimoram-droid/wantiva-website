export interface CreatorTemplate {
  id: string;
  name: { en: string; te: string };
  category: string;
  description: { en: string; te: string };
  iconName: string;
  fields: { id: string; label: string; placeholder: string; type: 'text' | 'textarea' | 'select'; options?: string[] }[];
}

export const CREATOR_TEMPLATES: CreatorTemplate[] = [
  {
    id: 'yt-script',
    name: { en: 'YouTube Viral Explainer Script', te: 'యూట్యూబ్ వైరల్ స్క్రిప్ట్ మేకర్' },
    category: 'Video',
    iconName: 'Youtube',
    description: {
      en: 'Generate structured scripts with a gripping 15-second hook, fast-paced retention loops, and clear call-to-action.',
      te: 'మొదటి 15 సెకన్ల హుక్, ఆసక్తికరమైన కంటెంట్ మరియు ముగింపుతో పూర్తి వీడియో స్క్రిప్ట్.',
    },
    fields: [
      { id: 'topic', label: 'Video Topic or News Event', placeholder: 'e.g. Why Amaravati is Becoming India’s Tech Capital', type: 'text' },
      { id: 'targetDuration', label: 'Target Video Duration', placeholder: 'Select duration', type: 'select', options: ['Under 60 Seconds (Shorts / Reels)', '3 - 5 Minutes (Quick Explainer)', '8 - 12 Minutes (Deep Dive)'] },
      { id: 'targetAudience', label: 'Target Audience', placeholder: 'e.g., Tech enthusiasts, Telugu youth, Aspirants', type: 'text' },
    ],
  },
  {
    id: 'social-thread',
    name: { en: 'Multi-Platform Social Thread & Reel Caption', te: 'సోషల్ మీడియా పోస్ట్ & రీల్ క్యాప్షన్' },
    category: 'Social Media',
    iconName: 'Share2',
    description: {
      en: 'Craft punchy X/Twitter threads, high-converting LinkedIn carousels, and Instagram captions with top hashtags.',
      te: 'ట్విట్టర్, ఇన్‌స్టాగ్రామ్, లింక్డ్‌ఇన్ కోసం ఒకేసారి ఆకర్షణీయమైన పోస్ట్‌లు మరియు హ్యాష్‌ట్యాగ్‌లు.',
    },
    fields: [
      { id: 'coreMessage', label: 'Core Message / News Angle', placeholder: 'e.g., Key takeaways from ISRO Gaganyaan mission update', type: 'textarea' },
      { id: 'platform', label: 'Target Platform', placeholder: 'Select platform', type: 'select', options: ['X / Twitter Thread', 'Instagram Reel / Post Caption', 'LinkedIn Thought Leadership', 'WhatsApp Broadcast Newsletter'] },
    ],
  },
  {
    id: 'thumbnail-ideas',
    name: { en: 'Click-Worthy Thumbnail Concepts & Titles', te: 'థంబ్‌నెయిల్ ఐడియాస్ & టైటిల్స్' },
    category: 'Graphic / SEO',
    iconName: 'Sparkles',
    description: {
      en: 'Brainstorm high-CTR (Click-Through-Rate) visual thumbnail ideas, contrasting color schemes, and 3-word bold overlay texts.',
      te: 'ఎక్కువ మంది క్లిక్ చేసేలా థంబ్‌నెయిల్ డిజైన్ ఐడియాలు, రంగులు మరియు టైటిల్స్.',
    },
    fields: [
      { id: 'videoTitle', label: 'Working Title / Topic', placeholder: 'e.g., The Secret Behind Hyderabad Metro Phase 2 Route', type: 'text' },
      { id: 'emotionGoal', label: 'Primary Viewer Emotion', placeholder: 'Select emotion', type: 'select', options: ['Shock / Curiosity', 'Inspirational / Motivational', 'High Urgency / Breaking', 'Educational / Authority'] },
    ],
  },
];
