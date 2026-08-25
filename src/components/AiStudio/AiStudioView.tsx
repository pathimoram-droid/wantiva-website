import React, { useState } from 'react';
import { 
  Sparkles, 
  PenTool, 
  FileText, 
  Languages, 
  Image as ImageIcon, 
  Video, 
  Mic, 
  BookOpen, 
  Terminal, 
  Newspaper,
  Copy,
  Check,
  Play,
  RotateCcw,
  Sliders,
  ExternalLink,
  Zap,
  ArrowRight,
  Layers
} from 'lucide-react';
import { LanguageCode, AISubTab } from '../../types';
import { AI_TOOLS_LIST, AI_PROMPTS_LIBRARY, AI_TUTORIALS_LIST } from '../../data/aiStudioData';
import { getTranslation } from '../../data/translations';

interface AiStudioViewProps {
  currentLang: LanguageCode;
}

export const AiStudioView: React.FC<AiStudioViewProps> = ({ currentLang }) => {
  const [activeSubTab, setActiveSubTab] = useState<AISubTab>('tools');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  // 1. AI Writer Interactive State
  const [writerTopic, setWriterTopic] = useState('New High-Speed Rail Corridor in South India');
  const [writerTone, setWriterTone] = useState<'neutral' | 'urgent' | 'investigative' | 'inspirational'>('neutral');
  const [writerType, setWriterType] = useState<'article' | 'press-release' | 'headline-suite' | 'bullet-brief'>('article');
  const [writerOutput, setWriterOutput] = useState('');
  const [isGeneratingWriter, setIsGeneratingWriter] = useState(false);

  // 2. AI Summarizer Interactive State
  const [summarizerInput, setSummarizerInput] = useState(
    'The Indian Space Research Organisation has finalized design specifications for its next generation reusable launch vehicle and orbital space station modules, with initial flight demonstrations slated for upcoming quarters.'
  );
  const [summaryOutput, setSummaryOutput] = useState<{ bullets: string[]; tldr: string; sentiment: string } | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);

  // 3. AI Translator Interactive State
  const [translatorSourceText, setTranslatorSourceText] = useState('Breaking: High-speed connectivity project approved for regional economic growth.');
  const [translatorTargetLang, setTranslatorTargetLang] = useState<'te' | 'hi' | 'ta' | 'en'>('te');
  const [translatedResult, setTranslatedResult] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  // 4. AI Image Prompt Builder State
  const [imageSubject, setImageSubject] = useState('Futuristic high-speed bullet train crossing an illuminated architectural bridge');
  const [imageStyle, setImageStyle] = useState('Photorealistic 8K');
  const [imageRatio, setImageRatio] = useState('16:9');
  const [imageLighting, setImageLighting] = useState('Golden Hour Cinematic');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  // Handler for AI Writer Generator Simulation
  const handleGenerateWriter = () => {
    setIsGeneratingWriter(true);
    setTimeout(() => {
      if (writerType === 'headline-suite') {
        setWriterOutput(
          `1. 🔴 BREAKING: ${writerTopic} Cleared in Landmark Cabinet Decision\n` +
          `2. 📈 Strategic Growth: Why ${writerTopic} Will Reshape Regional Transit\n` +
          `3. 🔍 Special Report: Deep-Dive Analysis into the Timeline of ${writerTopic}\n` +
          `4. ⚡ Fast-Track: State Consortia Finalize Execution Blueprint for ${writerTopic}`
        );
      } else if (writerType === 'press-release') {
        setWriterOutput(
          `FOR IMMEDIATE RELEASE\n\n` +
          `OFFICIAL BRIEF: ${writerTopic.toUpperCase()}\n\n` +
          `HYDERABAD/NEW DELHI — Authorities have formally unveiled strategic directives concerning "${writerTopic}". Designed to prioritize public accessibility, resource optimization, and sustainable infrastructure benchmarks, the comprehensive blueprint enters immediate field execution.\n\n` +
          `"This initiative marks a transformative turning point for our connected economy," affirmed official spokespersons during today's press assembly.`
        );
      } else {
        setWriterOutput(
          `# ${writerTopic}: Full Editorial Overview\n\n` +
          `In a development carrying far-reaching socio-economic implications, the blueprint for **${writerTopic}** has been formally designated as a high-priority state and national initiative.\n\n` +
          `### Key Highlights & Deliverables:\n` +
          `- **Accelerated Implementation:** Phased milestones structured for 24-month execution.\n` +
          `- **High Efficiency Design:** Integrated smart digital monitoring and green energy protocols.\n` +
          `- **Citizen Impact:** Estimated direct benefit to over 1.2 million daily commuters and businesses.\n\n` +
          `Editorial consensus underscores this as a pivotal benchmark in modernizing core regional infrastructure.`
        );
      }
      setIsGeneratingWriter(false);
    }, 600);
  };

  // Handler for AI Summarizer Simulation
  const handleSummarize = () => {
    setIsSummarizing(true);
    setTimeout(() => {
      setSummaryOutput({
        tldr: 'ISRO advances next-generation reusable space systems and orbital module roadmaps for forthcoming test flights.',
        bullets: [
          'Design specifications for reusable launch vehicle modules successfully finalized.',
          'Orbital space station components slated for initial demonstration cycles.',
          'Signals substantial acceleration in indigenous Indian human spaceflight infrastructure.',
        ],
        sentiment: 'High Optimism & Technological Progress (94%)',
      });
      setIsSummarizing(false);
    }, 500);
  };

  // Handler for AI Translator Simulation
  const handleTranslate = () => {
    setIsTranslating(true);
    setTimeout(() => {
      if (translatorTargetLang === 'te') {
        setTranslatedResult('తాజా వార్త: ప్రాంతీయ ఆర్థికాభివృద్ధిని వేగవంతం చేసే హైస్పీడ్ కనెక్టివిటీ ప్రాజెక్టుకు అధికారిక ఆమోదం లభించింది.');
      } else if (translatorTargetLang === 'hi') {
        setTranslatedResult('ब्रेकिंग: क्षेत्रीय आर्थिक विकास को गति देने के लिए हाई-स्पीड कनेक्टिविटी परियोजना को मंजूरी दी गई।');
      } else if (translatorTargetLang === 'ta') {
        setTranslatedResult('முக்கிய செய்தி: பிராந்திய பொருளாதார வளர்ச்சிக்கான அதிவேக இணைப்பு திட்டத்திற்கு ஒப்புதல்.');
      } else {
        setTranslatedResult(translatorSourceText);
      }
      setIsTranslating(false);
    }, 450);
  };

  // Handler for AI Image Prompt Generator
  const handleGenerateImagePrompt = () => {
    const finalP = `${imageSubject}, style of ${imageStyle}, lighting: ${imageLighting}, shot on 35mm lens f/1.8, high-octane photorealism, award-winning editorial journalism photography, crisp details, volumetric atmosphere --ar ${imageRatio} --v 6.0`;
    setGeneratedPrompt(finalP);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const subTabs = [
    { id: 'tools', label: 'AI Tools', icon: Sparkles },
    { id: 'writer', label: 'AI Writer', icon: PenTool },
    { id: 'summarizer', label: 'AI Summarizer', icon: FileText },
    { id: 'translator', label: 'AI Translator', icon: Languages },
    { id: 'image', label: 'AI Image Tools', icon: ImageIcon },
    { id: 'video', label: 'AI Video Tools', icon: Video },
    { id: 'voice', label: 'AI Voice Tools', icon: Mic },
    { id: 'prompts', label: 'AI Prompts', icon: Terminal },
    { id: 'tutorials', label: 'AI Tutorials', icon: BookOpen },
    { id: 'news', label: 'AI News', icon: Newspaper },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 animate-in fade-in duration-200">
      
      {/* AI Studio Hero Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-[#121824] to-slate-900 border border-blue-900/40 mb-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-600/30 text-cyan-300 border border-blue-500/40 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              WANTIVA AI INTELLIGENCE SUITE
            </span>
            <span className="text-xs text-slate-400">• Editorial & Media Workstation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            {currentLang === 'te' ? 'వాంటివా ఏఐ స్టూడియో' : 'WANTIVA AI Studio'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {currentLang === 'te'
              ? 'జర్నలిస్టులు, కంటెంట్ క్రియేటర్లు మరియు పరిశోధకుల కోసం రూపొందించిన అధునాతన ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ టూల్స్, రైటర్, సమ్మరైజర్ మరియు ట్రాన్స్‌లేటర్ సూట్.'
              : 'Next-generation AI workbench for digital journalism, automated multilingual translation, intelligent summarization, and prompt engineering.'}
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
              onClick={() => setActiveSubTab(tab.id as AISubTab)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-950/50'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. AI TOOLS DIRECTORY SUBTAB */}
      {activeSubTab === 'tools' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>Available AI Tools & Workbenches</span>
            </h2>
            <span className="text-xs text-slate-400">{AI_TOOLS_LIST.length} Tools Ready</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AI_TOOLS_LIST.map((tool) => (
              <div
                key={tool.id}
                className="p-5 rounded-2xl bg-[#121824] border border-slate-800 hover:border-blue-500/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-800/40">
                      {tool.category}
                    </span>
                    {tool.badge && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {currentLang === 'te' ? tool.description.te : tool.description.en}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {tool.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (tool.id === 'ai-writer') setActiveSubTab('writer');
                    else if (tool.id === 'ai-summarizer') setActiveSubTab('summarizer');
                    else if (tool.id === 'ai-translator') setActiveSubTab('translator');
                    else if (tool.id === 'ai-image-gen') setActiveSubTab('image');
                    else if (tool.id === 'ai-video-tools') setActiveSubTab('video');
                    else if (tool.id === 'ai-voice-tools') setActiveSubTab('voice');
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-slate-800 group-hover:bg-blue-600 text-slate-200 group-hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-slate-700 group-hover:border-blue-500"
                >
                  <span>Launch Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. AI WRITER SUBTAB */}
      {activeSubTab === 'writer' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Controls Panel */}
          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <PenTool className="w-4 h-4 text-blue-400" />
                <span>WANTIVA Neural Article Generator</span>
              </h2>
              <span className="text-[10px] text-cyan-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                Interactive
              </span>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Article Topic or Headline Prompt
              </label>
              <input
                type="text"
                value={writerTopic}
                onChange={(e) => setWriterTopic(e.target.value)}
                placeholder="e.g. Landmark Solar Subsidies for Coastal Farmers"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Output Format
                </label>
                <select
                  value={writerType}
                  onChange={(e) => setWriterType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="article">Full News Article</option>
                  <option value="press-release">Official Press Release</option>
                  <option value="headline-suite">4-Angle Headline Suite</option>
                  <option value="bullet-brief">Executive Bullet Brief</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Editorial Tone
                </label>
                <select
                  value={writerTone}
                  onChange={(e) => setWriterTone(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="neutral">Objective / Neutral</option>
                  <option value="urgent">Urgent / Breaking</option>
                  <option value="investigative">Investigative</option>
                  <option value="inspirational">Inspirational / Feature</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerateWriter}
              disabled={isGeneratingWriter || !writerTopic.trim()}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-950/50 disabled:opacity-50 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGeneratingWriter ? 'Generating Article...' : 'Draft with AI'}</span>
            </button>
          </div>

          {/* Generated Result Output */}
          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-slate-300">Generated Draft</span>
                {writerOutput && (
                  <button
                    onClick={() => copyToClipboard(writerOutput, 'writer')}
                    className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300"
                  >
                    {copiedPromptId === 'writer' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPromptId === 'writer' ? 'Copied' : 'Copy Text'}</span>
                  </button>
                )}
              </div>

              {writerOutput ? (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed max-h-96 overflow-y-auto">
                  {writerOutput}
                </div>
              ) : (
                <div className="py-16 text-center text-slate-500 text-xs">
                  Click "Draft with AI" to generate real-time editorial content.
                </div>
              )}
            </div>

            {writerOutput && (
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Words: ~180</span>
                <span className="text-emerald-400">Ready for Newsroom Review</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. AI SUMMARIZER SUBTAB */}
      {activeSubTab === 'summarizer' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Instant News Summarizer</span>
            </h2>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Paste Article or Press Release Text
              </label>
              <textarea
                value={summarizerInput}
                onChange={(e) => setSummarizerInput(e.target.value)}
                rows={6}
                placeholder="Paste news text here..."
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500 leading-relaxed resize-none"
              />
            </div>

            <button
              onClick={handleSummarize}
              disabled={isSummarizing || !summarizerInput.trim()}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
            >
              <Zap className="w-4 h-4" />
              <span>{isSummarizing ? 'Analyzing & Extracting...' : 'Summarize in 3 Bullets'}</span>
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 border-b border-slate-800 pb-2">
              Executive AI Brief
            </h3>

            {summaryOutput ? (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                    TL;DR Summary
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {summaryOutput.tldr}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-300 block mb-2">
                    Key Fact Highlights:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {summaryOutput.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Sentiment Analysis:</span>
                  <span className="text-emerald-400 font-bold">{summaryOutput.sentiment}</span>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center text-slate-500 text-xs">
                Paste text on the left and click Summarize to generate structured takeaways.
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. AI TRANSLATOR SUBTAB */}
      {activeSubTab === 'translator' && (
        <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Languages className="w-4 h-4 text-cyan-400" />
              <span>Indic Neural News Translator</span>
            </h2>
            <span className="text-xs text-slate-400">Context-Aware Regional Engine</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300">Source Text (English)</span>
              </div>
              <textarea
                value={translatorSourceText}
                onChange={(e) => setTranslatorSourceText(e.target.value)}
                rows={5}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300">Target Language:</span>
                <select
                  value={translatorTargetLang}
                  onChange={(e) => setTranslatorTargetLang(e.target.value as any)}
                  className="px-2 py-1 rounded bg-slate-800 text-slate-200 text-xs border border-slate-700 focus:outline-none"
                >
                  <option value="te">తెలుగు (Telugu)</option>
                  <option value="hi">हिन्दी (Hindi)</option>
                  <option value="ta">தமிழ் (Tamil)</option>
                </select>
              </div>
              <div className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs min-h-[120px] leading-relaxed">
                {translatedResult || <span className="text-slate-500">Translation will appear here...</span>}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleTranslate}
              disabled={isTranslating}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs flex items-center gap-2 hover:opacity-95"
            >
              <Languages className="w-4 h-4" />
              <span>{isTranslating ? 'Translating...' : 'Translate Instantly'}</span>
            </button>
          </div>
        </div>
      )}

      {/* 5. AI IMAGE TOOLS SUBTAB */}
      {activeSubTab === 'image' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-pink-400" />
              <span>Midjourney & DALL-E Prompt Engineer</span>
            </h2>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Core Subject & Scene
              </label>
              <textarea
                value={imageSubject}
                onChange={(e) => setImageSubject(e.target.value)}
                rows={3}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Style</label>
                <select
                  value={imageStyle}
                  onChange={(e) => setImageStyle(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs"
                >
                  <option>Photorealistic 8K</option>
                  <option>Cinematic Editorial</option>
                  <option>Documentary Press</option>
                  <option>Minimalist 3D Vector</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Lighting</label>
                <select
                  value={imageLighting}
                  onChange={(e) => setImageLighting(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs"
                >
                  <option>Golden Hour Cinematic</option>
                  <option>Studio Ring Light</option>
                  <option>Dramatic Moody Shadows</option>
                  <option>Natural Daylight</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Aspect Ratio</label>
                <select
                  value={imageRatio}
                  onChange={(e) => setImageRatio(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs"
                >
                  <option value="16:9">16:9 (Landscape)</option>
                  <option value="1:1">1:1 (Square)</option>
                  <option value="9:16">9:16 (Reels/Shorts)</option>
                  <option value="4:3">4:3 (Standard)</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerateImagePrompt}
              className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Compile Master Prompt</span>
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#121824] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                <span className="text-xs font-bold text-slate-300">Compiled Prompt String</span>
                {generatedPrompt && (
                  <button
                    onClick={() => copyToClipboard(generatedPrompt, 'img')}
                    className="text-xs text-pink-400 flex items-center gap-1"
                  >
                    {copiedPromptId === 'img' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPromptId === 'img' ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 font-mono text-xs text-pink-200 leading-relaxed border border-slate-800 min-h-[140px]">
                {generatedPrompt || 'Configure settings on the left and click "Compile Master Prompt".'}
              </div>
            </div>

            <div className="text-[11px] text-slate-400 mt-4">
              Compatible with Midjourney v6, Stable Diffusion XL, DALL-E 3, and Adobe Firefly.
            </div>
          </div>
        </div>
      )}

      {/* 6. AI PROMPTS LIBRARY SUBTAB */}
      {activeSubTab === 'prompts' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Curated Newsroom & Creator Prompts Library</span>
            </h2>
            <span className="text-xs text-slate-400">Click any prompt to copy</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AI_PROMPTS_LIBRARY.map((item) => {
              const isCopied = copiedPromptId === item.id;
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-[#121824] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {item.category}
                      </span>
                      <button
                        onClick={() => copyToClipboard(item.prompt, item.id)}
                        className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-2">
                      {currentLang === 'te' ? item.title.te : item.title.en}
                    </h3>

                    <p className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800 font-mono leading-relaxed">
                      {item.prompt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 7. AI TUTORIALS SUBTAB */}
      {activeSubTab === 'tutorials' && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>AI Newsroom Mastery Tutorials</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AI_TUTORIALS_LIST.map((tut) => (
              <div
                key={tut.id}
                className="p-5 rounded-2xl bg-[#121824] border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span className="text-purple-400 font-semibold">{tut.level}</span>
                    <span>{tut.duration}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {currentLang === 'te' ? tut.title.te : tut.title.en}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {currentLang === 'te' ? tut.overview.te : tut.overview.en}
                  </p>
                </div>

                <button className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-purple-600 text-slate-200 hover:text-white text-xs font-bold transition-colors text-center border border-slate-700">
                  Read Full Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8. AI VIDEO & VOICE TOOLS PREVIEWS */}
      {(activeSubTab === 'video' || activeSubTab === 'voice' || activeSubTab === 'news') && (
        <div className="p-8 rounded-2xl bg-[#121824] border border-slate-800 text-center max-w-xl mx-auto">
          <Sparkles className="w-10 h-10 text-cyan-400 mx-auto mb-3 animate-pulse" />
          <h3 className="text-base font-bold text-white mb-2">
            {activeSubTab === 'video' ? 'AI Video Storyboarder' : activeSubTab === 'voice' ? 'Broadcast Voiceover Studio' : 'Latest AI Sector News'}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            This module provides automated scene breakdown, camera motion sequencing, and multi-speaker voice synthesis for WANTIVA's news pipelines.
          </p>
          <button
            onClick={() => setActiveSubTab('writer')}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors"
          >
            Explore AI Writer Instead
          </button>
        </div>
      )}

    </div>
  );
};
