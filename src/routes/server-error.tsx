import { createFileRoute } from "@tanstack/react-router";
import { ServerCrash } from "lucide-react";
import { EmptyState } from "@/components/fv/kit";
import { AuthShell } from "@/components/fv/PageShell";

export const Route = createFileRoute("/server-error")({
  component: () => (
    <AuthShell>
      <div className="my-auto"><EmptyState icon={ServerCrash} title="Something broke on our side" description="Our team's been notified. Please give it a minute and try again." action={{ label: "Try again", to: "/" }} /></div>
    </AuthShell>
  ),
});
