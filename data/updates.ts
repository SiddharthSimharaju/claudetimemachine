import { Update } from '@/types/update'

export const updates: Update[] = [
  {
    id: "computer-use-cowork-mar-2026",
    date: "Mar 23, 2026",
    isoDate: "2026-03-23",
    title: "Claude operates your computer",
    category: "Agent",
    summary: "Claude can now point, click, scroll, and navigate your actual screen — no setup required. Pro and Max users on Cowork can hand Claude a task and walk away while it handles browser, file, and app actions autonomously.",
    killed: [
      "RPA tools (UiPath, Automation Anywhere) lost a key selling point overnight",
      "\"I'll do it myself\" as the default answer to repetitive computer tasks",
      "The idea that AI needs a developer to take real-world action"
    ],
    links: [
      { label: "Claude Code gets expanded computer use in Cowork", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2026/03/24/anthropic-hands-claude-code-more-control-but-keeps-it-on-a-leash/" },
      { label: "Anthropic says Claude can now finish computer tasks for you", source: "CNBC", type: "news", url: "https://www.cnbc.com/2026/03/24/anthropic-claude-ai-agent-use-computer-finish-tasks.html" },
      { label: "Original computer use launch — Claude 3.5 Sonnet (Oct 2024)", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/3-5-models-and-computer-use" }
    ],
    vibes: [
      { label: "Excited", pct: 62 },
      { label: "Skeptical", pct: 24 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "Multion", flag: "🇺🇸", what: "AI browser agent that autonomously navigates the web on your behalf", raised: "$18.5M", website: "https://multion.ai" },
      { name: "Induced AI", flag: "🇮🇳", what: "AI-powered computer use — click, type, and operate any app autonomously", raised: "$2.3M", website: "https://induced.ai" },
      { name: "Skyvern", flag: "🇺🇸", what: "Open-source browser automation using LLMs and computer vision", raised: "$5.8M", website: "https://skyvern.com" },
      { name: "UiPath", flag: "🇺🇸", what: "Enterprise RPA platform for automating repetitive desktop workflows", raised: "Public ($35B)", website: "https://uipath.com" },
      { name: "Automation Anywhere", flag: "🇺🇸", what: "Cloud-native RPA platform for intelligent business process automation", raised: "$840M", website: "https://automationanywhere.com" },
      { name: "BrowserBase", flag: "🇺🇸", what: "Hosted browser infrastructure API for AI agents to control web sessions", raised: "$27M", website: "https://browserbase.com" },
      { name: "Robocorp", flag: "🇺🇸", what: "Open-source RPA platform for building software robots", raised: "$56M", website: "https://robocorp.com" },
      { name: "WorkFusion", flag: "🇺🇸", what: "Intelligent automation for financial services back-office tasks", raised: "$220M", website: "https://workfusion.com" },
      { name: "RapidCanvas", flag: "🇮🇳", what: "AI agents automating complex data science and engineering workflows", raised: "$23.5M", website: "https://rapidcanvas.ai" },
      { name: "Mihup", flag: "🇮🇳", what: "Conversational AI automation for contact centres and desktop tasks", raised: "$8M", website: "https://mihup.com" },
      { name: "Kryon", flag: "🇮🇱", what: "Process discovery and RPA automation platform", raised: "$40M", website: "https://kryon.com" },
      { name: "Tray.io", flag: "🇺🇸", what: "Low-code automation platform for connecting apps and triggering actions", raised: "$75M", website: "https://tray.io" }
    ]
  },
  {
    id: "interactive-visualizations-mar-2026",
    date: "Mar 12, 2026",
    isoDate: "2026-03-12",
    title: "Claude draws charts and diagrams inline",
    category: "Feature",
    summary: "Claude can now create custom charts, diagrams, and interactive visualizations directly in its responses. No more copy-pasting data into a separate tool — the visual lives in the conversation.",
    killed: [
      "The copy-paste-into-Datawrapper workflow for quick charts",
      "Asking Claude to describe a chart instead of just showing it",
      "The friction between insight and visualization"
    ],
    links: [
      { label: "Claude builds interactive visuals right in your conversation", source: "Anthropic", type: "announcement", url: "https://claude.com/blog/claude-builds-visuals" },
      { label: "Claude can now create interactive visuals directly in conversations", source: "MacRumors", type: "news", url: "https://www.macrumors.com/2026/03/12/claude-visuals-conversations/" },
      { label: "Anthropic's Claude: interactive visualizations", source: "The New Stack", type: "news", url: "https://thenewstack.io/anthropics-claude-interactive-visualizations/" },
      { label: "Discussion: Claude inline charts", source: "Hacker News", type: "reddit", url: "https://news.ycombinator.com/item?id=47352751" }
    ],
    vibes: [
      { label: "Excited", pct: 70 },
      { label: "Skeptical", pct: 10 },
      { label: "Mind-blown", pct: 20 }
    ],
    killedCompanies: [
      { name: "Julius AI", flag: "🇺🇸", what: "AI data analyst — chat with your data to get instant charts and insights", website: "https://julius.ai" },
      { name: "Akkio", flag: "🇺🇸", what: "No-code AI analytics platform that auto-generates dashboards from raw data", raised: "$18M", website: "https://akkio.com" },
      { name: "Rows", flag: "🇵🇹", what: "AI-powered spreadsheet with built-in live charts and data enrichment", raised: "$16M", website: "https://rows.com" },
      { name: "Datawrapper", flag: "🇩🇪", what: "Browser-based chart and map creation tool for journalists and analysts", website: "https://datawrapper.de" },
      { name: "Flourish", flag: "🇬🇧", what: "Data visualization and storytelling platform for interactive charts", raised: "$7M", website: "https://flourish.studio" },
      { name: "Observable", flag: "🇺🇸", what: "Collaborative data visualization notebooks for teams", raised: "$35.6M", website: "https://observablehq.com" },
      { name: "Infogram", flag: "🇱🇻", what: "Infographic and chart maker used by 35,000+ organizations worldwide", website: "https://infogram.com" },
      { name: "Datagran", flag: "🇨🇴", what: "No-code AI analytics and visualization for non-technical teams", raised: "$3M", website: "https://datagran.io" },
      { name: "Visme", flag: "🇺🇸", what: "Visual content creation platform for charts, infographics, and presentations", website: "https://visme.co" },
      { name: "ChartPixel", flag: "🇮🇳", what: "AI chart generator for Indian SMBs and analysts — upload CSV, get charts", website: "https://chartpixel.com" }
    ]
  },
  {
    id: "sonnet-4-6-feb-2026",
    date: "Feb 17, 2026",
    isoDate: "2026-02-17",
    title: "Sonnet 4.6 — 1M token context in beta",
    category: "Model",
    summary: "The biggest Sonnet upgrade yet. Full upgrades across coding, computer use, long-context reasoning, agent planning, and design. Ships with 1M token context window — that's an entire codebase or legal corpus in one prompt.",
    killed: [
      "Chunking pipelines for long documents (RAG pipelines for many use cases)",
      "Sonnet 4.5's reign as the agent benchmark leader",
      "Debates about whether 200K context was enough"
    ],
    links: [
      { label: "Introducing Claude Sonnet 4.6", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-sonnet-4-6" },
      { label: "Anthropic releases Sonnet 4.6", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2026/02/17/anthropic-releases-sonnet-4-6/" },
      { label: "Anthropic releases Claude Sonnet 4.6", source: "CNBC", type: "news", url: "https://www.cnbc.com/2026/02/17/anthropic-ai-claude-sonnet-4-6-default-free-pro.html" }
    ],
    vibes: [
      { label: "Excited", pct: 71 },
      { label: "Skeptical", pct: 12 },
      { label: "Mind-blown", pct: 17 }
    ],
    killedCompanies: [
      { name: "Pinecone", flag: "🇺🇸", what: "Vector database for semantic search and RAG pipelines", raised: "$138M", website: "https://pinecone.io" },
      { name: "Weaviate", flag: "🇳🇱", what: "AI-native vector database for knowledge retrieval and RAG", raised: "$67M", website: "https://weaviate.io" },
      { name: "Chroma", flag: "🇺🇸", what: "Open-source embedding database for AI applications", website: "https://trychroma.com" },
      { name: "Qdrant", flag: "🇩🇪", what: "High-performance open-source vector similarity search engine", raised: "$28M", website: "https://qdrant.tech" },
      { name: "Mendable", flag: "🇺🇸", what: "RAG-powered search and chat for developer documentation", raised: "$4.5M", website: "https://mendable.ai" },
      { name: "Vectara", flag: "🇺🇸", what: "Enterprise RAG platform with grounded generation and hallucination control", raised: "$28.5M", website: "https://vectara.com" },
      { name: "Activeloop", flag: "🇺🇸", what: "Vector database and data pipeline for AI training and RAG", raised: "$20M", website: "https://activeloop.ai" },
      { name: "Chunkr", flag: "🇮🇳", what: "Document chunking and preprocessing API for RAG applications", website: "https://chunkr.ai" },
      { name: "Sarvam AI", flag: "🇮🇳", what: "Indian-language AI with RAG for enterprise document understanding", raised: "$41M", website: "https://sarvam.ai" },
      { name: "LlamaIndex", flag: "🇺🇸", what: "Framework for connecting LLMs to data via retrieval and RAG pipelines", raised: "$8.5M", website: "https://llamaindex.ai" },
      { name: "Dust", flag: "🇫🇷", what: "Enterprise RAG platform for internal knowledge management", raised: "$5M", website: "https://dust.tt" }
    ]
  },
  {
    id: "opus-4-6-feb-2026",
    date: "Feb 5, 2026",
    isoDate: "2026-02-05",
    title: "Claude Opus 4.6 — biggest model yet",
    category: "Model",
    summary: "Anthropic's smartest model gets its biggest upgrade. Enhanced coding skills pushed Opus 4.6 to the top of multiple benchmarks. Launched alongside Claude for PowerPoint and major Excel improvements.",
    killed: [
      "GPT-4o's lead on complex multi-step coding tasks",
      "The need to switch tools for PowerPoint creation",
      "Manual Excel pivot table workflows for some teams"
    ],
    links: [
      { label: "Introducing Claude Opus 4.6", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-opus-4-6" },
      { label: "Anthropic releases Opus 4.6 with new agent teams", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2026/02/05/anthropic-releases-opus-4-6-with-new-agent-teams/" },
      { label: "Anthropic launches Claude Opus 4.6", source: "CNBC", type: "news", url: "https://www.cnbc.com/2026/02/05/anthropic-claude-opus-4-6-vibe-working.html" }
    ],
    vibes: [
      { label: "Excited", pct: 68 },
      { label: "Skeptical", pct: 15 },
      { label: "Mind-blown", pct: 17 }
    ],
    killedCompanies: [
      { name: "Tome", flag: "🇺🇸", what: "AI-native presentation builder — generate polished decks from a prompt", raised: "$43M", website: "https://tome.app" },
      { name: "Gamma", flag: "🇺🇸", what: "AI-powered slides, docs, and webpages generated from text prompts", raised: "$13M", website: "https://gamma.app" },
      { name: "MagicSlides", flag: "🇮🇳", what: "AI PowerPoint generator — hugely popular with Indian educators and SMBs", website: "https://magicslides.app" },
      { name: "Beautiful.ai", flag: "🇺🇸", what: "Smart slide design software with AI layout automation", raised: "$11M", website: "https://beautiful.ai" },
      { name: "Pitch", flag: "🇩🇪", what: "Collaborative presentation tool with AI slide generation", raised: "$85M", website: "https://pitch.com" },
      { name: "Slidebean", flag: "🇨🇷", what: "AI-designed pitch deck tool for startups", raised: "$1.5M", website: "https://slidebean.com" },
      { name: "Simplified", flag: "🇮🇳", what: "All-in-one AI content creation including presentations and graphics", raised: "$7M", website: "https://simplified.com" },
      { name: "Decktopus", flag: "🇹🇷", what: "AI presentation maker, widely used by Indian educators and consultants", raised: "$1.7M", website: "https://decktopus.com" },
      { name: "Prezent.ai", flag: "🇺🇸", what: "AI presentation platform for enterprise sales and comms teams", raised: "$21.7M", website: "https://prezent.ai" },
      { name: "Zoho Show", flag: "🇮🇳", what: "Cloud presentation software from Zoho, popular across Indian businesses", website: "https://zoho.com/show" }
    ]
  },
  {
    id: "cowork-launch-jan-2026",
    date: "Jan 12, 2026",
    isoDate: "2026-01-12",
    title: "Cowork — Claude Code for knowledge workers",
    category: "Agent",
    summary: "Claude Code's agentic capabilities come to the desktop app for non-developers. Cowork runs in an isolated VM with direct access to local files and MCP integrations — Claude as a persistent background colleague who can actually do things.",
    killed: [
      "Notion AI, Monday AI, and single-app assistants as the primary tools",
      "The 'AI is just a chatbot' narrative",
      "Manually copying context between tools"
    ],
    links: [
      { label: "Anthropic's new Cowork tool offers Claude Code without the code", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2026/01/12/anthropics-new-cowork-tool-offers-claude-code-without-the-code/" },
      { label: "Anthropic announces Claude CoWork", source: "InfoQ", type: "news", url: "https://www.infoq.com/news/2026/01/claude-cowork/" },
      { label: "Cowork vs Notion AI — community take", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Cowork" }
    ],
    vibes: [
      { label: "Excited", pct: 58 },
      { label: "Skeptical", pct: 28 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "Taskade", flag: "🇺🇸", what: "AI-powered workspace with agents, tasks, and document generation", raised: "$5M", website: "https://taskade.com" },
      { name: "Kognitos", flag: "🇮🇳", what: "Plain-English enterprise automation for business workflows", raised: "$20M", website: "https://kognitos.com" },
      { name: "Leena AI", flag: "🇮🇳", what: "Enterprise AI agent for HR, IT, and finance workflows", raised: "$30M", website: "https://leena.ai" },
      { name: "Notion AI", flag: "🇺🇸", what: "AI writing, summarization, and task management inside Notion", raised: "$343M", website: "https://notion.so/product/ai" },
      { name: "ClickUp AI", flag: "🇺🇸", what: "AI task management and productivity assistant inside ClickUp", raised: "$537M", website: "https://clickup.com/ai" },
      { name: "Monday.com AI", flag: "🇮🇱", what: "AI-powered work OS with automated task creation and suggestions", raised: "Public ($6B)", website: "https://monday.com" },
      { name: "Haptik", flag: "🇮🇳", what: "Conversational AI platform for enterprise task automation", raised: "$100M", website: "https://haptik.ai" },
      { name: "Zluri", flag: "🇮🇳", what: "SaaS management and workflow automation platform for IT teams", raised: "$20M", website: "https://zluri.com" },
      { name: "Tettra", flag: "🇺🇸", what: "AI knowledge base that answers team questions from internal docs", raised: "$2M", website: "https://tettra.com" },
      { name: "Otter.ai", flag: "🇺🇸", what: "AI meeting assistant that records, transcribes, and takes action on meetings", raised: "$38M", website: "https://otter.ai" },
      { name: "Limitless AI", flag: "🇺🇸", what: "Wearable + desktop AI that captures context and acts on it throughout your day", raised: "$18M", website: "https://limitless.ai" }
    ]
  },
  {
    id: "health-data-jan-2026",
    date: "Jan 12, 2026",
    isoDate: "2026-01-12",
    title: "Claude reads your health data",
    category: "Feature",
    summary: "Claude can now access and analyze your iOS and Android health and fitness data — activity patterns, workout trends, sleep quality — and present insights with native charts. Available on Pro and Max plans in the US.",
    killed: [
      "Manually exporting Apple Health CSVs to analyze in spreadsheets",
      "Generic fitness app \"insights\" that don't answer your actual questions",
      "The gap between your health data and someone who can actually interpret it"
    ],
    links: [
      { label: "Claude for Healthcare — Anthropic announcement", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/healthcare-life-sciences" },
      { label: "Anthropic announces Claude for Healthcare", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2026/01/12/anthropic-announces-claude-for-healthcare-following-openais-chatgpt-health-reveal/" },
      { label: "Anthropic debuts Claude for Healthcare", source: "Fortune", type: "news", url: "https://fortune.com/2026/01/11/anthropic-unveils-claude-for-healthcare-and-expands-life-science-features-partners-with-healthex-to-let-users-connect-medical-records/" }
    ],
    vibes: [
      { label: "Excited", pct: 55 },
      { label: "Skeptical", pct: 32 },
      { label: "Mind-blown", pct: 13 }
    ],
    killedCompanies: [
      { name: "Healthify", flag: "🇮🇳", what: "AI nutrition and fitness coach analyzing health data for personalized plans", raised: "$75M", website: "https://healthifyme.com" },
      { name: "GOQii", flag: "🇮🇳", what: "Wearable fitness band + AI health coaching platform, 3M+ users in India", raised: "$82M", website: "https://goqii.com" },
      { name: "Ultrahuman", flag: "🇮🇳", what: "Metabolic health wearable with AI-powered health insights and ring tracker", raised: "$35M", website: "https://ultrahuman.com" },
      { name: "Gyroscope", flag: "🇺🇸", what: "Personal health dashboard unifying Apple Health, Oura, and wearable data", website: "https://gyrosco.pe" },
      { name: "Exist.io", flag: "🇦🇺", what: "Personal analytics app correlating health, habits, and mood over time", website: "https://exist.io" },
      { name: "Welldoc", flag: "🇺🇸", what: "AI-powered diabetes and chronic disease management from health data", raised: "$40M", website: "https://welldoc.com" },
      { name: "mfine", flag: "🇮🇳", what: "AI doctor platform — interprets health data and connects to specialists", raised: "$48.6M", website: "https://mfine.co" },
      { name: "HealthPlix", flag: "🇮🇳", what: "AI-powered clinical intelligence platform for Indian doctors and patients", raised: "$23M", website: "https://healthplix.com" },
      { name: "Wellthy Therapeutics", flag: "🇮🇳", what: "Digital therapeutics for chronic conditions using wearable and app data", raised: "$7M", website: "https://wellthytherapeutics.com" },
      { name: "Nori Health", flag: "🇺🇸", what: "AI fitness coach that integrates with Apple Watch and Health app", website: "https://nori.health" },
      { name: "Heads Up Health", flag: "🇨🇦", what: "Personal health data aggregator syncing labs, wearables, and Apple Health", website: "https://headsuphealth.com" }
    ]
  },
  {
    id: "memory-oct-2025",
    date: "Oct 23, 2025",
    isoDate: "2025-10-23",
    title: "Claude remembers you",
    category: "Feature",
    summary: "Memory rolls out to Max and Pro plans. Claude now carries context across sessions — your preferences, ongoing projects, and past work persist without re-explaining yourself every conversation. Incognito mode ships simultaneously.",
    killed: [
      "The ritual of pasting a personal context block at the start of every chat",
      "ChatGPT Memory's first-mover advantage",
      "The stateless AI assistant era"
    ],
    links: [
      { label: "Memory and new tools for Claude", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/memory-and-new-tools" },
      { label: "Claude chatbot can now remember your chats", source: "Axios", type: "news", url: "https://www.axios.com/2025/10/23/anthropic-claude-memory-subscribers" },
      { label: "Anthropic brings automatic memory to Claude Pro and Max", source: "MacRumors", type: "news", url: "https://www.macrumors.com/2025/10/23/anthropic-automatic-memory-claude/" },
      { label: "r/ClaudeAI — memory megathread", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=memory+feature" }
    ],
    vibes: [
      { label: "Excited", pct: 74 },
      { label: "Skeptical", pct: 18 },
      { label: "Mind-blown", pct: 8 }
    ],
    killedCompanies: [
      { name: "Mem0", flag: "🇮🇳", what: "Memory layer API for AI apps — persists user context across LLM conversations", raised: "$24M", website: "https://mem0.ai" },
      { name: "Rewind AI", flag: "🇺🇸", what: "Records your entire Mac screen and makes everything searchable via AI", raised: "$10M", website: "https://rewind.ai" },
      { name: "Personal.ai", flag: "🇺🇸", what: "Builds a personal AI model trained on your own messages, notes, and memories", raised: "$7M", website: "https://personal.ai" },
      { name: "Zep AI", flag: "🇺🇸", what: "Long-term memory and context management infrastructure for AI agents", raised: "$3.3M", website: "https://getzep.com" },
      { name: "Mem.ai", flag: "🇺🇸", what: "AI-powered note-taking app with automatic organization and memory", raised: "$23.5M", website: "https://mem.ai" },
      { name: "Supermemory", flag: "🇮🇳", what: "Personal memory engine that stores and retrieves anything you've seen online", website: "https://supermemory.ai" },
      { name: "Recall", flag: "🇬🇧", what: "Browser extension that saves and resurfaces anything you've seen online", website: "https://getrecall.ai" },
      { name: "Heyday", flag: "🇺🇸", what: "Automatically resurfaces saved content when you need it using AI memory", website: "https://heyday.xyz" }
    ]
  },
  {
    id: "opus-4-5-nov-2025",
    date: "Nov 24, 2025",
    isoDate: "2025-11-24",
    title: "Claude Opus 4.5 — frontier model",
    category: "Model",
    summary: "Anthropic's most powerful frontier model at launch. Opus 4.5 set new benchmarks at release and shipped alongside Claude for Excel's first major capability expansion including pivot tables and chart support.",
    killed: [
      "The previous SOTA benchmarks across reasoning and coding",
      "Third-party Excel AI plugins as the primary workflow tool",
      "The assumption that frontier = slower"
    ],
    links: [
      { label: "Introducing Claude Opus 4.5", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-opus-4-5" },
      { label: "Anthropic launches Claude Opus 4.5", source: "MacRumors", type: "news", url: "https://www.macrumors.com/2025/11/24/anthropic-claude-opus-4-5/" },
      { label: "Anthropic releases Claude Opus 4.5", source: "InfoWorld", type: "news", url: "https://www.infoworld.com/article/4095610/anthropic-releases-claude-opus-4-5.html" }
    ],
    vibes: [
      { label: "Excited", pct: 72 },
      { label: "Skeptical", pct: 12 },
      { label: "Mind-blown", pct: 16 }
    ],
    killedCompanies: [
      { name: "SheetAI", flag: "🇺🇸", what: "AI add-on for Google Sheets — write formulas and analyze data in plain English", website: "https://sheetai.app" },
      { name: "Numerous.ai", flag: "🇺🇸", what: "AI-powered spreadsheet tool for bulk data processing and enrichment", website: "https://numerous.ai" },
      { name: "Ajelix", flag: "🇱🇻", what: "AI Excel formula generator and spreadsheet assistant", website: "https://ajelix.com" },
      { name: "FormulaBot", flag: "🇺🇸", what: "Converts plain-English descriptions into Excel and Google Sheets formulas", website: "https://formulabot.com" },
      { name: "Arcwise AI", flag: "🇺🇸", what: "AI copilot for spreadsheets — answers questions about your data inline", website: "https://arcwise.app" },
      { name: "Lumelixr", flag: "🇮🇳", what: "AI Excel and data analytics assistant for Indian enterprises", website: "https://lumelixr.com" },
      { name: "GPTExcel", flag: "🇺🇸", what: "Generates complex Excel and Google Sheets formulas from plain text", website: "https://gptexcel.uk" },
      { name: "Sheetgo", flag: "🇧🇷", what: "Automates data workflows between spreadsheets using no-code connections", raised: "$2.7M", website: "https://sheetgo.com" },
      { name: "Ema", flag: "🇮🇳", what: "Universal AI employee that handles finance, HR, and spreadsheet workflows", raised: "$25M", website: "https://ema.co" }
    ]
  },
  {
    id: "sonnet-4-5-sep-2025",
    date: "Sep 29, 2025",
    isoDate: "2025-09-29",
    title: "Sonnet 4.5 — best model for agents",
    category: "Model",
    summary: "Sonnet 4.5 launches as the best model in the world for real-world agents, coding, and computer use. Claude in Chrome simultaneously gains multi-tab support and smart understanding of Gmail, Slack, and Google Calendar.",
    killed: [
      "GPT-4o's lead on agentic task completion benchmarks",
      "Single-tab limitations in browser automation",
      "Having to narrate every click to an AI browser agent"
    ],
    links: [
      { label: "Introducing Claude Sonnet 4.5", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-sonnet-4-5" },
      { label: "Anthropic releases Claude Sonnet 4.5", source: "Fortune", type: "news", url: "https://fortune.com/2025/09/29/anthropic-releases-claude-sonnet-4-5-a-model-it-says-can-build-software-and-accomplish-business-tasks-autonomously/" }
    ],
    vibes: [
      { label: "Excited", pct: 69 },
      { label: "Skeptical", pct: 18 },
      { label: "Mind-blown", pct: 13 }
    ],
    killedCompanies: [
      { name: "Adept AI", flag: "🇺🇸", what: "AI agent that takes actions in enterprise software on your behalf", raised: "$415M", website: "https://adept.ai" },
      { name: "Artisan AI", flag: "🇺🇸", what: "AI sales agent (Ava) that autonomously handles outbound prospecting", raised: "$11.5M", website: "https://artisan.co" },
      { name: "Leena AI", flag: "🇮🇳", what: "Enterprise AI agent for HR, IT, and finance task automation", raised: "$30M", website: "https://leena.ai" },
      { name: "Gnani.ai", flag: "🇮🇳", what: "AI agent platform for enterprise voice and text automation", raised: "$16M", website: "https://gnani.ai" },
      { name: "Relevance AI", flag: "🇦🇺", what: "No-code platform for building AI agents and multi-agent workflows", raised: "$24M", website: "https://relevanceai.com" },
      { name: "Lindy AI", flag: "🇺🇸", what: "Build AI agents that handle email, scheduling, and CRM workflows", website: "https://lindy.ai" },
      { name: "Beam AI", flag: "🇺🇸", what: "Agentic process automation for back-office enterprise workflows", raised: "$4.5M", website: "https://beam.ai" },
      { name: "Floatbot", flag: "🇮🇳", what: "Agentic AI for banking and financial services in Indian enterprises", raised: "$5M", website: "https://floatbot.ai" },
      { name: "Superagent", flag: "🇸🇪", what: "Open-source framework for building and deploying production AI agents", website: "https://superagent.sh" },
      { name: "AgentOps", flag: "🇺🇸", what: "Monitoring and evaluation platform for LLM agents in production", raised: "$12M", website: "https://agentops.ai" }
    ]
  },
  {
    id: "file-creation-sep-2025",
    date: "Sep 9, 2025",
    isoDate: "2025-09-09",
    title: "Claude creates and edits real files",
    category: "Feature",
    summary: "Claude can now create and edit Excel spreadsheets, PowerPoint decks, Word documents, and PDFs directly in the app — not just text drafts you paste elsewhere. The file lands in your downloads, ready to use.",
    killed: [
      "The copy-paste step between Claude and Office apps",
      "Justification for keeping a Word subscription just for document formatting",
      "\"Claude is great but I still have to format it myself\""
    ],
    links: [
      { label: "Claude can now create and edit files", source: "Anthropic", type: "announcement", url: "https://claude.com/blog/create-files" },
      { label: "Claude lets users edit Word, PowerPoint, Excel, and PDFs in chat", source: "The Decoder", type: "news", url: "https://the-decoder.com/anthropics-claude-now-lets-users-edit-word-powerpoint-excel-and-pdfs-in-chat/" },
      { label: "Claude file creation — first impressions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=file+creation+export" }
    ],
    vibes: [
      { label: "Excited", pct: 76 },
      { label: "Skeptical", pct: 10 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "Tome", flag: "🇺🇸", what: "AI presentation builder — generate polished decks from a one-line prompt", raised: "$43M", website: "https://tome.app" },
      { name: "Gamma", flag: "🇺🇸", what: "AI-powered slides, documents, and webpages from text prompts", raised: "$13M", website: "https://gamma.app" },
      { name: "Decktopus", flag: "🇹🇷", what: "AI presentation maker popular across Indian and Turkish businesses", raised: "$1.7M", website: "https://decktopus.com" },
      { name: "MagicSlides", flag: "🇮🇳", what: "AI PowerPoint generator — generates slides from topic or URL in seconds", website: "https://magicslides.app" },
      { name: "SlideSpeak", flag: "🇺🇸", what: "Converts PDFs and prompts into PowerPoint presentations using AI", website: "https://slidespeak.co" },
      { name: "Templafy", flag: "🇩🇰", what: "Enterprise document generation and brand-compliant template management", raised: "$88M", website: "https://templafy.com" },
      { name: "Coda AI", flag: "🇺🇸", what: "AI-powered document creation blending docs, spreadsheets, and apps", raised: "$150M", website: "https://coda.io" },
      { name: "Beautiful.ai", flag: "🇺🇸", what: "Smart presentation software with AI-powered design automation", raised: "$11M", website: "https://beautiful.ai" },
      { name: "Documind", flag: "🇮🇳", what: "AI document generation and PDF creation for Indian businesses", website: "https://documind.chat" },
      { name: "Zoho Writer", flag: "🇮🇳", what: "AI writing assistant built into Zoho's document suite for Indian SMBs", website: "https://zoho.com/writer" }
    ]
  },
  {
    id: "claude-in-chrome-aug-2025",
    date: "Aug 26, 2025",
    isoDate: "2025-08-26",
    title: "Claude browses the web for you",
    category: "Feature",
    summary: "Claude in Chrome launches as an experimental extension — Claude can read, click, and navigate any website alongside you. Within weeks: multi-tab support, scheduled tasks, and slash command shortcuts followed.",
    killed: [
      "Manual web research workflows for many knowledge workers",
      "Browser automation scripts for repetitive tasks",
      "Zapier for a growing class of browser-based automations"
    ],
    links: [
      { label: "Claude for Chrome — official page", source: "Anthropic", type: "announcement", url: "https://claude.com/claude-for-chrome" },
      { label: "Anthropic launches a Claude AI agent that lives in Chrome", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2025/08/26/anthropic-launches-a-claude-ai-agent-that-lives-in-chrome/" },
      { label: "Anthropic pilots experimental Claude AI plugin for Chrome", source: "SiliconANGLE", type: "news", url: "https://siliconangle.com/2025/08/27/anthropic-pilots-experimental-claude-ai-plugin-can-take-control-chrome/" },
      { label: "Chrome extension reactions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=chrome+extension" }
    ],
    vibes: [
      { label: "Excited", pct: 66 },
      { label: "Skeptical", pct: 20 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "HyperWrite", flag: "🇺🇸", what: "AI browser copilot that assists with writing and web navigation", raised: "$2.8M", website: "https://hyperwriteai.com" },
      { name: "Browserbase", flag: "🇺🇸", what: "Hosted browser API for AI agents to reliably control web sessions", raised: "$27M", website: "https://browserbase.com" },
      { name: "Bardeen", flag: "🇺🇸", what: "No-code browser automation and AI web scraping for repetitive tasks", raised: "$15M", website: "https://bardeen.ai" },
      { name: "Magical", flag: "🇺🇸", what: "AI autofill and browser automation Chrome extension with 700K+ users", raised: "$23M", website: "https://magical.so" },
      { name: "Multion", flag: "🇺🇸", what: "AI browser agent that autonomously completes web tasks end-to-end", raised: "$18.5M", website: "https://multion.ai" },
      { name: "Nected", flag: "🇮🇳", what: "No-code workflow automation for web actions and cross-app integrations", raised: "$5M", website: "https://nected.ai" },
      { name: "BrowseAI", flag: "🇨🇦", what: "Train AI robots to scrape and monitor websites without code", raised: "$6.1M", website: "https://browse.ai" },
      { name: "Axiom.ai", flag: "🇬🇧", what: "Browser automation tool for repetitive tasks without writing code", website: "https://axiom.ai" },
      { name: "Integrately", flag: "🇮🇳", what: "1-click automation platform connecting 1100+ apps, popular in India", website: "https://integrately.com" },
      { name: "PhantomBuster", flag: "🇫🇷", what: "Cloud-based web automation and data extraction for sales teams", raised: "$30M", website: "https://phantombuster.com" },
      { name: "Kadoa", flag: "🇨🇭", what: "AI-powered web scraping and data extraction that adapts to any site", website: "https://kadoa.com" }
    ]
  },
  {
    id: "1m-context-aug-2025",
    date: "Aug 12, 2025",
    isoDate: "2025-08-12",
    title: "1 million token context window",
    category: "Model",
    summary: "The 1M token context window arrives in API beta. Entire codebases, legal contracts, research corpora, or long-running agent histories can now fit in a single Claude conversation without chunking.",
    killed: [
      "Many RAG pipelines for document-heavy applications",
      "The 200K context window as a selling point",
      "Length-limit errors on long agentic runs"
    ],
    links: [
      { label: "1M context window — API docs", source: "Anthropic", type: "announcement", url: "https://docs.anthropic.com/en/docs/build-with-claude/context-windows" },
      { label: "Claude Sonnet 4 now supports 1M tokens of context", source: "Simon Willison", type: "news", url: "https://simonwillison.net/2025/Aug/12/claude-sonnet-4-1m/" },
      { label: "Claude Sonnet 4 gets a 1M token context window", source: "The New Stack", type: "news", url: "https://thenewstack.io/anthropics-claude-sonnet-4-model-gets-a-1m-token-context-window/" },
      { label: "Will 1M context kill RAG?", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=1+million+token+context+RAG" }
    ],
    vibes: [
      { label: "Excited", pct: 55 },
      { label: "Skeptical", pct: 30 },
      { label: "Mind-blown", pct: 15 }
    ],
    killedCompanies: [
      { name: "Chatbase", flag: "🇺🇸", what: "Build custom chatbots trained on your documents using RAG pipelines", website: "https://chatbase.co" },
      { name: "AskYourPDF", flag: "🇬🇧", what: "Chat with any PDF using AI-powered retrieval — 10M+ users", website: "https://askyourpdf.com" },
      { name: "Inkeep", flag: "🇺🇸", what: "RAG-powered AI search and chat trained on developer documentation", raised: "$5.2M", website: "https://inkeep.com" },
      { name: "Sarvam AI", flag: "🇮🇳", what: "Indian-language AI with RAG for enterprise document understanding", raised: "$41M", website: "https://sarvam.ai" },
      { name: "Pinecone", flag: "🇺🇸", what: "Vector database built specifically for RAG and semantic search at scale", raised: "$138M", website: "https://pinecone.io" },
      { name: "Vectara", flag: "🇺🇸", what: "Enterprise RAG platform with grounded generation and hallucination control", raised: "$28.5M", website: "https://vectara.com" },
      { name: "Qdrant", flag: "🇩🇪", what: "High-performance open-source vector similarity search engine", raised: "$28M", website: "https://qdrant.tech" },
      { name: "DocuChat", flag: "🇮🇳", what: "RAG-based document Q&A platform for Indian legal and enterprise teams", website: "https://docuchat.io" },
      { name: "Orama", flag: "🇮🇹", what: "AI-native search engine with built-in RAG for websites and apps", website: "https://oramasearch.com" },
      { name: "Mendable", flag: "🇺🇸", what: "RAG-powered search and chat for developer documentation", raised: "$4.5M", website: "https://mendable.ai" }
    ]
  },
  {
    id: "memory-teams-sep-2025",
    date: "Sep 11, 2025",
    isoDate: "2025-09-11",
    title: "Memory + incognito chats for Team plans",
    category: "Feature",
    summary: "Memory rolls out to Team plan users, with incognito chats available across free, Pro, Max, and Team plans. Claude can now remember relevant context from chats and generate memory summaries — while giving users a clean opt-out.",
    killed: [
      "The stateless shared workspace — teams no longer need to re-brief Claude per session",
      "Concerns that memory had no privacy escape valve"
    ],
    links: [
      { label: "Memory and new tools for Claude", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/memory-and-new-tools" },
      { label: "Anthropic adds memory to Claude Team and Enterprise", source: "VentureBeat", type: "news", url: "https://venturebeat.com/ai/anthropic-adds-memory-to-claude-team-and-enterprise-incognito-for-all" },
      { label: "Anthropic lets Claude remember previous interactions", source: "SiliconANGLE", type: "news", url: "https://siliconangle.com/2025/09/11/anthropic-lets-claude-remember-previous-interactions-streamline-work/" }
    ],
    vibes: [
      { label: "Excited", pct: 65 },
      { label: "Skeptical", pct: 22 },
      { label: "Mind-blown", pct: 13 }
    ],
    killedCompanies: [
      { name: "Guru", flag: "🇺🇸", what: "Team knowledge base with AI that answers questions from internal docs", raised: "$45M", website: "https://getguru.com" },
      { name: "Tettra", flag: "🇺🇸", what: "AI-powered team wiki that surfaces answers inside Slack", raised: "$2M", website: "https://tettra.com" },
      { name: "Slab", flag: "🇺🇸", what: "Team knowledge hub integrating Notion, Confluence, and Slack", raised: "$10M", website: "https://slab.com" },
      { name: "Glean", flag: "🇺🇸", what: "Enterprise AI search that finds knowledge across all internal tools", raised: "$260M", website: "https://glean.com" },
      { name: "Klaaryo", flag: "🇮🇳", what: "Team knowledge management and AI Q&A for Indian enterprises", website: "https://klaaryo.com" },
      { name: "Bloomfire", flag: "🇺🇸", what: "AI knowledge management platform for sharing institutional knowledge", raised: "$39M", website: "https://bloomfire.com" },
      { name: "Slite", flag: "🇫🇷", what: "AI-powered team documentation with smart search and suggestions", raised: "$11M", website: "https://slite.com" },
      { name: "Haptik", flag: "🇮🇳", what: "Conversational AI for enterprise knowledge management and support", raised: "$100M", website: "https://haptik.ai" },
      { name: "Kipwise", flag: "🇨🇦", what: "Team knowledge base with AI answers directly inside Slack", website: "https://kipwise.com" },
      { name: "Confluence AI", flag: "🇺🇸", what: "Atlassian's AI layer for team wikis and documentation search", website: "https://atlassian.com/software/confluence" }
    ]
  },
  {
    id: "haiku-4-5-oct-2025",
    date: "Oct 15, 2025",
    isoDate: "2025-10-15",
    title: "Haiku 4.5 — fastest Claude yet",
    category: "Model",
    summary: "Claude Haiku 4.5 launches as Anthropic's fastest and most cost-efficient model, matching Sonnet 4's performance on coding, computer use, and agent tasks at a fraction of the latency. Claude in Chrome switched to Haiku 4.5 as its default.",
    killed: [
      "The speed vs. quality tradeoff for lightweight agent tasks",
      "Paying Sonnet-level costs for tasks that don't need it",
      "GPT-4o Mini's positioning as the go-to small fast model"
    ],
    links: [
      { label: "Claude Haiku 4.5 model page", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/claude/haiku" },
      { label: "Anthropic launches Claude Haiku 4.5, a small model", source: "AI Business", type: "news", url: "https://aibusiness.com/generative-ai/anthropic-launches-claude-haiku-4-5-a-small-model-" },
      { label: "Haiku 4.5 discussion", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Haiku+4.5" }
    ],
    vibes: [
      { label: "Excited", pct: 70 },
      { label: "Skeptical", pct: 12 },
      { label: "Mind-blown", pct: 18 }
    ],
    killedCompanies: [
      { name: "Together AI", flag: "🇺🇸", what: "Fast inference cloud for open-source models — Llama, Mistral at low cost", raised: "$305M", website: "https://together.ai" },
      { name: "Fireworks AI", flag: "🇺🇸", what: "Ultra-fast LLM inference API optimized for production applications", raised: "$52M", website: "https://fireworks.ai" },
      { name: "Groq", flag: "🇺🇸", what: "Custom LPU chips delivering the fastest open-source LLM inference available", raised: "$640M", website: "https://groq.com" },
      { name: "Krutrim", flag: "🇮🇳", what: "India's first AI unicorn — fast, cheap LLM inference for Indian languages", raised: "$50M", website: "https://olakrutrim.com" },
      { name: "Replicate", flag: "🇺🇸", what: "Deploy and run open-source AI models via API in one line of code", raised: "$40M", website: "https://replicate.com" },
      { name: "Mistral AI", flag: "🇫🇷", what: "Open-weight frontier and small models competing on price-performance", raised: "$1.07B", website: "https://mistral.ai" },
      { name: "Sarvam AI", flag: "🇮🇳", what: "Fast, cheap inference for Indian-language AI apps and voice agents", raised: "$41M", website: "https://sarvam.ai" },
      { name: "Lepton AI", flag: "🇺🇸", what: "Developer platform for deploying and scaling open-source AI models cheaply", raised: "$28M", website: "https://lepton.ai" },
      { name: "AI4Bharat", flag: "🇮🇳", what: "Open-source Indian-language AI models and inference infrastructure", website: "https://ai4bharat.iitm.ac.in" },
      { name: "Anyscale", flag: "🇺🇸", what: "Scalable LLM deployment and fine-tuning platform, acquired by Databricks", raised: "$99M", website: "https://anyscale.com" }
    ]
  },
  {
    id: "opus-4-1-aug-2025",
    date: "Aug 5, 2025",
    isoDate: "2025-08-05",
    title: "Claude Opus 4.1 — world's best coding model",
    category: "Model",
    summary: "Opus 4.1 launches with a 74.5% SWE-bench score — the highest of any model at the time. Released the same day as OpenAI's first open reasoning models, marking a direct competitive showdown. Best-in-class for autonomous software engineering and complex multi-step reasoning.",
    killed: [
      "GPT-4o's lead on complex real-world coding benchmarks",
      "The argument that bigger models are always slower",
      "Devin's claim to the top SWE-bench position"
    ],
    links: [
      { label: "Introducing Claude Opus 4.1", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-opus-4-1" },
      { label: "Opus 4.1 tops SWE-bench", source: "X/Twitter", type: "tweet", url: "https://twitter.com/search?q=Claude+Opus+4.1+SWE-bench" },
      { label: "Opus 4.1 vs OpenAI reasoning models", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Opus+4.1" }
    ],
    vibes: [
      { label: "Excited", pct: 70 },
      { label: "Skeptical", pct: 14 },
      { label: "Mind-blown", pct: 16 }
    ],
    killedCompanies: [
      { name: "Devin (Cognition)", flag: "🇺🇸", what: "AI software engineer that autonomously writes, debugs, and deploys code", raised: "$175M", website: "https://cognition.ai" },
      { name: "Cursor", flag: "🇺🇸", what: "AI-first code editor built for pair-programming with frontier models", raised: "$60M", website: "https://cursor.sh" },
      { name: "GitHub Copilot", flag: "🇺🇸", what: "Microsoft's AI coding assistant embedded in VS Code and GitHub", website: "https://github.com/features/copilot" },
      { name: "Tabnine", flag: "🇮🇱", what: "AI code completion tool with privacy-first on-premises deployment", raised: "$52M", website: "https://tabnine.com" },
      { name: "Codeium", flag: "🇺🇸", what: "Free AI code assistant with autocomplete across 70+ languages", raised: "$65M", website: "https://codeium.com" },
      { name: "Replit AI", flag: "🇺🇸", what: "AI pair programmer embedded in Replit's cloud coding environment", raised: "$97.4M", website: "https://replit.com" },
      { name: "Mutable AI", flag: "🇺🇸", what: "AI autopilot for codebases — refactoring and documentation at scale", website: "https://mutable.ai" },
      { name: "CodeAnt AI", flag: "🇮🇳", what: "AI code reviewer and bug fixer for Indian engineering teams", raised: "$2M", website: "https://codeant.ai" }
    ]
  },
  {
    id: "voice-mode-may-2025",
    date: "May 27, 2025",
    isoDate: "2025-05-27",
    title: "Claude gets a voice",
    category: "Feature",
    summary: "Voice mode launches on iOS and Android with five distinct voice options. Claude can now hold natural spoken conversations, integrating with Google Docs, Drive, and Calendar to take real actions while you talk. The most humanlike AI voice experience outside ChatGPT Advanced Voice.",
    killed: [
      "Push-to-talk as the only way to interact with Claude on mobile",
      "Standalone voice AI apps for basic task management",
      "The assumption that Claude was text-only"
    ],
    links: [
      { label: "Anthropic launches voice mode for Claude", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2025/05/27/anthropic-launches-a-voice-mode-for-claude/" },
      { label: "Claude voice mode reactions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=voice+mode" }
    ],
    vibes: [
      { label: "Excited", pct: 68 },
      { label: "Skeptical", pct: 18 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "ElevenLabs", flag: "🇺🇸", what: "AI voice synthesis and conversational voice agent platform", raised: "$80M", website: "https://elevenlabs.io" },
      { name: "Bland AI", flag: "🇺🇸", what: "AI phone calling platform for sales, support, and scheduling", raised: "$22M", website: "https://bland.ai" },
      { name: "Vapi AI", flag: "🇺🇸", what: "Voice AI infrastructure for building real-time phone agents", raised: "$20M", website: "https://vapi.ai" },
      { name: "Krutrim Voice", flag: "🇮🇳", what: "Indian-language voice AI by Ola — conversational assistant for Bharat", raised: "$50M", website: "https://olakrutrim.com" },
      { name: "Sarvam AI Voice", flag: "🇮🇳", what: "Multilingual Indian voice AI for call centres and voice apps", raised: "$41M", website: "https://sarvam.ai" },
      { name: "Voiceflow", flag: "🇨🇦", what: "Design and deploy voice AI agents without code", raised: "$20M", website: "https://voiceflow.com" },
      { name: "Retell AI", flag: "🇺🇸", what: "Build human-like voice agents for inbound/outbound calls", raised: "$4.5M", website: "https://retellai.com" },
      { name: "Bolna AI", flag: "🇮🇳", what: "Open-source voice agent platform for Indian businesses", website: "https://bolna.dev" }
    ]
  },
  {
    id: "claude-4-may-2025",
    date: "May 22, 2025",
    isoDate: "2025-05-22",
    title: "Claude 4 — Sonnet 4 and Opus 4 launch",
    category: "Model",
    summary: "The Claude 4 generation arrives. Opus 4 scores 72.5% on SWE-bench — the world's best coding model at launch. Sonnet 4 becomes the default model. Claude Code exits research preview and goes generally available with VS Code, JetBrains, and GitHub Actions integrations.",
    killed: [
      "Claude 3.7 Sonnet as the agent benchmark leader",
      "GitHub Copilot's dominance for serious engineering tasks",
      "The idea that AI coding tools need a human in the loop for every decision"
    ],
    links: [
      { label: "Introducing Claude 4", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-4" },
      { label: "Claude 4 benchmark breakdown", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Claude+4+Sonnet+Opus" }
    ],
    vibes: [
      { label: "Excited", pct: 74 },
      { label: "Skeptical", pct: 10 },
      { label: "Mind-blown", pct: 16 }
    ],
    killedCompanies: [
      { name: "Devin (Cognition)", flag: "🇺🇸", what: "AI software engineer that autonomously writes, debugs, and deploys code", raised: "$175M", website: "https://cognition.ai" },
      { name: "GitHub Copilot", flag: "🇺🇸", what: "Microsoft's AI pair programmer embedded in VS Code and GitHub", website: "https://github.com/features/copilot" },
      { name: "Cursor", flag: "🇺🇸", what: "AI-first code editor built on VS Code with frontier model integration", raised: "$60M", website: "https://cursor.sh" },
      { name: "Sweep AI", flag: "🇺🇸", what: "AI junior developer that turns GitHub issues into pull requests", website: "https://sweep.dev" },
      { name: "Cosine (Genie)", flag: "🇬🇧", what: "AI software engineer that autonomously completes coding tasks end-to-end", raised: "$5M", website: "https://cosine.sh" },
      { name: "Pear AI", flag: "🇺🇸", what: "AI-powered code editor for faster software development", website: "https://trypear.ai" },
      { name: "10xEngineers", flag: "🇮🇳", what: "AI code generation and review platform for Indian development teams", raised: "$2M", website: "https://10xengineers.ai" },
      { name: "Codeium", flag: "🇺🇸", what: "Free AI code completion and chat across 70+ IDEs and languages", raised: "$65M", website: "https://codeium.com" }
    ]
  },
  {
    id: "web-search-mar-2025",
    date: "Mar 20, 2025",
    isoDate: "2025-03-20",
    title: "Claude searches the web in real time",
    category: "Feature",
    summary: "Web search launches for Pro and Max users — Claude can now retrieve live information and cite sources in real time. The knowledge cutoff stops being a limitation for millions of users. Perplexity's core advantage shrinks overnight.",
    killed: [
      "The knowledge cutoff as Claude's most-cited weakness",
      "Switching between Claude and a search engine for current events",
      "Perplexity AI as the only AI with reliable real-time web access"
    ],
    links: [
      { label: "Claude can now search the web", source: "Anthropic", type: "announcement", url: "https://claude.com/blog/web-search" },
      { label: "Web search for Claude — community reactions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=web+search" }
    ],
    vibes: [
      { label: "Excited", pct: 76 },
      { label: "Skeptical", pct: 12 },
      { label: "Mind-blown", pct: 12 }
    ],
    killedCompanies: [
      { name: "Perplexity AI", flag: "🇺🇸", what: "AI-powered search engine with real-time web citations and answers", raised: "$520M", website: "https://perplexity.ai" },
      { name: "You.com", flag: "🇺🇸", what: "AI search engine combining web results with LLM-powered answers", raised: "$45M", website: "https://you.com" },
      { name: "Andi Search", flag: "🇺🇸", what: "Ad-free AI search assistant with summarized, cited web answers", website: "https://andisearch.com" },
      { name: "Kagi Search", flag: "🇺🇸", what: "Premium paid search engine with AI summarization and no tracking", website: "https://kagi.com" },
      { name: "Phind", flag: "🇺🇸", what: "AI search engine built specifically for developers and technical queries", raised: "$6M", website: "https://phind.com" },
      { name: "Exa AI", flag: "🇺🇸", what: "Neural search API for finding semantically relevant web content", raised: "$17M", website: "https://exa.ai" },
      { name: "Consensus", flag: "🇺🇸", what: "AI search engine for scientific research papers and evidence", raised: "$8.5M", website: "https://consensus.app" },
      { name: "Khoj AI", flag: "🇮🇳", what: "Open-source AI assistant with real-time web search for Indian developers", website: "https://khoj.dev" }
    ]
  },
  {
    id: "claude-3-7-sonnet-feb-2025",
    date: "Feb 24, 2025",
    isoDate: "2025-02-24",
    title: "Claude 3.7 Sonnet — hybrid reasoning",
    category: "Model",
    summary: "The first model with a toggle for extended thinking — users can switch deep reasoning on or off in the same model. Claude Code launches as a research preview: a CLI agent that autonomously writes, tests, and edits entire codebases. The biggest leap for developer use cases since Claude launched.",
    killed: [
      "The need for separate 'reasoning' vs 'fast' model versions",
      "GitHub Copilot for complex, multi-file coding tasks",
      "Manual code review for many routine engineering workflows"
    ],
    links: [
      { label: "Introducing Claude 3.7 Sonnet", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-3-7-sonnet" },
      { label: "Claude Code research preview launch", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Claude+Code+3.7" }
    ],
    vibes: [
      { label: "Excited", pct: 72 },
      { label: "Skeptical", pct: 12 },
      { label: "Mind-blown", pct: 16 }
    ],
    killedCompanies: [
      { name: "GitHub Copilot", flag: "🇺🇸", what: "Microsoft's AI coding assistant embedded in VS Code and GitHub", website: "https://github.com/features/copilot" },
      { name: "Cursor", flag: "🇺🇸", what: "AI-first code editor for power users who pair-program with LLMs", raised: "$60M", website: "https://cursor.sh" },
      { name: "Aider", flag: "🇺🇸", what: "Open-source CLI AI pair programmer for editing code in your terminal", website: "https://aider.chat" },
      { name: "Devin (Cognition)", flag: "🇺🇸", what: "Autonomous AI software engineer that completes tasks end-to-end", raised: "$175M", website: "https://cognition.ai" },
      { name: "Codeium", flag: "🇺🇸", what: "Free AI code completion with IDE plugins across 70+ languages", raised: "$65M", website: "https://codeium.com" },
      { name: "Codevolt", flag: "🇮🇳", what: "AI coding assistant built for Indian software teams and bootcamps", website: "https://codevolt.ai" },
      { name: "Replit AI", flag: "🇺🇸", what: "AI pair programmer embedded in Replit's cloud IDE", raised: "$97.4M", website: "https://replit.com" }
    ]
  },
  {
    id: "mcp-nov-2024",
    date: "Nov 25, 2024",
    isoDate: "2024-11-25",
    title: "Model Context Protocol — the USB-C of AI",
    category: "Platform",
    summary: "Anthropic open-sources MCP — a universal standard for connecting AI models to any tool, database, or service. Adopted by OpenAI, Google, and hundreds of companies within months. MCP did for AI integrations what REST did for web APIs.",
    killed: [
      "One-off custom API integrations for every AI tool connection",
      "Proprietary tool formats that lock AI into a single vendor's ecosystem",
      "The need for Zapier as middleware between AI and business tools"
    ],
    links: [
      { label: "Introducing the Model Context Protocol", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/model-context-protocol" },
      { label: "MCP — community reactions", source: "Hacker News", type: "reddit", url: "https://news.ycombinator.com/item?id=42239083" },
      { label: "MCP adoption across the AI ecosystem", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=MCP+model+context+protocol" }
    ],
    vibes: [
      { label: "Excited", pct: 64 },
      { label: "Skeptical", pct: 20 },
      { label: "Mind-blown", pct: 16 }
    ],
    killedCompanies: [
      { name: "Zapier", flag: "🇺🇸", what: "No-code automation platform connecting 6000+ apps with triggers and actions", raised: "$1.4M", website: "https://zapier.com" },
      { name: "Make (Integromat)", flag: "🇨🇿", what: "Visual workflow automation platform for connecting apps and APIs", raised: "$48M", website: "https://make.com" },
      { name: "Workato", flag: "🇺🇸", what: "Enterprise integration and automation platform for IT and ops teams", raised: "$200M", website: "https://workato.com" },
      { name: "Tray.io", flag: "🇺🇸", what: "Low-code integration platform for connecting business apps via APIs", raised: "$75M", website: "https://tray.io" },
      { name: "Pipedream", flag: "🇺🇸", what: "Developer-first integration platform for building event-driven workflows", raised: "$20M", website: "https://pipedream.com" },
      { name: "Activepieces", flag: "🇪🇬", what: "Open-source no-code automation alternative to Zapier", website: "https://activepieces.com" },
      { name: "Pabbly Connect", flag: "🇮🇳", what: "Low-cost Zapier alternative popular with Indian SMBs and agencies", website: "https://pabbly.com/connect" },
      { name: "Integrately", flag: "🇮🇳", what: "1-click automation connecting 1100+ apps, widely used in India", website: "https://integrately.com" }
    ]
  },
  {
    id: "desktop-app-nov-2024",
    date: "Nov 5, 2024",
    isoDate: "2024-11-05",
    title: "Claude comes to your desktop",
    category: "Platform",
    summary: "Native desktop apps launch for macOS and Windows. Claude lives in your system tray — always one keystroke away. The app supports file drag-and-drop, integrates with local files, and lays the groundwork for deeper OS integration.",
    killed: [
      "The browser tab as the only way to access Claude",
      "Electron-wrapped third-party Claude apps that filled the gap",
      "Switching windows to find a Claude browser tab"
    ],
    links: [
      { label: "Claude desktop app launch", source: "Anthropic", type: "announcement", url: "https://support.claude.ai/hc/en-us/articles/12138966-release-notes" },
      { label: "Claude desktop app reactions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=desktop+app" }
    ],
    vibes: [
      { label: "Excited", pct: 72 },
      { label: "Skeptical", pct: 12 },
      { label: "Mind-blown", pct: 16 }
    ],
    killedCompanies: [
      { name: "Navi (Pocketsquare)", flag: "🇺🇸", what: "Native macOS wrapper for ChatGPT/Claude with global hotkey access", website: "https://navi.so" },
      { name: "Mango AI", flag: "🇮🇳", what: "Claude and GPT desktop wrapper for Indian professionals", website: "https://mangoai.co" },
      { name: "MacGPT", flag: "🇺🇸", what: "Free macOS app providing native menu bar access to ChatGPT and Claude", website: "https://www.macgpt.com" },
      { name: "Quill Chat", flag: "🇺🇸", what: "Desktop AI assistant wrapping multiple LLMs in a native macOS app", website: "https://quillchat.io" },
      { name: "Raycast AI", flag: "🇩🇪", what: "Launcher + AI assistant with quick Claude/GPT access from the menu bar", raised: "$30M", website: "https://raycast.com" },
      { name: "PopAI", flag: "🇺🇸", what: "AI productivity desktop app combining multiple model access points", website: "https://popai.pro" }
    ]
  },
  {
    id: "computer-use-oct-2024",
    date: "Oct 22, 2024",
    isoDate: "2024-10-22",
    title: "Claude learns to use a computer",
    category: "Agent",
    summary: "Computer use launches in public beta — Claude can now see screenshots, move the cursor, click buttons, and type into any application. The first AI model capable of operating a real desktop environment. Updated Claude 3.5 Sonnet ships simultaneously; Claude 3.5 Haiku announced.",
    killed: [
      "RPA tools as the only way to automate desktop workflows",
      "The assumption that AI can only talk, not act",
      "Manual data entry workflows that require navigating GUIs"
    ],
    links: [
      { label: "Introducing computer use and Claude 3.5 Sonnet", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/3-5-models-and-computer-use" },
      { label: "Anthropic gives Claude the ability to use computers", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2024/10/22/anthropic-gives-claude-the-ability-to-use-computers/" },
      { label: "Computer use launch reactions", source: "Hacker News", type: "reddit", url: "https://news.ycombinator.com/item?id=41921147" }
    ],
    vibes: [
      { label: "Excited", pct: 58 },
      { label: "Skeptical", pct: 28 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "UiPath", flag: "🇺🇸", what: "Enterprise RPA platform for automating repetitive desktop workflows", raised: "Public ($7B)", website: "https://uipath.com" },
      { name: "Automation Anywhere", flag: "🇺🇸", what: "Cloud-native RPA platform for intelligent business process automation", raised: "$840M", website: "https://automationanywhere.com" },
      { name: "Multion", flag: "🇺🇸", what: "AI browser agent that autonomously navigates the web on your behalf", raised: "$18.5M", website: "https://multion.ai" },
      { name: "Skyvern", flag: "🇺🇸", what: "LLM-powered browser automation replacing fragile CSS-selector scripts", raised: "$5.8M", website: "https://skyvern.com" },
      { name: "Robocorp", flag: "🇺🇸", what: "Open-source RPA platform for building software robots in Python", raised: "$56M", website: "https://robocorp.com" },
      { name: "WorkFusion", flag: "🇺🇸", what: "Intelligent automation for financial services back-office tasks", raised: "$220M", website: "https://workfusion.com" },
      { name: "Kryon", flag: "🇮🇱", what: "Process discovery and RPA automation platform", raised: "$40M", website: "https://kryon.com" },
      { name: "Mihup", flag: "🇮🇳", what: "Conversational AI automation for Indian contact centres and desktop tasks", raised: "$8M", website: "https://mihup.com" }
    ]
  },
  {
    id: "enterprise-sep-2024",
    date: "Sep 4, 2024",
    isoDate: "2024-09-04",
    title: "Claude Enterprise — AI for organizations",
    category: "Platform",
    summary: "Claude Enterprise launches with a 500K context window, SSO, admin controls, usage analytics, and a guarantee that no data trains Claude. GitHub integration ships at launch. The first Claude tier purpose-built for large organizations — Anthropic's direct answer to ChatGPT Enterprise.",
    killed: [
      "The friction of deploying Claude in security-conscious enterprise environments",
      "ChatGPT Enterprise's head start as the only AI with enterprise controls",
      "Concerns about proprietary data being used to train AI models"
    ],
    links: [
      { label: "Anthropic launches Claude Enterprise", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2024/09/04/anthropic-launches-claude-enterprise-plan-to-compete-with-openai/" },
      { label: "Claude Enterprise plan details", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Claude+Enterprise+plan" }
    ],
    vibes: [
      { label: "Excited", pct: 62 },
      { label: "Skeptical", pct: 24 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "Writer", flag: "🇺🇸", what: "Enterprise AI writing platform with governance and brand controls", raised: "$200M", website: "https://writer.com" },
      { name: "Glean", flag: "🇺🇸", what: "Enterprise AI search and assistant across all company knowledge", raised: "$260M", website: "https://glean.com" },
      { name: "Moveworks", flag: "🇺🇸", what: "Enterprise AI platform for IT and HR employee self-service", raised: "$305M", website: "https://moveworks.com" },
      { name: "Leena AI", flag: "🇮🇳", what: "Enterprise AI agent for HR, IT, and finance task automation", raised: "$30M", website: "https://leena.ai" },
      { name: "Aisera", flag: "🇺🇸", what: "Generative AI platform for enterprise IT and business service automation", raised: "$90M", website: "https://aisera.com" },
      { name: "Haptik", flag: "🇮🇳", what: "Enterprise conversational AI for Indian and global customer service", raised: "$100M", website: "https://haptik.ai" },
      { name: "Kore.ai", flag: "🇺🇸", what: "Enterprise AI platform for virtual assistants and agent automation", raised: "$150M", website: "https://kore.ai" }
    ]
  },
  {
    id: "artifacts-ga-aug-2024",
    date: "Aug 27, 2024",
    isoDate: "2024-08-27",
    title: "Artifacts — create, run, preview, ship",
    category: "Feature",
    summary: "Artifacts rolls out to all users including free plan and mobile. Claude can now generate interactive apps, data visualizations, and documents that run live in a side panel — no external IDE required. The most-shared Claude feature since launch.",
    killed: [
      "Copying Claude-generated code into CodePen to see if it works",
      "Replit as the go-to place to quickly run AI-generated code",
      "The gap between prompt and working prototype"
    ],
    links: [
      { label: "Claude Artifacts — now for everyone", source: "Anthropic", type: "announcement", url: "https://claude.com/blog/artifacts" },
      { label: "Artifacts launch reactions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Artifacts" }
    ],
    vibes: [
      { label: "Excited", pct: 80 },
      { label: "Skeptical", pct: 8 },
      { label: "Mind-blown", pct: 12 }
    ],
    killedCompanies: [
      { name: "Replit", flag: "🇺🇸", what: "Cloud IDE for running and sharing code from AI output instantly", raised: "$97.4M", website: "https://replit.com" },
      { name: "CodeSandbox", flag: "🇳🇱", what: "Browser-based code editor for instant web app prototyping and sharing", raised: "$15M", website: "https://codesandbox.io" },
      { name: "StackBlitz", flag: "🇺🇸", what: "In-browser full-stack development environment running Node.js natively", raised: "$7.9M", website: "https://stackblitz.com" },
      { name: "JSFiddle", flag: "🇦🇺", what: "Browser-based playground for testing JavaScript, HTML, and CSS snippets", website: "https://jsfiddle.net" },
      { name: "CodePen", flag: "🇺🇸", what: "Front-end social coding environment for building and sharing web demos", website: "https://codepen.io" },
      { name: "Glitch", flag: "🇺🇸", what: "Collaborative in-browser coding platform for building and deploying apps", raised: "$30M", website: "https://glitch.com" },
      { name: "Scrimba", flag: "🇳🇴", what: "Interactive coding environment for recording and sharing code tutorials", raised: "$4.3M", website: "https://scrimba.com" },
      { name: "DhiWise", flag: "🇮🇳", what: "No-code app builder for Indian developers turning designs into code", raised: "$4M", website: "https://dhiwise.com" }
    ]
  },
  {
    id: "projects-jun-2024",
    date: "Jun 25, 2024",
    isoDate: "2024-06-25",
    title: "Projects — persistent context for your work",
    category: "Feature",
    summary: "Projects launch for Pro and Team users. Each project gets a 200K context window, persistent memory across chats, custom instructions, and the ability to upload documents and files. Claude finally becomes a long-term collaborator, not just a one-shot assistant.",
    killed: [
      "Pasting the same context block at the start of every conversation",
      "Notion as the place to store context before copying it into Claude",
      "Context-limit anxiety on long-running work"
    ],
    links: [
      { label: "Introducing Claude Projects", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/projects" },
      { label: "Projects launch reactions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Projects+feature" }
    ],
    vibes: [
      { label: "Excited", pct: 78 },
      { label: "Skeptical", pct: 12 },
      { label: "Mind-blown", pct: 10 }
    ],
    killedCompanies: [
      { name: "Mem.ai", flag: "🇺🇸", what: "AI-powered note-taking that automatically organizes and resurfaces context", raised: "$23.5M", website: "https://mem.ai" },
      { name: "Notion AI", flag: "🇺🇸", what: "AI writing and knowledge management inside Notion workspaces", raised: "$343M", website: "https://notion.so/product/ai" },
      { name: "Guru", flag: "🇺🇸", what: "Team knowledge base with AI that answers from internal documents", raised: "$45M", website: "https://getguru.com" },
      { name: "Fabric", flag: "🇺🇸", what: "AI personal knowledge base that organizes everything you save and read", raised: "$7M", website: "https://fabric.so" },
      { name: "Reflect Notes", flag: "🇺🇸", what: "AI-powered networked note-taking with backlinks and GPT integration", website: "https://reflect.app" },
      { name: "Capacities", flag: "🇩🇪", what: "AI-enhanced personal knowledge management and note-taking tool", website: "https://capacities.io" },
      { name: "Supernotes", flag: "🇬🇧", what: "Collaborative note card tool with AI assist for building a knowledge base", raised: "$1M", website: "https://supernotes.app" },
      { name: "Knovigator", flag: "🇮🇳", what: "AI knowledge management platform for Indian enterprise and research teams", website: "https://knovigator.com" }
    ]
  },
  {
    id: "claude-3-5-sonnet-jun-2024",
    date: "Jun 20, 2024",
    isoDate: "2024-06-20",
    title: "Claude 3.5 Sonnet — Opus-level at Sonnet speed",
    category: "Model",
    summary: "Claude 3.5 Sonnet outperforms Claude 3 Opus — Anthropic's previous best model — at one-fifth the cost and twice the speed. A generational leap in price-performance. Artifacts launches as a preview: code and documents rendered live in a side panel for the first time.",
    killed: [
      "The need to pay Opus-tier prices for Opus-level quality",
      "GPT-4o's lead on coding and instruction-following benchmarks",
      "The idea that better = slower and more expensive"
    ],
    links: [
      { label: "Introducing Claude 3.5 Sonnet", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-3-5-sonnet" },
      { label: "Claude 3.5 Sonnet benchmark breakdown", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Claude+3.5+Sonnet" }
    ],
    vibes: [
      { label: "Excited", pct: 76 },
      { label: "Skeptical", pct: 10 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "OpenAI GPT-4o", flag: "🇺🇸", what: "OpenAI's flagship multimodal model for chat, vision, and coding tasks", website: "https://openai.com/gpt-4o" },
      { name: "Mistral Large", flag: "🇫🇷", what: "Mistral's top-tier frontier model competing on coding and reasoning", raised: "$1.07B", website: "https://mistral.ai" },
      { name: "Cohere Command R+", flag: "🇨🇦", what: "Enterprise-focused LLM with RAG and tool use for business use cases", raised: "$270M", website: "https://cohere.com" },
      { name: "Jasper AI", flag: "🇺🇸", what: "AI content writing platform built on top of GPT-4 for marketing teams", raised: "$131M", website: "https://jasper.ai" },
      { name: "Copy.ai", flag: "🇺🇸", what: "AI copywriting tool for marketing content, blogs, and sales copy", raised: "$13.9M", website: "https://copy.ai" },
      { name: "Writesonic", flag: "🇮🇳", what: "AI writing assistant for blogs, ads, and marketing content creation", raised: "$2.6M", website: "https://writesonic.com" },
      { name: "Rytr", flag: "🇮🇳", what: "Budget AI writing tool popular among Indian freelancers and SMBs", website: "https://rytr.me" },
      { name: "Scalenut", flag: "🇮🇳", what: "AI-powered SEO content platform for Indian content and marketing teams", raised: "$3.1M", website: "https://scalenut.com" }
    ]
  },
  {
    id: "claude-3-mar-2024",
    date: "Mar 4, 2024",
    isoDate: "2024-03-04",
    title: "Claude 3 — multimodal, and the world's best",
    category: "Model",
    summary: "The Claude 3 family launches: Haiku (fastest), Sonnet (balanced), Opus (smartest). Claude 3 Opus becomes the top-ranked model globally, beating GPT-4 on most benchmarks. First Claude models with vision — images, charts, and documents are now inputs, not just text.",
    killed: [
      "GPT-4's 12-month reign as the world's best AI model",
      "Separate OCR and document processing pipelines for image understanding",
      "The idea that open models could match frontier closed models"
    ],
    links: [
      { label: "Introducing the Claude 3 model family", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-3-family" },
      { label: "Claude 3 Opus tops GPT-4 on every benchmark", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Claude+3+Opus+GPT-4" }
    ],
    vibes: [
      { label: "Excited", pct: 74 },
      { label: "Skeptical", pct: 12 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "OpenAI GPT-4", flag: "🇺🇸", what: "OpenAI's then-best model and the benchmark every AI was measured against", website: "https://openai.com" },
      { name: "Google Gemini Ultra", flag: "🇺🇸", what: "Google's flagship multimodal AI model competing for the #1 benchmark spot", website: "https://gemini.google.com" },
      { name: "Cohere", flag: "🇨🇦", what: "Enterprise LLM platform offering text and embedding APIs for businesses", raised: "$270M", website: "https://cohere.com" },
      { name: "AI21 Labs", flag: "🇮🇱", what: "LLM provider with Jurassic models for enterprise text tasks", raised: "$208M", website: "https://ai21.com" },
      { name: "Luminous (Aleph Alpha)", flag: "🇩🇪", what: "European sovereign AI model for enterprise compliance use cases", raised: "$500M", website: "https://aleph-alpha.com" },
      { name: "Haptik", flag: "🇮🇳", what: "Conversational AI on older model APIs, disrupted by Claude 3's capability jump", raised: "$100M", website: "https://haptik.ai" },
      { name: "Krutrim", flag: "🇮🇳", what: "India's first AI unicorn — needed to compete with a suddenly much stronger Claude 3", raised: "$50M", website: "https://olakrutrim.com" }
    ]
  },
  {
    id: "claude-2-1-nov-2023",
    date: "Nov 21, 2023",
    isoDate: "2023-11-21",
    title: "Claude 2.1 — 200K context and tool use",
    category: "Model",
    summary: "Claude 2.1 doubles the context window to 200,000 tokens — the largest of any model at the time. That's ~150,000 words: an entire novel, full codebase, or a year of meeting transcripts in one prompt. Hallucinations drop by 50% and beta tool use (function calling) arrives.",
    killed: [
      "GPT-4's 32K context window as the industry high watermark",
      "Chunking long documents into multiple Claude conversations",
      "The need for separate function-calling APIs from OpenAI"
    ],
    links: [
      { label: "Introducing Claude 2.1", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-2-1" },
      { label: "200K context window reactions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=200k+context+window" }
    ],
    vibes: [
      { label: "Excited", pct: 70 },
      { label: "Skeptical", pct: 16 },
      { label: "Mind-blown", pct: 14 }
    ],
    killedCompanies: [
      { name: "Reducto", flag: "🇺🇸", what: "Document parsing API that chunks long PDFs for LLM consumption", raised: "$5M", website: "https://reducto.ai" },
      { name: "LlamaIndex", flag: "🇺🇸", what: "Framework for connecting LLMs to long documents via chunking and RAG", raised: "$8.5M", website: "https://llamaindex.ai" },
      { name: "Unstructured", flag: "🇺🇸", what: "Data preprocessing library for turning PDFs and docs into LLM inputs", raised: "$25M", website: "https://unstructured.io" },
      { name: "Docugami", flag: "🇺🇸", what: "AI document engineering platform for turning long contracts into insights", raised: "$10M", website: "https://docugami.com" },
      { name: "AskYourPDF", flag: "🇬🇧", what: "Chat with any PDF using AI retrieval — 10M+ users at peak", website: "https://askyourpdf.com" },
      { name: "ChatDOC", flag: "🇺🇸", what: "AI document reader that answers questions from uploaded PDFs", website: "https://chatdoc.com" },
      { name: "Doclime", flag: "🇮🇳", what: "AI document Q&A tool popular with Indian legal and finance teams", website: "https://doclime.com" }
    ]
  },
  {
    id: "claude-2-jul-2023",
    date: "Jul 11, 2023",
    isoDate: "2023-07-11",
    title: "Claude 2 — and claude.ai opens to everyone",
    category: "Model",
    summary: "Claude 2 launches with a 100K token context window — 10x the competition at the time. Claude.ai opens as a free consumer product in the US and UK, giving anyone access without a waitlist. Coding and reasoning scores jump dramatically from Claude 1.",
    killed: [
      "ChatGPT's monopoly as the only AI chatbot with mass consumer access",
      "Document and codebase size limits that made AI impractical for real work",
      "The argument that Anthropic was purely an API-only company"
    ],
    links: [
      { label: "Introducing Claude 2", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/claude-2" },
      { label: "Claude 2 launch — TechCrunch", source: "TechCrunch", type: "news", url: "https://techcrunch.com/2023/07/11/anthropic-releases-claude-2-the-second-generation-of-its-ai-chatbot/" },
      { label: "Claude 2 vs GPT-4 reactions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Claude+2+launch" }
    ],
    vibes: [
      { label: "Excited", pct: 72 },
      { label: "Skeptical", pct: 16 },
      { label: "Mind-blown", pct: 12 }
    ],
    killedCompanies: [
      { name: "ChatGPT (OpenAI)", flag: "🇺🇸", what: "The only AI chatbot with mass public adoption before Claude.ai launched", website: "https://chat.openai.com" },
      { name: "Character.ai", flag: "🇺🇸", what: "AI character roleplay platform that led consumer AI before Claude.ai", raised: "$150M", website: "https://character.ai" },
      { name: "Poe (Quora)", flag: "🇺🇸", what: "Multi-model AI chat platform that was the primary Claude access point before claude.ai", website: "https://poe.com" },
      { name: "Phind", flag: "🇺🇸", what: "Developer-focused AI search that briefly filled the gap before Claude's code skills leap", raised: "$6M", website: "https://phind.com" },
      { name: "Perplexity AI", flag: "🇺🇸", what: "AI search competitor whose 4K context limit felt small after Claude's 100K", raised: "$520M", website: "https://perplexity.ai" },
      { name: "Kuki Chatbot", flag: "🇬🇧", what: "Award-winning conversational AI chatbot made irrelevant by smarter LLMs", website: "https://kuki.ai" },
      { name: "Haptik", flag: "🇮🇳", what: "Indian conversational AI that faced direct competition as Claude.ai went global", raised: "$100M", website: "https://haptik.ai" }
    ]
  },
  {
    id: "claude-1-mar-2023",
    date: "Mar 14, 2023",
    isoDate: "2023-03-14",
    title: "Claude 1 — Anthropic enters the arena",
    category: "Model",
    summary: "Claude launches via API to select partners. Two model tiers from day one: Claude (powerful, thoughtful) and Claude Instant (fast, affordable). Built from the ground up with Constitutional AI — a new approach to alignment. The AI safety company that trained former OpenAI researchers had arrived.",
    killed: [
      "OpenAI's position as the only credible AI lab for serious enterprise use",
      "The assumption that safety and capability are at odds",
      "Smaller GPT-3 fine-tuning startups that couldn't match Claude's reasoning"
    ],
    links: [
      { label: "Introducing Claude", source: "Anthropic", type: "announcement", url: "https://www.anthropic.com/news/introducing-claude" },
      { label: "Claude 1 launch — first reactions", source: "Reddit", type: "reddit", url: "https://www.reddit.com/r/ClaudeAI/search/?q=Claude+launch+2023" }
    ],
    vibes: [
      { label: "Excited", pct: 64 },
      { label: "Skeptical", pct: 24 },
      { label: "Mind-blown", pct: 12 }
    ],
    killedCompanies: [
      { name: "Copy.ai", flag: "🇺🇸", what: "AI writing platform built on GPT-3 for marketing copy and content", raised: "$13.9M", website: "https://copy.ai" },
      { name: "Jasper AI", flag: "🇺🇸", what: "AI content generation platform for enterprise marketing teams", raised: "$131M", website: "https://jasper.ai" },
      { name: "Writesonic", flag: "🇮🇳", what: "AI writing assistant for blogs, ads, and marketing content", raised: "$2.6M", website: "https://writesonic.com" },
      { name: "Rytr", flag: "🇮🇳", what: "Budget AI writer popular among Indian content creators and agencies", website: "https://rytr.me" },
      { name: "Simplified AI", flag: "🇮🇳", what: "All-in-one AI content tool for Indian creators and social media teams", raised: "$7M", website: "https://simplified.com" },
      { name: "Peppertype AI", flag: "🇮🇳", what: "AI content generator from Pepper Content, focused on Indian marketers", raised: "$4.2M", website: "https://peppertype.ai" },
      { name: "Contentbot", flag: "🇿🇦", what: "GPT-3-based content writing bot for marketers and bloggers", website: "https://contentbot.ai" }
    ]
  }
]
