import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen, FileText, Video, Fingerprint, FlaskConical, Microscope,
  ShieldCheck, Camera, Bug, Skull, Bookmark, Filter,
} from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, Chip, fadeUp } from "@/components/fv/kit";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Books", "PDFs", "Videos", "Articles", "Podcasts"];

const RESOURCES = [
  { id: "r1", title: "Forensic Anthropology Basics", type: "PDF", tag: "Anthropology", icon: Skull, tone: "bg-primary/15 text-primary", pages: "128 pages", rating: 4.8 },
  { id: "r2", title: "Introduction to Digital Forensics", type: "Book", tag: "Digital", icon: ShieldCheck, tone: "bg-emerald-500/15 text-emerald-400", pages: "312 pages", rating: 4.7 },
  { id: "r3", title: "Crime Scene Photography Guide", type: "Video", tag: "CSI", icon: Camera, tone: "bg-violet-500/15 text-violet-300", pages: "42 min", rating: 4.9 },
  { id: "r4", title: "DNA Profiling & Analysis", type: "Article", tag: "Serology", icon: FlaskConical, tone: "bg-cyan/15 text-cyan", pages: "24 min read", rating: 4.6 },
  { id: "r5", title: "Fingerprint Classification Systems", type: "PDF", tag: "Dactyloscopy", icon: Fingerprint, tone: "bg-gold/15 text-gold", pages: "96 pages", rating: 4.8 },
  { id: "r6", title: "Toxicology Handbook", type: "Book", tag: "Toxicology", icon: FlaskConical, tone: "bg-rose-500/15 text-rose-300", pages: "220 pages", rating: 4.5 },
  { id: "r7", title: "Forensic Entomology", type: "Article", tag: "Biology", icon: Bug, tone: "bg-emerald-500/15 text-emerald-400", pages: "18 min read", rating: 4.4 },
  { id: "r8", title: "Microscopy Techniques", type: "Video", tag: "Lab", icon: Microscope, tone: "bg-primary/15 text-primary", pages: "58 min", rating: 4.7 },
];

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [{ title: "Resources — Forensiverse" }, { name: "description", content: "Books, PDFs, videos, and articles for forensic science students." }] }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? RESOURCES : RESOURCES.filter((r) => r.type + "s" === active || r.type === active);
  return (
    <PageShell title="Resources" subtitle="2,500+ curated for you" back={false}
      action={<button className="grid h-10 w-10 place-items-center rounded-full glass"><Filter className="h-4 w-4" /></button>}>
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1">
        {CATEGORIES.map((c) => <Chip key={c} active={active === c} onClick={() => setActive(c)}>{c}</Chip>)}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {filtered.map((r, i) => (
          <motion.div key={r.id} variants={fadeUp} initial="hidden" animate="visible" custom={i}>
            <Link to="/resources/$id" params={{ id: r.id }} className="glass block rounded-2xl p-3.5">
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${r.tone}`}><r.icon className="h-5 w-5" /></div>
              <div className="mt-3 text-[13px] font-semibold leading-tight">{r.title}</div>
              <div className="mt-1 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{r.type} · {r.pages}</span>
                <span className="text-gold">★ {r.rating}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <GlassCard delay={filtered.length + 1} className="text-center">
        <BookOpen className="mx-auto h-6 w-6 text-primary" />
        <p className="mt-2 text-xs text-muted-foreground">New resources added every week.</p>
      </GlassCard>
    </PageShell>
  );
}
