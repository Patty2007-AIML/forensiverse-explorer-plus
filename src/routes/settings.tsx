import { createFileRoute, Link } from "@tanstack/react-router";
import { Moon, Globe, Bell, Lock, Eye, Trash2, LogOut, Fingerprint, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard } from "@/components/fv/kit";
import { useState } from "react";

export const Route = createFileRoute("/settings")({
  component: () => {
    const [dark, setDark] = useState(true);
    const [pushOn, setPushOn] = useState(true);
    const [biometric, setBiometric] = useState(false);
    return (
      <PageShell title="Settings" back="/profile">
        <SectionLabel>PREFERENCES</SectionLabel>
        <ToggleRow icon={Moon} label="Dark theme" v={dark} setV={setDark} tone="bg-primary/15 text-primary" />
        <RowLink icon={Globe} label="Language" value="English (IN)" />

        <SectionLabel>NOTIFICATIONS</SectionLabel>
        <ToggleRow icon={Bell} label="Push notifications" v={pushOn} setV={setPushOn} tone="bg-gold/15 text-gold" />
        <RowLink icon={Bell} label="Notification categories" value="4 enabled" />

        <SectionLabel>PRIVACY & SECURITY</SectionLabel>
        <RowLink icon={Lock} label="Change password" value="" />
        <ToggleRow icon={Fingerprint} label="Biometric unlock" v={biometric} setV={setBiometric} tone="bg-emerald-500/15 text-emerald-400" />
        <RowLink icon={Eye} label="Privacy" value="" />

        <SectionLabel>ACCOUNT</SectionLabel>
        <GlassCard className="flex items-center gap-3 !p-3.5 text-destructive">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/15"><Trash2 className="h-4.5 w-4.5" /></div>
          <div className="flex-1 text-[13px] font-semibold">Delete account</div>
        </GlassCard>
        <Link to="/login" className="glass flex items-center gap-3 rounded-2xl p-3.5 text-destructive mt-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/15"><LogOut className="h-4.5 w-4.5" /></div>
          <div className="flex-1 text-[13px] font-semibold">Sign out</div>
        </Link>

        <div className="pt-2 text-center text-[10px] text-muted-foreground">Forensiverse v1.0.0 · Made with care in India</div>
      </PageShell>
    );
  },
});

function SectionLabel({ children }: { children: string }) {
  return <div className="px-1 pt-3 text-[10px] font-bold tracking-widest text-muted-foreground">{children}</div>;
}
function RowLink({ icon: Icon, label, value }: any) {
  return (
    <GlassCard className="!p-3.5 flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5"><Icon className="h-4.5 w-4.5 text-foreground/80" /></div>
      <div className="flex-1 text-[13px] font-semibold">{label}</div>
      {value && <div className="text-[11px] text-muted-foreground">{value}</div>}
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </GlassCard>
  );
}
function ToggleRow({ icon: Icon, label, v, setV, tone }: any) {
  return (
    <GlassCard className="!p-3.5 flex items-center gap-3">
      <div className={`grid h-10 w-10 place-items-center rounded-xl ${tone}`}><Icon className="h-4.5 w-4.5" /></div>
      <div className="flex-1 text-[13px] font-semibold">{label}</div>
      <button onClick={() => setV(!v)} className={`relative h-6 w-11 rounded-full transition-colors ${v ? "bg-primary" : "bg-white/15"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${v ? "translate-x-5" : "translate-x-0.5"}`} />
      </button>
    </GlassCard>
  );
}
