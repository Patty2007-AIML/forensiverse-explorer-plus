import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Crown, Medal } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, Chip } from "@/components/fv/kit";
import { useState } from "react";

const TOP = [
  { rank: 2, name: "Aditi S.", xp: 4820 },
  { rank: 1, name: "Parth J.", xp: 5240 },
  { rank: 3, name: "Rohan M.", xp: 4610 },
];
const REST = [
  { rank: 4, name: "Zoya K.", xp: 4380 },
  { rank: 5, name: "Priya S.", xp: 4110 },
  { rank: 6, name: "Kabir S.", xp: 3980 },
  { rank: 7, name: "Neha R.", xp: 3720 },
  { rank: 8, name: "Anil V.", xp: 3540 },
  { rank: 9, name: "Meera I.", xp: 3210 },
  { rank: 10, name: "Rahul V.", xp: 3080 },
];

export const Route = createFileRoute("/leaderboard")({
  component: () => {
    const [tab, setTab] = useState("This week");
    return (
      <PageShell title="Leaderboard" subtitle="Top forensic minds this week" back="/profile">
        <div className="flex gap-2">
          {["Today", "This week", "This month", "All time"].map((x) => <Chip key={x} active={tab === x} onClick={() => setTab(x)}>{x}</Chip>)}
        </div>

        <GlassCard delay={0} className="!p-4">
          <div className="flex items-end justify-center gap-3">
            {TOP.map((u) => (
              <div key={u.rank} className={`flex flex-col items-center ${u.rank === 1 ? "" : "pt-6"}`}>
                <div className={`relative grid ${u.rank === 1 ? "h-16 w-16" : "h-12 w-12"} place-items-center rounded-full ${u.rank === 1 ? "bg-[image:var(--gradient-gold)]" : "bg-[image:var(--gradient-primary)]"} font-bold text-background`}>
                  {u.name[0]}
                  {u.rank === 1 && <Crown className="absolute -top-4 h-5 w-5 text-gold" />}
                </div>
                <div className="mt-1 text-[11px] font-semibold">{u.name}</div>
                <div className="text-[10px] text-gold">{u.xp} XP</div>
                <div className={`mt-2 flex ${u.rank === 1 ? "h-16" : u.rank === 2 ? "h-12" : "h-9"} w-14 items-start justify-center rounded-t-lg bg-white/10 pt-1 text-[11px] font-bold`}>#{u.rank}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        {REST.map((u, i) => (
          <GlassCard key={u.rank} delay={i + 1} className="flex items-center gap-3 !p-3.5">
            <div className="w-6 text-center font-display text-sm font-bold text-muted-foreground">#{u.rank}</div>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary text-xs font-bold">{u.name[0]}</div>
            <div className="flex-1 text-[13px] font-semibold">{u.name}</div>
            <div className="text-[11px] text-gold font-semibold">{u.xp} XP</div>
          </GlassCard>
        ))}

        <GlassCard delay={9} className="flex items-center gap-3 !p-3.5 !border-primary/40">
          <Medal className="h-5 w-5 text-primary" />
          <div className="flex-1 text-[13px]">Your rank: <b>#1</b> · Keep it going!</div>
          <Trophy className="h-5 w-5 text-gold" />
        </GlassCard>
      </PageShell>
    );
  },
});
