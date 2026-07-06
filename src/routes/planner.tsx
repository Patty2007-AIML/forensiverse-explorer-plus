import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Plus, Clock, CheckCircle2, Circle } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton } from "@/components/fv/kit";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TASKS = [
  { time: "07:00", t: "Read: 'Locard's Principle' (Ch. 2)", done: true, tone: "text-emerald-400" },
  { time: "09:30", t: "Digital Forensics · Lesson 4", done: true, tone: "text-primary" },
  { time: "14:00", t: "Daily Quiz", done: false, tone: "text-gold" },
  { time: "17:00", t: "Case study: The Aarushi Talwar Case", done: false, tone: "text-violet-300" },
  { time: "20:00", t: "Revise flashcards · Osteology", done: false, tone: "text-cyan" },
];

export const Route = createFileRoute("/planner")({
  component: () => (
    <PageShell title="Study Planner" subtitle="Monday, 6 July 2026" back="/profile"
      action={<button className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground"><Plus className="h-5 w-5" /></button>}>
      <GlassCard delay={0}>
        <div className="flex items-center justify-between text-[11px]"><span className="text-foreground/80">This week's target</span><span className="font-semibold text-gold">18 / 24 hrs</span></div>
        <div className="mt-2 h-2 rounded-full bg-white/10"><div className="h-full w-3/4 rounded-full bg-[image:var(--gradient-gold)]" /></div>
        <div className="mt-4 flex justify-between">
          {DAYS.map((d, i) => (
            <div key={d} className={`flex flex-col items-center gap-1 rounded-xl p-2 ${i === 0 ? "bg-primary/15" : ""}`}>
              <span className="text-[10px] text-muted-foreground">{d}</span>
              <span className={`text-sm font-bold ${i === 0 ? "text-primary" : ""}`}>{6 + i}</span>
              <span className={`h-1 w-6 rounded-full ${i < 3 ? "bg-emerald-400" : "bg-white/10"}`} />
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="text-[10px] font-bold tracking-widest text-muted-foreground px-1 pt-2">TODAY'S PLAN</div>
      {TASKS.map((t, i) => (
        <GlassCard key={i} delay={i} className="!p-3.5 flex items-center gap-3">
          {t.done ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <Circle className="h-5 w-5 text-muted-foreground" />}
          <div className="flex-1 min-w-0">
            <div className={`text-[13px] font-semibold ${t.done ? "line-through opacity-60" : ""}`}>{t.t}</div>
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground"><Clock className="h-3 w-3" /> {t.time}</div>
          </div>
          <span className={`text-[10px] font-bold ${t.tone}`}>•</span>
        </GlassCard>
      ))}

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
        <PillButton variant="primary" className="w-full"><Calendar className="h-4 w-4" /> Add study block</PillButton>
      </div>
    </PageShell>
  ),
});
