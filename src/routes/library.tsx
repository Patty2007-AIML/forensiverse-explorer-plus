import { createFileRoute } from "@tanstack/react-router";
import { Book, FileText, Video, Podcast, Newspaper, Layers } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { ListItem, GlassCard } from "@/components/fv/kit";

const SECTIONS = [
  { icon: Book, title: "Books & Textbooks", subtitle: "350+ titles", tone: "primary" as const, to: "/resources" },
  { icon: FileText, title: "Journals & PDFs", subtitle: "1,200+ documents", tone: "emerald" as const, to: "/resources" },
  { icon: Video, title: "Video Lectures", subtitle: "480+ lectures", tone: "violet" as const, to: "/resources" },
  { icon: Podcast, title: "Podcasts", subtitle: "60+ episodes", tone: "gold" as const, to: "/resources" },
  { icon: Newspaper, title: "Case Journals", subtitle: "220 issues", tone: "cyan" as const, to: "/case-studies" },
  { icon: Layers, title: "Research Papers", subtitle: "3,400+ papers", tone: "rose" as const, to: "/resources" },
];

export const Route = createFileRoute("/library")({
  head: () => ({ meta: [{ title: "Library — Forensiverse" }] }),
  component: () => (
    <PageShell title="Library" subtitle="Curated knowledge, one tap away">
      <GlassCard delay={0} className="text-center">
        <div className="font-display text-3xl font-bold gradient-text">6,290+</div>
        <div className="text-[11px] text-muted-foreground">Total items in your library</div>
      </GlassCard>
      {SECTIONS.map((s, i) => (
        <div key={s.title} style={{ animationDelay: `${i * 40}ms` }}>
          <ListItem {...s} />
        </div>
      ))}
    </PageShell>
  ),
});
