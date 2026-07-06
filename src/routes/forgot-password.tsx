import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { AuthShell } from "@/components/fv/PageShell";
import { PillButton } from "@/components/fv/kit";
import { Field } from "./login";

export const Route = createFileRoute("/forgot-password")({ component: Forgot });
function Forgot() {
  return (
    <AuthShell>
      <Link to="/login" className="grid h-10 w-10 place-items-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
      <div className="mt-10 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 text-primary"><Mail className="h-8 w-8" /></div>
        <h1 className="mt-5 font-display text-2xl font-bold">Forgot password?</h1>
        <p className="mt-2 text-[13px] text-muted-foreground">Enter your registered email and we'll send you a verification code.</p>
      </div>
      <div className="mt-8 space-y-3">
        <Field icon={Mail} placeholder="Email address" type="email" />
        <Link to="/otp"><PillButton variant="primary" className="w-full">Send OTP <ArrowRight className="h-4 w-4" /></PillButton></Link>
      </div>
      <div className="mt-auto pt-10 text-center text-[13px]">
        Remembered? <Link to="/login" className="font-semibold text-primary">Sign in</Link>
      </div>
    </AuthShell>
  );
}
