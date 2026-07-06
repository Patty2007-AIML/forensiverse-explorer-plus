import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { AuthShell } from "@/components/fv/PageShell";
import { PillButton } from "@/components/fv/kit";
import { useState } from "react";

export const Route = createFileRoute("/otp")({ component: Otp });

function Otp() {
  const [d, setD] = useState(["", "", "", "", "", ""]);
  return (
    <AuthShell>
      <Link to="/forgot-password" className="grid h-10 w-10 place-items-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
      <div className="mt-10 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-400"><ShieldCheck className="h-8 w-8" /></div>
        <h1 className="mt-5 font-display text-2xl font-bold">Verify it's you</h1>
        <p className="mt-2 text-[13px] text-muted-foreground">We sent a 6-digit code to your email.</p>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {d.map((v, i) => (
          <input key={i} maxLength={1} value={v}
            onChange={(e) => { const nd = [...d]; nd[i] = e.target.value.slice(-1); setD(nd); }}
            className="glass h-14 w-11 rounded-2xl bg-transparent text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary" />
        ))}
      </div>
      <p className="mt-4 text-center text-[12px] text-muted-foreground">Didn't get a code? <button className="font-semibold text-gold">Resend in 42s</button></p>
      <div className="mt-8">
        <Link to="/reset-password"><PillButton variant="primary" className="w-full">Verify</PillButton></Link>
      </div>
    </AuthShell>
  );
}
