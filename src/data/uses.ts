export type UseCategory = {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    link?: string;
    tag?: string;
  }[];
};

export const usesData: UseCategory[] = [
  {
    title: "Editor & Environment",
    description: "Where the code gets written.",
    items: [
      {
        name: "Visual Studio Code",
        description: "Main editor for TypeScript, Python and everything in between.",
        link: "https://code.visualstudio.com",
        tag: "Editor",
      },
      {
        name: "Claude Code",
        description: "AI pair for exploring unfamiliar code, planning changes and reviewing diffs. I still read and own every line.",
        link: "https://claude.com/claude-code",
        tag: "AI",
      },
      {
        name: "Git & GitHub",
        description: "Small commits, feature branches and Actions for CI.",
        link: "https://github.com/MannanJaffery",
        tag: "Workflow",
      },
    ],
  },
  {
    title: "Languages & Frameworks",
    description: "The tools I reach for first.",
    items: [
      {
        name: "Python + FastAPI",
        description: "APIs, agents, automation and data pipelines, with Pydantic for validation.",
        link: "https://fastapi.tiangolo.com",
        tag: "Backend",
      },
      {
        name: "TypeScript + Next.js",
        description: "Product frontends with React, Tailwind CSS and shadcn/ui.",
        link: "https://nextjs.org",
        tag: "Frontend",
      },
      {
        name: "PostgreSQL + Supabase",
        description: "Relational data, auth and storage without running everything myself.",
        link: "https://supabase.com",
        tag: "Data",
      },
    ],
  },
  {
    title: "AI & Automation",
    description: "For agents, voice and browser workflows.",
    items: [
      {
        name: "LangChain, LangGraph & Agno",
        description: "Agent orchestration, tool calling and stateful workflows.",
        link: "https://www.langchain.com",
        tag: "Agents",
      },
      {
        name: "LiveKit",
        description: "Real-time voice agents with speech-to-text and text-to-speech.",
        link: "https://livekit.io",
        tag: "Voice",
      },
      {
        name: "Playwright",
        description: "Reliable browser automation with persistent sessions.",
        link: "https://playwright.dev",
        tag: "Automation",
      },
    ],
  },
  {
    title: "Infrastructure",
    description: "Packaging and shipping.",
    items: [
      {
        name: "Docker & Kubernetes",
        description: "Containers for everything, orchestration for learning how production behaves.",
        link: "https://www.docker.com",
        tag: "DevOps",
      },
      {
        name: "Vercel",
        description: "Zero-friction deploys for frontends and serverless functions.",
        link: "https://vercel.com",
        tag: "Hosting",
      },
    ],
  },
];
