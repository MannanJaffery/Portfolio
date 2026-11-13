export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  current?: boolean;
  link?: string;
  highlights: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: "OrbitLabX",
    role: "Full Stack & AI Engineer",
    type: "Remote",
    location: "Miami, Florida",
    period: "Feb 2026 – Present",
    current: true,
    link: "https://orbitlabx.com",
    highlights: [
      "Led frontend architecture for the MVP of a global mobility platform for digital nomads and expats.",
      "Architecting agentic AI workflows with LangChain behind a conversational UI that gives real-time, context-aware relocation insights.",
      "Built data-rich dashboards for proprietary metrics, plus community features (reviews, ratings, discussions) for crowdsourced data.",
      "Integrated external APIs with FastAPI and Supabase, tuning data fetching and state management for low latency.",
    ],
    stack: ["Next.js", "React", "Tailwind", "FastAPI", "Supabase", "LangChain"],
  },
  {
    company: "Vantage Plus",
    role: "AI Engineer Intern",
    type: "Onsite",
    location: "Islamabad, Pakistan",
    period: "Jun 2026 – Aug 2026",
    highlights: [
      "Built multilingual (English/Urdu) AI voice agents with Python and LiveKit, including noise reduction and speech tuning.",
      "Implemented role-based access control across several admin panels of a hierarchical healthcare platform.",
      "Connected the agent backend to the frontend for voice and text, with responses as voice, text, interactive flashcards and Power BI visuals.",
      "Wrote and refined system prompts, learning agent orchestration and Mixture-of-Experts concepts.",
    ],
    stack: ["Python", "LiveKit", "Power BI", "RBAC"],
  },
  {
    company: "Lokal",
    role: "Full-Stack Developer Intern",
    type: "Remote",
    location: "Malaysia",
    period: "Dec 2025 – Feb 2026",
    highlights: [
      "Built and scaled cross-platform features in React Native for a large data codebase.",
      "Designed backend APIs with Django, handling high-concurrency data on AWS DynamoDB.",
      "Improved web admin dashboards and data visualisation tools for internal data management.",
    ],
    stack: ["React Native", "Django", "DynamoDB", "AWS"],
  },
];
