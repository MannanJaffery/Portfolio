import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import type { DeepDiveTab } from "@/data/projects";

const DeepDiveTabs = ({ tabs }: { tabs: DeepDiveTab[] }) => {
  const [active, setActive] = useState(tabs[0]?.id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];
  if (!current) return null;

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label="Deep dive"
        className="flex flex-wrap gap-1 rounded-full border border-dashed border-border/70 bg-muted/30 p-1 w-fit"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={tab.id === current.id}
            onClick={() => setActive(tab.id)}
            className={`rounded-full px-3 py-1 text-sm font-light transition-colors ${
              tab.id === current.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="rounded-xl border border-dashed border-border/80 bg-card p-4 sm:p-5"
        >
          <h3 className="text-lg font-light tracking-tight sm:text-xl">{current.title}</h3>
          <p className="mt-1 text-sm font-light text-muted-foreground">{current.summary}</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {current.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 rounded-lg border border-border/50 bg-muted/30 px-3 py-2.5 text-sm font-light text-foreground/90"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DeepDiveTabs;
