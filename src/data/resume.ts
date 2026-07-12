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
  certificates: string[];
  skills: { label: string; items: string[] }[];
};

export const resume: Resume = {
  summary:
    "AI Software Engineer who builds the platforms that let a large enterprise adopt Generative AI — internal enablement portals, model sandboxes, agentic frameworks, and multi-provider LLM API infrastructure serving stakeholders across every line of business. Background spanning applied LLM research, data science, and full-stack platform development. NYU Computer Science and Data Science graduate (Presidential Honors Scholar); MS in Artificial Intelligence candidate at Columbia University (2027).",
  experience: [
    {
      org: "Ally Financial",
      roles: [
        {
          title: "AI Software Engineer",
          period: "January 2025 – May 2026",
          bullets: [
            "Architected the AI Enablement Portal — a centralized hub serving internal engineering and data-science teams across lines of business with platform access, experiment tracking, and custom Agent creation via our internal Agentic Framework.",
            "Streamlined API onboarding by automating Apigee application creation and provisioning, significantly reducing the lead time from initial idea to implementation.",
            "Engineered a multi-environment status dashboard to monitor API uptime across Development, QA, and Sandbox tiers, ensuring visibility into availability for internal stakeholders.",
          ],
        },
        {
          title: "AI Associate Engineer",
          period: "January 2024 – January 2025",
          bullets: [
            "Developed AI Sandbox APIs to facilitate enterprise-wide experimentation with Generative AI in a controlled environment.",
            "Refactored existing API architecture to support integration of models from OpenAI, Anthropic, and future providers.",
          ],
        },
        {
          title: "AI & Analytics Intern",
          period: "May 2023 – August 2023",
          bullets: [
            "Researched and implemented large language models (LLMs) to provide insight into cost- and compute-efficient methods of repurposing models for new tasks.",
            "Analyzed benefits and tradeoffs of adopting new tools and services, presented findings to manager and team.",
            "Worked alongside a team of Machine Learning engineers building an enablement platform to host ML models for use by data scientists across all lines of business.",
          ],
        },
      ],
    },
    {
      org: "Axle Informatics",
      roles: [
        {
          title: "Data Science Trainee",
          period: "June 2022 – August 2022",
          bullets: [
            "Worked on COVID-19 and cancer research projects extracting raw data, applying data transformation and data quality rules to standardize, and publishing to data-lake. Used Python to convert images to standardized file format and naming conventions.",
            "Facilitated integration of over 40,000 images of biological data with modeling plugins to supply data visualization workflow to laboratories and researchers.",
          ],
        },
      ],
    },
    {
      org: "EXL Service",
      roles: [
        {
          title: "Data Science Intern",
          period: "June 2019 – July 2019",
          bullets: [
            "Gained proficiency in core concepts of Data Science including Pandas, NumPy, Scikit, and other libraries in Python.",
            "Applied concepts of data cleaning, visualization, regression, and classification to industry datasets.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "Columbia University",
      location: "New York, NY",
      degree: "Master of Science in Artificial Intelligence",
      period: "Expected December 2027 (starting Fall 2026)",
      details: [],
    },
    {
      school: "New York University, Courant Institute of Mathematical Sciences",
      location: "New York, NY",
      degree: "Bachelor of Arts in Computer Science and Data Science",
      period: "January 2024",
      details: [
        "Presidential Honors Scholar",
        "Cumulative GPA: 3.759",
        "Relevant coursework: Machine Learning, Natural Language Processing, Causal Inference, Advanced Techniques in ML and Deep Learning, Responsible Data Science, Processing Big Data for Analytics Applications",
      ],
    },
  ],
  certificates: ["Coursera IBM Data Science Professional Certificate — June 2023"],
  skills: [
    {
      label: "Technical",
      items: [
        "APIs",
        "Apigee",
        "Generative AI",
        "AWS",
        "Prompt Engineering",
        "Python",
        "React.js",
        "Process Automation",
      ],
    },
    { label: "Languages", items: ["English (Native)", "Hindi (Native)", "Korean (Intermediate)"] },
  ],
};
