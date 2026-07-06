import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MessageCircle, Share2, Plus, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, Chip, fadeUp } from "@/components/fv/kit";
import { motion } from "framer-motion";
import { useState } from "react";

const POSTS = [
  { id: "p1", author: "Aditi Sharma", role: "MSc Forensic Science, LNJN", time: "2h", body: "Just wrapped up my internship at the State Forensic Lab. Working on real trace evidence samples was surreal. AMA!", likes: 128, comments: 24, tag: "Internship" },
  { id: "p2", author: "Rahul Verma", role: "BSc Forensic Science", time: "5h", body: "Which is more useful for a beginner: Saferstein or James/Nordby? Would love opinions from seniors.", likes: 74, comments: 41, tag: "Discussion" },
  { id: "p3", author: "Dr. Meera Iyer", role: "Guest Expert", time: "Yesterday", body: "Sharing 3 lessons every entry-level examiner should master before touching a case file — thread below 🧵", likes: 312, comments: 58, tag: "Expert" },
  { id: "p4", author: "Zoya Khan", role: "PhD Scholar, GFSU", time: "2d", body: "Poster for our upcoming DNA workshop is out! Registrations open till Friday.", likes: 96, comments: 12, tag: "Event" },
];

const FILTERS = ["Trending", "Newest", "Following", "Experts"];

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community — Forensiverse" }] }),
  component: CommunityPage,
});

function CommunityPage() {
  const [f, setF] = useState("Trending");
  return (
    <PageShell title="Community" subtitle="Discuss · Learn · Share" back={false}
      action={<Link to="/community" className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground"><Plus className="h-5 w-5" /></Link>}>
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
        {FILTERS.map((x) => <Chip key={x} active={f === x} onClick={() => setF(x)}>{x}</Chip>)}
      </div>
      <GlassCard delay={0} className="flex items-center gap-3">
        <TrendingUp className="h-5 w-5 text-gold" />
        <div className="text-[12px]"><b>#ForensicMonday</b> — Share what you learned this week.</div>
      </GlassCard>
      {POSTS.map((p, i) => (
        <motion.div key={p.id} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}>
          <Link to="/community/$postId" params={{ postId: p.id }} className="glass block rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary text-sm font-bold">{p.author.split(" ").map(w => w[0]).join("")}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold">{p.author}</div>
                <div className="text-[11px] text-muted-foreground truncate">{p.role} · {p.time}</div>
              </div>
              <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">{p.tag}</span>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-foreground/85">{p.body}</p>
            <div className="mt-3 flex items-center gap-5 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><Heart className="h-4 w-4" /> {p.likes}</span>
              <span className="flex items-center gap-1.5"><MessageCircle className="h-4 w-4" /> {p.comments}</span>
              <span className="flex items-center gap-1.5"><Share2 className="h-4 w-4" /></span>
            </div>
          </Link>
        </motion.div>
      ))}
    </PageShell>
  );
}
