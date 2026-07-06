import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { fadeUp, Chip } from "@/components/fv/kit";
import { useState } from "react";

const EVENTS = [
  { id: "e1", title: "Intro to Forensic DNA Analysis", date: "12 Jul 2026 · 6:00 PM", place: "Online · Zoom", type: "Webinar", attendees: 214, cover: "from-primary/40 to-primary/10" },
  { id: "e2", title: "National Forensic Symposium 2026", date: "24–26 Jul 2026", place: "GFSU Gandhinagar", type: "Conference", attendees: 812, cover: "from-gold/40 to-gold/10" },
  { id: "e3", title: "Bloodstain Pattern Workshop", date: "3 Aug 2026 · 10:00 AM", place: "LNJN NICFS, Delhi", type: "Workshop", attendees: 68, cover: "from-rose-500/40 to-rose-500/10" },
  { id: "e4", title: "Cyber Forensics Bootcamp", date: "10–12 Aug 2026", place: "Online", type: "Bootcamp", attendees: 340, cover: "from-cyan/40 to-cyan/10" },
];

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events — Forensiverse" }] }),
  component: () => {
    const [t, setT] = useState("Upcoming");
    return (
      <PageShell title="Events" subtitle="Learn from the field">
        <div className="flex gap-2">
          {["Upcoming", "This week", "Online", "In person", "Past"].map((x) => <Chip key={x} active={t === x} onClick={() => setT(x)}>{x}</Chip>)}
        </div>
        {EVENTS.map((e, i) => (
          <motion.div key={e.id} variants={fadeUp} initial="hidden" animate="visible" custom={i}>
            <Link to="/events/$id" params={{ id: e.id }} className="glass block overflow-hidden rounded-2xl">
              <div className={`relative h-24 bg-gradient-to-br ${e.cover}`}>
                <div className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">{e.type}</div>
                <div className="absolute bottom-2 left-4 font-display text-[15px] font-bold">{e.title}</div>
              </div>
              <div className="flex items-center gap-3 p-3.5 text-[11px] text-foreground/80">
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {e.date}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.place}</span>
                <span className="ml-auto flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {e.attendees}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </PageShell>
    );
  },
});
