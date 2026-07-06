import { createFileRoute } from "@tanstack/react-router";
import { Heart, Share2, Bookmark, Send } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton } from "@/components/fv/kit";

export const Route = createFileRoute("/community/$postId")({ component: PostPage });

const COMMENTS = [
  { u: "Rohan M.", t: "Congrats! Which trace instruments did you get to operate?", time: "1h" },
  { u: "Priya S.", t: "Interested in the workflow — did you use SEM-EDS?", time: "45m" },
  { u: "Kabir S.", t: "Amazing! Please share your prep resources.", time: "20m" },
];

function PostPage() {
  const { postId } = Route.useParams();
  return (
    <PageShell title="Post" back="/community"
      action={<button className="grid h-10 w-10 place-items-center rounded-full glass"><Bookmark className="h-4 w-4 text-gold" /></button>}>
      <GlassCard delay={0}>
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 text-primary text-sm font-bold">AS</div>
          <div className="flex-1">
            <div className="text-sm font-semibold">Aditi Sharma</div>
            <div className="text-[11px] text-muted-foreground">MSc Forensic Science, LNJN · 2h</div>
          </div>
          <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">Internship</span>
        </div>
        <p className="mt-4 text-[14px] leading-relaxed">
          Just wrapped up my 8-week internship at the State Forensic Lab. Working on trace evidence
          across arson and hit-and-run cases was surreal — GC-MS, SEM-EDS and hours of ridge
          analysis. Ask me anything about applying, workflow, or life inside a lab. Post ref: {postId}
        </p>
        <div className="mt-4 flex items-center gap-5 text-[12px] text-muted-foreground">
          <span className="flex items-center gap-1.5"><Heart className="h-4 w-4" /> 128</span>
          <span className="flex items-center gap-1.5"><Share2 className="h-4 w-4" /> Share</span>
        </div>
      </GlassCard>

      <div className="pt-2 text-[11px] font-bold tracking-widest text-primary px-1">COMMENTS · 24</div>
      {COMMENTS.map((c, i) => (
        <GlassCard key={i} delay={i + 1} className="p-3.5">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-violet-500/15 text-violet-300 text-[11px] font-bold">{c.u.split(" ").map(w => w[0]).join("")}</div>
            <div className="text-[12px] font-semibold">{c.u}</div>
            <div className="text-[10px] text-muted-foreground">· {c.time}</div>
          </div>
          <p className="mt-2 text-[13px] text-foreground/85">{c.t}</p>
        </GlassCard>
      ))}

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
        <div className="glass flex items-center gap-2 rounded-2xl p-2">
          <input placeholder="Write a comment…" className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none" />
          <PillButton variant="primary"><Send className="h-4 w-4" /></PillButton>
        </div>
      </div>
    </PageShell>
  );
}
