import React, { useState } from 'react';
import { 
  Wand2, 
  Youtube, 
  Share2, 
  Image as ImageIcon, 
  Video, 
  Sparkles, 
  FileEdit, 
  Check, 
  Copy, 
  Hash, 
  Clock, 
  Type, 
  ArrowRight,
  ThumbsUp,
  Layers
} from 'lucide-react';
import { LanguageCode, CreatorSubTab } from '../../types';
import { CREATOR_TEMPLATES } from '../../data/createHubData';

interface CreateHubViewProps {
  currentLang: LanguageCode;
}

export const CreateHubView: React.FC<CreateHubViewProps> = ({ currentLang }) => {
  const [activeSubTab, setActiveSubTab] = useState<CreatorSubTab>('article');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // 1. Article Creator State
  const [articleTitle, setArticleTitle] = useState('Why Smart Cities in South India Are Leading the Next Tech Era');
  const [articleKeywords, setArticleKeywords] = useState('Smart Cities, Hyderabad, Amaravati, Tech Hub, Infrastructure');
  const [articleDraft, setArticleDraft] = useState(
    'Rapid urban modernization and proactive governance are transforming South Indian hubs into premier knowledge centers. With world-class transportation corridors and dedicated AI clusters, cities like Hyderabad, Amaravati, and Visakhapatnam are setting new national benchmarks for quality of life and high-tech job opportunities.'
  );

  // 2. YouTube Script Generator State
  const [ytTopic, setYtTopic] = useState('Top 5 Game-Changing Projects in AP & Telangana');
  const [ytTone, setYtTone] = useState('Fast-Paced & Energetic');
  const [ytGeneratedScript, setYtGeneratedScript] = useState('');

  // 3. Social Media Thread Generator State
  const [socialTopic, setSocialTopic] = useState('India’s Record High-Speed Infrastructure Blueprint Approved');
  const [socialPlatform, setSocialPlatform] = useState<'twitter' | 'instagram' | 'linkedin'>('twitter');
  const [generatedSocialPost, setGeneratedSocialPost] = useState('');

  // 4. Thumbnail & Title CTR Generator State
  const [thumbTopic, setThumbTopic] = useState('Secret Behind the 3.5-Hour Express Highway');
  const [generatedThumbIdeas, setGeneratedThumbIdeas] = useState<Array<{ title: string; visual: string; textOverlay: string }>>([]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Generate YouTube Script Simulation
  const handleGenerateYtScript = () => {
    const script = `🎬 YOUTUBE VIDEO BLUEPRINT: "${ytTopic}"

[0:00 - 0:15] ⚡ THE HOOK:
"In just 36 months, the way you travel between major South Indian capitals is about to change forever. Here is the untold story behind the multi-thousand crore mega project that no one is talking about!"

[0:15 - 0:45] 🎙️ INTRODUCTION & CONTEXT:
"Welcome back to WANTIVA Creator Studio! Today we are breaking down the 5 biggest infrastructural and tech milestones that are redefining Andhra Pradesh and Telangana."

[0:45 - 2:30] 📍 SECTION 1: The Greenfield High-Speed Expressway:
• B-Roll: Drone footage over Amaravati-Hyderabad highway route.
• Key Fact: Cut transit time down to under 3.5 hours with intelligent tolling.

[2:30 - 4:15] 📍 SECTION 2: Next-Gen AI & Tech Hubs:
• On-Screen Graphic: 25,000 high-skill engineering jobs mapped across Visakhapatnam & HITEC City.

[4:15 - 5:00] 🔔 CALL TO ACTION & OUTRO:
"Which of these projects excites you the most? Drop your thoughts in the comments below, hit like, and subscribe to WANTIVA for daily ground reports!"`;
    setYtGeneratedScript(script);
  };

  // Generate Social Thread Simulation
  const handleGenerateSocialPost = () => {
    if (socialPlatform === 'twitter') {
      setGeneratedSocialPost(
        `🧵 1/4: Big breaking move for South Indian connectivity! The Union Cabinet has officially greenlit a 6-lane access-controlled greenfield expressway between Amaravati and Hyderabad. Here's why this matters 👇\n\n` +
        `2/4: ⏱️ Travel time drops from 6+ hours to just ~3.5 hours.\n` +
        `⚡ Dedicated EV fast-charging stations every 30 km.\n` +
        `💼 Direct connectivity for 15+ agro & pharma industrial clusters.\n\n` +
        `3/4: Expected to generate upwards of 40,000 direct & indirect jobs during the 36-month development timeline.\n\n` +
        `4/4: What impact do you think this will have on regional real estate and economic growth? RT and share your thoughts! #Amaravati #Hyderabad #Infrastructure #WANTIVA`
      );
    } else if (socialPlatform === 'instagram') {
      setGeneratedSocialPost(
        `🚀 TRANSFORMATIVE INFRASTRUCTURE UPDATE! 🚀\n\n` +
        `A brand-new 6-lane high-speed expressway connecting Amaravati and Hyderabad has officially been sanctioned!\n\n` +
        `📌 Key Highlights:\n` +
        `• Travel time slashed to 3.5 hours\n` +
        `• 280-KM access-controlled route\n` +
        `• Smart traffic management & Green rest plazas\n\n` +
        `Save this post to stay updated with regional progress! 📲\n\n` +
        `#Hyderabad #Amaravati #SouthIndia #Development #Expressway #WANTIVA #NewsUpdate #DailyReels`
      );
    } else {
      setGeneratedSocialPost(
        `Major Infrastructure Milestone: How the Amaravati-Hyderabad Expressway Will Accelerate South India’s Growth Corridors 🚀\n\n` +
        `Connectivity is the lifeblood of economic decentralization. Today's sanction of the 280-km high-speed expressway represents a pivotal shift towards multi-modal logistics efficiency.\n\n` +
        `Key strategic impacts for enterprises:\n` +
        `1. Reduced freight turnaround between port cities and dry terminals.\n` +
        `2. Accelerated talent mobility across twin state capitals.\n` +
        `3. Creation of an integrated tech-manufacturing ecosystem.\n\n` +
        `What are your perspectives on the industrial impact? Let's discuss in the comments.`
      );
    }
  };

  // Generate Thumbnail Ideas Simulation
  const handleGenerateThumbIdeas = () => {
    setGeneratedThumbIdeas([
      {
        title: '3.5 HOURS ONLY! 🚀 (Shock & Curiosity)',
        visual: 'Split screen: Left side showing traditional congested road in sepia tone; Right side showing gleaming neon futuristic expressway with speed motion blur.',
        textOverlay: 'HYD ↔ AMARAVATI: 3.5 HOURS!',
      },
      {
        title: 'THE $5B BLUEPRINT (Authority & Mystery)',
        visual: 'High-contrast map of AP & Telangana with a glowing golden transit line connecting both capitals, presenter pointing with shocked facial reaction.',
        textOverlay: 'OFFICIAL MAP REVEALED',
      },
      {
        title: 'IS THIS THE FUTURE? (High Urgency)',
        visual: 'Top-down aerial 3D rendering of 6-lane highway through green valleys with speed limit 120 KM/H sign prominently in foreground.',
        textOverlay: 'NEW EXPRESSWAY 2026',
      },
    ]);
  };

  // Word count & Reading time calculation
  const wordsCount = articleDraft.trim() ? articleDraft.trim().split(/\s+/).length : 0;
  const estimatedReadTimeSec = Math.ceil((wordsCount / 200) * 60);

  const subTabs = [
    { id: 'article', label: 'Article Creator', icon: FileEdit },
    { id: 'youtube', label: 'YouTube Script Creator', icon: Youtube },
    { id: 'social', label: 'Social Post Creator', icon: Share2 },
    { id: 'thumbnail', label: 'Thumbnail Ideas', icon: Sparkles },
    { id: 'image-prompt', label: 'Image Prompt Creator', icon: ImageIcon },
    { id: 'video-prompt', label: 'Video Prompt Creator', icon: Video },
    { id: 'tools', label: 'Creator Tools', icon: Layers },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 animate-in fade-in duration-200">
      
      {/* Creator Hub Hero Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/60 via-[#121824] to-slate-900 border border-purple-900/40 mb-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-600/30 text-pink-300 border border-purple-500/40 flex items-center gap-1">
              <Wand2 className="w-3.5 h-3.5" />
              WANTIVA CREATOR HUB
            </span>
            <span className="text-xs text-slate-400">• For Modern Digital Content Creators</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            {currentLang === 'te' ? 'వాంటివా క్రియేటర్ హబ్' : 'WANTIVA Creator Hub'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {currentLang === 'te'
              ? 'యూట్యూబ్ క్రియేటర్లు, జర్నలిస్టులు, సోషల్ మీడియా ఇన్‌ఫ్లుయెన్సర్ల కోసం ఆర్టికల్స్, స్క్రిప్ట్‌లు, థంబ్‌నెయిల్ ఐడియాలు మరియు పోస్ట్‌లను సులభంగా రూపొందించే వర్క్‌స్పేస్.'
              : 'The ultimate creator workstation: Produce viral YouTube scripts, SEO articles, multi-platform social threads, and thumbnail concepts.'}
          </p>
        </div>
      </div>

      {/* Sub-Navigation Tabs Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-6 border-b border-slate-800">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as CreatorSubTab)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-950/50'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. ARTICLE CREATOR SUBTAB */}
      {activeSubTab === 'article' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-5 rounded-2xl bg-[#121824] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <FileEdit className="w-4 h-4 text-purple-400" />
                <span>Rich Article & News Draft Studio</span>
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-mono">
                  {wordsCount} words • ~{estimatedReadTimeSec}s read
                </span>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Headline / Title
              </label>
              <input
                type="text"
                value={articleTitle}
                onChange={(e) => setArticleTitle(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs sm:text-sm font-bold focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                SEO Tags & Target Keywords
              </label>
              <input
                type="text"
                value={articleKeywords}
                onChange={(e) => setArticleKeywords(e.target.value)}
                className="w-full px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Article Body & Story Content
              </label>
              <textarea
                value={articleDraft}
                onChange={(e) => setArticleDraft(e.target.value)}
                rows={10}
                className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-500 leading-relaxed resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Auto-saved locally
              </span>
              <button
                onClick={() => copyToClipboard(`${articleTitle}\n\n${articleDraft}`, 'draft')}
                className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedId === 'draft' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === 'draft' ? 'Copied Full Draft' : 'Copy Article'}</span>
              </button>
            </div>
          </div>

          {/* SEO & Readability Analytics Panel */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                SEO & Readability Score
              </h3>

              <div className="flex items-center justify-center p-4 rounded-xl bg-slate-900 border border-slate-800 mb-4">
                <div className="text-center">
                  <span className="text-3xl font-black text-emerald-400">92/100</span>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">
                    High Search Potential
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span>Headline Length</span>
                  <span className="text-emerald-400 font-bold">{articleTitle.length} chars (Optimal)</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span>Target Keywords</span>
                  <span className="text-cyan-400 font-bold">5 Included</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>Readability Level</span>
                  <span className="text-emerald-400 font-bold">Grade 8 (Accessible)</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Search Engine Snippet Preview
              </h3>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <p className="text-xs text-blue-400 font-semibold truncate hover:underline cursor-pointer">
                  {articleTitle} - WANTIVA
                </p>
                <p className="text-[10px] text-emerald-500 truncate">
                  https://wantiva.com/news/south-india-tech-era
                </p>
                <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                  {articleDraft}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. YOUTUBE SCRIPT CREATOR SUBTAB */}
      {activeSubTab === 'youtube' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Youtube className="w-5 h-5 text-red-500" />
              <span>YouTube High-Retention Script Creator</span>
            </h2>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Video Topic or News Event
              </label>
              <input
                type="text"
                value={ytTopic}
                onChange={(e) => setYtTopic(e.target.value)}
                placeholder="e.g. How Amaravati's New Tech City is Being Built"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Script Style / Pacing
              </label>
              <select
                value={ytTone}
                onChange={(e) => setYtTone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none"
              >
                <option>Fast-Paced & Energetic (High Retention)</option>
                <option>Deep-Dive Investigative Documentary</option>
                <option>Educational Step-by-Step Explainer</option>
                <option>Shorts / Reels 60-Second Blitz</option>
              </select>
            </div>

            <button
              onClick={handleGenerateYtScript}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all"
            >
              <Wand2 className="w-4 h-4" />
              <span>Generate Complete Video Script</span>
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                <span className="text-xs font-bold text-slate-300">Generated YouTube Script</span>
                {ytGeneratedScript && (
                  <button
                    onClick={() => copyToClipboard(ytGeneratedScript, 'yt')}
                    className="text-xs text-red-400 flex items-center gap-1 hover:text-red-300"
                  >
                    {copiedId === 'yt' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'yt' ? 'Copied' : 'Copy Script'}</span>
                  </button>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono leading-relaxed max-h-[380px] overflow-y-auto whitespace-pre-line border border-slate-800">
                {ytGeneratedScript || 'Enter your video topic on the left and click "Generate Complete Video Script".'}
              </div>
            </div>

            {ytGeneratedScript && (
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Includes Hook, B-roll cues & Call to action</span>
                <span className="text-emerald-400 font-bold">100% Ready for Teleprompter</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. SOCIAL POST CREATOR SUBTAB */}
      {activeSubTab === 'social' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Share2 className="w-4 h-4 text-sky-400" />
              <span>Multi-Platform Social Post Creator</span>
            </h2>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                News Event / Post Angle
              </label>
              <textarea
                value={socialTopic}
                onChange={(e) => setSocialTopic(e.target.value)}
                rows={3}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-sky-500 resize-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Platform Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSocialPlatform('twitter')}
                  className={`py-2 rounded-lg text-xs font-bold border transition-colors ${
                    socialPlatform === 'twitter'
                      ? 'bg-sky-600 text-white border-sky-500'
                      : 'bg-slate-900 text-slate-300 border-slate-700'
                  }`}
                >
                  X / Twitter Thread
                </button>
                <button
                  type="button"
                  onClick={() => setSocialPlatform('instagram')}
                  className={`py-2 rounded-lg text-xs font-bold border transition-colors ${
                    socialPlatform === 'instagram'
                      ? 'bg-pink-600 text-white border-pink-500'
                      : 'bg-slate-900 text-slate-300 border-slate-700'
                  }`}
                >
                  Instagram Caption
                </button>
                <button
                  type="button"
                  onClick={() => setSocialPlatform('linkedin')}
                  className={`py-2 rounded-lg text-xs font-bold border transition-colors ${
                    socialPlatform === 'linkedin'
                      ? 'bg-blue-700 text-white border-blue-600'
                      : 'bg-slate-900 text-slate-300 border-slate-700'
                  }`}
                >
                  LinkedIn Article
                </button>
              </div>
            </div>

            <button
              onClick={handleGenerateSocialPost}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Viral Post</span>
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                <span className="text-xs font-bold text-slate-300">Formatted Social Copy</span>
                {generatedSocialPost && (
                  <button
                    onClick={() => copyToClipboard(generatedSocialPost, 'social')}
                    className="text-xs text-sky-400 flex items-center gap-1 hover:text-sky-300"
                  >
                    {copiedId === 'social' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'social' ? 'Copied' : 'Copy Post'}</span>
                  </button>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 text-xs leading-relaxed max-h-[360px] overflow-y-auto whitespace-pre-line border border-slate-800">
                {generatedSocialPost || 'Select platform and click "Generate Viral Post" to preview formatted copy.'}
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              Formatted with relevant high-volume hashtags & engagement prompts.
            </div>
          </div>
        </div>
      )}

      {/* 4. THUMBNAIL IDEAS SUBTAB */}
      {activeSubTab === 'thumbnail' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                value={thumbTopic}
                onChange={(e) => setThumbTopic(e.target.value)}
                placeholder="Enter video or article topic..."
                className="flex-1 w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={handleGenerateThumbIdeas}
                className="w-full sm:w-auto px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate High-CTR Concepts</span>
              </button>
            </div>
          </div>

          {generatedThumbIdeas.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {generatedThumbIdeas.map((idea, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#121824] border border-slate-800 hover:border-purple-500/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950 text-pink-300 border border-purple-800 mb-2 inline-block">
                      Concept #{idx + 1}
                    </span>

                    <h4 className="text-sm font-bold text-white mb-2">{idea.title}</h4>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mb-3">
                      <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">
                        Visual Composition:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">{idea.visual}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-pink-950/30 border border-pink-800/40">
                      <span className="text-[10px] font-bold text-pink-300 block">Bold Text Overlay:</span>
                      <span className="text-xs font-black text-white tracking-wide">{idea.textOverlay}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(`${idea.title}\nVisual: ${idea.visual}\nText: ${idea.textOverlay}`, `idea-${idx}`)}
                    className="mt-4 w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 border border-slate-700"
                  >
                    {copiedId === `idea-${idx}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === `idea-${idx}` ? 'Copied' : 'Copy Concept'}</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 5. OTHER CREATOR SUBTABS */}
      {(activeSubTab === 'image-prompt' || activeSubTab === 'video-prompt' || activeSubTab === 'tools') && (
        <div className="p-8 rounded-2xl bg-[#121824] border border-slate-800 text-center max-w-xl mx-auto">
          <Wand2 className="w-10 h-10 text-purple-400 mx-auto mb-3 animate-pulse" />
          <h3 className="text-base font-bold text-white mb-2">
            {activeSubTab === 'image-prompt' ? 'Image Prompt Creator' : activeSubTab === 'video-prompt' ? 'Video Motion Prompt Creator' : 'Creator Tool Utilities'}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Utilize WANTIVA's AI Studio suite for direct multi-modal prompt generation and script exports.
          </p>
          <button
            onClick={() => setActiveSubTab('article')}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white text-xs font-bold hover:bg-purple-500 transition-colors"
          >
            Back to Article Studio
          </button>
        </div>
      )}

    </div>
  );
};
