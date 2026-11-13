import ProjectCard from "./ProjectCard";
import { featuredProjects } from "@/data/projects";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full space-y-6">
      <div className="flex items-baseline justify-between">
        <p className="text-2xl font-light tracking-tight sm:text-3xl">Projects</p>
        <span className="text-xs text-muted-foreground/70">Selected work</span>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
      <div className="flex justify-center pt-6">
        <Button asChild size="lg" className="text-base">
          <Link to="/projects">
            View all Projects
            <ChevronRight strokeWidth={2.25} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ProjectSection;
