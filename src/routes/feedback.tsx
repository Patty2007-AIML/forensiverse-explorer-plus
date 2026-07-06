import { createFileRoute } from "@tanstack/react-router";
import { Star, Send } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton, Chip } from "@/components/fv/kit";
import { useState } from "react";

export const Route = createFileRoute("/feedback")({
  component: () => {
    const [rating, setRating] = useState(4);
    const [cat, setCat] = useState("Feature request");
    return (
      <PageShell title="Send Feedback" back="/profile">
        <GlassCard delay={0} className="text-center">
          <div className="text-[13px] text-foreground/85">How would you rate Forensiverse today?</div>
          <div className="mt-3 flex justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <button key={s} onClick={() => setRating(s)}>
                <Star className={`h-7 w-7 ${s <= rating ? "fill-gold text-gold" : "text-muted-foreground"}`} />
              </button>
            ))}
          </div>
        </GlassCard>

        <div className="text-[10px] font-bold tracking-widest text-muted-foreground px-1">CATEGORY</div>
        <div className="flex flex-wrap gap-2">
          {["Bug report", "Feature request", "Content", "Praise", "Other"].map((c) => <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Chip>)}
        </div>

        <GlassCard className="!p-3.5">
          <div className="text-[10px] font-bold tracking-widest text-muted-foreground">YOUR MESSAGE</div>
          <textarea rows={6} placeholder="Tell us what you love or what could be better…" className="mt-2 w-full resize-none bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground" />
        </GlassCard>

        <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
          <PillButton variant="primary" className="w-full"><Send className="h-4 w-4" /> Send feedback</PillButton>
        </div>
      </PageShell>
    );
  },
});
