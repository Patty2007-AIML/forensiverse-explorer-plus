import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export function GlassCard({
  children,
  className = "",
  delay = 0,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={delay}
      onClick={onClick}
      className={`glass rounded-2xl p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  title,
  action,
}: {
  title: string;
  action?: { label: string; to?: string };
}) {
  return (
    <div className="mb-3 flex items-center justify-between px-1 pt-1">
      <h2 className="font-display text-lg font-bold">{title}</h2>
      {action &&
        (action.to ? (
          <Link to={action.to} className="text-xs font-semibold text-primary">
            {action.label}
          </Link>
        ) : (
          <button className="text-xs font-semibold text-primary">{action.label}</button>
        ))}
    </div>
  );
}

export function ListItem({
  icon: Icon,
  title,
  subtitle,
  tone = "primary",
  to,
  trailing,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  tone?: "primary" | "gold" | "violet" | "emerald" | "cyan" | "rose";
  to?: string;
  trailing?: ReactNode;
}) {
  const tones: Record<string, string> = {
    primary: "bg-primary/15 text-primary",
    gold: "bg-gold/15 text-gold",
    violet: "bg-violet-500/15 text-violet-300",
    emerald: "bg-emerald-500/15 text-emerald-400",
    cyan: "bg-cyan/15 text-cyan",
    rose: "bg-rose-500/15 text-rose-300",
  };
  const content = (
    <div className="glass flex items-center gap-3 rounded-2xl p-3.5">
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tones[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold">{title}</div>
        {subtitle && <div className="truncate text-[11px] text-muted-foreground">{subtitle}</div>}
      </div>
      {trailing ?? <ChevronRight className="h-4 w-4 text-muted-foreground" />}
    </div>
  );
  if (to) return <Link to={to}>{content}</Link>;
  return content;
}

export function PillButton({
  children,
  onClick,
  variant = "outline",
  className = "",
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "outline" | "primary" | "gold";
  className?: string;
  type?: "button" | "submit";
}) {
  const styles: Record<string, string> = {
    outline: "border border-white/15 hover:bg-white/5",
    primary:
      "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]",
    gold: "bg-[image:var(--gradient-gold)] text-background shadow-[var(--shadow-gold)]",
  };
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: { label: string; to?: string; onClick?: () => void };
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="glass flex flex-col items-center rounded-3xl px-6 py-12 text-center"
    >
      <div className="grid h-20 w-20 place-items-center rounded-full bg-primary/10 text-primary animate-pulse-glow">
        <Icon className="h-9 w-9" strokeWidth={1.5} />
      </div>
      <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 max-w-[280px] text-sm text-muted-foreground">{description}</p>
      {action && (
        <div className="mt-6">
          {action.to ? (
            <Link
              to={action.to}
              className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
            >
              {action.label} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <PillButton variant="primary" onClick={action.onClick}>
              {action.label} <ArrowRight className="h-4 w-4" />
            </PillButton>
          )}
        </div>
      )}
    </motion.div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-xl bg-white/5 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent, oklch(0.4 0.05 250 / 0.15), transparent)",
        backgroundSize: "1000px 100%",
      }}
    />
  );
}

export function Chip({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
        active
          ? "border-transparent bg-[image:var(--gradient-primary)] text-primary-foreground"
          : "border-white/15 text-foreground/70 hover:bg-white/5"
      }`}
    >
      {children}
    </button>
  );
}
