import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle, MessageCircle, Mail, Phone, ChevronDown } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, ListItem } from "@/components/fv/kit";
import { useState } from "react";

const FAQ = [
  { q: "How do I download resources for offline use?", a: "Open any resource and tap Download. Files sync automatically to your Downloads page." },
  { q: "Can I earn certificates?", a: "Yes — complete every lesson of a course and pass the final assessment to unlock a verified certificate." },
  { q: "How do internship applications work?", a: "Applications open a form pre-filled with your profile. You'll be notified when the recruiter responds." },
  { q: "Is the community moderated?", a: "Yes, our team plus 12 volunteer moderators enforce a strict code of conduct." },
];

export const Route = createFileRoute("/help")({
  component: () => {
    const [open, setOpen] = useState<number | null>(0);
    return (
      <PageShell title="Help & Support" back="/profile">
        <GlassCard delay={0} className="flex items-center gap-3">
          <HelpCircle className="h-6 w-6 text-primary" />
          <div className="text-[13px]">We usually reply within 24 hours.</div>
        </GlassCard>
        <ListItem icon={MessageCircle} title="Live chat" subtitle="Chat with a support agent" tone="primary" />
        <ListItem icon={Mail} title="Email us" subtitle="support@forensiverse.app" tone="gold" />
        <ListItem icon={Phone} title="Call helpline" subtitle="+91 11 4000 1234 · 10am–7pm IST" tone="emerald" />

        <div className="pt-2 text-[10px] font-bold tracking-widest text-muted-foreground px-1">FREQUENTLY ASKED</div>
        {FAQ.map((f, i) => (
          <GlassCard key={i} delay={i + 1} className="!p-0">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center gap-3 p-4 text-left">
              <div className="flex-1 text-[13px] font-semibold">{f.q}</div>
              <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="px-4 pb-4 text-[12px] text-foreground/80">{f.a}</div>}
          </GlassCard>
        ))}
      </PageShell>
    );
  },
});
