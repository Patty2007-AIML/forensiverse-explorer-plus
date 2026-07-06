import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, PlayCircle, Award, Users } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { Chip, GlassCard, fadeUp } from "@/components/fv/kit";
import { useState } from "react";

const COURSES = [
  { id: "c1", title: "Digital Forensics Fundamentals", instructor: "Dr. Rohan Mehta", lessons: 24, hours: 8, level: "Beginner", students: "2.1k", cover: "from-primary/40 to-primary/10" },
  { id: "c2", title: "Crime Scene Investigation", instructor: "Insp. Neha Rao", lessons: 32, hours: 12, level: "Intermediate", students: "1.8k", cover: "from-emerald-500/40 to-emerald-500/10" },
  { id: "c3", title: "DNA Profiling Deep Dive", instructor: "Dr. Priya Sharma", lessons: 18, hours: 6, level: "Advanced", students: "870", cover: "from-cyan/40 to-cyan/10" },
  { id: "c4", title: "Forensic Toxicology", instructor: "Dr. Kabir Shah", lessons: 20, hours: 9, level: "Intermediate", students: "1.2k", cover: "from-rose-500/40 to-rose-500/10" },
  { id: "c5", title: "Cyber Crime & Evidence", instructor: "Prof. Anil Verma", lessons: 28, hours: 11, level: "Advanced", students: "1.5k", cover: "from-violet-500/40 to-violet-500/10" },
  { id: "c6", title: "Questioned Documents", instructor: "Dr. Meera Iyer", lessons: 14, hours: 5, level: "Beginner", students: "640", cover: "from-gold/40 to-gold/10" },
];

const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

export const Route = createFileRoute("/courses")({
  head: () => ({ meta: [{ title: "Courses — Forensiverse" }] }),
  component: CoursesPage,
});

function CoursesPage() {
  const [level, setLevel] = useState("All");
  const filtered = level === "All" ? COURSES : COURSES.filter((c) => c.level === level);
  return (
    <PageShell title="Courses" subtitle="Build expert forensic skills" back={false}>
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
        {LEVELS.map((l) => <Chip key={l} active={level === l} onClick={() => setLevel(l)}>{l}</Chip>)}
      </div>
      {filtered.map((c, i) => (
        <motion.div key={c.id} variants={fadeUp} initial="hidden" animate="visible" custom={i}>
          <Link to="/courses/$id" params={{ id: c.id }} className="glass block overflow-hidden rounded-2xl">
            <div className={`relative h-28 bg-gradient-to-br ${c.cover}`}>
              <div className="absolute inset-0 grid place-items-center"><GraduationCap className="h-12 w-12 text-foreground/80" strokeWidth={1.3} /></div>
              <div className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">{c.level}</div>
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold">{c.title}</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">by {c.instructor}</div>
              <div className="mt-3 flex items-center gap-3 text-[11px] text-foreground/70">
                <span className="flex items-center gap-1"><PlayCircle className="h-3.5 w-3.5" /> {c.lessons} lessons</span>
                <span>· {c.hours}h</span>
                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {c.students}</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
      <GlassCard delay={filtered.length + 1}>
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold"><Award className="h-5 w-5" /></div>
          <div className="text-[13px]">Earn a verified certificate on completion.</div>
        </div>
      </GlassCard>
    </PageShell>
  );
}
