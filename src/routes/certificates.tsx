import { createFileRoute } from "@tanstack/react-router";
import { Award, Download, Share2 } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard } from "@/components/fv/kit";

const CERTS = [
  { title: "Digital Forensics Fundamentals", date: "Issued 12 Mar 2026", id: "FVR-2026-DFF-0142", tone: "from-primary/40 to-primary/10" },
  { title: "Introduction to Toxicology", date: "Issued 04 May 2026", id: "FVR-2026-TOX-0089", tone: "from-gold/40 to-gold/10" },
];

export const Route = createFileRoute("/certificates")({
  component: () => (
    <PageShell title="Certificates" back="/profile">
      {CERTS.map((c, i) => (
        <GlassCard key={c.id} delay={i} className="p-0 overflow-hidden">
          <div className={`relative h-32 bg-gradient-to-br ${c.tone}`}>
            <Award className="absolute right-4 top-4 h-10 w-10 text-gold" />
            <div className="absolute bottom-3 left-4 right-4">
              <div className="text-[10px] font-bold tracking-widest text-gold">CERTIFICATE OF COMPLETION</div>
              <div className="mt-1 font-display text-[15px] font-bold">{c.title}</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <div className="text-[11px] text-muted-foreground">{c.date}</div>
              <div className="text-[10px] text-foreground/60">ID: {c.id}</div>
            </div>
            <div className="flex gap-2">
              <button className="grid h-9 w-9 place-items-center rounded-lg bg-white/5"><Download className="h-4 w-4" /></button>
              <button className="grid h-9 w-9 place-items-center rounded-lg bg-white/5"><Share2 className="h-4 w-4" /></button>
            </div>
          </div>
        </GlassCard>
      ))}
    </PageShell>
  ),
});
