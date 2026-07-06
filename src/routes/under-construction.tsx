import { createFileRoute } from "@tanstack/react-router";
import { HardHat } from "lucide-react";
import { EmptyState } from "@/components/fv/kit";
import { AuthShell } from "@/components/fv/PageShell";

export const Route = createFileRoute("/under-construction")({
  component: () => (
    <AuthShell>
      <div className="my-auto"><EmptyState icon={HardHat} title="Under construction" description="This section is being built. Pardon the cordoned-off tape." action={{ label: "Go home", to: "/" }} /></div>
    </AuthShell>
  ),
});
