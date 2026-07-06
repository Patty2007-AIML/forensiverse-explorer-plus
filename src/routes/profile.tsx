import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Award, GraduationCap, BookmarkCheck, Trophy, LogOut, Edit3, Bell, HelpCircle, ChevronRight, FileText, Info, MessageSquareHeart } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard } from "@/components/fv/kit";

const STATS = [
  { l: "Courses", v: "3" },
  { l: "Certificates", v: "2" },
  { l: "Badges", v: "12" },
  { l: "XP", v: "3,240" },
];
const LINKS = [
  { icon: Edit3, l: "Edit profile", to: "/profile/edit" },
  { icon: GraduationCap, l: "My courses", to: "/courses" },
  { icon: Award, l: "Achievements", to: "/achievements" },
  { icon: FileText, l: "Certificates", to: "/certificates" },
  { icon: BookmarkCheck, l: "Bookmarks", to: "/bookmarks" },
  { icon: Trophy, l: "Leaderboard", to: "/leaderboard" },
  { icon: Bell, l: "Notifications", to: "/notifications" },
  { icon: Settings, l: "Settings", to: "/settings" },
  { icon: HelpCircle, l: "Help & Support", to: "/help" },
  { icon: MessageSquareHeart, l: "Send feedback", to: "/feedback" },
  { icon: Info, l: "About Forensiverse", to: "/about" },
];

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Forensiverse" }] }),
  component: () => (
    <PageShell title="Profile" back={false}
      action={<Link to="/settings" className="grid h-10 w-10 place-items-center rounded-full glass"><Settings className="h-4 w-4" /></Link>}>
      <GlassCard delay={0} className="text-center pb-6">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[image:var(--gradient-primary)] font-display text-3xl font-bold text-primary-foreground ring-2 ring-gold/40">P</div>
        <h2 className="mt-3 font-display text-xl font-bold">Parth Jha</h2>
        <p className="text-[12px] text-muted-foreground">MSc Forensic Science · LNJN NICFS</p>
        <p className="mt-2 text-[12px] text-foreground/80 max-w-[280px] mx-auto">Aspiring forensic examiner. Fascinated by trace evidence & questioned documents.</p>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {STATS.map((s) => (
            <div key={s.l} className="rounded-xl bg-white/5 p-2.5">
              <div className="font-display text-base font-bold text-gold">{s.v}</div>
              <div className="text-[10px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      {LINKS.map((r, i) => (
        <Link key={r.l} to={r.to} className="glass flex items-center gap-3 rounded-2xl p-3.5 mb-2 last:mb-0">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><r.icon className="h-4.5 w-4.5" /></div>
          <div className="flex-1 text-[13px] font-semibold">{r.l}</div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      ))}

      <Link to="/login" className="glass mt-3 flex items-center gap-3 rounded-2xl p-3.5 text-destructive">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/15"><LogOut className="h-4.5 w-4.5" /></div>
        <div className="flex-1 text-[13px] font-semibold">Sign out</div>
      </Link>
    </PageShell>
  ),
});
