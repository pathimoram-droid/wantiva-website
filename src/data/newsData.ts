import { NewsArticle } from '../types';

export const SAMPLE_NEWS_ARTICLES: NewsArticle[] = [
  // 1. Breaking News
  {
    id: 'breaking-1',
    category: 'breaking',
    isBreaking: true,
    isTrending: true,
    publishedAt: '10 mins ago',
    author: 'WANTIVA Bureau',
    readTime: '3 min',
    location: 'Amaravati / New Delhi',
    viewsCount: 48200,
    sharesCount: 3120,
    commentsCount: 184,
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Amaravati', 'Infrastructure', 'Development', 'Capital City'],
    title: {
      en: 'Major Infrastructure Boost: Key National Expressway Linking Amaravati and Hyderabad Approved',
      te: 'అమరావతి - హైదరాబాద్ నూతన హైస్పీడ్ ఎక్స్‌ప్రెస్‌వే ప్రాజెక్టుకు కేంద్రం గ్రీన్ సిగ్నల్',
    },
    summary: {
      en: 'The Union Cabinet approves a transformative 6-lane access-controlled greenfield expressway drastically reducing travel time between Telangana and Andhra Pradesh capital regions.',
      te: 'ఆంధ్రప్రదేశ్, తెలంగాణల మధ్య ప్రయాణ సమయాన్ని భారీగా తగ్గించే 6 వరుసల నూతన గ్రీన్‌ఫీల్డ్ ఎక్స్‌ప్రెస్‌వేకి కేంద్ర మంత్రివర్గం కీలక ఆమోదం తెలిపింది.',
    },
    content: {
      en: `In a landmark decision to bolster connectivity and economic integration in South India, the Union Cabinet has officially sanctioned the development of a mega access-controlled greenfield expressway connecting the Amaravati Capital Region with Hyderabad.

The 280-kilometer high-speed corridor will feature intelligent transport systems, dedicated freight integration hubs, and electric vehicle fast-charging plazas every 30 kilometers. According to high-ranking officials from the Ministry of Road Transport and Highways, construction is scheduled to commence within the next fiscal quarter with a target completion timeline of 36 months.

Key economic benefits outlined in the blueprint include:
- Drastic reduction of passenger transit time between the two major urban hubs to under 3.5 hours.
- Direct connectivity for regional agro-processing corridors and pharmaceutical logistics chains.
- Multi-modal interchange junctions connecting major industrial parks across Guntur, Krishna, Nalgonda, and Ranga Reddy districts.

State representatives from both Andhra Pradesh and Telangana welcomed the declaration, hailing it as a pivotal milestone for mutual industrial expansion and regional job generation.`,
      te: 'దక్షిణ భారతదేశంలో రవాణా, పారిశ్రామిక రంగాన్ని పరుగులు పెట్టించేందుకు కేంద్ర ప్రభుత్వం కీలక నిర్ణయం తీసుకుంది. అమరావతి రాజధాని ప్రాంతం నుండి హైదరాబాద్‌ను అనుసంధానించే అత్యాధునిక గ్రీన్‌ఫీల్డ్ ఎక్స్‌ప్రెస్‌వే నిర్మాణానికి అధికారిక అనుమతులు లభించాయి.\n\nఈ 280 కిలోమీటర్ల హైస్పీడ్ కారిడార్‌లో అధునాతన ఇంటెలిజెంట్ ట్రాఫిక్ సిస్టమ్స్, ఈవీ ఛార్జింగ్ కేంద్రాలు ఏర్పాటు చేయనున్నారు. వచ్చే త్రైమాసికంలోనే టెండర్ల ప్రక్రియ ముగించి, పనులు వేగవంతం చేయాలని లక్ష్యంగా పెట్టుకున్నారు.\n\nఈ ప్రాజెక్ట్ ద్వారా రవాణా సమయం కేవలం 3.5 గంటలకు తగ్గడమే కాకుండా, నల్గొండ, కృష్ణా, గుంటూరు జిల్లాల పారిశ్రామిక హబ్‌లకు భారీగా ఊతం లభిస్తుందని అధికారులు తెలిపారు.',
    },
  },
  {
    id: 'breaking-2',
    category: 'breaking',
    isBreaking: true,
    publishedAt: '25 mins ago',
    author: 'Tech & Space Desk',
    readTime: '2 min',
    location: 'Sriharikota',
    viewsCount: 32100,
    sharesCount: 1980,
    commentsCount: 92,
    imageUrl: 'https://images.unsplash.com/photo-1517976487507-5b3b4b45a9d7?auto=format&fit=crop&w=1200&q=80',
    tags: ['ISRO', 'Space', 'Gaganyaan', 'Tech'],
    title: {
      en: 'ISRO Successfully Completes Final Cryogenic Propulsion Engine Tests for Gaganyaan Crew Mission',
      te: 'ఇస్రో గగన్‌యాన్ మానవ సహిత అంతరిక్ష యాత్రకు క్రయోజెనిక్ ఇంజిన్ పరీక్షలు విజయవంతం',
    },
    summary: {
      en: 'The Indian Space Research Organisation achieves another critical qualification milestone for the human-rated launch vehicle at Sriharikota.',
      te: 'శ్రీహరికోట సతీష్ ధావన్ స్పేస్ సెంటర్‌లో గగన్‌యాన్ రాకెట్ ప్రొపల్షన్ ఇంజిన్ చివరి దశ పరీక్షను ఇస్రో శాస్త్రవేత్తలు విజయవంతంగా పూర్తి చేశారు.',
    },
    content: {
      en: `India's premier space agency ISRO has successfully validated the endurance parameters of the human-rated CE-20 cryogenic upper-stage engine. The engine underwent an intense hot-fire duration cycle under simulated high-altitude flight dynamics, meeting all thrust precision benchmarks.

The mission is poised to carry Indian astronauts (Vyomnauts) into low earth orbit, marking India's entry into the elite circle of nations possessing independent human spaceflight capabilities.`,
      te: 'భారత అంతరిక్ష పరిశోధనా సంస్థ (ఇస్రో) గగన్‌యాన్ ప్రయోగంలో మరో చరిత్రాత్మక మైలురాయిని చేరుకుంది. మానవ సహిత యాత్ర కోసం ప్రత్యేకంగా రూపొందించిన CE-20 క్రయోజెనిక్ ఇంజిన్ హాట్ టెస్ట్ అన్ని పారామీటర్లలో విజయవంతమైంది.\n\nఈ ప్రయోగంతో వ్యోమగాములను అంతరిక్షంలోకి తీసుకెళ్లే కీలక దశ సురక్షితంగా పూర్తయిందని ఇస్రో ఛైర్మన్ వెల్లడించారు.',
    },
  },

  // 2. Latest News
  {
    id: 'latest-1',
    category: 'latest',
    publishedAt: '40 mins ago',
    author: 'Economics Desk',
    readTime: '4 min',
    location: 'Mumbai',
    viewsCount: 15400,
    sharesCount: 640,
    commentsCount: 45,
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Stock Market', 'Sensex', 'Economy', 'RBI'],
    title: {
      en: 'Sensex Hits Fresh All-Time Record High Surging Past Key Milestones Driven by Tech & Banking Rallies',
      te: 'రికార్డు స్థాయిలో దూసుకుపోతున్న స్టాక్ మార్కెట్లు; సెన్సెక్స్, నిఫ్టీ సరికొత్త గరిష్టాలు',
    },
    summary: {
      en: 'Robust foreign institutional inflows and strong domestic corporate quarterly earnings propel Indian equity indices to unprecedented trading zeniths.',
      te: 'విదేశీ సంస్థాగత పెట్టుబడులు, బ్యాంకింగ్ రంగ షేర్ల భారీ లాభాలతో దేశీయ స్టాక్ మార్కెట్లు రికార్డు స్థాయి లాభాలను నమోదు చేశాయి.',
    },
    content: {
      en: `The Indian benchmark equity indices surged to unprecedented highs during today's trading session, buoyed by aggressive buying in banking, information technology, and semiconductor-related infrastructure stocks.

Analysts attribute this momentum to favorable global macroeconomic indicators, moderate inflation trajectory, and positive investor confidence regarding long-term manufacturing growth corridors in India.`,
      te: 'దేశీయ స్టాక్ మార్కెట్లు వరుస లాభాలతో దూసుకెళ్తున్నాయి. ఇన్ఫర్మేషన్ టెక్నాలజీ, బ్యాంకింగ్ షేర్లలో భారీ కొనుగోళ్లు నమోదయ్యాయి. గ్లోబల్ ఇన్వెస్టర్ల విశ్వాసం మరియు ద్రవ్యోల్బణం అదుపులో ఉండటం మార్కెట్ ఉత్సాహాన్ని మరింత పెంచింది.',
    },
  },

  // 3. Trending News
  {
    id: 'trending-1',
    category: 'trending',
    isTrending: true,
    publishedAt: '1 hour ago',
    author: 'Special Features',
    readTime: '3 min',
    location: 'Hyderabad',
    viewsCount: 68900,
    sharesCount: 4500,
    commentsCount: 310,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    tags: ['Urban Planning', 'HYDRAA', 'Lakes', 'Hyderabad'],
    title: {
      en: 'HYDRAA Revitalization Project: 40 Historic Water Bodies in Hyderabad Set for Modern Lakefront Transformation',
      te: 'హైదరాబాద్‌లో 40 చెరువుల పునరుద్ధరణ: హైడ్రా ఆధ్వర్యంలో పర్యావరణ లేక్‌ఫ్రంట్ పార్కులు',
    },
    summary: {
      en: 'Hyderabad Disaster Response and Assets Monitoring and Protection Agency (HYDRAA) announces extensive restoration and eco-tourism initiatives for city catchment areas.',
      te: 'హైడ్రా చేపట్టిన సమగ్ర కార్యాచరణతో నగరంలోని చారిత్రక చెరువులు సుందరమైన లేక్‌ఫ్రంట్ పర్యాటక కేంద్రాలుగా రూపాంతరం చెందనున్నాయి.',
    },
    content: {
      en: `The Hyderabad Disaster Response and Assets Monitoring and Protection Agency (HYDRAA) has initiated the second phase of its landmark urban renewal project aimed at transforming 40 restored urban water bodies into scenic, citizen-friendly green hubs.

The comprehensive plan encompasses walking tracks, native flora afforestation, water purification bio-filters, and round-the-clock environmental monitoring sensors to preserve water quality.`,
      te: 'హైదరాబాద్ నగర పరిధిలోని చెరువులను కాపాడటంతో పాటు పచ్చదనం పెంపొందించేందుకు హైడ్రా నూతన కార్యాచరణను ప్రారంభించింది. వాకింగ్ ట్రాక్స్, లైటింగ్, నీటి శుద్ధి ప్లాంట్లతో పర్యావరణ హితంగా చెరువులను తీర్చిదిద్దనున్నారు.',
    },
  },

  // 4. Politics
  {
    id: 'politics-1',
    category: 'politics',
    publishedAt: '2 hours ago',
    author: 'Political Bureau',
    readTime: '4 min',
    location: 'New Delhi',
    viewsCount: 29400,
    sharesCount: 1540,
    commentsCount: 220,
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    tags: ['National', 'Parliament', 'Policy', 'Elections'],
    title: {
      en: 'Parliamentary Committee Submits Key Recommendations on Digital Governance and Electoral Transparency',
      te: 'డిజిటల్ గవర్నెన్స్, ఎన్నికల సంస్కరణలపై పార్లమెంటరీ కమిటీ సమగ్ర నివేదిక సమర్పణ',
    },
    summary: {
      en: 'A high-level bi-partisan panel outlines strategic framework to modernize citizen services and secure democratic processes through verified digital systems.',
      te: 'పౌర సేవలను మరింత పారదర్శకంగా మార్చేందుకు, ఎన్నికల ప్రక్రియలో అత్యాధునిక డిజిటల్ పద్ధతులపై కమిటీ పలు సిఫార్సులు చేసింది.',
    },
    content: {
      en: `The Parliamentary Standing Committee on Law and Justice today tabled its comprehensive recommendations on national digital governance reforms. The report advocates for unified citizen service verification, streamlined public redressal workflows, and robust data protection standards across state and central departments.`,
      te: 'పార్లమెంటరీ స్థాయి సంఘం పౌర సేవల సరళీకరణ మరియు డిజిటల్ భద్రతపై తన కీలక ప్రతిపాదనలను నివేదిక రూపంలో విడుదల చేసింది.',
    },
  },
  {
    id: 'politics-ap-1',
    category: 'politics',
    publishedAt: '3 hours ago',
    author: 'Amaravati Bureau',
    readTime: '3 min',
    location: 'Amaravati',
    viewsCount: 38200,
    sharesCount: 2100,
    commentsCount: 175,
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Andhra Pradesh', 'AP Assembly', 'Amaravati', 'Welfare'],
    title: {
      en: 'AP Cabinet Approves Industrial Acceleration Policy 2026: Single Window Approvals in 21 Days',
      te: 'ఏపీ కేబినెట్ కీలక నిర్ణయాలు: 21 రోజుల్లోనే పరిశ్రమలకు అనుమతులు, నూతన పారిశ్రామిక విధానం ఆమోదం',
    },
    summary: {
      en: 'Andhra Pradesh Cabinet sanctions comprehensive industrial blueprint offering plug-and-play infrastructure and streamlined clearances for global manufacturing investments.',
      te: 'రాష్ట్రంలో భారీ పెట్టుబడులు, ఉపాధి కల్పనే ధ్యేయంగా నూతన పాలసీకి ఆమోదం ముద్ర వేసిన ఏపీ మంత్రివర్గం.',
    },
    content: {
      en: `The Andhra Pradesh State Cabinet met in Amaravati and formally cleared the New Industrial Investment Acceleration Policy. The policy guarantees environmental, power, and operational clearances within a maximum turnaround time of 21 days through an AI-enabled single-window portal.`,
      te: 'అమరావతి సచివాలయంలో జరిగిన మంత్రివర్గ సమావేశంలో పారిశ్రామిక వేగాన్ని పెంచేందుకు చరిత్రాత్మక నిర్ణయాలు తీసుకున్నారు. పెట్టుబడిదారులకు వేగవంతమైన అనుమతులతో పాటు రాయితీలను ప్రకటించారు.',
    },
  },
  {
    id: 'politics-ts-1',
    category: 'politics',
    publishedAt: '4 hours ago',
    author: 'Hyderabad Bureau',
    readTime: '3 min',
    location: 'Hyderabad',
    viewsCount: 34500,
    sharesCount: 1890,
    commentsCount: 160,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    tags: ['Telangana', 'Hyderabad', 'Musi Project', 'Urban Dev'],
    title: {
      en: 'Telangana Government Allocates ₹12,000 Crore for Musi Riverfront Eco-Corridor & Metro Linkage',
      te: 'తెలంగాణ బడ్జెట్‌లో మూసీ పునరుజ్జీవ ప్రాజెక్టుకు ₹12,000 కోట్లు కేటాయింపు; పర్యాటక కారిడార్‌గా నిర్మాణం',
    },
    summary: {
      en: 'State administration fast-tracks rejuvenation of 55-km Musi river stretch with integrated mass transit hubs, pedestrian walkways, and clean-water reservoirs.',
      te: 'హైదరాబాద్ నగర రూపురేఖలను మార్చేలా మూసీ నది సుందరీకరణ, వాకింగ్ ట్రాక్స్ మరియు మెట్రో కనెక్టివిటీ పనులకు ప్రభుత్వం నిధులు విడుదల చేసింది.',
    },
    content: {
      en: `The Telangana State Administration has officially mobilized initial capital outlays for the comprehensive Musi Riverfront Rejuvenation and Urban Transit Corridor. The ambitious masterplan will construct water treatment check-dams, cultural entertainment plazas, and ecological green zones.`,
      te: 'మూసీ నది పునరుద్ధరణ ప్రాజెక్ట్ కింద అంతర్జాతీయ ప్రమాణాలతో రివర్‌ఫ్రంట్ పార్కులు, బోటింగ్, సాంస్కృతిక వేదికల నిర్మాణానికి ప్రణాళిక సిద్ధమైంది.',
    },
  },

  // 5. Andhra Pradesh
  {
    id: 'ap-1',
    category: 'andhra-pradesh',
    publishedAt: '2 hours ago',
    author: 'AP Desk',
    readTime: '3 min',
    location: 'Visakhapatnam',
    viewsCount: 39500,
    sharesCount: 2180,
    commentsCount: 145,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: ['Visakhapatnam', 'IT Hub', 'Data Centers', 'AP News'],
    title: {
      en: 'Visakhapatnam Emerges as Premier AI & Data Center Hub with Multi-Crore Global Tech Commitments',
      te: 'విశాఖపట్నం వేదికగా భారీ ఏఐ, డేటా సెంటర్ పెట్టుబడులు; ప్రపంచ స్థాయి టెక్ సంస్థల విస్తరణ',
    },
    summary: {
      en: 'Global technology conglomerates finalize plans for hyperscale green energy data hubs along the picturesque Madhurawada coastal corridor.',
      te: 'మధురవాడ ఐటీ కారిడార్‌లో గ్రీన్ ఎనర్జీ డేటా సెంటర్లు మరియు అత్యాధునిక ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ సెంటర్లను ప్రారంభించేందుకు బహుళజాతి సంస్థలు ఒప్పందాలు చేసుకున్నాయి.',
    },
    content: {
      en: `The coastal city of Visakhapatnam is rapidly ascending as a leading frontier for digital innovation in South Asia. State authorities confirmed several memorandums of understanding with global tech giants for developing dedicated AI research clusters and green data storage facilities.

The upcoming tech corridor is anticipated to generate upwards of 25,000 high-skill engineering and data science employment opportunities over the next three years.`,
      te: 'విశాఖ ఐటీ రంగంలో సరికొత్త విప్లవం ఆరంభమైంది. అధునాతన ఏఐ రీసెర్చ్ సెంటర్లు, గ్రీన్ డేటా సెంటర్ల స్థాపనకు ప్రముఖ అంతర్జాతీయ సంస్థలు విశాఖను ఎంచుకున్నాయి. రాబోయే మూడేళ్లలో సుమారు 25 వేల నూతన ఉద్యోగావకాశాలు లభించనున్నాయి.',
    },
  },

  // 6. Telangana
  {
    id: 'ts-1',
    category: 'telangana',
    publishedAt: '3 hours ago',
    author: 'Telangana Bureau',
    readTime: '3 min',
    location: 'Hyderabad',
    viewsCount: 36200,
    sharesCount: 1940,
    commentsCount: 167,
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    tags: ['Hyderabad Metro', 'Public Transit', 'Infrastructure'],
    title: {
      en: 'Hyderabad Metro Phase-2 Blueprint Finalized: 76-KM Network to Connect Airport, Pharma City, and Outer Suburbs',
      te: 'హైదరాబాద్ మెట్రో ఫేజ్-2 డీపీఆర్ ఖరారు: ఎయిర్‌పోర్ట్, ఫార్మా సిటీలకు 76 కి.మీ నూతన లైన్లు',
    },
    summary: {
      en: 'Telangana government fast-tracks expanded mass transit corridors to ease urban congestion across the Greater Hyderabad municipal limits.',
      te: 'గ్రేటర్ హైదరాబాద్ పరిధిలో ట్రాఫిక్ సమస్యను నివారించేందుకు 76 కిలోమీటర్ల మేర మెట్రో విస్తరణ పనులకు సమగ్ర ప్రణాళిక సిద్ధమైంది.',
    },
    content: {
      en: `The Telangana Municipal Administration has finalized the detailed project report (DPR) for Phase-2 of the Hyderabad Metro Rail. Spanning a total of 76.4 kilometers across five high-density traffic corridors, the expansion will link Shamshabad International Airport, Old City corridors, and the upcoming Net Zero Future City.`,
      te: 'హైదరాబాద్ మెట్రో రెండో దశ ప్రాజెక్ట్ కింద శంషాబాద్ విమానాశ్రయం, పాతబస్తీ సహా పలు ప్రధాన మార్గాలను అనుసంధానించనున్నారు. ప్రపంచ స్థాయి ప్రమాణాలతో ఈ కొత్త లైన్ల నిర్మాణం జరగనుంది.',
    },
  },

  // 7. India
  {
    id: 'india-1',
    category: 'india',
    publishedAt: '3 hours ago',
    author: 'National Desk',
    readTime: '4 min',
    location: 'New Delhi',
    viewsCount: 22100,
    sharesCount: 1120,
    commentsCount: 88,
    imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80',
    tags: ['UPI', 'Digital India', 'Fintech', 'Economy'],
    title: {
      en: 'India’s Unified Payments Interface (UPI) Expands to 15 More Global Destinations',
      te: 'ప్రపంచవ్యాప్తంగా మరో 15 దేశాల్లో అందుబాటులోకి యూపీఐ (UPI) డిజిటల్ చెల్లింపులు',
    },
    summary: {
      en: 'NPCI International achieves strategic agreements allowing seamless cross-border QR code transactions in Europe, Middle East, and Southeast Asia.',
      te: 'భారతీయ పర్యాటకులు, వ్యాపారవేత్తలు విదేశాల్లో కూడా నేరుగా రూపాయిల్లో యూపీఐ ద్వారా చెల్లింపులు చేసుకునే సదుపాయం విస్తరిస్తోంది.',
    },
    content: {
      en: `The National Payments Corporation of India (NPCI) has successfully expanded the footprint of UPI to fifteen additional international countries. Travelers and businesses will now be able to scan local merchant QR codes using their favorite Indian banking apps for real-time currency conversion and instant settlements.`,
      te: 'డిజిటల్ ఇండియా సాధించిన అద్భుత విజయాల్లో ఒకటైన యూపీఐ అంతర్జాతీయంగా తన ప్రభావాన్ని మరింత చాటుకుంటోంది. యూరప్, ఆగ్నేయాసియాలోని ప్రముఖ పర్యాటక దేశాల్లో నేరుగా యూపీఐ క్యూఆర్ కోడ్‌లు పనిచేయనున్నాయి.',
    },
  },

  // 8. World
  {
    id: 'world-1',
    category: 'world',
    publishedAt: '4 hours ago',
    author: 'International Bureau',
    readTime: '4 min',
    location: 'Geneva / Tokyo',
    viewsCount: 18700,
    sharesCount: 790,
    commentsCount: 62,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Clean Energy', 'Climate Summit', 'Global Affairs'],
    title: {
      en: 'Global Renewable Energy Coalition Sets Historic 2030 Solar and Green Hydrogen Targets',
      te: 'ప్రపంచ ఇంధన సదస్సు: 2030 నాటికి రెట్టింపు సౌర, గ్రీన్ హైడ్రోజన్ విద్యుత్ ఉత్పత్తి లక్ష్యం',
    },
    summary: {
      en: 'Delegates from 65 nations sign binding clean energy transition compact to accelerate decarbonization of heavy transport and maritime logistics.',
      te: 'కాలుష్యాన్ని తగ్గించి పునరుత్పాదక ఇంధన వాడకాన్ని పెంచేందుకు ప్రపంచ దేశాల నాయకులు కీలక ఒప్పందంపై సంతకాలు చేశారు.',
    },
    content: {
      en: `At the global clean energy forum in Geneva, participating nations reached a unanimous consensus on setting ambitious milestones for next-generation solar grid architecture, grid-scale battery storage, and offshore hydrogen electrolysis plants.`,
      te: 'వాతావరణ మార్పులను ఎదుర్కొనేందుకు ప్రపంచవ్యాప్తంగా సౌర మరియు పవన విద్యుత్ ప్రాజెక్టులను వేగవంతం చేయాలని అంతర్జాతీయ పర్యావరణ సదస్సులో తీర్మానించారు.',
    },
  },

  // 9. Cinema & Entertainment
  {
    id: 'cinema-1',
    category: 'cinema',
    publishedAt: '4 hours ago',
    author: 'Tollywood Desk',
    readTime: '3 min',
    location: 'Hyderabad / Mumbai',
    viewsCount: 84500,
    sharesCount: 7800,
    commentsCount: 430,
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    tags: ['Tollywood', 'SS Rajamouli', 'Pan India', 'Releases'],
    title: {
      en: 'SSMB29 Mega Update: SS Rajamouli & Mahesh Babu Globe-Trotting Action Adventure Begins Pre-Production in Amazon Rainforest',
      te: 'ఎస్.ఎస్.రాజమౌళి - మహేష్ బాబు ప్రతిష్టాత్మక పాన్-వరల్డ్ మూవీ ప్రీ-ప్రొడక్షన్ పనులు ప్రారంభం',
    },
    summary: {
      en: 'The highly anticipated cinematic spectacle promises revolutionary VFX standards and authentic international jungle expedition sequences.',
      te: 'భారతీయ సినీ చరిత్రలోనే అత్యంత భారీ బడ్జెట్‌తో తెరకెక్కనున్న అడ్వెంచర్ థ్రిల్లర్ కోసం అంతర్జాతీయ సాంకేతిక నిపుణులు పనిచేస్తున్నారు.',
    },
    content: {
      en: `Director SS Rajamouli and superstar Mahesh Babu have formally kickstarted location reconnaissance and technical visual effects pre-visualization for their upcoming international adventure saga. The project, crafted on a scale rivaling global Hollywood franchises, will feature world-class stunt choreographers and specialized IMAX cameras.`,
      te: 'ప్రముఖ దర్శకుడు ఎస్.ఎస్.రాజమౌళి, సూపర్ స్టార్ మహేష్ బాబు కాంబినేషన్‌లో వస్తున్న గ్లోబ్-ట్రాటింగ్ అడ్వెంచర్ సినిమాపై అభిమానుల్లో భారీ అంచనాలు నెలకొన్నాయి. సరికొత్త సాంకేతికతతో హాలీవుడ్ స్థాయిలో ఈ చిత్రాన్ని నిర్మించనున్నారు.',
    },
  },
  {
    id: 'cinema-ott-1',
    category: 'cinema',
    publishedAt: '5 hours ago',
    author: 'OTT Guide',
    readTime: '3 min',
    location: 'Hyderabad',
    viewsCount: 52100,
    sharesCount: 3900,
    commentsCount: 210,
    imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80',
    tags: ['OTT', 'Telugu Cinema', 'Streaming', 'Weekend Watch'],
    title: {
      en: 'Top 7 Telugu Movies & Web Series Streaming on OTT Platforms This Weekend',
      te: 'ఈ వీకెండ్ ఓటీటీ (OTT) లోకి వచ్చేసిన సూపర్ హిట్ తెలుగు సినిమాలు, వెబ్ సిరీస్‌ల పూర్తి జాబితా',
    },
    summary: {
      en: 'From high-octane theatrical thrillers to compelling family courtroom dramas, explore the top trending regional releases available on streaming platforms.',
      te: 'థియేటర్లలో అలరించిన బ్లాక్‌బస్టర్ చిత్రాలతో పాటు సరికొత్త సస్పెన్స్ థ్రిల్లర్లు ప్రముఖ ఓటీటీలలో స్ట్రీమింగ్‌కు సిద్ధమయ్యాయి.',
    },
    content: {
      en: `Digital entertainment platforms have rolled out an exciting weekend line-up for Telugu cinema aficionados. Leading the catalogue are critically acclaimed mystery thrillers, high-budget action extravaganzas, and wholesome comedy dramas with 4K Dolby Atmos audio.`,
      te: 'ఈ వారం ఓటీటీ ప్రేక్షకులకు పండగే! పలు విజయవంతమైన చిత్రాలు ఆహా, నెట్‌ఫ్లిక్స్, అమెజాన్ ప్రైమ్ వేదికలపై నేడు విడుదలయ్యాయి.',
    },
  },

  // 10. Sports
  {
    id: 'sports-1',
    category: 'sports',
    publishedAt: '5 hours ago',
    author: 'Sports Desk',
    readTime: '3 min',
    location: 'Bengaluru',
    viewsCount: 42300,
    sharesCount: 2340,
    commentsCount: 198,
    imageUrl: 'https://images.unsplash.com/photo-1531415074868-036b1c575351?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cricket', 'IPL', 'Team India', 'Sports'],
    title: {
      en: 'India Clinches Thrilling T20 Series Finale with Super Over Masterclass in Bengaluru',
      te: 'బెంగళూరులో నరాలు తెగే ఉత్కంఠ పోరు: సూపర్ ఓవర్‌లో అద్భుత విజయం సాధించిన టీమిండియా',
    },
    summary: {
      en: 'Flawless bowling in the final over and clinical power-hitting seals a memorable series victory in front of a packed home crowd.',
      te: 'చివరి ఓవర్ వరకు సాగిన హోరాహోరీ పోరులో యువ ఆటగాళ్ల అద్భుత ప్రదర్శనతో భారత జట్టు సిరీస్ కైవసం చేసుకుంది.',
    },
    content: {
      en: `In one of the most exhilarating short-format matches in recent history, Team India edged out a thrilling victory after a high-stakes super over showdown. Outstanding death bowling alongside explosive boundary hitting in the clutch moments sealed the celebratory outcome.`,
      te: 'చిన్నస్వామి స్టేడియంలో జరిగిన ఆఖరి టీ20 మ్యాచ్‌లో భారత జట్టు అద్భుత ప్రతిభ కనబరిచింది. బౌలర్ల కట్టుదిట్టమైన బౌలింగ్, బ్యాటర్ల మెరుపు ఇన్నింగ్స్‌తో సిరీస్‌ను ఘనంగా ముగించింది.',
    },
  },
  {
    id: 'sports-badminton-1',
    category: 'sports',
    publishedAt: '6 hours ago',
    author: 'Badminton Desk',
    readTime: '2 min',
    location: 'Paris / Hyderabad',
    viewsCount: 26800,
    sharesCount: 1450,
    commentsCount: 94,
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
    tags: ['Badminton', 'PV Sindhu', 'Championships', 'Sports'],
    title: {
      en: 'PV Sindhu Powers into French Open Badminton Finals with Dominant Straight-Sets Display',
      te: 'ఫ్రెంచ్ ఓపెన్ బ్యాడ్మింటన్ ఫైనల్లోకి దూసుకెళ్లిన తెలుగు తేజం పీవీ సింధు',
    },
    summary: {
      en: 'Two-time Olympic medalist showcases vintage smashes and sharp defensive reflexes to defeat top-seeded opponent in 42 minutes.',
      te: 'సెమీఫైనల్లో ప్రత్యర్థిపై సంపూర్ణ ఆధిపత్యం ప్రదర్శించి వరుస సెట్లలో ఘన విజయం సాధించిన పీవీ సింధు.',
    },
    content: {
      en: `Indian badminton star PV Sindhu delivered a flawless performance in the semi-finals of the French Open Super 750 tournament, securing a commanding victory in straight games. Her clinical cross-court smashes and resilient defense proved insurmountable for her rival.`,
      te: 'అంతర్జాతీయ బ్యాడ్మింటన్ టోర్నీలో పీవీ సింధు అద్భుత ఫామ్‌ను కొనసాగిస్తూ ఫైనల్ పోరుకు అర్హత సాధించింది.',
    },
  },

  // 11. Jobs & Careers
  {
    id: 'jobs-1',
    category: 'jobs',
    publishedAt: '5 hours ago',
    author: 'Careers Desk',
    readTime: '3 min',
    location: 'Hyderabad / Vijayawada',
    viewsCount: 51200,
    sharesCount: 6200,
    commentsCount: 310,
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    tags: ['Govt Jobs', 'Recruitment', 'AP DSC', 'Telangana Jobs'],
    title: {
      en: 'Mega Recruitment Drive 2026: 45,000+ Government and IT Positions Announced Across AP & Telangana',
      te: 'తెలుగు రాష్ట్రాల్లో భారీ ఉద్యోగ ప్రకటనలు: డీఎస్సీ, బ్యాంకింగ్, ఐటీ రంగాల్లో 45,000+ ఖాళీల భర్తీ',
    },
    summary: {
      en: 'Comprehensive job notification release date, online application schedules, and key eligibility criteria detailed for young aspirants.',
      te: 'ఉద్యోగార్థులకు శుభవార్త! ఉపాధ్యాయ, పరిపాలనా మరియు సాఫ్ట్‌వేర్ రంగాల్లో అర్హతలు, దరఖాస్తు ప్రక్రియ వివరాలు విడుదలయ్యాయి.',
    },
    content: {
      en: `Job seekers across the Telugu states are presented with substantial career opportunities as both state governments and private sector consortia rolled out detailed recruitment notifications. From teacher qualification exams to high-demand cloud computing roles, candidates are encouraged to check official portals for syllabus frameworks.`,
      te: 'నిరుద్యోగ యువతకు ప్రోత్సాహకరంగా ప్రభుత్వ మరియు ప్రైవేట్ రంగాలలో భారీ ఉద్యోగ నోటిఫికేషన్లు వెలువడ్డాయి. అభ్యర్థులు అధికారిక వెబ్‌సైట్లలో సిలబస్, పరీక్షల తేదీలను పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'jobs-private-1',
    category: 'jobs',
    publishedAt: '6 hours ago',
    author: 'IT Careers Desk',
    readTime: '3 min',
    location: 'Hyderabad HITEC City',
    viewsCount: 39400,
    sharesCount: 4500,
    commentsCount: 220,
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    tags: ['Private Jobs', 'IT Recruitment', 'Software Careers', 'AI Engineers'],
    title: {
      en: 'Global Tech Centers in Hyderabad to Hire 15,000 AI, Cloud & Full-Stack Developers This Quarter',
      te: 'హైదరాబాద్ ఐటీ కారిడార్‌లో 15,000 మంది ఏఐ, క్లౌడ్ సాఫ్ట్‌వేర్ ఇంజనీర్ల నియామకం',
    },
    summary: {
      en: 'Leading multinational tech campuses in HITEC City and Financial District announce open walk-in recruitment drives for freshers and experienced tech talent.',
      te: 'హైదరాబాద్ ఫైనాన్షియల్ డిస్ట్రిక్ట్‌లోని ప్రముఖ బహుళజాతి కంపెనీల్లో సాఫ్ట్‌వేర్ ఇంజనీర్లు, డేటా అనలిస్ట్‌ల కోసం భారీ నియామక ప్రక్రియ ప్రారంభం.',
    },
    content: {
      en: `Global capability centers (GCCs) situated in Hyderabad's Financial District have announced extensive hiring targets for software engineers, AI researchers, and cybersecurity analysts. Attractive compensation bands and hybrid flexibility are being offered.`,
      te: 'ఐటీ రంగంలో నూతన నియామకాల వేగం పుంజుకుంది. ఫ్రెషర్స్ మరియు అనుభవజ్ఞులైన ఇంజనీర్ల కోసం ప్రత్యేక క్యాంపస్ డ్రైవ్‌లు నిర్వహిస్తున్నారు.',
    },
  },

  // 12. Education
  {
    id: 'edu-1',
    category: 'education',
    publishedAt: '6 hours ago',
    author: 'Education Desk',
    readTime: '3 min',
    location: 'New Delhi / Amaravati',
    viewsCount: 23100,
    sharesCount: 1400,
    commentsCount: 95,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    tags: ['Exams', 'Curriculum', 'Universities', 'Education'],
    title: {
      en: 'AI and Robotics Practical Modules Integrated into Secondary School Curriculum Nationwide',
      te: 'పాఠశాల విద్యలో ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ మరియు రోబోటిక్స్ ప్రాక్టికల్ ల్యాబ్‌ల ఏర్పాటు',
    },
    summary: {
      en: 'National Education Council unveils hands-on experiential coding and machine learning fundamentals for grade 6 to 12 students.',
      te: 'విద్యార్థుల్లో సృజనాత్మకతను, సాంకేతిక పరిజ్ఞానాన్ని పెంపొందించేందుకు నూతన పాఠ్యాంశాలు అమల్లోకి వచ్చాయి.',
    },
    content: {
      en: `In a progressive step to equip future generations with tomorrow's vocational capabilities, educational boards have officially introduced structured AI literacy, computational thinking, and robotics workshops directly inside high school science laboratories.`,
      te: 'పాఠశాల స్థాయి నుంచే విద్యార్థులకు టెక్నాలజీ, కోడింగ్, ఏఐ ప్రాథమిక అంశాలను నేర్పించేందుకు అత్యాధునిక రోబోటిక్స్ ల్యాబ్‌లను ఏర్పాటు చేస్తున్నారు.',
    },
  },
  {
    id: 'edu-scholarship-1',
    category: 'education',
    publishedAt: '7 hours ago',
    author: 'Academic Desk',
    readTime: '3 min',
    location: 'Hyderabad / Vijayawada',
    viewsCount: 31800,
    sharesCount: 2900,
    commentsCount: 140,
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    tags: ['Scholarships', 'Results', 'Overseas Education', 'Notifications'],
    title: {
      en: 'Overseas Higher Education Scholarships 2026: Applications Open for Top 200 Global Universities',
      te: 'విదేశీ విద్యా స్కాలర్‌షిప్‌ల దరఖాస్తులు ప్రారంభం: టాప్ 200 ప్రపంచ విశ్వవిద్యాలయాల్లో చదువుకునే అవకాశం',
    },
    summary: {
      en: 'Eligible undergraduate and postgraduate students can avail up to ₹25 lakh financial aid for tuition, accommodation, and research grants abroad.',
      te: 'అర్హులైన విద్యార్థులకు ఫీజు రీయింబర్స్‌మెంట్ మరియు విదేశీ విద్య కోసం పూర్తి ఆర్థిక సహాయం అందించే పథకానికి నోటిఫికేషన్ విడుదలైంది.',
    },
    content: {
      en: `State higher education authorities have announced the commencement of online applications for the prestigious Overseas Higher Education Fellowship. The scholarship assists meritorious students pursuing STEM and medical masters degrees across internationally ranked institutions.`,
      te: 'విదేశాలలో ఉన్నత విద్యను అభ్యసించాలనుకునే ప్రతిభావంతులైన విద్యార్థుల కోసం దరఖాస్తు పోర్టల్ తెరుచుకుంది. నిబంధనలు మరియు అర్హతలను అధికారిక సైట్‌లో తెలుసుకోవచ్చు.',
    },
  },

  // 13. Business
  {
    id: 'biz-1',
    category: 'business',
    publishedAt: '6 hours ago',
    author: 'Business Bureau',
    readTime: '3 min',
    location: 'Bengaluru / Mumbai',
    viewsCount: 19800,
    sharesCount: 880,
    commentsCount: 54,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Startups', 'Fintech', 'Venture Capital', 'Business'],
    title: {
      en: 'Indian Startup Ecosystem Records Strongest Q1 Venture Inflows in Four Years',
      te: 'భారత స్టార్టప్ రంగంలోకి భారీగా వెంచర్ క్యాపిటల్ పెట్టుబడులు; క్యూ1లో సరికొత్త రికార్డు',
    },
    summary: {
      en: 'Deeptech, clean mobility, and quick-commerce logistics lead funding rounds as institutional investors double down on sustainable profitability.',
      te: 'డీప్‌టెక్, ఎలక్ట్రిక్ వాహనాలు, మరియు లాజిస్టిక్స్ స్టార్టప్‌లలోకి ప్రపంచ దిగ్గజ ఫండ్స్ నుండి పెట్టుబడుల వెల్లువ.',
    },
    content: {
      en: `Venture funding into Indian startups experienced a vibrant resurgence this quarter, with early-stage and growth-stage tech enterprises securing over $4.2 billion in aggregate capital deployments. Investors highlighted deeptech IP and robust unit economics as primary drivers.`,
      te: 'భారతీయ నూతన ఆవిష్కరణల సంస్థలకు అంతర్జాతీయ పెట్టుబడిదారుల నుంచి బలమైన మద్దతు లభిస్తోంది. ముఖ్యంగా నవతరం ఏఐ మరియు గ్రీన్ ఎనర్జీ సంస్థలు నిధులను సమకూర్చుకోవడంలో ముందంజలో ఉన్నాయి.',
    },
  },

  // 14. Technology
  {
    id: 'tech-1',
    category: 'technology',
    publishedAt: '7 hours ago',
    author: 'Tech Innovator Desk',
    readTime: '4 min',
    location: 'San Francisco / Bengaluru',
    viewsCount: 46200,
    sharesCount: 3100,
    commentsCount: 215,
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Generative AI', 'Tech', 'Quantum Computing', 'Future'],
    title: {
      en: 'Breakthrough Neural Architecture Enables Real-Time Multilingual Reasoning on Low-Power Mobile Devices',
      te: 'సాధారణ స్మార్ట్‌ఫోన్లలోనూ వేగంగా పనిచేసే సరికొత్త ఆన్‌డివైస్ ఏఐ టెక్నాలజీ ఆవిష్కరణ',
    },
    summary: {
      en: 'Next-gen compact language models deliver desktop-grade reasoning and instant translation directly on edge hardware without cloud latency.',
      te: 'క్లౌడ్ లేదా ఇంటర్నెట్ అవసరం లేకుండానే ఫోన్లలోనే వేగంగా అనువదించే మరియు సమాధానాలిచ్చే లైట్-వెయిట్ ఏఐ మోడల్స్ అందుబాటులోకి వచ్చాయి.',
    },
    content: {
      en: `A new milestone in edge artificial intelligence has unlocked ultra-low-latency, multi-turn reasoning on standard smartphone chips. By utilizing advanced 4-bit weight distillation and neural hardware acceleration, these models operate completely offline with exceptional precision.`,
      te: 'స్మార్ట్‌ఫోన్ సాంకేతికతలో విప్లవాత్మక మార్పు చోటుచేసుకుంది. ఇంటర్నెట్ లేకుండానే నేరుగా ఫోన్ ప్రాసెసర్ల ద్వారా ఏఐ సేవలను అత్యంత వేగంగా పొందే సరికొత్త మోడల్స్ ఆవిష్కరించబడ్డాయి.',
    },
  },

  // 15. Health
  {
    id: 'health-1',
    category: 'health',
    publishedAt: '7 hours ago',
    author: 'Wellness & Health Desk',
    readTime: '3 min',
    location: 'Hyderabad',
    viewsCount: 28400,
    sharesCount: 2450,
    commentsCount: 112,
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    tags: ['Nutrition', 'Millets', 'Health', 'Ayurveda'],
    title: {
      en: 'The Millet Revolution: Clinical Studies Highlight Remarkable Benefits for Metabolic and Cardiovascular Wellness',
      te: 'చిరుధాన్యాల (మిల్లెట్స్) వాడకంతో ఆరోగ్యం: గుండె జబ్బులు, మధుమేహ నివారణలో విశేష ఫలితాలు',
    },
    summary: {
      en: 'Leading nutrition researchers reveal how integrating traditional grains like ragi, jowar, and foxtail millets into daily diets regulates glucose levels and reduces cholesterol.',
      te: 'రాగులు, జొన్నలు, కొర్రలు వంటి చిరుధాన్యాలను నిత్యం ఆహారంలో భాగం చేసుకోవడం వల్ల దీర్ఘకాలిక రోగాల బారిన పడకుండా ఉండవచ్చని తాజా పరిశోధనల్లో వెల్లడైంది.',
    },
    content: {
      en: `A multi-center nutritional study conducted across premier medical institutes has reaffirmed the unparalleled health advantages of indigenous Indian millets. Rich in slowly digestible starch, soluble dietary fiber, and essential micronutrients, millets offer comprehensive gut microbiome support and metabolic longevity.`,
      te: 'మన సంప్రదాయ ఆహారమైన చిరుధాన్యాల విశిష్టతను ఆధునిక వైద్య పరిశోధనలు మరోసారి స్పష్టం చేశాయి. ఫైబర్ మరియు మినరల్స్ పుష్కలంగా ఉండే ఈ ధాన్యాలు శరీరంలో చక్కెర స్థాయిలను క్రమబద్ధీకరిస్తాయి.',
    },
  },

  // 16. Agriculture
  {
    id: 'agri-1',
    category: 'agriculture',
    publishedAt: '8 hours ago',
    author: 'Agri Desk',
    readTime: '3 min',
    location: 'Guntur / Warangal',
    viewsCount: 34100,
    sharesCount: 4200,
    commentsCount: 178,
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    tags: ['Agriculture', 'Rythu', 'Kisan Drones', 'MSP'],
    title: {
      en: 'Smart Farming: 75% Subsidy on Agricultural Drones and Solar Pump Sets Rolled Out for Farmers',
      te: 'రైతన్నలకు శుభవార్త: వ్యవసాయ డ్రోన్లు, సోలార్ పంపుసెట్లపై 75% సబ్సిడీ పథకం ప్రారంభం',
    },
    summary: {
      en: 'State agriculture departments launch mobile app booking for precision fertilizer spraying drones to reduce input costs and maximize crop yield.',
      te: 'పురుగుమందుల పిచికారీ మరియు పొలాల పర్యవేక్షణ కోసం అత్యాధునిక డ్రోన్లను సులభంగా పొందేందుకు రాయితీ పథకం అందుబాటులోకి వచ్చింది.',
    },
    content: {
      en: `To empower smallholder agrarian families and reduce pesticide exposure, agriculture authorities have commenced distribution of specialized agricultural sprayer drones with customized GPS-guided micro-nozzles. Farmers can schedule drone services easily through dedicated village secretariats.`,
      te: 'వ్యవసాయంలో ఆధునిక యంత్రాల వినియోగాన్ని ప్రోత్సహించేందుకు ప్రభుత్వం సబ్సిడీ డ్రోన్లను రైతు సంఘాలకు అందిస్తోంది. దీని ద్వారా ఎరువులు, మందుల వృథా తగ్గి దిగుబడి గణనీయంగా పెరుగుతుంది.',
    },
  },

  // 17. Auto
  {
    id: 'auto-1',
    category: 'auto',
    publishedAt: '8 hours ago',
    author: 'Automotive Desk',
    readTime: '3 min',
    location: 'Chennai / Pune',
    viewsCount: 21500,
    sharesCount: 920,
    commentsCount: 76,
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    tags: ['Electric Vehicles', 'EVs', 'Automobile', 'Green Mobility'],
    title: {
      en: 'Next-Gen Solid State Battery EVs with 800KM Range Set for Commercial Launch in India',
      te: 'ఒక్కసారి ఛార్జ్ చేస్తే 800 కి.మీ మైలేజ్! సరికొత్త సాలిడ్-స్టేట్ బ్యాటరీ ఎలక్ట్రిక్ కార్లు విడుదల',
    },
    summary: {
      en: 'Major automotive manufacturers unveil rapid 10-minute ultrafast charging electric vehicles with enhanced thermal safety and longevity.',
      te: 'అతి తక్కువ సమయంలో 10 నిమిషాల్లోనే ఫాస్ట్ ఛార్జింగ్ అయ్యే అత్యాధునిక ఈవీ కార్లను ప్రముఖ సంస్థలు భారత మార్కెట్లోకి తీసుకొస్తున్నాయి.',
    },
    content: {
      en: `The Indian electric mobility revolution is taking a decisive stride forward with the unveiling of next-generation solid-state battery vehicles. Offering higher energy density and zero fire risk, these models aim to eliminate range anxiety entirely for highway travel.`,
      te: 'ఎలక్ట్రిక్ వాహన రంగంలో సరికొత్త శకం మొదలైంది. అధిక బ్యాటరీ బ్యాకప్, సురక్షితమైన సాలిడ్ స్టేట్ టెక్నాలజీతో రూపొందించిన కార్లు త్వరలోనే విక్రయానికి రానున్నాయి.',
    },
  },

  // 18. Lifestyle
  {
    id: 'lifestyle-1',
    category: 'lifestyle',
    publishedAt: '9 hours ago',
    author: 'Lifestyle & Travel',
    readTime: '3 min',
    location: 'Araku Valley / Coorg',
    viewsCount: 27800,
    sharesCount: 1650,
    commentsCount: 84,
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Travel', 'Araku', 'Eco Tourism', 'Lifestyle'],
    title: {
      en: 'Top 5 Pristine Hill Stations in South India for an Unforgettable Monsoon Weekend Getaway',
      te: 'వర్షాకాలంలో ఆహ్లాదకరమైన అనుభూతినిచ్చే దక్షిణ భారత టాప్ 5 హిల్ స్టేషన్లు',
    },
    summary: {
      en: 'From the coffee plantations of Araku Valley to the mist-covered peaks of Lambasingi and Munnar, discover the most tranquil nature escapes.',
      te: 'ప్రకృతి రమణీయత, జలపాతాలు, కాఫీ తోటలతో కనువిందు చేసే అరకు, లంబసింగి పర్యాటక ప్రాంతాల విశేషాలు.',
    },
    content: {
      en: `As the monsoon clouds drape the Eastern and Western Ghats in emerald greenery, travelers are discovering peaceful homestays, waterfall treks, and aromatic organic coffee trails that provide the perfect rejuvenation away from bustling urban life.`,
      te: 'పచ్చటి ప్రకృతి ఒడిలో సేదతీరాలనుకునే వారికి అరకు, ఊటీ, మున్నార్ వంటి పర్యాటక ప్రాంతాలు సరికొత్త అనుభవాన్ని అందిస్తాయి. తాజా కాఫీ పరిమళాలు, మంచు దుప్పటి కప్పిన కొండలు పర్యాటకులను ఆకర్షిస్తున్నాయి.',
    },
  },

  // 19. Science
  {
    id: 'science-1',
    category: 'science',
    publishedAt: '9 hours ago',
    author: 'Science & Astronomy',
    readTime: '4 min',
    location: 'Bengaluru / Pasadena',
    viewsCount: 31400,
    sharesCount: 1890,
    commentsCount: 110,
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
    tags: ['James Webb', 'Astronomy', 'Exoplanets', 'Science'],
    title: {
      en: 'Deep Space Observatory Detects Chemical Signatures of Liquid Water on Potentially Habitable Super-Earth',
      te: 'భూమి లాంటి మరో గ్రహంపై నీటి జాడలను గుర్తించిన అంతరిక్ష టెలిస్కోప్; శాస్త్రవేత్తల విశ్లేషణ',
    },
    summary: {
      en: 'Spectroscopic analysis of atmosphere reveals vapor clouds and mild ambient temperatures in the habitable zone of nearby star system.',
      te: 'సౌర వ్యవస్థకు సమీపంలోని గ్రహంపై జీవం ఉండేందుకు అనువైన వాతావరణం, నీటి ఆవిరి ఉన్నట్లు అంతరిక్ష శాస్త్రవేత్తలు కనుగొన్నారు.',
    },
    content: {
      en: `In what astronomers are terming a historic observational milestone, high-resolution infrared spectrographs have confirmed atmospheric water vapor bands and carbon equilibrium on an exoplanet situated 120 light-years away in its parent star's Goldilocks zone.`,
      te: 'విశ్వంలో జీవం ఉనికి కోసం సాగుతున్న అన్వేషణలో మరో అద్భుత ఘట్టం ఆవిష్కృతమైంది. అంతరిక్ష పరిశోధకులు భూమిని పోలిన సుదూర గ్రహంపై వాతావరణం, నీటి లక్షణాలను శాస్త్రీయంగా నిర్ధారించారు.',
    },
  },

  // 20. Viral / Trending
  {
    id: 'viral-1',
    category: 'viral',
    isTrending: true,
    publishedAt: '10 hours ago',
    author: 'Social Trends Desk',
    readTime: '2 min',
    location: 'Internet / Global',
    viewsCount: 95400,
    sharesCount: 12400,
    commentsCount: 680,
    imageUrl: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=1200&q=80',
    tags: ['Viral', 'Social Media', 'Good News', 'Inspiration'],
    title: {
      en: 'Viral Sensation: Inspiring Village Youth Invents Low-Cost Solar Desalination Device Helping 500 Families',
      te: 'సోషల్ మీడియాలో వైరల్: సముద్రపు నీటిని తాగునీటిగా మార్చే వినూత్న పరికరాన్ని తయారుచేసిన గ్రామీణ యువకుడు',
    },
    summary: {
      en: 'Using discarded solar panels and acrylic lenses, an engineering graduate builds an ingenious water purifier celebrated across the internet.',
      te: 'తక్కువ ఖర్చుతో సూర్యరశ్మి ద్వారా ఉప్పునీటిని స్వచ్ఛమైన తాగునీటిగా మార్చి తన గ్రామ సమస్యను తీర్చిన యువ ప్రతిభకు నెటిజన్లు జేజేలు పలుకుతున్నారు.',
    },
    content: {
      en: `A heartwarming story of homegrown engineering ingenuity has captured millions of hearts on social media. A passionate young engineer developed an affordable parabolic solar distillation system using recycled components, providing clean potable water to his entire coastal hamlet.`,
      te: 'గ్రామీణ ప్రాంతంలో పుట్టిన ఒక గొప్ప ఆలోచన సోషల్ మీడియాలో సంచలనం సృష్టిస్తోంది. సూర్యకాంతి సహాయంతో నిమిషాల వ్యవధిలో ఉప్పునీటిని పరిశుభ్రమైన నీటిగా మార్చే యంత్రాన్ని రూపొందించి అందరికీ ఆదర్శంగా నిలిచాడు.',
    },
  },
];
