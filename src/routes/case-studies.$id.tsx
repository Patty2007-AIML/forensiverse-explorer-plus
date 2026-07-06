import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Scale, FileText, Bookmark } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, SectionTitle } from "@/components/fv/kit";
import crimeImg from "@/assets/crime-scene.jpg";

export const Route = createFileRoute("/case-studies/$id")({ component: CaseDetail });

const TIMELINE = [
  { d: "Day 1", t: "Crime scene secured, initial evidence collected." },
  { d: "Day 3", t: "Trace evidence sent to central forensic laboratory." },
  { d: "Week 2", t: "DNA profile match established with prime suspect." },
  { d: "Month 2", t: "Digital forensics recovered deleted communications." },
  { d: "Trial", t: "Expert testimony presented to court, conviction secured." },
];

function CaseDetail() {
  const { id } = Route.useParams();
  return (
    <PageShell title="Case File" back="/case-studies"
      action={<button className="grid h-10 w-10 place-items-center rounded-full glass"><Bookmark className="h-4 w-4 text-gold" /></button>}>
      <GlassCard delay={0} className="p-0 overflow-hidden">
        <div className="relative h-44">
          <img src={crimeImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <div className="text-[10px] font-bold tracking-widest text-gold">HOMICIDE · CASE #{id}</div>
            <h1 className="font-display text-2xl font-bold">The Aarushi Talwar Case</h1>
            <div className="mt-2 flex items-center gap-3 text-[11px] text-foreground/80">
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> 2008</span>
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Noida, India</span>
            </div>
          </div>
        </div>
      </GlassCard>

      <GlassCard delay={1}>
        <div className="text-[11px] font-bold tracking-widest text-primary">SUMMARY</div>
        <p className="mt-2 text-[13px] leading-relaxed text-foreground/85">
          A high-profile double murder that exposed critical failures in early crime scene
          management and evidence chain-of-custody in India. Became a benchmark case for reforms in
          Indian forensic protocols and CSI training.
        </p>
      </GlassCard>

      <SectionTitle title="Forensic Timeline" />
      <div className="space-y-2">
        {TIMELINE.map((s, i) => (
          <GlassCard key={i} delay={i + 2} className="flex gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold text-xs font-bold">{i + 1}</div>
            <div>
              <div className="text-[12px] font-semibold text-gold">{s.d}</div>
              <div className="text-[13px] text-foreground/85">{s.t}</div>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard delay={10}>
        <div className="flex items-start gap-3">
          <Scale className="h-6 w-6 text-primary" />
          <div>
            <div className="text-[11px] font-bold tracking-widest text-primary">KEY TAKEAWAY</div>
            <p className="mt-1 text-[13px] text-foreground/85">
              First-response protocols save cases. Preservation of the scene is non-negotiable.
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard delay={11}>
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-gold" />
          <div className="text-[13px]">Attached files: 6 evidence photos · 2 lab reports</div>
        </div>
      </GlassCard>
    </PageShell>
  );
}
