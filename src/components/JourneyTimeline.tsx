import type { JourneyStage } from "@/data/blog";

const JourneyTimeline = ({ stages }: { stages: JourneyStage[] }) => (
  <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3">
    {stages.map((s) => (
      <li
        key={s.label}
        className="rounded-xl border border-dashed border-border/80 bg-card p-3.5"
      >
        <span className="font-mono text-xs text-muted-foreground">{s.label}</span>
        <p className="mt-1 text-base font-light tracking-tight">{s.title}</p>
        <p className="mt-1 text-xs font-light leading-snug text-muted-foreground">{s.detail}</p>
      </li>
    ))}
  </ol>
);

export default JourneyTimeline;
