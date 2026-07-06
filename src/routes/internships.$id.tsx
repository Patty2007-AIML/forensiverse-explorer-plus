import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin, Clock, IndianRupee, CalendarCheck, Building2, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton, SectionTitle } from "@/components/fv/kit";

export const Route = createFileRoute("/internships/$id")({ component: InternshipDetail });

function InternshipDetail() {
  const { id } = Route.useParams();
  return (
    <PageShell title="Internship" back="/internships">
      <GlassCard delay={0}>
        <div className="flex items-start gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary"><Building2 className="h-7 w-7" /></div>
          <div>
            <div className="text-[10px] font-bold tracking-widest text-gold">CFSL · NEW DELHI</div>
            <h1 className="font-display text-lg font-bold leading-tight">Trace Evidence Intern</h1>
            <div className="mt-1 text-[11px] text-muted-foreground">Central Forensic Science Laboratory · #{id}</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
          <Fact icon={MapPin} v="New Delhi" />
          <Fact icon={Clock} v="8 weeks" />
          <Fact icon={IndianRupee} v="₹15,000 / mo" />
          <Fact icon={CalendarCheck} v="Starts 15 Aug 2026" />
        </div>
      </GlassCard>

      <GlassCard delay={1}>
        <div className="text-[11px] font-bold tracking-widest text-primary">ABOUT</div>
        <p className="mt-2 text-[13px] leading-relaxed text-foreground/85">
          Assist senior examiners with the analysis of paint, glass, fibre and gunshot residue samples.
          Gain hands-on exposure to GC-MS, FTIR, and SEM-EDS instrumentation in a live case environment.
        </p>
      </GlassCard>

      <SectionTitle title="Requirements" />
      {["BSc/MSc in Forensic Science, Chemistry or allied field", "Lab safety training completed", "Basic knowledge of chromatography", "Ability to commit 40 hrs/week on-site"].map((r) => (
        <div key={r} className="glass flex items-center gap-3 rounded-xl p-3">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <div className="text-[13px]">{r}</div>
        </div>
      ))}

      <SectionTitle title="Perks" />
      <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
        {["Certificate", "Lab access", "Mentorship", "LOR", "Cafeteria", "Travel"].map((p) => (
          <div key={p} className="glass rounded-xl p-3">{p}</div>
        ))}
      </div>

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
        <PillButton variant="primary" className="w-full">Apply Now</PillButton>
      </div>
    </PageShell>
  );
}
function Fact({ icon: Icon, v }: any) { return <div className="glass flex items-center gap-2 rounded-xl p-2.5"><Icon className="h-4 w-4 text-gold" />{v}</div>; }
