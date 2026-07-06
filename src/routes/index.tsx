import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Bell, Search, Menu, ChevronRight, ArrowRight,
  BookOpen, Users, GraduationCap, User, Home,
  FileText, Briefcase, Trophy, Book, ClipboardList,
  Calendar, Camera, FileSearch, Fingerprint,
} from "lucide-react";
import heroImg from "@/assets/hero-forensic.jpg";
import skullImg from "@/assets/skull.png";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const spring = { type: "spring", stiffness: 260, damping: 24 } as const;
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

function HomePage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[440px] pb-28">
      <TopBar />
      <div className="px-4 space-y-4">
        <SearchBar />
        <HeroCard />
        <StatsRow />
        <WordOfDay />
        <DailyQuiz />
        <ContinueJourney />
        <UpcomingEvent />
      </div>
      <BottomNav />
    </div>
  );
}

/* ---------------- Top Bar ---------------- */
function TopBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={spring}
      className="flex items-center justify-between px-4 pt-5 pb-4"
    >
      <div className="flex items-center gap-3">
        <motion.img
          whileTap={{ scale: 0.9, rotate: 8 }}
          src={logoImg}
          alt="Forensiverse"
          className="h-12 w-12 rounded-full ring-2 ring-gold/40 shadow-[var(--shadow-gold)]"
        />
        <div className="leading-tight">
          <div className="font-display text-[17px] font-bold tracking-wide">
            FORENSIC <span className="gradient-text">SCIENCE</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] tracking-[0.22em] text-gold">
            <span className="h-px w-3 bg-gold/60" />
            TRUTH · EVIDENCE · JUSTICE
            <span className="h-px w-3 bg-gold/60" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <motion.button whileTap={{ scale: 0.9 }} className="relative rounded-full p-2 hover:bg-white/5">
          <Bell className="h-5 w-5 text-foreground/80" />
          <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] font-bold text-background">
            3
          </span>
        </motion.button>
        <motion.button whileTap={{ scale: 0.9 }} className="rounded-full p-2 hover:bg-white/5">
          <Menu className="h-6 w-6 text-foreground/80" />
        </motion.button>
      </div>
    </motion.header>
  );
}

/* ---------------- Search ---------------- */
function SearchBar() {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
      className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5"
    >
      <Search className="h-5 w-5 text-muted-foreground" />
      <input
        placeholder="Search resources, books, cases..."
        className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
    </motion.div>
  );
}

/* ---------------- Hero ---------------- */
function HeroCard() {
  const slides = [0, 1, 2, 3];
  const [active, setActive] = useState(0);
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
      className="glass relative overflow-hidden rounded-3xl p-5"
    >
      <img src={heroImg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="relative z-10 max-w-[62%]">
        <p className="text-xs text-foreground/70">Welcome back,</p>
        <h1 className="font-display text-[34px] font-bold leading-none">Parth!</h1>
        <div className="my-3 h-1 w-14 rounded-full bg-gold" />
        <p className="text-sm leading-relaxed text-foreground/80">
          Keep learning. Stay curious. Make evidence speak the truth.
        </p>
      </div>
      <div className="relative z-10 mt-4 flex gap-1.5">
        {slides.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`h-1.5 rounded-full transition-all ${active === s ? "w-6 bg-primary" : "w-1.5 bg-white/25"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ---------------- Stats ---------------- */
const STATS = [
  { icon: Book, value: "2500+", label: "Resources", accent: "bg-primary" },
  { icon: FileText, value: "350+", label: "Books & PDFs", accent: "bg-emerald-400" },
  { icon: Briefcase, value: "500+", label: "Internship Opportunities", accent: "bg-teal-400" },
  { icon: Users, value: "10K+", label: "Active Students", accent: "bg-violet-400" },
  { icon: Trophy, value: "50+", label: "Expert Mentors", accent: "bg-orange-400" },
];
function StatsRow() {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
      className="glass rounded-2xl p-3"
    >
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            whileTap={{ scale: 0.95 }}
            className="flex min-w-[92px] flex-col items-center gap-1.5 rounded-xl px-2 py-2"
          >
            <s.icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
            <div className="font-display text-lg font-bold">{s.value}</div>
            <div className="text-center text-[11px] leading-tight text-foreground/75">{s.label}</div>
            <div className={`mt-1 h-0.5 w-8 rounded-full ${s.accent}`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ---------------- Word of the Day ---------------- */
function WordOfDay() {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
      className="glass relative overflow-hidden rounded-2xl p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-xs font-bold tracking-widest text-gold">WORD OF THE DAY</div>
          <h3 className="mt-2 font-display text-2xl font-bold">Osteology</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-foreground/75">
            The scientific study of bones, especially in relation to the identification of human remains.
          </p>
          <motion.button whileTap={{ scale: 0.96 }}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/15 px-3.5 py-2 text-sm hover:bg-white/5"
          >
            View Details
            <ArrowRight className="h-4 w-4 text-gold" />
          </motion.button>
        </div>
        <motion.img
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src={skullImg}
          alt="skull"
          className="h-24 w-24 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
        />
      </div>
      <button className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-primary/20 text-primary">
        <ClipboardList className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

/* ---------------- Daily Quiz ---------------- */
function DailyQuiz() {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
      className="glass flex items-center gap-3 rounded-2xl p-4"
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400">
        <ClipboardList className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-bold tracking-widest text-emerald-400">DAILY QUIZ</div>
        <p className="text-[13px] text-foreground/75">Test your knowledge with our daily quiz.</p>
      </div>
      <motion.button whileTap={{ scale: 0.96 }}
        className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/5"
      >
        Start Quiz <ArrowRight className="h-3.5 w-3.5 text-gold" />
      </motion.button>
    </motion.div>
  );
}

/* ---------------- Continue Journey ---------------- */
const JOURNEY = [
  {
    tag: "RECENTLY ACCESSED",
    tagColor: "text-cyan",
    body: (
      <div className="mt-3 flex items-start gap-2.5">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan/15 text-cyan">
          <FileText className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[13px] font-semibold leading-tight">Forensic Anthropology Basics</div>
          <div className="text-[11px] text-muted-foreground">PDF</div>
        </div>
      </div>
    ),
  },
  {
    tag: "YOUR PROGRESS",
    tagColor: "text-emerald-400",
    body: (
      <div className="mt-3 space-y-3">
        <ProgressRow label="Courses Completed" value="3/10" pct={30} color="bg-emerald-400" />
        <ProgressRow label="Quizzes Completed" value="12/30" pct={40} color="bg-emerald-400" />
      </div>
    ),
  },
  {
    tag: "RECOMMENDED FOR YOU",
    tagColor: "text-gold",
    body: (
      <div className="mt-3 space-y-2">
        <RecoRow icon={FileSearch} label="Digital Forensics Fundamentals" />
        <RecoRow icon={Camera} label="Crime Scene Investigation Basics" />
      </div>
    ),
  },
  {
    tag: "POPULAR RESOURCES",
    tagColor: "text-violet-400",
    body: (
      <div className="mt-3 space-y-2">
        <RecoRow icon={Book} label="Forensic Science Handbook" tone="violet" />
        <RecoRow icon={Camera} label="Forensic Photography Guide" tone="violet" />
      </div>
    ),
  },
];

function ProgressRow({ label, value, pct, color }: { label: string; value: string; pct: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[12px]">
        <span className="text-foreground/80">{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}
function RecoRow({ icon: Icon, label, tone = "gold" }: any) {
  const bg = tone === "violet" ? "bg-violet-500/15 text-violet-300" : "bg-gold/15 text-gold";
  return (
    <div className="flex items-center gap-2.5">
      <div className={`grid h-8 w-8 place-items-center rounded-lg ${bg}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-[12px] leading-tight flex-1">{label}</div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}

function ContinueJourney() {
  return (
    <motion.section variants={fadeUp} initial="hidden" animate="visible" custom={5} className="pt-1">
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="font-display text-lg font-bold">Continue Your Journey</h2>
        <button className="text-xs font-semibold text-primary">View All</button>
      </div>
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4">
        {JOURNEY.map((c) => (
          <motion.div
            key={c.tag}
            whileTap={{ scale: 0.98 }}
            className="glass min-w-[75%] snap-start rounded-2xl p-4"
          >
            <div className={`text-[11px] font-bold tracking-widest ${c.tagColor}`}>{c.tag}</div>
            {c.body}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ---------------- Upcoming Event ---------------- */
function UpcomingEvent() {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={6}
      className="glass flex items-center gap-3 rounded-2xl p-4"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
        <Calendar className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-bold tracking-widest text-violet-300">UPCOMING EVENT</div>
        <div className="mt-0.5 truncate text-sm font-semibold">Webinar: Intro to Forensic DNA Analysis</div>
        <div className="mt-0.5 text-[11px] text-muted-foreground">12 July 2026 · 06:00 PM IST</div>
      </div>
      <motion.button whileTap={{ scale: 0.96 }}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/15 px-3 py-2 text-[12px] hover:bg-white/5"
      >
        View <ArrowRight className="h-3.5 w-3.5 text-gold" />
      </motion.button>
    </motion.div>
  );
}

/* ---------------- Bottom Nav ---------------- */
const TABS = [
  { icon: Home, label: "Home", active: true },
  { icon: BookOpen, label: "Resources" },
  { icon: Users, label: "Community" },
  { icon: GraduationCap, label: "Courses" },
  { icon: User, label: "Profile" },
];
function BottomNav() {
  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={spring}
      className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[440px]"
    >
      <div className="glass flex items-end justify-between rounded-t-3xl px-2 pb-5 pt-3">
        {TABS.map((t) => (
          <motion.button
            key={t.label}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-1 flex-col items-center gap-1 py-1 ${t.active ? "text-gold" : "text-foreground/60"}`}
          >
            <t.icon className={`h-5 w-5 ${t.active ? "" : "opacity-80"}`} strokeWidth={t.active ? 2.2 : 1.7} />
            <span className={`text-[11px] ${t.active ? "font-semibold" : ""}`}>{t.label}</span>
          </motion.button>
        ))}
      </div>
      <div className="mx-auto mb-2 h-1 w-32 rounded-full bg-foreground/40" />
    </motion.nav>
  );
}
