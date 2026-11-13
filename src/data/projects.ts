import { projectTech as t } from "@/data/tech";
import type { TechItem } from "@/data/tech";

export type ProjectCategory = "AI" | "Full-Stack" | "Automation";

export interface DeepDiveTab {
  id: string;
  label: string;
  title: string;
  summary: string;
  points: string[];
}

export interface Project {
  slug: string;
  name: string;
  imgSrc: string;
  description: string;
  category: ProjectCategory;
  /** Short role / context line shown on the detail page. */
  role: string;
  techStack: TechItem[];
  liveLink?: string;
  githubLink?: string;
  about: string;
  features: string[];
  /** Optional tabbed deep-dive (used for the larger platform case study). */
  deepDive?: DeepDiveTab[];
  /** Appears in the homepage featured strip. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "orbitlabx",
    name: "OrbitLabX",
    imgSrc: "/projects/orbitlabx.jpg",
    category: "AI",
    role: "Full Stack & AI Engineer · Feb 2026 – Present · Remote",
    description:
      "An AI-driven global mobility intelligence platform for digital nomads and expats: location data, a live intelligence feed, a community and an agentic AI assistant in one product.",
    about:
      "OrbitLabX helps people decide where to live, work and travel. I led the frontend architecture for the MVP in Next.js, then widened into the data and AI layers: dashboards for proprietary metrics, crowdsourced reviews and ratings, and an agentic assistant (Vaino AI) that answers relocation questions with real-time context. The source is private, so this page describes the product and my part in it, not the code.",
    features: [
      "Location intelligence: explore, compare and score cities and countries, with cost-of-living calculators, indices and a clustered interactive map",
      "Orbit Intel: a news, OSINT and GEOINT feed fed by a multi-source pipeline (search, LLM editing, embedding-based dedup, structured event feeds)",
      "Vaino AI: a streaming conversational assistant with persistent sessions, built around agentic workflows",
      "Community: hubs with chat, groups, events, member profiles, posts and direct messages",
      "Travel tools: flights, hotels, taxis and tours with usage quotas",
      "Platform: Stripe memberships, Supabase auth and onboarding, role-based dashboards, an article editor and PostHog/GA4 analytics",
    ],
    deepDive: [
      {
        id: "product",
        label: "Product",
        title: "One place to decide where to live",
        summary:
          "The core product turns scattered relocation research into comparable, scored data.",
        points: [
          "Explore and compare pages for cities and countries with side-by-side metrics",
          "Cost-of-living calculator with city and country pages and a published methodology",
          "Indices for proprietary metrics, shown in data-rich dashboards",
          "Interactive map with marker clustering built on MapLibre",
        ],
      },
      {
        id: "ai",
        label: "AI",
        title: "Vaino AI and agentic workflows",
        summary:
          "A conversational layer that answers with context instead of generic advice.",
        points: [
          "Agentic workflows (LangChain, Agno) behind a conversational UI",
          "Server-sent-event streaming, persistent chat sessions and history",
          "Multi-LLM orchestration across providers, so the model can change without rewriting the product",
          "Real-time, context-aware travel and relocation insights",
        ],
      },
      {
        id: "data",
        label: "Data",
        title: "Orbit Intel pipeline",
        summary:
          "Machine-sourced signals and editorial news share one record type, so the feed, map and AI read the same data.",
        points: [
          "Search and LLM editing for news, with semantic dedup against recent articles",
          "Structured event adapters (earthquakes, wildfires, disasters, advisories, RSS)",
          "Severity and confidence indicators with multi-source corroboration",
          "FastAPI and Supabase APIs tuned for low-latency fetching and state management",
        ],
      },
      {
        id: "community",
        label: "Community",
        title: "Crowdsourced data and social layer",
        summary:
          "Reviews, ratings and discussions give the platform data no scraper can supply.",
        points: [
          "Reviews, ratings and discussions that feed the metrics",
          "Hubs with real-time chat, groups and events",
          "Member profiles, saved items and direct messages",
        ],
      },
      {
        id: "platform",
        label: "Platform",
        title: "Shipping it as a real product",
        summary:
          "The unglamorous work that makes an MVP something people can pay for and rely on.",
        points: [
          "Stripe subscriptions and billing management",
          "Supabase authentication, invites and onboarding flows",
          "Role-based dashboards for different admin and partner types",
          "PostHog and GA4 instrumentation, plus legal and policy pages",
        ],
      },
    ],
    techStack: [t.nextjs, t.react, t.typescript, t.tailwindcss, t.fastapi, t.supabase, t.langchain, t.agno, t.stripe, t.maplibre, t.posthog],
    liveLink: "https://orbitlabx.com",
    featured: true,
  },
  {
    slug: "bbdc-slot-finder",
    name: "BBDC Slot Finder",
    imgSrc: "/projects/bbdc-slot-finder.jpg",
    category: "Automation",
    role: "Solo project · Python automation",
    description:
      "A real-time appointment monitor and auto-booking bot with concurrent browser sessions, AI-assisted CAPTCHA solving and instant alerts.",
    about:
      "Booking slots at a popular centre means refreshing a page for days. This bot watches for openings, grabs them the moment they appear and keeps working through logouts and failures. It runs several browser sessions at once, keeps its login alive and has a small desktop GUI to control it.",
    features: [
      "Concurrent multi-session browser automation with Playwright and persistent authentication",
      "AI-assisted CAPTCHA recognition through the OpenAI API",
      "Retry logic and session recovery so a dropped login or failed step does not end the run",
      "Date selection logic to target preferred slots, with instant Telegram notifications",
      "Modular design: separate workers, CAPTCHA, date-selection, logging and notifier modules",
      "Desktop GUI manager for starting and stopping sessions",
    ],
    techStack: [t.python, t.playwright, t.openai],
    githubLink: "https://github.com/MannanJaffery/BBDC-Automation-Bot",
    featured: true,
  },
  {
    slug: "bloomqueue",
    name: "BloomQueue",
    imgSrc: "/projects/bloomqueue.jpg",
    category: "Full-Stack",
    role: "Founder-style SaaS build · May – Aug 2025",
    description:
      "An AI-powered idea validation platform: generate a landing page, collect a waitlist, then read the market before spending money.",
    about:
      "BloomQueue lets a founder test an idea before building it. It generates a landing page, collects waitlist sign-ups with real-time state sync, and adds AI tools for market estimation, idea scoring and risk analysis. Paid plans run on Stripe subscriptions.",
    features: [
      "AI-assisted landing page generation for business ideas",
      "Waitlist capture with real-time state synchronization",
      "Stripe subscription billing and recurring payments",
      "Analytics dashboards showing sign-up traction",
      "AI tools for market estimation, idea scoring and risk analysis",
    ],
    techStack: [t.react, t.javascript, t.tailwindcss, t.firebase, t.stripe],
    liveLink: "https://bloomqueue.com",
    githubLink: "https://github.com/MannanJaffery/AI-Powered-MVP-Site-Builder",
    featured: true,
  },
  {
    slug: "civicpulse",
    name: "CivicPulse",
    imgSrc: "/projects/civicpulse.jpg",
    category: "Full-Stack",
    role: "Personal project · Platform and DevOps",
    description:
      "AI-assisted municipal complaint intake and triage, built to run reliably: containers, probes, metrics and CI/CD.",
    about:
      "CivicPulse accepts citizen complaints, triages them with a pluggable provider (LLM, local model or rule-based fallback) and gives operators a dashboard. It is as much a DevOps exercise as a product: health and readiness probes, Prometheus metrics, rate limiting and immutable deploys.",
    features: [
      "Triage provider interface with Groq/Gemini, Ollama and rule-based fallback, so an LLM outage never blocks intake",
      "Explicit status state machine; invalid transitions return 409",
      "Redis caching and rate limiting, Prometheus metrics, liveness and readiness probes",
      "Docker Compose quickstart and Kubernetes manifests with autoscaling (HPA/VPA)",
      "GitHub Actions CI/CD with deploys pinned to a commit SHA, plus ADRs and a runbook",
    ],
    techStack: [t.python, t.fastapi, t.react, t.postgresql, t.redis, t.docker, t.kubernetes, t.githubactions, t.nginx],
    githubLink: "https://github.com/MannanJaffery/civicpulse-platform",
    featured: true,
  },
  {
    slug: "online-chess",
    name: "Online Chess",
    imgSrc: "/projects/online-chess.jpg",
    category: "Full-Stack",
    role: "Solo project · Real-time multiplayer",
    description:
      "A multiplayer chess platform with matchmaking, pass-and-play and a custom rules engine.",
    about:
      "A full chess game in React with Firebase for matchmaking and sync. Moves reach the other player with low latency, and a custom validation engine enforces the rules so illegal moves never reach the server state.",
    features: [
      "Online multiplayer and pass-and-play modes",
      "Custom move validation: check, checkmate, castling, en passant and stalemate",
      "Low-latency move sync and game state persistence on Firebase Realtime Database",
      "Backend state manager that rejects illegal moves",
    ],
    techStack: [t.react, t.javascript, t.firebase, t.tailwindcss],
    liveLink: "https://chessonline-ten.vercel.app",
    githubLink: "https://github.com/MannanJaffery/Online-Chess",
    featured: true,
  },
  {
    slug: "disaster-response-mis",
    name: "Disaster Response MIS",
    imgSrc: "/projects/disaster-response-mis.jpg",
    category: "Full-Stack",
    role: "Database systems project",
    description:
      "An AI-powered information system for high-volume emergency reporting, resource allocation and rescue coordination.",
    about:
      "A management information system built around the database: SQL Server schema with triggers, indexes and views, a FastAPI backend with JWT auth and role-based access, and a Next.js dashboard for emergencies, finance, analytics and audit trails.",
    features: [
      "Role-based access control with JWT authentication",
      "SQL Server schema with triggers, indexes and views for high-volume reports",
      "Dashboards for emergencies, resource allocation, finance and analytics",
      "Audit log of sensitive actions",
    ],
    techStack: [t.nextjs, t.typescript, t.python, t.fastapi, t.sqlserver],
    githubLink: "https://github.com/MannanJaffery/AI-Powered-Disaster-Response-MIS",
  },
  {
    slug: "halal-restaurant-finder",
    name: "Halal Restaurant Finder",
    imgSrc: "/projects/halal-restaurant-finder.jpg",
    category: "Full-Stack",
    role: "Trainee task · Frontend",
    description:
      "A map-based discovery app for halal restaurants across Finland, driven by a Google Sheets data source.",
    about:
      "A React and Vite app with a split map-and-list view. Restaurant data comes from a Google Sheet published as CSV, so the owner can update listings without touching code.",
    features: [
      "Interactive Leaflet map with custom pins and a floating detail popup",
      "Live search and cuisine filter chips",
      "Favourites and recently viewed, stored locally",
      "Detail pages with opening hours, location and a halal status badge",
      "Light and dark mode",
    ],
    techStack: [t.react, t.vite, t.tailwindcss, t.leaflet, t.framermotion],
    liveLink: "https://halal-restaurant-finder-rho.vercel.app",
    githubLink: "https://github.com/MannanJaffery/Halal-Restaurant-Finder",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);
