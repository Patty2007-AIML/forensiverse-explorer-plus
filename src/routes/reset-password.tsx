import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { AuthShell } from "@/components/fv/PageShell";
import { PillButton } from "@/components/fv/kit";
import { Field } from "./login";
import { useState } from "react";

export const Route = createFileRoute("/reset-password")({ component: Reset });

function Reset() {
  const [show, setShow] = useState(false);
  return (
    <AuthShell>
      <Link to="/otp" className="grid h-10 w-10 place-items-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
      <div className="mt-10 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gold/15 text-gold"><Lock className="h-8 w-8" /></div>
        <h1 className="mt-5 font-display text-2xl font-bold">Set new password</h1>
        <p className="mt-2 text-[13px] text-muted-foreground">Use at least 8 characters, one number, one symbol.</p>
      </div>
      <div className="mt-8 space-y-3">
        <Field icon={Lock} placeholder="New password" type={show ? "text" : "password"}
          trailing={<button onClick={() => setShow(!show)}>{show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>} />
        <Field icon={Lock} placeholder="Confirm password" type="password" />
        <div className="glass flex items-center gap-2 rounded-xl p-3 text-[11px]">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Strong password
        </div>
        <Link to="/login"><PillButton variant="primary" className="w-full">Reset password</PillButton></Link>
      </div>
    </AuthShell>
  );
}
