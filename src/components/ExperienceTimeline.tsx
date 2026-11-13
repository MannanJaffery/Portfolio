import { experience } from "@/data/experience";
import { education, certifications } from "@/data/education";
import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { FadeIn } from "./helpers/FadeIn";

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="w-full space-y-6">
      <div className="flex items-baseline justify-between">
        <p className="text-2xl font-light tracking-tight sm:text-3xl">Experience</p>
        <span className="text-xs text-muted-foreground/70">Remote · Onsite</span>
      </div>

      <ol className="relative ml-2 border-l border-dashed border-border/80">
        {experience.map((job, idx) => (
          <li key={job.company} className="relative pl-6 pb-8 last:pb-0 sm:pl-8">
            <span
              className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-background ${
                job.current ? "bg-emerald-500 ring-4 ring-emerald-500/15" : "bg-muted-foreground/60"
              }`}
              aria-hidden
            />
            <FadeIn delay={idx * 0.05} yOffset={12}>
              <div className="rounded-xl border border-dashed border-border/80 bg-card p-4 sm:p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-light tracking-tight sm:text-xl">{job.company}</h3>
                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${job.company} website`}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {job.current && (
                      <span className="rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[11px] text-emerald-600 dark:text-emerald-400">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-xs tracking-wide text-muted-foreground">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-light text-foreground/90">
                  {job.role}
                  <span className="text-muted-foreground"> · {job.type}</span>
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {job.location}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm font-light leading-relaxed text-muted-foreground">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-border/50 bg-muted/50 px-1.5 py-0.5 text-[12px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>

      <FadeIn yOffset={12}>
        <div className="flex flex-col gap-3 rounded-xl border border-dashed border-border/80 bg-card p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <div className="min-w-0">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-base font-light tracking-tight sm:text-lg">{education.degree}</h3>
                <span className="text-xs tracking-wide text-muted-foreground">{education.period}</span>
              </div>
              <p className="text-sm font-light text-muted-foreground">{education.school}</p>
            </div>
          </div>
          <ul className="list-disc space-y-1 pl-9 text-sm font-light text-muted-foreground">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
};

export default ExperienceTimeline;
