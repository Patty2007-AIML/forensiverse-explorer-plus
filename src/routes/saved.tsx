import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, FileText, GraduationCap, Users, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, EmptyState, Chip } from "@/components/fv/kit";
import { useState } from "react";

const SAVED = [
  { icon: FileText, title: "Forensic Toxicology Handbook", type: "Resource", tone: "bg-gold/15 text-gold" },
  { icon: GraduationCap, title: "Crime Scene Investigation Course", type: "Course", tone: "bg-primary/15 text-primary" },
  { icon: Users, title: "Aditi's internship AMA", type: "Post", tone: "bg-violet-500/15 text-violet-300" },
  { icon: FileText, title: "The Nithari Killings — Case File", type: "Case", tone: "bg-emerald-500/15 text-emerald-400" },
];

export const Route = createFileRoute("/saved")({
  component: () => {
    const [t, setT] = useState("All");
    return (
      <PageShell title="Saved" subtitle="Your bookmarked items">
        <div className="flex gap-2">
          {["All", "Resources", "Courses", "Posts", "Cases"].map((x) => <Chip key={x} active={t === x} onClick={() => setT(x)}>{x}</Chip>)}
        </div>
        {SAVED.map((s, i) => (
          <GlassCard key={i} delay={i} className="flex items-center gap-3">
            <div className={`grid h-11 w-11 place-items-center rounded-xl ${s.tone}`}><s.icon className="h-5 w-5" /></div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-[13px] font-semibold">{s.title}</div>
              <div className="text-[11px] text-muted-foreground">{s.type}</div>
            </div>
            <Bookmark className="h-5 w-5 text-gold" fill="currentColor" />
          </GlassCard>
        ))}
      </PageShell>
    );
  },
});
