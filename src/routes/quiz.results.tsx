import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Share2, RotateCcw, CheckCircle2, XCircle } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton, SectionTitle } from "@/components/fv/kit";

export const Route = createFileRoute("/quiz/results")({ component: Results });

const REVIEW = [
  { q: "Visualise latent prints on porous surfaces", ok: true },
  { q: "Study of blood spatter is called…", ok: true },
  { q: "Standard tool for time-of-death estimation", ok: false },
  { q: "Locard's exchange principle states…", ok: true },
  { q: "AFIS stands for…", ok: true },
];

function Results() {
  return (
    <PageShell title="Quiz Results" back="/quiz">
      <GlassCard delay={0} className="text-center">
        <Trophy className="mx-auto h-14 w-14 text-gold animate-float" />
        <div className="mt-3 font-display text-4xl font-bold gold-text">4 / 5</div>
        <p className="mt-1 text-[13px] text-muted-foreground">Great job, Parth! You're in the top 12% today.</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Stat v="+80" l="XP earned" />
          <Stat v="1m 42s" l="Time" />
          <Stat v="80%" l="Accuracy" />
        </div>
      </GlassCard>

      <SectionTitle title="Review" />
      {REVIEW.map((r, i) => (
        <GlassCard key={i} delay={i + 1} className="flex items-center gap-3">
          {r.ok ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <XCircle className="h-5 w-5 text-destructive" />}
          <div className="text-[13px]">{r.q}</div>
        </GlassCard>
      ))}

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4 flex gap-2">
        <Link to="/quiz" className="flex-1"><PillButton variant="primary" className="w-full"><RotateCcw className="h-4 w-4" /> Retake</PillButton></Link>
        <PillButton variant="outline"><Share2 className="h-4 w-4" /></PillButton>
      </div>
    </PageShell>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return <div className="rounded-xl bg-white/5 p-3"><div className="font-display text-lg font-bold">{v}</div><div className="text-[10px] text-muted-foreground">{l}</div></div>;
}
