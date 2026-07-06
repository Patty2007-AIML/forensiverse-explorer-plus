import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, BookOpen, Users, GraduationCap, User } from "lucide-react";

const TABS = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/resources", icon: BookOpen, label: "Resources" },
  { to: "/community", icon: Users, label: "Community" },
  { to: "/courses", icon: GraduationCap, label: "Courses" },
  { to: "/profile", icon: User, label: "Profile" },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[440px]"
    >
      <div className="glass flex items-end justify-between rounded-t-3xl px-2 pb-5 pt-3">
        {TABS.map((t) => {
          const active = t.to === "/" ? pathname === "/" : pathname.startsWith(t.to);
          return (
            <Link
              key={t.label}
              to={t.to}
              className={`flex flex-1 flex-col items-center gap-1 py-1 ${active ? "text-gold" : "text-foreground/60"}`}
            >
              <t.icon className={`h-5 w-5 ${active ? "" : "opacity-80"}`} strokeWidth={active ? 2.2 : 1.7} />
              <span className={`text-[11px] ${active ? "font-semibold" : ""}`}>{t.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="mx-auto mb-2 h-1 w-32 rounded-full bg-foreground/40" />
    </motion.nav>
  );
}
