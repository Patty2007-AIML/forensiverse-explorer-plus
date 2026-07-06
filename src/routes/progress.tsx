import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Flame, Trophy, Clock, Target, BookOpen } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, SectionTitle } from "@/components/fv/kit";

const BARS = [3, 5, 2, 6, 4, 7, 5];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const SKILLS = [
  { name: "Fingerprints", pct: 82, color: "bg-primary" },
  { name: "DNA & Serology", pct: 64, color: "bg-emerald-400" },
  { name: "Toxicology", pct: 48, color: "bg-gold" },
  { name: "Digital Forensics", pct: 71, color: "bg-cyan" },
  { name: "Anthropology", pct: 33, color: "bg-violet-400" },
];

export const Route = createFileRoute("/progress")({
  component: () => (
    <PageShell title="Learning Progress" back="/profile">
      <div className="grid grid-cols-3 gap-2">
        <Kpi icon={Flame} v="12" l="Day streak" tone="text-rose-300 bg-rose-500/15" />
        <Kpi icon={Trophy} v="3,240" l="Total XP" tone="text-gold bg-gold/15" />
        <Kpi icon={Clock} v="46h" l="This month" tone="text-primary bg-primary/15" />
      </div>

      <GlassCard delay={0}>
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-bold tracking-widest text-primary">STUDY HOURS · LAST 7 DAYS</div>
          <TrendingUp className="h-4 w-4 text-emerald-400" />
        </div>
        <div className="mt-4 flex h-32 items-end justify-between gap-2">
          {BARS.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t-md bg-[image:var(--gradient-primary)]" style={{ height: `${h * 12}px` }} />
              <span className="text-[10px] text-muted-foreground">{DAYS[i]}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      <SectionTitle title="Skill mastery" />
      {SKILLS.map((s, i) => (
        <GlassCard key={s.name} delay={i} className="!p-3.5">
          <div className="flex items-center justify-between text-[12px]">
            <span className="font-semibold">{s.name}</span>
            <span className="text-muted-foreground">{s.pct}%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-white/10">
            <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
          </div>
        </GlassCard>
      ))}

      <GlassCard delay={9} className="flex items-center gap-3">
        <Target className="h-5 w-5 text-gold" />
        <div className="flex-1 text-[13px]">Next milestone: <b>4,000 XP</b> to reach Silver Rank.</div>
      </GlassCard>
    </PageShell>
  ),
});

function Kpi({ icon: Icon, v, l, tone }: any) {
  return (
    <div className="glass rounded-2xl p-3 text-center">
      <div className={`mx-auto grid h-10 w-10 place-items-center rounded-xl ${tone}`}><Icon className="h-4.5 w-4.5" /></div>
      <div className="mt-2 font-display text-lg font-bold">{v}</div>
      <div className="text-[10px] text-muted-foreground">{l}</div>
    </div>
  );
}
