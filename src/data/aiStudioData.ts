export interface AIToolItem {
  id: string;
  name: string;
  category: string;
  description: { en: string; te: string };
  badge?: string;
  iconName: string;
  features: string[];
}

export const AI_TOOLS_LIST: AIToolItem[] = [
  {
    id: 'ai-writer',
    name: 'WANTIVA Neural Writer',
    category: 'Text & Editorial',
    badge: 'Popular',
    iconName: 'PenTool',
    description: {
      en: 'Generate news articles, press releases, investigative drafts, and editorial headlines in seconds.',
      te: 'వార్తా కథనాలు, ప్రెస్ నోట్‌లు మరియు ఆకట్టుకునే హెడ్‌లైన్లను క్షణాల్లో రూపొందించండి.',
    },
    features: ['Multi-tone support', 'SEO optimized', 'Telugu & English support', 'Headline analyzer'],
  },
  {
    id: 'ai-summarizer',
    name: 'Instant Article Summarizer',
    category: 'Research & News',
    badge: 'Fast',
    iconName: 'FileText',
    description: {
      en: 'Transform lengthy 2000-word news reports into 3 crisp bullet points, key facts, and sentiment.',
      te: 'పెద్ద నివేదికలు మరియు వ్యాసాలను క్లుప్తంగా ముఖ్యమైన ముఖ్యాంశాలుగా మార్చండి.',
    },
    features: ['Bullet extraction', 'Key takeaways', 'TL;DR generator', 'Fact highlighting'],
  },
  {
    id: 'ai-translator',
    name: 'Indic Neural Translator',
    category: 'Multilingual',
    badge: 'Multilingual',
    iconName: 'Languages',
    description: {
      en: 'High-accuracy regional language translation between English, Telugu, Hindi, Tamil, and Kannada.',
      te: 'ఇంగ్లీష్, తెలుగు మరియు ఇతర భారతీయ భాషల మధ్య ఖచ్చితమైన అనువాదం.',
    },
    features: ['Context-aware', 'Idiom preservation', 'News jargon aware', 'Instant bilingual output'],
  },
  {
    id: 'ai-image-gen',
    name: 'Visual Prompt Architect',
    category: 'Visual & Media',
    badge: 'Creative',
    iconName: 'Image',
    description: {
      en: 'Engineer photorealistic prompts for Midjourney, DALL-E 3, and Stable Diffusion with lighting & camera presets.',
      te: 'అత్యాధునిక చిత్రాల రూపకల్పన కోసం కెమెరా యాంగిల్స్, లైటింగ్‌తో కూడిన ప్రాంప్ట్‌లను సిద్ధం చేయండి.',
    },
    features: ['Aspect ratio presets', 'Style modifiers', 'Negative prompt builder', 'Lighting presets'],
  },
  {
    id: 'ai-video-tools',
    name: 'Video Scene & Storyboarder',
    category: 'Video Production',
    badge: 'Pro',
    iconName: 'Video',
    description: {
      en: 'Convert news headlines into shot-by-shot visual storyboards and camera motion descriptions for Sora & Runway.',
      te: 'వార్తలను వీడియోలుగా మార్చేందుకు దృశ్య వివరణలు మరియు కెమెరా కదలికలను రూపొందించండి.',
    },
    features: ['Shot-by-shot timeline', 'Camera motion tags', 'B-roll suggestions', 'Aspect presets'],
  },
  {
    id: 'ai-voice-tools',
    name: 'Broadcast Voiceover Studio',
    category: 'Audio & Speech',
    badge: 'Audio',
    iconName: 'Mic',
    description: {
      en: 'Craft radio-ready news broadcaster scripts with pronunciation cues, emotion markers, and pacing.',
      te: 'వార్తా ప్రసారాల కోసం రేడియో-గ్రేడ్ వాయిస్‌ఓవర్ స్క్రిప్ట్‌లు మరియు డైలాగ్‌లను రూపొందించండి.',
    },
    features: ['SSML tags', 'Pacing markers', 'Emotional inflection', 'News anchor tone'],
  },
];

export const AI_PROMPTS_LIBRARY = [
  {
    id: 'p-1',
    category: 'News & Journalism',
    title: { en: 'Investigative Fact-Check Framework', te: 'సమగ్ర ఫ్యాక్ట్-చెక్ పరిశోధనా ప్రాంప్ట్' },
    prompt: 'Act as a seasoned investigative journalist. Cross-examine the following claim against standard verified public datasets. List: 1) Verified facts 2) Ambiguous claims 3) Red flags 4) Final verdict score from 1-10.',
  },
  {
    id: 'p-2',
    category: 'Viral Social Copy',
    title: { en: 'High-Engagement X/Twitter Thread', te: 'వైరల్ ట్విట్టర్ థ్రెడ్ మేకర్' },
    prompt: 'Convert this news event into a 5-tweet engaging thread. Tweet 1 must have an irresistible hook with zero clickbait deception. Tweets 2-4 provide verified numbers. Tweet 5 asks an open-ended debate question with 3 hashtags.',
  },
  {
    id: 'p-3',
    category: 'Telugu Content',
    title: { en: 'Telugu News Headline Polisher', te: 'ఆకర్షణీయమైన తెలుగు హెడ్‌లైన్స్' },
    prompt: 'క్రింది వార్తా సారాంశాన్ని చదివి, పత్రికలలో మరియు డిజిటల్ మీడియాలో విపరీతంగా ఆకట్టుకునే 5 విభిన్నమైన తెలుగు హెడ్‌లైన్లను (సంచలన, వివరణాత్మక, మరియు సూటిగా ఉండే శైలుల్లో) రూపొందించండి.',
  },
  {
    id: 'p-4',
    category: 'YouTube Content',
    title: { en: 'YouTube 10-Min Explainer Outline', te: 'యూట్యూబ్ ఎక్స్‌ప్లెయినర్ వీడియో అవుట్‌లైన్' },
    prompt: 'Create a minute-by-minute storyboard for a 10-minute video explainer on this topic. Include: Visual cues for the editor, B-Roll footage recommendations, on-screen motion graphics suggestions, and background music shift markers.',
  },
];

export const AI_TUTORIALS_LIST = [
  {
    id: 'tut-1',
    title: {
      en: 'Mastering AI-Powered Digital Journalism in 2026',
      te: '2026లో ఏఐ ఆధారిత డిజిటల్ జర్నలిజం మెలకువలు',
    },
    duration: '12 min read',
    level: 'Beginner to Intermediate',
    overview: {
      en: 'Learn how to utilize Large Language Models for automated headline A/B testing, multi-source synthesis, and automated regional translations without sacrificing editorial authenticity.',
      te: 'పత్రికా ప్రమాణాలు దెబ్బతినకుండా వార్తలను శోధించడం, సారాంశాలు రాయడం మరియు బహుభాషల్లోకి అనువదించడంలో ఏఐని ఎలా సమర్థవంతంగా వాడాలో తెలుసుకోండి.',
    },
  },
  {
    id: 'tut-2',
    title: {
      en: 'Prompt Engineering for High-Resolution Photorealistic News Graphics',
      te: 'వార్తా కథనాల కోసం అత్యుత్తమ ఏఐ గ్రాఫిక్స్ ప్రాంప్ట్స్ రాయడం ఎలా?',
    },
    duration: '15 min read',
    level: 'Intermediate',
    overview: {
      en: 'Master the subtle vocabulary of focal lengths (85mm f/1.4), volumetric cinematic lighting, and studio color grades for editorial thumbnail artwork.',
      te: 'థంబ్‌నెయిల్స్ మరియు న్యూస్ ఆర్టికల్స్ కోసం ఆకట్టుకునే ఫోటోరియలిస్టిక్ ఇమేజ్‌లను రూపొందించడానికి ప్రాంప్ట్ టెక్నిక్స్.',
    },
  },
  {
    id: 'tut-3',
    title: {
      en: 'Building an Automated Multilingual Newsroom Workflow',
      te: 'ఆటోమేటెడ్ బహుభాషా న్యూస్‌రూమ్ వర్క్‌ఫ్లో రూపకల్పన',
    },
    duration: '18 min read',
    level: 'Advanced',
    overview: {
      en: 'A comprehensive blueprint on bridging English wire feeds into Telugu, Hindi, and Tamil regional channels in real time with human-in-the-loop validation.',
      te: 'జాతీయ, అంతర్జాతీయ వార్తలను క్షణాల్లో ప్రాంతీయ భాషల్లోకి అనువదించి పబ్లిష్ చేసే పూర్తి ఆటోమేటెడ్ సిస్టమ్ విధానం.',
    },
  },
];
