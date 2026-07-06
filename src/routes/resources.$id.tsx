import { createFileRoute } from "@tanstack/react-router";
import { Bookmark, Download, Share2, Star, User, FileText, Clock, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton, SectionTitle } from "@/components/fv/kit";
import heroImg from "@/assets/fingerprint.jpg";

export const Route = createFileRoute("/resources/$id")({
  component: ResourceDetail,
});

function ResourceDetail() {
  const { id } = Route.useParams();
  return (
    <PageShell title="Resource" back="/resources"
      action={<button className="grid h-10 w-10 place-items-center rounded-full glass"><Bookmark className="h-4 w-4 text-gold" /></button>}>
      <GlassCard className="overflow-hidden p-0" delay={0}>
        <div className="relative h-44">
          <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <div className="text-[10px] font-bold tracking-widest text-gold">PDF · DACTYLOSCOPY</div>
            <h1 className="font-display text-xl font-bold">Fingerprint Classification Systems</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-4">
          <Stat icon={Star} value="4.8" label="Rating" />
          <Stat icon={FileText} value="96" label="Pages" />
          <Stat icon={Clock} value="3h" label="Read time" />
        </div>
      </GlassCard>

      <GlassCard delay={1}>
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 text-primary"><User className="h-5 w-5" /></div>
          <div className="flex-1">
            <div className="text-sm font-semibold">Dr. Anjali Kapoor</div>
            <div className="text-[11px] text-muted-foreground">Sr. Fingerprint Analyst · CBI</div>
          </div>
          <PillButton variant="outline">Follow</PillButton>
        </div>
      </GlassCard>

      <GlassCard delay={2}>
        <div className="text-[11px] font-bold tracking-widest text-primary">ABOUT THIS RESOURCE</div>
        <p className="mt-2 text-[13px] leading-relaxed text-foreground/85">
          A comprehensive guide covering the Henry, Battley and Roscher classification systems,
          including ridge patterns, minutiae analysis, and modern AFIS-based automated matching
          used across Indian forensic labs. Reference {id}.
        </p>
      </GlassCard>

      <SectionTitle title="Table of Contents" />
      <div className="space-y-2">
        {["Introduction & History", "Ridge Patterns", "Henry Classification", "Minutiae Analysis", "AFIS & Modern Techniques", "Case Applications"].map((c, i) => (
          <div key={c} className="glass flex items-center gap-3 rounded-xl p-3">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gold/15 text-gold text-xs font-bold">{i + 1}</div>
            <div className="flex-1 text-[13px]">{c}</div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
        <div className="glass flex gap-2 rounded-2xl p-2">
          <PillButton variant="primary" className="flex-1"><Download className="h-4 w-4" /> Download</PillButton>
          <PillButton variant="outline"><Share2 className="h-4 w-4" /></PillButton>
        </div>
      </div>
    </PageShell>
  );
}

function Stat({ icon: Icon, value, label }: any) {
  return (
    <div className="rounded-xl bg-white/5 p-3 text-center">
      <Icon className="mx-auto h-4 w-4 text-gold" />
      <div className="mt-1 font-display text-sm font-bold">{value}</div>
      <div className="text-[10px] text-muted-foreground">{label}</div>
    </div>
  );
}
