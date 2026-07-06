import { createFileRoute } from "@tanstack/react-router";
import { BookmarkCheck, FileText, GraduationCap, Users, Briefcase, Bookmark } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, Chip } from "@/components/fv/kit";
import { useState } from "react";

const ITEMS = [
  { icon: FileText, title: "Forensic Toxicology Handbook", type: "Resource", tone: "bg-gold/15 text-gold" },
  { icon: GraduationCap, title: "Crime Scene Investigation Course", type: "Course", tone: "bg-primary/15 text-primary" },
  { icon: Users, title: "Aditi's internship AMA", type: "Post", tone: "bg-violet-500/15 text-violet-300" },
  { icon: Briefcase, title: "Trace Evidence Intern @ CFSL", type: "Internship", tone: "bg-emerald-500/15 text-emerald-400" },
];

export const Route = createFileRoute("/bookmarks")({
  component: () => {
    const [t, setT] = useState("All");
    return (
      <PageShell title="Bookmarks" subtitle={`${ITEMS.length} items saved`} back="/profile">
        <div className="flex gap-2">
          {["All", "Resources", "Courses", "Posts", "Internships"].map((x) => <Chip key={x} active={t === x} onClick={() => setT(x)}>{x}</Chip>)}
        </div>
        {ITEMS.map((it, i) => (
          <GlassCard key={i} delay={i} className="flex items-center gap-3 !p-3.5">
            <div className={`grid h-11 w-11 place-items-center rounded-xl ${it.tone}`}><it.icon className="h-5 w-5" /></div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-[13px] font-semibold">{it.title}</div>
              <div className="text-[11px] text-muted-foreground">{it.type}</div>
            </div>
            <Bookmark className="h-5 w-5 text-gold" fill="currentColor" />
          </GlassCard>
        ))}
      </PageShell>
    );
  },
});
