import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, Trophy } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton } from "@/components/fv/kit";
import { useState } from "react";

const QUESTION = {
  q: "Which of the following techniques is used to visualise latent fingerprints on porous surfaces?",
  options: ["Superglue fuming", "Ninhydrin", "Silver nitrate", "Dusting powder"],
  correct: 1,
};

export const Route = createFileRoute("/quiz")({
  head: () => ({ meta: [{ title: "Daily Quiz — Forensiverse" }] }),
  component: QuizPage,
});

function QuizPage() {
  const [pick, setPick] = useState<number | null>(null);
  return (
    <PageShell title="Daily Quiz" subtitle="Question 1 of 5">
      <GlassCard delay={0}>
        <div className="flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2 text-gold"><Trophy className="h-4 w-4" /> 320 XP earned this week</div>
          <div className="flex items-center gap-1 text-emerald-400"><Clock className="h-4 w-4" /> 00:24</div>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-white/10">
          <div className="h-full w-1/5 rounded-full bg-[image:var(--gradient-primary)]" />
        </div>
      </GlassCard>

      <GlassCard delay={1}>
        <div className="text-[11px] font-bold tracking-widest text-primary">QUESTION</div>
        <p className="mt-2 text-[15px] font-semibold leading-snug">{QUESTION.q}</p>
      </GlassCard>

      <div className="space-y-2">
        {QUESTION.options.map((o, i) => {
          const chosen = pick === i;
          const correct = pick !== null && i === QUESTION.correct;
          const wrong = chosen && i !== QUESTION.correct;
          return (
            <button
              key={o}
              onClick={() => setPick(i)}
              className={`glass flex w-full items-center gap-3 rounded-2xl p-4 text-left transition-all ${
                correct ? "!border-emerald-400/60 !bg-emerald-500/10" : wrong ? "!border-destructive/60 !bg-destructive/10" : chosen ? "!border-primary/60" : ""
              }`}
            >
              <div className={`grid h-8 w-8 place-items-center rounded-lg text-[12px] font-bold ${chosen ? "bg-primary text-primary-foreground" : "bg-white/5"}`}>{String.fromCharCode(65 + i)}</div>
              <div className="flex-1 text-[13px]">{o}</div>
              {correct && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
            </button>
          );
        })}
      </div>

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
        <Link to="/quiz/results">
          <PillButton variant="primary" className="w-full">Next Question</PillButton>
        </Link>
      </div>
    </PageShell>
  );
}
