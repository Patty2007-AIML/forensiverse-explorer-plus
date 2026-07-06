import { createFileRoute } from "@tanstack/react-router";
import { Fingerprint, Github, Instagram, Twitter, Linkedin, ExternalLink } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard } from "@/components/fv/kit";

export const Route = createFileRoute("/about")({
  component: () => (
    <PageShell title="About" back="/profile">
      <GlassCard delay={0} className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
          <Fingerprint className="h-8 w-8 text-primary-foreground" />
        </div>
        <div className="mt-3 font-display text-xl font-bold">Forensiverse</div>
        <div className="text-[11px] tracking-widest text-gold">TRUTH · EVIDENCE · JUSTICE</div>
        <p className="mt-3 text-[13px] text-foreground/80">India's home for forensic science students. Learn, connect, and build the future of scientific investigation.</p>
        <div className="mt-3 text-[10px] text-muted-foreground">Version 1.0.0 (build 4210)</div>
      </GlassCard>

      <GlassCard delay={1}>
        <div className="text-[11px] font-bold tracking-widest text-primary">OUR MISSION</div>
        <p className="mt-2 text-[13px] leading-relaxed text-foreground/85">
          We're building the world's most accessible, community-driven learning platform for the next
          generation of forensic scientists — starting with India.
        </p>
      </GlassCard>

      <GlassCard delay={2}>
        <div className="text-[11px] font-bold tracking-widest text-primary">CONNECT</div>
        <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[10px]">
          {[Twitter, Instagram, Linkedin, Github].map((I, i) => (
            <button key={i} className="glass rounded-xl p-3 flex flex-col items-center gap-1"><I className="h-4 w-4" /></button>
          ))}
        </div>
      </GlassCard>

      <GlassCard delay={3}>
        {["Privacy Policy", "Terms of Service", "Content Guidelines", "Open Source Licences"].map((l) => (
          <div key={l} className="flex items-center justify-between border-b border-white/5 py-2.5 last:border-0 text-[13px]">
            {l} <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        ))}
      </GlassCard>
    </PageShell>
  ),
});
