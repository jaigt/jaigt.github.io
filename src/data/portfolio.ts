export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: { github?: string; live?: string; website?: string };
  image?: string;
  imageAlt?: string;
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
      { when: "now", what: "MS in AI · Finance & Operations" },
      { when: "always", what: "tinkering..." },
      { when: "'24–'26", what: "AI enablement at Ally Financial" },
    ],
    inputHint: "scroll down to see the work",
    statusPrefix: "⏵⏵ read-only mode",
  },
  manifesto: [
    "I build with AI — agents, the tools they use, and the interfaces we use to interact with them.",
    "I have a passion for Finance — markets, investing, research. I enjoy exploring the intersection of AI and Finance.",
    "I spent two and a half years at Ally Financial building the platforms that let a large organization adopt generative AI: an enablement portal, multi-provider LLM APIs, agents and skills, and more.",
    "Now I'm pursuing an MS in AI, concentrating in Finance & Operations, while building and learning new things.",
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
          'A weekday agent reads my watchlist and thesis files, pulls live data through my own Schwab MCP server, and reports how far each name sits from its margin-of-safety entry — with the discipline to say "nothing to do today."',
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
      items: ["Python", "TypeScript", "Learning: Lua", "Learning: Rust"],
    },
    {
      category: "AI & Agents",
      items: ["Claude", "MCP", "Skills", "Safety & Guardrails"],
    },
    {
      category: "Platform & Cloud",
      items: ["AWS", "Terraform", "Apigee", "CI/CD", "Process Automation"],
    },
  ],
  projects: [
    {
      title: "schwab-mcp",
      description:
        "An MCP server connecting a Charles Schwab portfolio to AI agents: 12 read-only tools for positions, balances, transactions, orders, quotes, price history, and fundamentals. Implements the Schwab OAuth flow with token-health monitoring and an account selector that resolves nicknames without ever exposing full account numbers.",
      tags: ["Python", "FastMCP"],
      links: { github: "https://github.com/jaigt/schwab-mcp" },
      image: "/projects/schwab-mcp.webm",
      imageAlt:
        "An AI agent calling schwab-mcp tools and receiving portfolio data",
    },
    {
      title: "GenUI",
      description:
        "A framework for software that reshapes its own interface around each user. An LLM writes a bespoke React component per user — gated by an import allowlist, strict typecheck, compile, and render test — then hot-loads it with the developer's UI as permanent fallback.",
      tags: ["TypeScript", "React", "Claude API", "esbuild"],
      links: { github: "https://github.com/jaigt/generative-ui" },
      image: "/projects/genui.mp4",
      imageAlt:
        "GenUI demo: the same app rendering different model-written interfaces per user",
    },
    {
      title: "GenGuardX MCP Server",
      description:
        "The MCP server that lets AI agents operate within GenGuardX, Corridor Platforms' GenAI-governance platform: tools to create prompts, entire pipelines, evaluations, and monitoring dashboards, accelerating AI application development and iteration within GenGuardX. Merged into production.",
      tags: ["Python", "MCP SDK v2", "FastAPI"],
      links: { website: "https://genguardx.ai/" },
    },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/jaigt", handle: "@jaigt" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jaigt/",
      handle: "in/jaigt",
    },
    { label: "X", url: "https://x.com/jaigt_", handle: "@jaigt_" },
  ],
};
