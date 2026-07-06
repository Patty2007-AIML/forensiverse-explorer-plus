import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { EmptyState } from "@/components/fv/kit";
import { AuthShell } from "@/components/fv/PageShell";

export const Route = createFileRoute("/access-denied")({
  component: () => (
    <AuthShell>
      <div className="my-auto"><EmptyState icon={ShieldAlert} title="Access denied" description="You don't have permission to view this evidence file. Contact your admin if this looks wrong." action={{ label: "Go home", to: "/" }} /></div>
    </AuthShell>
  ),
});
