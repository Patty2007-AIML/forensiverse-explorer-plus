import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Users, Clock, Share2, Video } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton, SectionTitle } from "@/components/fv/kit";

export const Route = createFileRoute("/events/$id")({ component: EventDetail });

function EventDetail() {
  const { id } = Route.useParams();
  return (
    <PageShell title="Event" back="/events" action={<button className="grid h-10 w-10 place-items-center rounded-full glass"><Share2 className="h-4 w-4" /></button>}>
      <GlassCard delay={0} className="p-0 overflow-hidden">
        <div className="relative h-36 bg-gradient-to-br from-primary/40 to-primary/10 grid place-items-center">
          <Video className="h-14 w-14 text-primary/80" />
        </div>
        <div className="p-4">
          <div className="text-[10px] font-bold tracking-widest text-gold">WEBINAR · FREE</div>
          <h1 className="mt-1 font-display text-xl font-bold">Intro to Forensic DNA Analysis</h1>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-foreground/80">
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> 12 Jul 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 6:00 – 7:30 PM IST</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Zoom (link on RSVP)</span>
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> 214 attending</span>
          </div>
        </div>
      </GlassCard>

      <GlassCard delay={1}>
        <div className="text-[11px] font-bold tracking-widest text-primary">ABOUT</div>
        <p className="mt-2 text-[13px] leading-relaxed text-foreground/85">
          A beginner-friendly session covering DNA extraction, quantification, STR analysis and
          interpretation of profiles. Live Q&A with Dr. Priya Sharma. Event ref: {id}.
        </p>
      </GlassCard>

      <SectionTitle title="Speakers" />
      {["Dr. Priya Sharma — Sr. Scientist, CFSL", "Prof. Anil Verma — GFSU"].map((s) => (
        <GlassCard key={s} className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary text-sm font-bold">{s.split(" ")[1]?.[0]}</div>
          <div className="text-[13px]">{s}</div>
        </GlassCard>
      ))}

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
        <PillButton variant="primary" className="w-full">RSVP · Reserve Seat</PillButton>
      </div>
    </PageShell>
  );
}
