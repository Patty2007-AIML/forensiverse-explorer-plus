import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Send, Mic, ImageIcon } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, PillButton } from "@/components/fv/kit";

const CHAT = [
  { who: "ai", t: "Hi Parth 👋 I'm your forensic study assistant. Ask me anything — from case procedures to lab techniques." },
  { who: "me", t: "What's the difference between Ninhydrin and DFO for latent prints?" },
  { who: "ai", t: "Both react with amino acids, but DFO fluoresces under 555 nm laser giving 2–3× more prints on paper. Ninhydrin turns them purple in visible light and is cheaper — often used after DFO." },
];
const SUGGESTIONS = [
  "Explain Locard's Principle",
  "Compare PCR vs STR",
  "Study plan for CSI exam",
  "How to write a lab report",
];

export const Route = createFileRoute("/ai-assistant")({
  component: () => (
    <PageShell title="AI Assistant" subtitle="Powered by Forensiverse AI">
      <GlassCard delay={0} className="text-center">
        <Sparkles className="mx-auto h-8 w-8 text-primary animate-pulse-glow" />
        <div className="mt-2 text-[13px]">Ask questions, get study plans, decode terminology.</div>
      </GlassCard>

      <div className="space-y-2 pb-4">
        {CHAT.map((m, i) => (
          <div key={i} className={`flex ${m.who === "me" ? "justify-end" : ""}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${m.who === "me" ? "bg-[image:var(--gradient-primary)] text-primary-foreground" : "glass"}`}>{m.t}</div>
          </div>
        ))}
      </div>

      <div className="text-[10px] font-bold tracking-widest text-muted-foreground px-1">SUGGESTIONS</div>
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((s) => <button key={s} className="glass rounded-xl px-3 py-2 text-[11px]">{s}</button>)}
      </div>

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-[440px] px-4">
        <div className="glass flex items-center gap-2 rounded-2xl p-2">
          <button className="grid h-9 w-9 place-items-center rounded-lg hover:bg-white/5"><ImageIcon className="h-4 w-4" /></button>
          <input placeholder="Ask anything…" className="flex-1 bg-transparent px-2 py-2 text-sm focus:outline-none" />
          <button className="grid h-9 w-9 place-items-center rounded-lg hover:bg-white/5"><Mic className="h-4 w-4" /></button>
          <PillButton variant="primary"><Send className="h-4 w-4" /></PillButton>
        </div>
      </div>
    </PageShell>
  ),
});
