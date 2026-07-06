import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Lock, CheckCircle2, Users, Clock, Award, Star } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton, SectionTitle } from "@/components/fv/kit";

export const Route = createFileRoute("/courses/$id")({ component: CourseDetail });

const LESSONS = [
  { t: "Introduction to Digital Forensics", d: "12 min", done: true },
  { t: "Evidence Acquisition Basics", d: "18 min", done: true },
  { t: "File System Analysis", d: "24 min", done: true },
  { t: "Memory & Volatile Data", d: "22 min", done: false },
  { t: "Network Traffic Investigation", d: "26 min", done: false, lock: true },
  { t: "Mobile Device Forensics", d: "30 min", done: false, lock: true },
];

function CourseDetail() {
  return (
    <PageShell title="Course" back="/courses">
      <GlassCard delay={0} className="p-0 overflow-hidden">
        <div className="relative h-40 bg-gradient-to-br from-primary/40 to-primary/10">
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-background/60 backdrop-blur">
              <PlayCircle className="h-9 w-9 text-primary" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="text-[10px] font-bold tracking-widest text-gold">DIGITAL · BEGINNER</div>
          <h1 className="mt-1 font-display text-xl font-bold">Digital Forensics Fundamentals</h1>
          <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-gold" /> 4.8</span>
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> 2,148 students</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 8h</span>
          </div>
        </div>
      </GlassCard>

      <GlassCard delay={1}>
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-foreground/80">Your progress</span>
          <span className="font-semibold text-gold">50%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-[image:var(--gradient-primary)]" />
        </div>
      </GlassCard>

      <SectionTitle title="Lessons" />
      <div className="space-y-2">
        {LESSONS.map((l, i) => (
          <div key={l.t} className="glass flex items-center gap-3 rounded-xl p-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-xs font-bold">{i + 1}</div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-[13px] font-semibold">{l.t}</div>
              <div className="text-[11px] text-muted-foreground">{l.d}</div>
            </div>
            {l.done ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : l.lock ? <Lock className="h-5 w-5 text-muted-foreground" /> : <PlayCircle className="h-5 w-5 text-primary" />}
          </div>
        ))}
      </div>

      <GlassCard delay={2}>
        <div className="flex items-center gap-3">
          <Award className="h-8 w-8 text-gold" />
          <div className="flex-1 text-[13px]">Complete all lessons to earn your certificate.</div>
        </div>
      </GlassCard>

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
        <PillButton variant="primary" className="w-full">Continue Learning</PillButton>
      </div>
    </PageShell>
  );
}
