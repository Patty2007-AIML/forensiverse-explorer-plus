import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface PageShellProps {
  title: string;
  subtitle?: string;
  back?: string | boolean;
  action?: ReactNode;
  hideNav?: boolean;
  children: ReactNode;
}

export function PageShell({ title, subtitle, back = true, action, hideNav, children }: PageShellProps) {
  const backTo = typeof back === "string" ? back : "/";
  return (
    <div className="mx-auto min-h-screen w-full max-w-[440px] pb-28">
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="flex items-center justify-between px-4 pt-5 pb-3"
      >
        <div className="flex items-center gap-3 min-w-0">
          {back && (
            <Link to={backTo} className="grid h-10 w-10 place-items-center rounded-full glass shrink-0">
              <ArrowLeft className="h-4.5 w-4.5" />
            </Link>
          )}
          <div className="min-w-0">
            <h1 className="font-display text-[20px] font-bold leading-tight truncate">{title}</h1>
            {subtitle && <p className="text-[11px] text-muted-foreground truncate">{subtitle}</p>}
          </div>
        </div>
        <div className="shrink-0">{action ?? (
          <button className="grid h-10 w-10 place-items-center rounded-full glass">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        )}</div>
      </motion.header>
      <div className="px-4 space-y-4">{children}</div>
      {!hideNav && <BottomNav />}
    </div>
  );
}

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-6 py-10">
      {children}
    </div>
  );
}
