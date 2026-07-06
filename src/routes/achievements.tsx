import { createFileRoute } from "@tanstack/react-router";
import { Award, Fingerprint, FlaskConical, Trophy, Zap, Users, Flame, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard } from "@/components/fv/kit";

const BADGES = [
  { icon: Fingerprint, name: "Fingerprint Novice", unlocked: true, tone: "text-gold bg-gold/15" },
  { icon: FlaskConical, name: "Lab Explorer", unlocked: true, tone: "text-cyan bg-cyan/15" },
  { icon: Flame, name: "7-Day Streak", unlocked: true, tone: "text-rose-300 bg-rose-500/15" },
  { icon: Zap, name: "Quiz Champion", unlocked: true, tone: "text-emerald-400 bg-emerald-500/15" },
  { icon: Trophy, name: "Course Finisher", unlocked: true, tone: "text-primary bg-primary/15" },
  { icon: Users, name: "Community Hero", unlocked: false, tone: "" },
  { icon: ShieldCheck, name: "Chain of Custody Pro", unlocked: false, tone: "" },
  { icon: Award, name: "Grand Master", unlocked: false, tone: "" },
];

export const Route = createFileRoute("/achievements")({
  component: () => (
    <PageShell title="Achievements" back="/profile">
      <GlassCard delay={0} className="text-center">
        <div className="font-display text-3xl font-bold gold-text">12 / 24</div>
        <div className="mt-1 text-[11px] text-muted-foreground">Badges unlocked</div>
        <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-full w-1/2 rounded-full bg-[image:var(--gradient-gold)]" /></div>
      </GlassCard>
      <div className="grid grid-cols-3 gap-3">
        {BADGES.map((b, i) => (
          <GlassCard key={b.name} delay={i} className={`flex flex-col items-center text-center ${!b.unlocked ? "opacity-40" : ""}`}>
            <div className={`grid h-14 w-14 place-items-center rounded-2xl ${b.unlocked ? b.tone : "bg-white/5 text-muted-foreground"}`}><b.icon className="h-6 w-6" /></div>
            <div className="mt-2 text-[11px] font-semibold leading-tight">{b.name}</div>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  ),
});
