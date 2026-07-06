import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, IndianRupee } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { Chip, fadeUp } from "@/components/fv/kit";
import { useState } from "react";

const INTERNS = [
  { id: "i1", org: "CFSL New Delhi", role: "Trace Evidence Intern", loc: "Delhi", dur: "8 weeks", stipend: "₹15k/mo", type: "On-site", tags: ["Chemistry", "GC-MS"] },
  { id: "i2", org: "GFSU", role: "DNA Analysis Trainee", loc: "Gandhinagar", dur: "12 weeks", stipend: "₹20k/mo", type: "On-site", tags: ["Biology", "PCR"] },
  { id: "i3", org: "Cyber Cell, Mumbai Police", role: "Digital Forensics Intern", loc: "Mumbai", dur: "6 weeks", stipend: "₹12k/mo", type: "Hybrid", tags: ["Digital", "Autopsy"] },
  { id: "i4", org: "LNJN NICFS", role: "Questioned Documents Research", loc: "Delhi", dur: "10 weeks", stipend: "Unpaid + certificate", type: "On-site", tags: ["QD", "Research"] },
  { id: "i5", org: "Truthlabs Hyderabad", role: "Private Forensics Intern", loc: "Hyderabad", dur: "8 weeks", stipend: "₹18k/mo", type: "On-site", tags: ["General"] },
];

export const Route = createFileRoute("/internships")({
  head: () => ({ meta: [{ title: "Internships — Forensiverse" }] }),
  component: () => {
    const [t, setT] = useState("All");
    return (
      <PageShell title="Internships" subtitle="500+ opportunities">
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
          {["All", "On-site", "Remote", "Hybrid", "Paid"].map((x) => <Chip key={x} active={t === x} onClick={() => setT(x)}>{x}</Chip>)}
        </div>
        {INTERNS.map((it, i) => (
          <motion.div key={it.id} variants={fadeUp} initial="hidden" animate="visible" custom={i}>
            <Link to="/internships/$id" params={{ id: it.id }} className="glass block rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><Briefcase className="h-5 w-5" /></div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold">{it.role}</div>
                  <div className="text-[11px] text-muted-foreground">{it.org}</div>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">{it.type}</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-foreground/80">
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {it.loc}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {it.dur}</span>
                <span className="flex items-center gap-1"><IndianRupee className="h-3.5 w-3.5 text-gold" /> {it.stipend}</span>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {it.tags.map((tg) => <span key={tg} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px]">{tg}</span>)}
              </div>
            </Link>
          </motion.div>
        ))}
      </PageShell>
    );
  },
});
