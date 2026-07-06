import { createFileRoute } from "@tanstack/react-router";
import { Book, Volume2, ChevronRight, Search } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, Chip } from "@/components/fv/kit";
import skullImg from "@/assets/skull.png";
import { useState } from "react";

const LETTERS = ["All", "A", "B", "C", "D", "E", "F", "G", "H"];
const WORDS = [
  { w: "Osteology", d: "The scientific study of bones, especially in relation to identification of human remains." },
  { w: "Livor mortis", d: "Post-mortem discolouration of the skin caused by settling of blood." },
  { w: "Locard's principle", d: "'Every contact leaves a trace.' The foundation of modern forensic science." },
  { w: "AFIS", d: "Automated Fingerprint Identification System used for large-scale ridge pattern matching." },
  { w: "STR", d: "Short Tandem Repeats — DNA regions used for individual identification profiling." },
  { w: "Ballistics", d: "Study of the motion, behaviour and effects of projectiles, particularly bullets." },
];

export const Route = createFileRoute("/glossary")({
  component: () => {
    const [l, setL] = useState("All");
    return (
      <PageShell title="Glossary" subtitle="Word of the day & more">
        <GlassCard delay={0} className="relative overflow-hidden">
          <div className="text-[10px] font-bold tracking-widest text-gold">WORD OF THE DAY</div>
          <h2 className="mt-1 font-display text-2xl font-bold">Osteology</h2>
          <p className="mt-2 max-w-[70%] text-[13px] text-foreground/80">The scientific study of bones — a cornerstone of forensic anthropology.</p>
          <button className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary"><Volume2 className="h-3.5 w-3.5" /> Listen</button>
          <img src={skullImg} alt="" className="absolute right-2 bottom-2 h-24 w-24 object-contain opacity-90" />
        </GlassCard>

        <GlassCard className="!p-3.5 flex items-center gap-3">
          <Search className="h-4.5 w-4.5 text-muted-foreground" />
          <input placeholder="Search terms…" className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground" />
        </GlassCard>

        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
          {LETTERS.map((x) => <Chip key={x} active={l === x} onClick={() => setL(x)}>{x}</Chip>)}
        </div>

        {WORDS.map((w, i) => (
          <GlassCard key={w.w} delay={i} className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold font-display font-bold">{w.w[0]}</div>
            <div className="flex-1">
              <div className="text-[14px] font-bold">{w.w}</div>
              <div className="text-[12px] text-foreground/80">{w.d}</div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </GlassCard>
        ))}
      </PageShell>
    );
  },
});
