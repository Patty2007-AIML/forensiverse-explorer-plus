import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { EmptyState } from "@/components/fv/kit";
import { AuthShell } from "@/components/fv/PageShell";

export const Route = createFileRoute("/maintenance")({
  component: () => (
    <AuthShell>
      <div className="my-auto"><EmptyState icon={Wrench} title="Under maintenance" description="We're tuning the microscopes. Forensiverse will be back shortly." /></div>
    </AuthShell>
  ),
});
