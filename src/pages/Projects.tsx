import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { FadeIn } from "@/components/helpers/FadeIn";

const FILTERS: ("All" | ProjectCategory)[] = ["All", "AI", "Full-Stack", "Automation"];

const Projects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 pt-6 pb-8 sm:pt-12 sm:pb-12 space-y-6">
      <FadeIn yOffset={10} duration={0.4}>
        <button
          onClick={() => navigate("/")}
          className="flex w-fit items-center gap-3 text-md font-light tracking-tight text-muted-foreground cursor-pointer duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> Back to Home
        </button>
      </FadeIn>
      <FadeIn delay={0.1} yOffset={15} duration={0.5} className="flex flex-col gap-2">
        <h1 className="text-2xl font-light tracking-tight sm:text-3xl">All Projects</h1>
        <p className="text-muted-foreground font-light text-lg">
          Product work, AI systems and automation: the things I have shipped and the things I
          built to learn how they work.
        </p>
      </FadeIn>

      <div
        role="tablist"
        aria-label="Filter projects"
        className="flex w-fit flex-wrap gap-1 rounded-full border border-dashed border-border/70 bg-muted/30 p-1"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3 py-1 text-sm font-light transition-colors ${
              filter === f
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-2">
        {visible.map((project, idx) => (
          <FadeIn key={project.slug} delay={0.1 + idx * 0.04} yOffset={20}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
      </div>
    </main>
  );
};

export default Projects;
