import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/splash")({ component: Splash });

function Splash() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[440px] flex-col items-center justify-center px-6 text-center">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
        <div className="relative">
          <div className="absolute inset-0 animate-pulse-glow rounded-full" />
          <img src={logoImg} alt="Forensiverse" className="relative h-28 w-28 rounded-full ring-2 ring-gold/40 shadow-[var(--shadow-gold)]" />
        </div>
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6">
        <div className="font-display text-3xl font-bold">FORENSIC <span className="gradient-text">SCIENCE</span></div>
        <div className="mt-2 flex items-center justify-center gap-2 text-[10px] tracking-[0.3em] text-gold">
          <span className="h-px w-4 bg-gold/60" /> TRUTH · EVIDENCE · JUSTICE <span className="h-px w-4 bg-gold/60" />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-16">
        <Fingerprint className="h-5 w-5 text-primary animate-pulse" />
      </motion.div>
      <Link to="/onboarding" className="mt-16 text-[11px] text-muted-foreground">Tap to continue →</Link>
    </div>
  );
}
