import { createFileRoute } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { EmptyState } from "@/components/fv/kit";
import { AuthShell } from "@/components/fv/PageShell";

export const Route = createFileRoute("/coming-soon")({
  component: () => (
    <AuthShell>
      <div className="my-auto"><EmptyState icon={Rocket} title="Coming soon" description="This feature is currently in the lab. We'll notify you the moment it's ready." action={{ label: "Notify me" }} /></div>
    </AuthShell>
  ),
});
