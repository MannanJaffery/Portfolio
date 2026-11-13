import { LuGithub } from "react-icons/lu";
import { BiLink } from "react-icons/bi";
import TechIcon from "./helpers/TechIcon";
import type { Project } from "@/data/projects";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  slug,
  name,
  imgSrc,
  description,
  category,
  techStack,
  liveLink,
  githubLink,
}: Project) => {
  const navigate = useNavigate();
  const path = `/projects/${slug}`;

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => navigate(path)}
      onKeyDown={(e) => e.key === "Enter" && navigate(path)}
      className="group flex h-full flex-col gap-2 bg-card border border-dashed border-border/80 p-1.5 rounded-xl w-full overflow-hidden hover:bg-muted/20 transition-all duration-200 cursor-pointer"
    >
      <div className="group/image relative rounded-lg overflow-hidden border border-border/80 bg-muted/30">
        <img
          src={imgSrc}
          alt={name}
          loading="lazy"
          className="rounded-lg w-full aspect-video object-cover transition-all duration-500 ease-out group-hover/image:scale-[1.03]"
        />
        <span className="absolute left-2 top-2 rounded-sm border border-white/20 bg-black/50 px-1.5 py-0.5 text-[11px] text-white backdrop-blur">
          {category}
        </span>
      </div>

      <div className="px-2 mt-4">
        <div className="text-xl font-light tracking-tight">{name}</div>
        <p className="mt-1 text-sm font-light text-muted-foreground line-clamp-3">{description}</p>
      </div>

      <div className="flex items-center gap-4 px-2 mt-4">
        {techStack.slice(0, 8).map((tech) => (
          <TechIcon key={tech.name} item={tech} className="w-5 h-5" showTooltip />
        ))}
        {techStack.length > 8 && (
          <span className="text-sm text-muted-foreground font-light">+{techStack.length - 8}</span>
        )}
      </div>

      <div className="w-full h-px bg-border mt-auto mb-1" />

      <div className="flex items-center justify-between mt-1 px-2 pb-2">
        {liveLink ? (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <BiLink className="w-4 h-4" />
            <span className="text-[15px] font-extralight">Live</span>
          </a>
        ) : (
          <span className="text-[15px] font-extralight text-muted-foreground/50">No live demo</span>
        )}
        {githubLink ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <LuGithub className="w-4 h-4" />
            <span className="text-[15px] font-extralight">Github</span>
          </a>
        ) : (
          <span className="text-[15px] font-extralight text-muted-foreground/50">Source private</span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
