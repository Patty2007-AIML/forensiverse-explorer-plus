import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { AuthShell } from "@/components/fv/PageShell";
import { PillButton } from "@/components/fv/kit";
import { Field } from "./login";
import { useState } from "react";

export const Route = createFileRoute("/signup")({ component: Signup });

function Signup() {
  const [show, setShow] = useState(false);
  return (
    <AuthShell>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold">Create account</h1>
        <p className="mt-1 text-[13px] text-muted-foreground">Join 10K+ forensic science students.</p>
      </div>
      <div className="mt-8 space-y-3">
        <Field icon={User} placeholder="Full name" />
        <Field icon={Mail} placeholder="Email address" type="email" />
        <Field icon={Lock} placeholder="Password" type={show ? "text" : "password"}
          trailing={<button onClick={() => setShow(!show)}>{show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>} />
        <label className="flex items-start gap-2 pt-1 text-[11px] text-muted-foreground">
          <input type="checkbox" defaultChecked className="mt-0.5 accent-primary" />
          I agree to the <span className="text-primary">Terms</span> and <span className="text-primary">Privacy Policy</span>.
        </label>
        <Link to="/otp"><PillButton variant="primary" className="w-full">Create account <ArrowRight className="h-4 w-4" /></PillButton></Link>
      </div>
      <div className="mt-auto pt-10 text-center text-[13px]">
        Already registered? <Link to="/login" className="font-semibold text-primary">Sign in</Link>
      </div>
    </AuthShell>
  );
}
