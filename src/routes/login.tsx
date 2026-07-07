import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { AuthShell } from "@/components/fv/PageShell";
import { PillButton } from "@/components/fv/kit";
import { useState } from "react";
import logoAsset from "@/assets/forensiverse-logo.png.asset.json";
const logoImg = logoAsset.url;

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Forensiverse" }] }),
  component: Login,
});

function Login() {
  const [show, setShow] = useState(false);
  return (
    <AuthShell>
      <div className="text-center">
        <img src={logoImg} alt="" className="mx-auto h-16 w-16 rounded-full ring-2 ring-gold/40" />
        <h1 className="mt-5 font-display text-3xl font-bold">Welcome back</h1>
        <p className="mt-1 text-[13px] text-muted-foreground">Sign in to continue investigating.</p>
      </div>

      <div className="mt-8 space-y-3">
        <Field icon={Mail} placeholder="Email address" type="email" />
        <Field icon={Lock} placeholder="Password" type={show ? "text" : "password"}
          trailing={<button onClick={() => setShow(!show)}>{show ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}</button>} />
        <div className="flex justify-end">
          <Link to="/forgot-password" className="text-[12px] text-gold">Forgot password?</Link>
        </div>
        <Link to="/"><PillButton variant="primary" className="w-full">Sign in <ArrowRight className="h-4 w-4" /></PillButton></Link>
      </div>

      <div className="mt-6 flex items-center gap-3 text-[11px] text-muted-foreground">
        <div className="h-px flex-1 bg-white/10" />OR<div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="glass rounded-xl py-3 text-sm font-semibold">Google</button>
        <button className="glass rounded-xl py-3 text-sm font-semibold">Apple</button>
      </div>

      <div className="mt-auto pt-10 text-center text-[13px]">
        No account?{" "}
        <Link to="/signup" className="font-semibold text-primary">Create one</Link>
      </div>
    </AuthShell>
  );
}

export function Field({ icon: Icon, placeholder, type = "text", trailing }: any) {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5">
      <Icon className="h-5 w-5 text-muted-foreground" />
      <input placeholder={placeholder} type={type} className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground" />
      {trailing}
    </div>
  );
}
