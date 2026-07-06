import { createFileRoute } from "@tanstack/react-router";
import { Bell, MessageCircle, Award, Calendar, FileText, BookmarkCheck } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, Chip } from "@/components/fv/kit";
import { useState } from "react";

const NOTIFS = [
  { icon: Award, tone: "bg-gold/15 text-gold", title: "You earned the 'Fingerprint Novice' badge!", time: "2m ago", unread: true },
  { icon: MessageCircle, tone: "bg-primary/15 text-primary", title: "Rohan replied to your comment", time: "1h ago", unread: true },
  { icon: Calendar, tone: "bg-violet-500/15 text-violet-300", title: "Reminder: DNA Analysis Webinar tomorrow", time: "3h ago", unread: true },
  { icon: FileText, tone: "bg-emerald-500/15 text-emerald-400", title: "New resource: 'Bloodstain Pattern Analysis'", time: "Yesterday" },
  { icon: BookmarkCheck, tone: "bg-cyan/15 text-cyan", title: "Your bookmarked course got a new module", time: "2d ago" },
];

export const Route = createFileRoute("/notifications")({
  component: () => {
    const [t, setT] = useState("All");
    return (
      <PageShell title="Notifications" subtitle="3 unread"
        action={<button className="text-xs font-semibold text-primary">Mark all</button>}>
        <div className="flex gap-2">
          {["All", "Unread", "Learning", "Community", "Events"].map((x) => <Chip key={x} active={t === x} onClick={() => setT(x)}>{x}</Chip>)}
        </div>
        {NOTIFS.map((n, i) => (
          <GlassCard key={i} delay={i} className="flex items-center gap-3">
            <div className={`grid h-11 w-11 place-items-center rounded-xl ${n.tone}`}><n.icon className="h-5 w-5" /></div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold">{n.title}</div>
              <div className="text-[11px] text-muted-foreground">{n.time}</div>
            </div>
            {n.unread && <span className="h-2 w-2 rounded-full bg-primary" />}
          </GlassCard>
        ))}
      </PageShell>
    );
  },
});
