import { createFileRoute } from "@tanstack/react-router";
import { FileDown, FileText, Video, MoreVertical } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, Chip } from "@/components/fv/kit";
import { useState } from "react";

const FILES = [
  { name: "Fingerprint Classification.pdf", size: "4.2 MB", type: "PDF", icon: FileText, tone: "text-primary bg-primary/15" },
  { name: "DNA Extraction Techniques.mp4", size: "128 MB", type: "Video", icon: Video, tone: "text-violet-300 bg-violet-500/15" },
  { name: "Toxicology Handbook.pdf", size: "18.6 MB", type: "PDF", icon: FileText, tone: "text-gold bg-gold/15" },
  { name: "Crime Scene Sketching.pdf", size: "2.1 MB", type: "PDF", icon: FileText, tone: "text-emerald-400 bg-emerald-500/15" },
  { name: "Digital Evidence Chain.mp4", size: "84 MB", type: "Video", icon: Video, tone: "text-cyan bg-cyan/15" },
];

export const Route = createFileRoute("/downloads")({
  component: () => {
    const [t, setT] = useState("All");
    return (
      <PageShell title="Downloads" subtitle="5 files · 236.9 MB used">
        <div className="flex gap-2">
          {["All", "PDFs", "Videos", "Audio"].map((x) => <Chip key={x} active={t === x} onClick={() => setT(x)}>{x}</Chip>)}
        </div>
        {FILES.map((f, i) => (
          <GlassCard key={i} delay={i} className="flex items-center gap-3">
            <div className={`grid h-11 w-11 place-items-center rounded-xl ${f.tone}`}><f.icon className="h-5 w-5" /></div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-[13px] font-semibold">{f.name}</div>
              <div className="text-[11px] text-muted-foreground">{f.type} · {f.size}</div>
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-lg hover:bg-white/5"><MoreVertical className="h-4 w-4" /></button>
          </GlassCard>
        ))}
        <GlassCard delay={FILES.length}>
          <div className="flex items-center justify-between text-[12px]">
            <span>Storage</span>
            <span className="font-semibold">236.9 MB / 2 GB</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/10">
            <div className="h-full w-[12%] rounded-full bg-[image:var(--gradient-primary)]" />
          </div>
        </GlassCard>
      </PageShell>
    );
  },
});
