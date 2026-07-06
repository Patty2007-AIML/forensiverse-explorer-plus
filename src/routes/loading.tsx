import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/fv/PageShell";
import { GlassCard, Skeleton, SectionTitle } from "@/components/fv/kit";

export const Route = createFileRoute("/loading")({
  component: () => (
    <PageShell title="Loading…" subtitle="Skeleton preview" back="/">
      <GlassCard className="!p-0 overflow-hidden">
        <Skeleton className="h-40 w-full" />
        <div className="space-y-2 p-4">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </GlassCard>
      <SectionTitle title="Items" />
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <GlassCard key={i} className="!p-3">
            <Skeleton className="h-11 w-11 rounded-xl" />
            <Skeleton className="mt-3 h-3 w-3/4" />
            <Skeleton className="mt-2 h-2 w-1/2" />
          </GlassCard>
        ))}
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <GlassCard key={i} className="flex items-center gap-3">
          <Skeleton className="h-11 w-11 rounded-xl" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-2 w-1/3" />
          </div>
        </GlassCard>
      ))}
    </PageShell>
  ),
});
