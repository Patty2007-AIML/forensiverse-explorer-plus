import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, ArrowRight, BookOpen, Users, Trophy } from "lucide-react";
import { AuthShell } from "@/components/fv/PageShell";
import { PillButton } from "@/components/fv/kit";

const SLIDES = [
  { icon: BookOpen, title: "Learn from the best", body: "2,500+ curated resources, courses & case studies — all in one place.", color: "text-primary" },
  { icon: Users, title: "Join a real community", body: "10K+ students, mentors and experts. Discuss cases, ask questions, grow together.", color: "text-emerald-400" },
  { icon: Trophy, title: "Achieve. Compete. Certify.", body: "Earn badges, top the leaderboard and add verified certificates to your résumé.", color: "text-gold" },
];

export const Route = createFileRoute("/onboarding")({ component: Onboarding });

function Onboarding() {
  const [i, setI] = useState(0);
  const nav = useNavigate();
  const S = SLIDES[i];
  const next = () => (i < SLIDES.length - 1 ? setI(i + 1) : nav({ to: "/login" }));
  return (
    <AuthShell>
      <div className="flex justify-end"><Link to="/login" className="text-[12px] text-muted-foreground">Skip</Link></div>
      <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mt-16 text-center">
        <div className={`mx-auto grid h-24 w-24 place-items-center rounded-3xl glass ${S.color}`}><S.icon className="h-12 w-12" strokeWidth={1.4} /></div>
        <h1 className="mt-8 font-display text-3xl font-bold">{S.title}</h1>
        <p className="mt-3 text-[14px] text-foreground/80">{S.body}</p>
      </motion.div>
      <div className="mt-auto space-y-6">
        <div className="flex justify-center gap-2">
          {SLIDES.map((_, k) => (
            <span key={k} className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-white/25"}`} />
          ))}
        </div>
        <PillButton variant="primary" className="w-full" onClick={next}>
          {i === SLIDES.length - 1 ? "Get started" : "Next"}
          {i === SLIDES.length - 1 ? <ArrowRight className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </PillButton>
      </div>
    </AuthShell>
  );
}
