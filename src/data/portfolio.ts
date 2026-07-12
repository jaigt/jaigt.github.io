export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: { github?: string; live?: string };
  image?: string;
  imageAlt?: string;
  featured?: boolean;
};

export type SocialLink = {
  label: string;
  url: string;
  handle?: string;
};

export type Portfolio = {
  name: string;
  role: string;
  location: string;
  headline: { lines: string[]; accent: string };
  subhead: { primary: string; secondary: string };
  terminal: {
    version: string;
    modelLine: string;
    recentActivity: { when: string; what: string }[];
    inputHint: string;
    statusPrefix: string;
  };
  manifesto: string[];
  bio: string;
  email: string;
  aiWorkflow: {
    title: string;
    intro: string;
    items: { name: string; description: string }[];
    outro: string;
  };
  skills: { category: string; items: string[] }[];
  projects: Project[];
  socials: SocialLink[];
};

export const portfolio: Portfolio = {
  name: "Jai Gupta",
  role: "Applied AI",
  location: "New York",
  headline: {
    lines: ["I build agents,", "MCPs & "],
    accent: "tools.",
  },
  subhead: {
    primary: "MS student in AI, concentrating in Finance & Operations.",
    secondary: "Based in New York.",
  },
  terminal: {
    version: "agent-harness v1.0.0",
    modelLine: "jai-4 · applied-ai · /users/jai/nyc",
    recentActivity: [
      { when: "loading…", what: "MS in AI · Finance & Operations" },
      { when: "now", what: "building tools in the open" },
      { when: "'24–'26", what: "AI enablement at an enterprise bank" },
    ],
    inputHint: "scroll down to see the work",
    statusPrefix: "⏵⏵ read-only mode",
  },
  manifesto: [
    "I build with AI — agents that use tools, interfaces that adapt to their users, systems that verify their own work.",
    "Finance is the passion I keep coming back to: markets, primary sources, numbers that carry citations. When AI and finance intersect, that's my favorite place to build — but I'll happily chase a good idea anywhere.",
    "I spent three years at an enterprise bank building the platforms that let a large organization adopt generative AI: an enablement portal, model sandboxes, multi-provider LLM APIs, and an internal agentic framework.",
    "Now I'm pursuing an MS in AI, concentrating in Finance & Operations, and building tools in the open.",
  ],
  bio: "I build agents, interfaces, and tools — often where AI meets finance.",
  email: "jaigupta2024@gmail.com",
  aiWorkflow: {
    title: "AI as a daily operating system",
    intro:
      "Beyond building AI tools, I run my life on them. A fleet of scheduled Claude agents handles my investing research and news:",
    items: [
      {
        name: "Morning market brief",
        description:
          "A weekday agent reads my watchlist and thesis files, pulls live data through my own Schwab MCP server, and reports how far each name sits from its margin-of-safety entry — with the discipline to say \"nothing to do today.\"",
      },
      {
        name: "Earnings reviews & price watches",
        description:
          "One-time agents review earnings prints against my written thesis, then arm recurring after-close price watches through a shared config.",
      },
      {
        name: "Daily news briefing",
        description:
          "An agent compiles a world-news brief every morning, deduplicated against yesterday's, and saves it to my Obsidian vault — which syncs straight to my phone.",
      },
    ],
    outro:
      "Everything writes to plain-markdown files I own. The agents inform decisions; I make them.",
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "TypeScript"],
    },
    {
      category: "AI & Agents",
      items: ["Claude", "MCP", "RAG"],
    },
    {
      category: "Frameworks & Tools",
      items: ["React", "Vite"],
    },
  ],
  projects: [
    {
      title: "GenUI",
      description:
        "A framework for software that reshapes its own interface around each user. An LLM writes a bespoke React component per user — gated by an import allowlist, strict typecheck, compile, and render test — then hot-loads it with the developer's UI as permanent fallback.",
      tags: ["TypeScript", "React", "Claude API", "esbuild"],
      links: { github: "https://github.com/jaigt/generative-ui" },
      image: "/projects/genui.mp4",
      imageAlt: "GenUI demo: the same app rendering different model-written interfaces per user",
      featured: true,
    },
    {
      title: "Mosaic",
      description:
        "An autonomous equity-research analyst over SEC filings. Fetches filings from EDGAR on demand, answers with cited figures and generative charts, tracks insider and superinvestor activity, and self-verifies every number against its sources. Read the filings, not the headlines.",
      tags: ["Python", "FastAPI", "LanceDB", "React"],
      links: { github: "https://github.com/jaigt/mosaic" },
      image: "/projects/mosaic.webm",
      imageAlt: "Mosaic answering an equity research question with cited figures",
      featured: true,
    },
    {
      title: "schwab-mcp",
      description:
        "A Model Context Protocol server that connects a Schwab portfolio to an AI agent — read-only positions, balances, transactions, and live market data.",
      tags: ["Python", "MCP"],
      links: { github: "https://github.com/jaigt/schwab-mcp" },
      image: "/projects/schwab-mcp.webm",
      imageAlt: "An AI agent calling schwab-mcp tools and receiving portfolio data",
    },
    {
      title: "Pit Wall",
      description:
        "A real-time F1 race strategy game. A deterministic, pure-TypeScript sim engine plays out each lap against AI rivals while you call tyres, pit timing, and weather gambles on a PixiJS track map.",
      tags: ["TypeScript", "PixiJS", "Zustand"],
      links: { github: "https://github.com/jaigt/race" },
      image: "/projects/pitwall.webm",
      imageAlt: "Pit Wall race simulation with live track map and strategy calls",
    },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/jaigt", handle: "@jaigt" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jaigupta2002/", handle: "in/jaigupta2002" },
  ],
};
