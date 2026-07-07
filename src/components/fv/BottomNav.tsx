import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, BookOpen, Users, GraduationCap, User } from "lucide-react";
import logoImg from "@/assets/logo.png";

const TABS = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/resources", icon: BookOpen, label: "Resources" },
  { to: "/community", icon: Users, label: "Community" },
  { to: "/courses", icon: GraduationCap, label: "Courses" },
  { to: "/profile", icon: User, label: "Profile" },
] as const;

function useActive() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));
}

export function BottomNav() {
  const isActive = useActive();
  return (
    <>
      {/* Mobile bottom nav */}
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[440px] md:hidden"
      >
        <div className="glass flex items-end justify-between rounded-t-3xl px-2 pb-5 pt-3">
          {TABS.map((t) => {
            const active = isActive(t.to);
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

      {/* Tablet/Desktop top nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="fixed inset-x-0 top-0 z-40 hidden md:block"
      >
        <div className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoImg} alt="Forensiverse" className="h-9 w-9 rounded-full ring-2 ring-gold/40" />
            <span className="font-display text-sm font-bold tracking-wide">
              FORENSIC <span className="gradient-text">SCIENCE</span>
            </span>
          </Link>
          <div className="flex items-center gap-1">
            {TABS.map((t) => {
              const active = isActive(t.to);
              return (
                <Link
                  key={t.label}
                  to={t.to}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${
                    active ? "bg-white/10 text-gold font-semibold" : "text-foreground/70 hover:bg-white/5"
                  }`}
                >
                  <t.icon className="h-4 w-4" strokeWidth={active ? 2.2 : 1.7} />
                  <span>{t.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
