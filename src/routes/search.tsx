import { createFileRoute } from "@tanstack/react-router";
import { Search as SearchIcon, X, TrendingUp, Clock } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, Chip, ListItem } from "@/components/fv/kit";
import { useState } from "react";
import { FileText, GraduationCap, Users, Briefcase } from "lucide-react";

const RECENT = ["DNA extraction", "Fingerprint powder", "Locard exchange", "Digital chain of custody"];
const TRENDING = ["Bloodstain analysis", "Cyber forensics", "Forensic anthropology", "AFIS", "Toxicology"];

export const Route = createFileRoute("/search")({
  component: () => {
    const [q, setQ] = useState("");
    const [tab, setTab] = useState("All");
    return (
      <PageShell title="Search" subtitle="Find anything, instantly" back={false}>
        <GlassCard delay={0} className="flex items-center gap-3 p-3.5">
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try 'DNA', 'CFSL', 'blood spatter'…" className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground" />
          {q && <button onClick={() => setQ("")}><X className="h-4 w-4 text-muted-foreground" /></button>}
        </GlassCard>
        <div className="flex gap-2">
          {["All", "Resources", "Courses", "People", "Cases"].map((x) => <Chip key={x} active={tab === x} onClick={() => setTab(x)}>{x}</Chip>)}
        </div>

        {q ? (
          <div className="space-y-2">
            <ListItem icon={FileText} title="Fingerprint Classification Systems" subtitle="PDF · 96 pages" tone="primary" to="/resources/r5" />
            <ListItem icon={GraduationCap} title="Digital Forensics Fundamentals" subtitle="Course · Beginner" tone="emerald" to="/courses/c1" />
            <ListItem icon={Users} title="Aditi Sharma" subtitle="MSc Forensic Science, LNJN" tone="violet" />
            <ListItem icon={Briefcase} title="Trace Evidence Intern @ CFSL" subtitle="Delhi · ₹15k/mo" tone="gold" to="/internships/i1" />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-muted-foreground px-1"><Clock className="h-3.5 w-3.5" /> RECENT</div>
            <div className="flex flex-wrap gap-2">{RECENT.map((r) => <Chip key={r} onClick={() => setQ(r)}>{r}</Chip>)}</div>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-gold px-1 pt-2"><TrendingUp className="h-3.5 w-3.5" /> TRENDING</div>
            <div className="flex flex-wrap gap-2">{TRENDING.map((r) => <Chip key={r} onClick={() => setQ(r)}>{r}</Chip>)}</div>
          </>
        )}
      </PageShell>
    );
  },
});
