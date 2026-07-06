import { createFileRoute } from "@tanstack/react-router";
import { WifiOff } from "lucide-react";
import { EmptyState } from "@/components/fv/kit";
import { AuthShell } from "@/components/fv/PageShell";

export const Route = createFileRoute("/no-internet")({
  component: () => (
    <AuthShell>
      <div className="my-auto"><EmptyState icon={WifiOff} title="No connection" description="Check your Wi-Fi or mobile data and try again. Your downloads are still available offline." action={{ label: "Retry" }} /></div>
    </AuthShell>
  ),
});
