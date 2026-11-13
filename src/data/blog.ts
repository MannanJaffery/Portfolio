export interface JourneyStage {
  label: string;
  title: string;
  detail: string;
}

export interface Blog {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  date: string;
  readTime: string;
  /** Optional visual timeline rendered above the article. */
  timeline?: JourneyStage[];
}

export const blogs: Blog[] = [
  {
    slug: "python-scripts-to-intelligent-systems",
    title: "From Python Scripts to Building Intelligent Systems",
    description:
      "Every technology I explored opened another door. This is how I went from writing my first Python scripts to full-stack products, DevOps and AI engineering.",
    tags: ["Journey", "AI Engineering", "Full-Stack", "DevOps"],
    date: "2026-11-13",
    readTime: "9 min read",
    timeline: [
      { label: "01", title: "Python", detail: "100 Days of Code and browser automation" },
      { label: "02", title: "Web", detail: "HTML, CSS, JavaScript, React, TypeScript" },
      { label: "03", title: "Full-Stack", detail: "FastAPI, PostgreSQL, auth and APIs" },
      { label: "04", title: "Product", detail: "Passport Champs, then Orbit Lab X" },
      { label: "05", title: "DevOps", detail: "Docker, CI/CD and Kubernetes" },
      { label: "06", title: "AI", detail: "LLMs, agents, RAG and voice" },
    ],
    content: `Every technology I explored opened another door. This is the story of how I went from writing my first Python scripts to building full-stack products, exploring DevOps, and eventually diving deep into AI engineering.

## Where It All Started

My programming journey started during my school days.

Like many people getting into programming, I didn't have a perfectly defined career plan. I was simply curious about technology and wanted to understand how things worked behind the scenes. I knew I wanted to build things, automate things, and experiment with software.

My first serious step into programming was through Python. I purchased Angela Yu's **100 Days of Code: The Complete Python Pro Bootcamp**, and that course became my entry point into the world of software development.

I started learning the fundamentals, writing small programs, understanding logic, and experimenting with different possibilities.

But one area particularly caught my attention: **browser automation**.

I became interested in using Python to automate repetitive browser tasks, interact with websites, handle data, and make things happen automatically. It was fascinating to see how a few lines of code could replace something that would otherwise require hours of manual work.

> That experience changed how I looked at programming. I stopped seeing code as just instructions written on a screen and started seeing it as a way to solve real problems.

## Discovering Web Development

After spending time with Python and automation, my curiosity gradually shifted toward web development.

I wanted to understand how websites actually worked, how interfaces were built, and how frontend applications communicated with backend systems.

I started exploring HTML, CSS, JavaScript, and eventually moved into React and TypeScript.

Initially, I was fascinated by the visual side of development. I enjoyed experimenting with layouts, animations, interactions, and building interfaces that felt polished and intuitive.

But frontend development also introduced me to a much bigger ecosystem.

I started exploring APIs, backend architecture, databases, authentication, application state, and how different parts of a software product communicate with one another.

That was when I realized I didn't just want to build interfaces. I wanted to understand and build the entire system behind them.

## Moving Beyond the Frontend

As my understanding of web development grew, I became increasingly interested in backend engineering and full-stack development.

I started working with Python, FastAPI, PostgreSQL, and modern JavaScript frameworks, learning how to design APIs, structure applications, manage databases, and connect different services.

I became particularly interested in how real-world applications are designed beyond the initial prototype.

Authentication, authorization, database relationships, background jobs, API security, deployment environments, and production debugging were no longer just concepts. They became engineering problems I wanted to understand and solve.

I also began exploring different technologies and frameworks instead of limiting myself to one ecosystem.

For me, learning a new technology was never just about adding another item to my tech stack. I wanted to understand why it existed, what problems it solved, and where it made sense to use it.

## My Professional Journey

At some point, learning through personal projects wasn't enough. I wanted to experience how software was built in a professional environment, work with other people, and take responsibility for actual products.

That led me into my professional journey.

My experience with **Passport Champs**, which later evolved into **Orbit Lab X**, became an important part of my growth as an engineer.

Working on a real product exposed me to challenges that tutorials rarely prepare you for:

| What tutorials teach | What a real product teaches |
| --- | --- |
| Happy-path features | Production deployments and rollbacks |
| One user, one machine | Authentication issues and real users |
| Fresh databases | Database migrations on live data |
| Mocked services | Third-party integrations and payment systems |
| A single env file | Environment management across stages |

I worked across frontend and backend systems, contributed to product architecture, integrated services, and explored how AI-powered intelligence could become part of a larger platform.

Eventually, I became involved in building Orbit Lab X, an AI-driven global mobility intelligence platform.

This experience pushed me beyond conventional full-stack development. I started thinking more about data pipelines, system reliability, application scalability, and how different technologies could work together to deliver something genuinely useful.

> It also taught me an important lesson: building a product is very different from simply building a project.

## The Infrastructure Rabbit Hole: Docker, DevOps & Kubernetes

As I started working with larger applications, another question kept coming up:

**How do you actually run, deploy, manage, and scale all these systems reliably?**

That question introduced me to DevOps.

I started exploring Linux, Docker, containerization, CI/CD pipelines, deployment workflows, and infrastructure automation.

Docker particularly changed how I thought about application development. The idea of packaging an application and its dependencies into a consistent environment made deployment much easier to understand.

From there, I became interested in Kubernetes, container orchestration, and how distributed applications operate in production environments.

I explored the broader infrastructure ecosystem, learning how development and operations come together.

I don't think of DevOps as a separate interest from software engineering. I see it as another layer of understanding what it takes to build and operate reliable software.

I still have a lot to explore in this space, and that's exactly what makes it interesting.

## The Shift Towards AI Engineering

Then came the part of technology that completely captured my attention: Artificial Intelligence.

I had experimented with automation and traditional software development, but the rapid evolution of LLMs opened up an entirely different way of thinking about applications.

I became increasingly interested in how language models could reason, use tools, retrieve information, interact with APIs, and perform multi-step tasks.

That curiosity gradually turned into a deeper focus on **AI Engineering and Agentic AI**.

I started exploring LLM APIs, prompt engineering, structured outputs, embeddings, vector databases, Retrieval-Augmented Generation (RAG), and agent orchestration.

I wanted to understand more than just how to call an LLM API. I wanted to understand how to build complete systems around these models.

The questions that kept pulling me in:

- How does an agent decide which tool to use?
- How does RAG retrieve relevant information?
- How do you manage context and conversation history?
- How do you evaluate an AI system?
- How do you make an application reliable when its underlying model can produce unpredictable outputs?

These questions became a major part of my learning journey.

I also started exploring Voice AI, real-time conversational systems, speech recognition, text-to-speech, and the infrastructure required to build responsive voice agents.

One of the things I find most exciting about AI engineering is that it sits at the intersection of so many disciplines: software engineering, machine learning, data, infrastructure, and product design.

It requires more than knowing how to use a model. It requires knowing how to engineer the system around it.

## Building, Experimenting & Exploring

Throughout this journey, one thing has remained consistent: I like trying new things.

I don't particularly enjoy staying inside one technology or limiting myself to a narrow definition of software development.

Some days I'm exploring an AI framework. Other days I'm debugging a backend issue, experimenting with a deployment workflow, reading research papers, or building a small proof of concept just to understand how something works.

I enjoy the process of going from an unfamiliar concept to something tangible.

I've also learned that there is a significant difference between knowing about a technology and actually understanding it. Reading documentation, watching tutorials, and experimenting are useful, but the real learning happens when you build something, encounter problems, and work through them.

I try to approach AI tools in the same way. They are incredibly useful for research, exploration, and solving problems, but I believe understanding the underlying engineering is what makes someone a capable developer.

## What I'm Exploring Today

Today, my primary focus is on becoming a stronger AI and Full-Stack Engineer.

| Focus area | What I'm working on |
| --- | --- |
| **Agentic AI & LLM Engineering** | Building agents, tool-calling workflows, and intelligent applications |
| **Voice AI** | Real-time conversational systems and speech technologies |
| **Full-Stack Engineering** | Scalable applications with Python, TypeScript, React, FastAPI, and PostgreSQL |
| **DevOps & Infrastructure** | Docker, Kubernetes, CI/CD, and reliable deployment practices |
| **Applied AI Research** | New models, architectures, and practical applications of machine learning |

I'm also interested in the intersection of AI and real-world products: how intelligent systems can improve existing workflows, solve practical problems, and create entirely new experiences.

## Still Learning. Still Building.

Looking back, my journey has never been a straight line.

I started with Python, explored browser automation, moved into web development, expanded into backend engineering, became curious about infrastructure, and eventually found myself deeply interested in AI and intelligent systems.

Every stage introduced new questions, and every answer seemed to lead to another area worth exploring.

I don't consider myself someone who has figured everything out. Quite the opposite. The more I learn about software engineering, the more I realize how much there is left to discover.

And I genuinely enjoy that.

I want to keep building products, experimenting with emerging technologies, understanding systems at a deeper level, and learning from the people I work with.

Because for me, engineering has never been just about learning a programming language or mastering a framework.

It's about curiosity, problem-solving, and the willingness to keep exploring.

**Build things. Break things. Learn things. Never stop exploring.**
`,
  },
];

export const getBlog = (slug?: string) => blogs.find((b) => b.slug === slug);
