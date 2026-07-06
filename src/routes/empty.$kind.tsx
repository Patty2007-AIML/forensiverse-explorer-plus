import { createFileRoute, Link } from "@tanstack/react-router";
import { BellOff, Download, Search, Users, BookmarkX, Wifi, GraduationCap, Library } from "lucide-react";
import { PageShell } from "@/components/fv/PageShell";
import { EmptyState } from "@/components/fv/kit";

const EMPTIES: Record<string, { icon: any; title: string; desc: string; action?: { label: string; to?: string } }> = {
  notifications: { icon: BellOff, title: "You're all caught up", desc: "No new notifications right now. We'll ping you when something happens.", action: { label: "Browse resources", to: "/resources" } },
  downloads: { icon: Download, title: "No downloads yet", desc: "Save resources for offline study — they'll show up right here.", action: { label: "Explore resources", to: "/resources" } },
  search: { icon: Search, title: "No results found", desc: "Try a different keyword or clear your filters.", action: { label: "Back to search", to: "/search" } },
  community: { icon: Users, title: "Nothing to show", desc: "Follow experts or topics to fill up your feed.", action: { label: "Discover community", to: "/community" } },
  bookmarks: { icon: BookmarkX, title: "No bookmarks yet", desc: "Tap the bookmark icon on any resource to keep it here.", action: { label: "Browse library", to: "/library" } },
  library: { icon: Library, title: "Library is empty", desc: "Add books, PDFs and podcasts to build your reading list.", action: { label: "Add resources", to: "/resources" } },
  courses: { icon: GraduationCap, title: "No courses available", desc: "New courses drop every month. Sign up to be notified first.", action: { label: "Notify me" } },
  wifi: { icon: Wifi, title: "You're offline", desc: "Some content isn't available without an internet connection." },
};

export const Route = createFileRoute("/empty/$kind")({
  component: () => {
    const { kind } = Route.useParams();
    const e = EMPTIES[kind] ?? EMPTIES.notifications;
    return (
      <PageShell title="Empty state" back="/">
        <EmptyState icon={e.icon} title={e.title} description={e.desc} action={e.action} />
        <div className="pt-4 text-center text-[11px] text-muted-foreground">
          Also try:{" "}
          {Object.keys(EMPTIES).map((k, i, arr) => (
            <span key={k}>
              <Link to="/empty/$kind" params={{ kind: k }} className="text-primary">{k}</Link>
              {i < arr.length - 1 ? " · " : ""}
            </span>
          ))}
        </div>
      </PageShell>
    );
  },
});
