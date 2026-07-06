import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileSearch, Calendar, MapPin } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { Chip, fadeUp } from "@/components/fv/kit";
import { useState } from "react";
import crimeImg from "@/assets/crime-scene.jpg";
import dnaImg from "@/assets/dna.jpg";
import fpImg from "@/assets/fingerprint.jpg";

const CASES = [
  { id: "cs1", title: "The Aarushi Talwar Case", year: 2008, place: "Noida, India", img: crimeImg, cat: "Homicide", summary: "Double murder investigation that reshaped Indian forensic protocols." },
  { id: "cs2", title: "Nithari Serial Killings", year: 2006, place: "Noida, India", img: crimeImg, cat: "Serial Crime", summary: "DNA and skeletal analysis in one of India's most disturbing serial cases." },
  { id: "cs3", title: "Green River Killer", year: 2001, place: "Washington, USA", img: dnaImg, cat: "Cold Case", summary: "Two decades of DNA advances finally led to conviction." },
  { id: "cs4", title: "Golden State Killer", year: 2018, place: "California, USA", img: fpImg, cat: "Genetic Genealogy", summary: "Investigative genetic genealogy cracked a 40-year mystery." },
  { id: "cs5", title: "Sheena Bora Case", year: 2015, place: "Mumbai, India", img: crimeImg, cat: "Homicide", summary: "Skeletal remains identification and mobile forensics timeline." },
];
const TABS = ["All", "India", "International", "Cold Cases", "Solved"];

export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [{ title: "Case Studies — Forensiverse" }] }),
  component: CasesPage,
});
function CasesPage() {
  const [t, setT] = useState("All");
  return (
    <PageShell title="Case Studies" subtitle="Real investigations · lessons learned">
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
        {TABS.map((x) => <Chip key={x} active={t === x} onClick={() => setT(x)}>{x}</Chip>)}
      </div>
      {CASES.map((c, i) => (
        <motion.div key={c.id} variants={fadeUp} initial="hidden" animate="visible" custom={i}>
          <Link to="/case-studies/$id" params={{ id: c.id }} className="glass block overflow-hidden rounded-2xl">
            <div className="relative h-32">
              <img src={c.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-gold backdrop-blur">{c.cat}</div>
              <div className="absolute bottom-2 left-3 right-3">
                <div className="font-display text-[15px] font-bold leading-tight">{c.title}</div>
              </div>
            </div>
            <div className="p-3.5">
              <p className="text-[12px] text-foreground/80">{c.summary}</p>
              <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {c.year}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {c.place}</span>
                <FileSearch className="ml-auto h-4 w-4 text-primary" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </PageShell>
  );
}
