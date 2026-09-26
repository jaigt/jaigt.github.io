export type ResumeRole = {
  title: string;
  period: string;
  bullets: string[];
};

export type ResumeEntry = {
  org: string;
  location?: string;
  roles: ResumeRole[];
};

export type Resume = {
  summary: string;
  experience: ResumeEntry[];
  education: {
    school: string;
    location: string;
    degree: string;
    period: string;
    details: string[];
  }[];
  projects: {
    project: string;
    source: string;
    details: string;
    tools: string[];
  }[];
  certificates: string[];
  skills: { label: string; items: string[] }[];
};

export const resume: Resume = {
  summary:
    "M.S. in Artificial Intelligence candidate at Columbia University, concentrating in Finance & Operations, with over two years of prior experience building production AI platforms in the financial industry. Shipped multi-provider LLM APIs, RAG pipelines, and agentic tooling behind 200+ generative AI experiments that led to 10+ production use cases. Seeking a Summer 2027 AI internship.",
  experience: [
    {
      org: "Ally Financial",
      location: "Charlotte, NC",
      roles: [
        {
          title: "Software Engineer, AI Enablement",
          period: "January 2025 – May 2026",
          bullets: [
            "Developed a custom agent to assist migration of the AI Enablement Portal codebase from Vue to React. Hill-climbed prompts and customized tools to deliver a rewrite in 3 two-week sprints instead of a manual process that would have taken over 6 sprints.",
            "Automated Apigee onboarding, replacing error-prone manual app creation and hand-whitelisting with automatic app provisioning on submission, cutting the idea-to-experimentation timeline from 1-2 weeks to 1-2 days.",
            "Designed and built the AI Enablement Portal, a central hub for GenAI adoption at Ally, unifying sandbox experimentation, platform health status, and enterprise agent and model registries serving 60+ teams.",
            "Built a runbook-automation agent as both a Claude skill and a LangGraph agent; the Claude skill was released for organization-wide use.",
            "Authored sandbox guides and tutorials for teams new to AI, including a build-your-first-RAG walkthrough that lowered the barrier to a team's first GenAI experiment.",
            "Engineered a status dashboard monitoring API uptime across Development, QA, and Sandbox tiers, replacing manual downtime updates with self-serve visibility.",
          ],
        },
        {
          title: "Associate Engineer, AI Enablement",
          period: "January 2024 – January 2025",
          bullets: [
            "Refactored the LLM API architecture into a multi-provider design, integrating OpenAI and Anthropic models behind a single interface so future providers plug in without downstream changes.",
            "Developed the AI Sandbox APIs enabling model-risk and compliance-approved enterprise-wide GenAI experimentation, supporting 200+ experiments and 10+ production use cases.",
          ],
        },
        {
          title: "AI & Analytics Summer Intern",
          period: "May 2023 – August 2023",
          bullets: [
            "Researched how to improve cost and compute efficiency of LLM deployments by best-fitting them based on the complexity of the task.",
            "Worked with a team of machine learning engineers to build an enterprise-wide platform hosting ML models for data scientists.",
          ],
        },
      ],
    },
    {
      org: "Axle Informatics",
      location: "Remote",
      roles: [
        {
          title: "Data Science Trainee",
          period: "June 2022 – August 2022",
          bullets: [
            "Worked on COVID-19 and cancer research projects, extracting raw data, applying data transformation and quality rules to standardize and publish to a data lake. Used modeling plugins in Python to supply researchers with over 40,000 biological images and data visualizations.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "Columbia University, Fu Foundation School of Engineering and Applied Science",
      location: "New York, NY",
      degree:
        "Master of Science in Artificial Intelligence, Concentration in Finance and Operations",
      period: "Expected December 2027",
      details: [
        "Coursework (Fall 2026): AI for Operations Research & Financial Engineering, Agentic AI, Deep Learning, Natural Language Processing",
      ],
    },
    {
      school: "New York University, Courant Institute of Mathematical Sciences",
      location: "New York, NY",
      degree: "Bachelor of Arts in Computer Science and Data Science",
      period: "January 2024",
      details: [
        "Cumulative GPA: 3.759 · Presidential Honors Scholar",
        "Coursework: Machine Learning, NLP, Advanced Techniques in ML & Deep Learning, Causal Inference, Responsible Data Science",
      ],
    },
  ],
  projects: [
    {
      project: "GenGuardX MCP Server",
      source: "Corridor Platforms · Summer 2026",
      details:
        "Built the Model Context Protocol (MCP) server that lets AI agents operate within Corridor's GenAI-governance platform: built tools to create prompts, entire pipelines, evaluations, and monitoring dashboards, accelerating AI application development and iteration within GenGuardX. Merged into production.",
      tools: ["Python", "MCP SDK v2", "FastAPI"],
    },
    {
      project: "schwab-mcp",
      source: "Open Source",
      details:
        "Built an MCP server connecting a Charles Schwab portfolio to AI agents: 12 read-only tools for positions, balances, transactions, orders, quotes, price history, and fundamentals. Implemented the Schwab OAuth flow with token-health monitoring and an account selector that resolves nicknames without ever exposing full account numbers.",
      tools: ["Python", "FastMCP"],
    },
  ],
  certificates: [
    "Coursera IBM Data Science Professional Certificate — June 2023",
  ],
  skills: [
    {
      label: "Generative AI",
      items: [
        "OpenAI & Anthropic APIs",
        "Agentic Frameworks (MCP, LangGraph, Skills)",
        "Prompt Engineering",
        "RAG",
        "LLM/Prompt Evaluation",
      ],
    },
    {
      label: "Responsible AI & Risk Management",
      items: [
        "Model & Agent Registry",
        "Governed Sandbox Experimentation",
        "AI Guardrails",
      ],
    },
    {
      label: "Engineering & Data",
      items: ["Python", "TypeScript", "React", "SQL", "pandas/NumPy"],
    },
    {
      label: "Cloud & Platform",
      items: [
        "Apigee / API Management",
        "AWS",
        "Terraform",
        "CI/CD",
        "Git",
        "Automation",
      ],
    },
    {
      label: "Languages",
      items: ["English (Native)", "Hindi (Native)", "Korean (Intermediate)"],
    },
  ],
};
