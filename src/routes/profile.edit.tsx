import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton } from "@/components/fv/kit";

export const Route = createFileRoute("/profile/edit")({
  component: () => (
    <PageShell title="Edit Profile" back="/profile">
      <GlassCard delay={0} className="text-center py-6">
        <div className="relative mx-auto h-24 w-24">
          <div className="grid h-full w-full place-items-center rounded-full bg-[image:var(--gradient-primary)] font-display text-3xl font-bold text-primary-foreground ring-2 ring-gold/40">P</div>
          <button className="absolute -bottom-1 -right-1 grid h-9 w-9 place-items-center rounded-full bg-gold text-background shadow-[var(--shadow-gold)]"><Camera className="h-4 w-4" /></button>
        </div>
      </GlassCard>
      <Field label="Full name" v="Parth Jha" />
      <Field label="Username" v="@parth.jha" />
      <Field label="Email" v="parth@example.com" />
      <Field label="Phone" v="+91 98XXX 12345" />
      <Field label="Institution" v="LNJN NICFS, Delhi" />
      <Field label="Course & year" v="MSc Forensic Science · Year 2" />
      <TextArea label="Bio" v="Aspiring forensic examiner fascinated by trace evidence & questioned documents." />
      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
        <PillButton variant="primary" className="w-full">Save changes</PillButton>
      </div>
    </PageShell>
  ),
});

function Field({ label, v }: { label: string; v: string }) {
  return (
    <GlassCard className="!p-3.5">
      <div className="text-[10px] font-bold tracking-widest text-muted-foreground">{label.toUpperCase()}</div>
      <input defaultValue={v} className="mt-1 w-full bg-transparent text-sm focus:outline-none" />
    </GlassCard>
  );
}
function TextArea({ label, v }: { label: string; v: string }) {
  return (
    <GlassCard className="!p-3.5">
      <div className="text-[10px] font-bold tracking-widest text-muted-foreground">{label.toUpperCase()}</div>
      <textarea defaultValue={v} rows={3} className="mt-1 w-full resize-none bg-transparent text-sm focus:outline-none" />
    </GlassCard>
  );
}
