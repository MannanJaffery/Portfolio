export interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
}

const t = {
  react: { name: "React", icon: "/tech/react.svg" },
  nextjs: { name: "Next.js", icon: "/tech/nextdotjs.svg", darkIcon: "/tech/nextdotjs-dark.svg" },
  typescript: { name: "TypeScript", icon: "/tech/typescript.svg" },
  javascript: { name: "JavaScript", icon: "/tech/js.svg" },
  tailwindcss: { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  reactnative: { name: "React Native", icon: "/tech/reactnative.svg" },
  vite: { name: "Vite", icon: "/tech/vite.svg" },
  framermotion: { name: "Framer Motion", icon: "/tech/motion.svg" },
  shadcnui: {
    name: "shadcn/ui",
    icon: "/tech/shadcn-ui-light.svg",
    darkIcon: "/tech/shadcn-ui-dark.svg",
  },
  python: { name: "Python", icon: "/tech/python.svg" },
  fastapi: { name: "FastAPI", icon: "/tech/fastapi.svg" },
  django: { name: "Django", icon: "/tech/django.svg" },
  nodejs: {
    name: "Node.js",
    icon: "/tech/nodejs-light.svg",
    darkIcon: "/tech/nodejs-dark.svg",
  },
  pydantic: { name: "Pydantic", icon: "/tech/pydantic.svg" },
  java: { name: "Java", icon: "/tech/java.svg" },
  cpp: { name: "C++", icon: "/tech/cplusplus.svg" },
  stripe: { name: "Stripe", icon: "/tech/stripe.svg" },
  langchain: { name: "LangChain", icon: "/tech/langchain.svg" },
  langgraph: { name: "LangGraph", icon: "/tech/langgraph.svg" },
  agno: { name: "Agno", icon: "/tech/agno.svg" },
  openai: { name: "OpenAI", icon: "/tech/openai.svg" },
  gemini: { name: "Gemini", icon: "/tech/googlegemini.svg" },
  livekit: { name: "LiveKit", icon: "/tech/livekit.svg", darkIcon: "/tech/livekit-dark.svg" },
  supabase: { name: "Supabase", icon: "/tech/supabase.svg" },
  postgresql: { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  sqlserver: { name: "SQL Server", icon: "/tech/sqlserver.svg" },
  redis: { name: "Redis", icon: "/tech/redis.svg" },
  firebase: { name: "Firebase", icon: "/tech/firebase.svg" },
  dynamodb: { name: "DynamoDB", icon: "/tech/dynamodb.svg" },
  aws: { name: "AWS", icon: "/tech/aws.svg" },
  docker: { name: "Docker", icon: "/tech/docker.svg" },
  kubernetes: { name: "Kubernetes", icon: "/tech/kubernetes.svg" },
  githubactions: { name: "GitHub Actions", icon: "/tech/githubactions.svg" },
  nginx: { name: "Nginx", icon: "/tech/nginx.svg" },
  playwright: { name: "Playwright", icon: "/tech/playwright.svg" },
  selenium: { name: "Selenium", icon: "/tech/selenium.svg" },
  powerbi: { name: "Power BI", icon: "/tech/powerbi.svg" },
  maplibre: { name: "MapLibre", icon: "/tech/maplibre.svg" },
  leaflet: { name: "Leaflet", icon: "/tech/leaflet.svg" },
  posthog: { name: "PostHog", icon: "/tech/posthog.svg" },
  tensorflow: { name: "TensorFlow", icon: "/tech/tensorflow.svg" },
  git: { name: "Git", icon: "/tech/git.svg" },
  github: {
    name: "GitHub",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
  },
  vercel: { name: "Vercel", icon: "/tech/vercel-light.svg", darkIcon: "/tech/vercel-dark.svg" },
} satisfies Record<string, TechItem>;

export const projectTech = t;

/** Hero chips: the short, headline list. */
export const skills: TechItem[] = [t.python, t.typescript, t.nextjs, t.fastapi, t.langchain, t.postgresql];

export const frontendSkills: TechItem[] = [
  t.react,
  t.nextjs,
  t.typescript,
  t.javascript,
  t.reactnative,
  t.tailwindcss,
  t.framermotion,
  t.shadcnui,
];

export const backendSkills: TechItem[] = [
  t.python,
  t.fastapi,
  t.django,
  t.nodejs,
  t.pydantic,
  t.stripe,
  t.java,
  t.cpp,
];

export const aiSkills: TechItem[] = [
  t.langchain,
  t.langgraph,
  t.agno,
  t.openai,
  t.gemini,
  t.livekit,
  t.tensorflow,
];

export const dataCloudSkills: TechItem[] = [
  t.postgresql,
  t.supabase,
  t.firebase,
  t.redis,
  t.dynamodb,
  t.aws,
  t.docker,
  t.kubernetes,
];

export const toolsSkills: TechItem[] = [
  t.playwright,
  t.selenium,
  t.githubactions,
  t.powerbi,
  t.git,
  t.github,
  t.vercel,
];

export const skillRows: { direction: "left" | "right"; category: string; items: TechItem[] }[] = [
  { direction: "left", category: "Frontend", items: frontendSkills },
  { direction: "right", category: "Backend", items: backendSkills },
  { direction: "left", category: "AI & Agents", items: aiSkills },
  { direction: "right", category: "Data & Cloud", items: dataCloudSkills },
  { direction: "left", category: "Automation & Tools", items: toolsSkills },
];
