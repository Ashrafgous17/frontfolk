"use client";
import React, { useEffect, useState } from "react";
const CALENDLY = "https://calendly.com/your-link/intro"; // replace
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import Navbar from "./components/Navbar";

/** --------------------------------
 *  UI helpers
 *  -------------------------------- */
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning";
}) {
  const variants: Record<string, string> = {
    default: "bg-white/5 text-white/80 border-white/10",
    success: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  };

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
      ].join(" ")}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}

function Button({
  href,
  children,
  variant = "primary",
  target,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
}) {
  const base =
    "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition sm:w-auto";
  const styles =
    variant === "primary"
      ? "bg-white text-[#070A12] shadow-lg hover:shadow-xl"
      : "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 backdrop-blur";

  return (
    <a
      href={href}
      target={target}
      rel={target ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="ff-card ff-border rounded-2xl p-5">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group ff-border rounded-2xl bg-white/5 p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
        {q}
        <span className="ml-4 text-white/60 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm leading-6 text-white/70">{a}</p>
    </details>
  );
}

/** --------------------------------
 *  Page
 *  -------------------------------- */
export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070A12] text-white">
      {/* Background */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,58,237,0.28),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_20%,rgba(59,130,246,0.22),transparent_65%)]" />
        <div className="absolute inset-0 ff-grid opacity-60" />
      </div>

      {/* NAV */}
      <Navbar calendly={CALENDLY} />

      {/* HERO */}
      <section className="relative z-10 pt-14 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="success">2 slots this month</Badge>
              <Badge variant="default">Start in ~7 days</Badge>
              <Badge variant="default">Cancel anytime</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Senior frontend delivery
              <span className="mt-2 block text-white/80">
                that ships every week
              </span>
            </h1>
            {/* <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              A dedicated frontend engineer
              <span className="block bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                without hiring or long contracts.
              </span>
            </h1> */}

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              FrontFolk helps SaaS & B2B teams move faster with clean UI
              execution: responsive polish, performance improvements, and
              production-ready React/Next.js code—without hiring.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={CALENDLY} target="_blank" variant="primary">
                Book a 15-min intro call
              </Button>
              <Button href="#pricing" variant="secondary">
                See pricing
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/55">
              <span>✓ Async-first</span>
              <span>✓ 30–35 hrs/week</span>
              <span>✓ React / Next.js / TS</span>
              <span>✓ Mobile-first UI</span>
            </div>
          </div>
        </Container>
      </section>

      {/* OUTCOME STRIP (replaces TRUST STRIP) */}
      <section className="relative z-10 mt-10 sm:mt-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="ff-border rounded-3xl bg-white/5 p-5 sm:p-7 backdrop-blur">
              <div className="grid gap-5 lg:grid-cols-3 lg:items-center">
                {/* Left: positioning */}
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    Best for SaaS teams shipping weekly
                  </div>

                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Turn your UI backlog into weekly releases.
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Dedicated frontend ownership that improves UX, speed, and
                    conversions—without hiring or managing.
                  </p>
                </div>

                {/* Middle: outcomes */}
                <div className="lg:col-span-1">
                  <div className="grid gap-3">
                    <div className="ff-border rounded-2xl bg-black/20 p-4">
                      <div className="text-sm font-semibold text-white">
                        Ship faster
                      </div>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        Weekly momentum on UI, components, and flows.
                      </p>
                    </div>

                    <div className="ff-border rounded-2xl bg-black/20 p-4">
                      <div className="text-sm font-semibold text-white">
                        Cleaner UX
                      </div>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        Less friction, more clarity, better trust signals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: proof + CTA nudge */}
                <div className="lg:col-span-1">
                  <div className="ff-border rounded-2xl bg-black/20 p-4">
                    <div className="text-sm font-semibold text-white">
                      Low-risk setup
                    </div>
                    <div className="mt-2 grid gap-2 text-sm text-white/70">
                      <div>• Start in ~7 days</div>
                      <div>• Async-first (minimal meetings)</div>
                      <div>• Cancel anytime</div>
                    </div>

                    <a
                      href={CALENDLY}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#070A12] shadow-lg transition hover:shadow-xl"
                    >
                      Book 15-min intro call →
                    </a>

                    <p className="mt-2 text-center text-xs text-white/50">
                      1–2 clients at a time to maintain quality
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional tiny helper line (nice flow) */}
            <p className="mx-auto mt-3 max-w-3xl text-center text-xs text-white/45">
              Not sure if it fits? The intro call is a quick scope + roadmap
              check.
            </p>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative z-10 mt-16 sm:mt-22">
        <Container>
          <div className="text-center">
            <Badge variant="success"> How it works</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              How it works
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Simple monthly subscription. Clear scope. Consistent output.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            <Feature
              title="1) Subscribe"
              desc="Reserve a slot. I keep only 1–2 clients active for quality and speed."
            />
            <Feature
              title="2) Onboard"
              desc="Access + priorities. Quick async kickoff. No heavy meetings."
            />
            <Feature
              title="3) Execute"
              desc="I ship frontend improvements continuously with deep product context."
            />
            <Feature
              title="4) Weekly updates"
              desc="Clear progress, next steps, and alignment without management overhead."
            />
          </div>
        </Container>
      </section>

      {/* WHY */}
      {/* ========== WHY US ========== */}
      <section id="why" className="relative z-10 mt-16 sm:mt-22">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Badge variant="success">Why FrontFolk</Badge>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Frontend ownership without the hiring drag
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/70">
                Built for SaaS teams who want weekly shipping, clean UI, and
                less management overhead.
              </p>
            </div>

            {/* Minimal feature grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  t: "Senior ownership",
                  d: "One person accountable for quality, speed, and consistency.",
                },
                {
                  t: "Async-first workflow",
                  d: "Fewer meetings. Clear updates. More time building.",
                },
                {
                  t: "Conversion-aware UI",
                  d: "UX polish that improves clarity, trust, and signups.",
                },
                {
                  t: "Responsive by default",
                  d: "Mobile-first UI fixes across key screens and flows.",
                },
                {
                  t: "Maintainable system",
                  d: "Cleaner components, less UI debt, fewer bugs over time.",
                },
                {
                  t: "Start fast",
                  d: "Begin in ~7 days instead of months of hiring.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="ff-border rounded-2xl bg-white/5 p-5 backdrop-blur transition hover:bg-white/7"
                >
                  <div className="text-sm font-semibold text-white">{x.t}</div>
                  <p className="mt-2 text-sm leading-6 text-white/70">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHO FITS THIS ========== */}
      <section id="fit" className="relative z-10 mt-16 sm:mt-22">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Badge variant="success">Who fits this</Badge>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                A great fit when frontend is the bottleneck
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/70">
                If you’ve got product momentum but UI execution slows you down,
                this is built for you.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2 pb-2">
              <div className="ff-border rounded-2xl p-5">
                <div className="text-sm font-semibold text-white">Best for</div>
                <div className="mt-3 grid gap-2 text-sm text-white/70">
                  <div>• SaaS founders with a UI backlog</div>
                  <div>• Backend covered, frontend is the bottleneck</div>
                  <div>• Teams that want weekly momentum</div>
                </div>
              </div>

              <div className="ff-border rounded-2xl p-5">
                <div className="text-sm font-semibold text-white">
                  Not ideal for
                </div>
                <div className="mt-3 grid gap-2 text-sm text-white/70">
                  <div>• “Unlimited requests” expectations</div>
                  <div>• Backend/DevOps as primary need</div>
                  <div>• Daily meetings + urgent same-day delivery</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      <section
        id="pricing"
        className="relative z-10 overflow-hidden py-20 sm:py-24"
      >
        {/* background (kept, but consistent with page) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[rgba(124,58,237,0.18)] blur-[180px]" />
          <div className="absolute -bottom-56 right-10 h-[620px] w-[620px] rounded-full bg-[rgba(56,189,248,0.16)] blur-[190px]" />
        </div>

        <Container>
          {/* Header */}
          <div className="text-center">
            <Badge variant="success">Frontfolk Pricing</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Frontend delivery without hiring
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Dedicated capacity for ongoing shipping, or a fixed-scope package
              for speed, responsiveness, and Figma → development.
            </p>
          </div>

          {/* Cards */}
          <div className="relative mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
            {/* PART-TIME */}
            <div className="relative h-full flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8 backdrop-blur">
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border bg-white/[0.04] text-white/80 border-white/10">
                  Part-time
                </span>
              </div>

              <div className="mt-3">
                <h3 className="text-xl font-semibold text-white">
                  Dedicated Frontend Engineer
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Steady improvements without full-time capacity.
                </p>

                <div className="mt-5">
                  <div className="text-3xl font-bold text-white">
                    $2,500 / month
                  </div>
                  <div className="mt-1 text-sm text-white/55">
                    ~12–15 hrs/week · Async-first · Cancel anytime
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-white/10" />

              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    UI fixes & responsiveness improvements
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    Component cleanup & UX polish
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    Weekly updates & prioritized queue
                  </span>
                </li>
              </ul>

              {/* CTA pinned to bottom (even cards) */}
              <div className="mt-auto pt-7">
                <Link
                  href={CALENDLY}
                  className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition border border-white/12 bg-white/[0.02] text-white/85 hover:bg-white/[0.06]"
                >
                  Book intro call →
                </Link>
              </div>
            </div>

            {/* FULL-TIME (PRIMARY) */}
            <div className="relative h-full flex flex-col rounded-3xl border border-white/25 bg-white/[0.06] p-7 sm:p-8 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border bg-gradient-to-r from-violet-500 to-sky-500 text-[#070A12] border-white/30">
                  Most teams choose
                </span>
              </div>

              <div className="mt-3">
                <h3 className="text-xl font-semibold text-white">
                  Dedicated Frontend Engineer
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Full ownership of your product frontend.
                </p>

                <div className="mt-5">
                  <div className="text-3xl font-bold text-white">
                    $5,000 / month
                  </div>
                  <div className="mt-1 text-sm text-white/55">
                    ~30–35 hrs/week · Weekly shipping · Cancel anytime
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-white/10" />

              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    Figma → production-ready React/Next.js
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    Performance optimization (LCP/CLS/Core Web Vitals)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    UX polish, accessibility & UI quality bar
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    Weekly demos, updates & delivery visibility
                  </span>
                </li>
              </ul>

              {/* CTA pinned to bottom (even cards) */}
              <div className="mt-auto pt-7">
                <Link
                  href={CALENDLY}
                  className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ff-btn-primary ff-glow  text-[#070A12] shadow-lg hover:-translate-y-0.5"
                >
                  Book 15-min strategy call →
                </Link>
                {/* <p className="mt-3 text-xs text-white/50 text-center">
                  Limited slots · One engineer per product · No agency layers
                </p> */}
              </div>
            </div>

            {/* CUSTOM */}
            <div className="relative h-full flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8 backdrop-blur">
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border bg-white/[0.04] text-white/80 border-white/10">
                  Custom
                </span>
              </div>

              <div className="mt-3">
                <h3 className="text-xl font-semibold text-white">
                  Frontend Fixes & Upgrades
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Fixed-scope upgrades with clear deliverables.
                </p>

                <div className="mt-5">
                  <div className="text-3xl font-bold text-white">From $999</div>
                  <div className="mt-1 text-sm text-white/55">
                    Fixed scope · Fast turnaround
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-white/10" />

              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    Speed optimization & Core Web Vitals
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    Responsive layout fixes
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-sky-400" />
                  <span className="text-white/70 leading-relaxed">
                    Figma → frontend development (React/Next.js)
                  </span>
                </li>
              </ul>

              {/* CTA pinned to bottom (even cards) */}
              <div className="mt-auto pt-7">
                <Link
                  href={CALENDLY}
                  className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition border border-white/12 bg-white/[0.02] text-white/85 hover:bg-white/[0.06]"
                >
                  Discuss scope →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom fade (consistent) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070A12] to-transparent" />
        </Container>
      </section>

      {/* COMPARISON */}
      <section id="comparison" className="relative z-10 mt-10 sm:mt-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            {/* Heading (match your style) */}
            <div className="text-center">
              <Badge variant="success">Comparison</Badge>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Compare your options
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/70">
                Same outcome as hiring — without hiring risk.
              </p>
            </div>

            {/* Horizontal scroll (DO NOT TOUCH behavior) */}
            <div className="mt-8 overflow-x-auto ff-scroll">
              <div className="ff-card ff-border min-w-[880px] overflow-hidden rounded-3xl">
                <div className="grid grid-cols-4 border-b border-white/10 bg-white/5">
                  {["Option", "Cost", "Speed", "Risk / Overhead"].map((h) => (
                    <div
                      key={h}
                      className="p-4 text-xs font-semibold text-white/70"
                    >
                      {h}
                    </div>
                  ))}
                </div>

                {[
                  {
                    name: "Hire full-time",
                    desc: "Senior frontend engineer",
                    cost: "$8k–$12k / month + hiring time",
                    speed: "Slow start (weeks to months)",
                    risk: "High: onboarding + management + bad hire risk",
                  },
                  {
                    name: "Agency",
                    desc: "Team-based delivery",
                    cost: "$6k–$10k / month",
                    speed: "Medium (depends on staffing)",
                    risk: "Medium: handoffs + process overhead",
                  },
                  {
                    name: "Freelancers",
                    desc: "Hourly / per task",
                    cost: "$2k–$5k / month",
                    speed: "Inconsistent (context switching)",
                    risk: "High: you manage everything",
                  },
                ].map((row) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-4 border-b border-white/10 last:border-none"
                  >
                    <div className="sticky left-0 z-10 border-r border-white/10 bg-[#070A12]/70 p-4">
                      <div className="text-sm font-semibold text-white">
                        {row.name}
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        {row.desc}
                      </div>
                    </div>
                    <div className="p-4 text-sm text-white/80">{row.cost}</div>
                    <div className="p-4 text-sm text-white/80">{row.speed}</div>
                    <div className="p-4 text-sm text-white/80">{row.risk}</div>
                  </div>
                ))}

                <div className="grid grid-cols-4 bg-gradient-to-r from-violet-500/15 via-sky-500/10 to-cyan-400/15">
                  <div className="p-4 bg-[#070A12]/30">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      FrontFolk
                      <span className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] text-white/80">
                        Best fit
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      Dedicated frontend ownership
                    </div>
                  </div>
                  <div className="p-4 text-sm font-medium text-white">
                    $5,000 / month
                  </div>
                  <div className="p-4 text-sm font-medium text-white">
                    Fast (start in ~7 days)
                  </div>
                  <div className="p-4 text-sm font-medium text-white">
                    Low risk · Cancel anytime
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-white/50 md:hidden">
              Swipe horizontally to view all columns →
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {/* FAQ */}
      <section id="faq" className="relative z-10 mt-10 sm:mt-14 pb-14 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Badge variant="success">FAQ</Badge>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Quick answers before you book a call
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/70">
                Everything you need to know about how FrontFolk works.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-3xl space-y-4">
              <FAQItem
                q="Is this unlimited work?"
                a="No. You get 30–35 dedicated hours/week of senior frontend development. We prioritize high-impact work and ship consistently."
              />
              <FAQItem
                q="How fast can you start?"
                a="Usually within ~7 days if a slot is available."
              />
              <FAQItem
                q="Do you work with our existing codebase?"
                a="Yes. I work inside your existing React/Next.js/TypeScript codebase and follow your patterns."
              />
              <FAQItem
                q="How do we communicate?"
                a="Async-first via Slack/email with clear weekly updates. Meetings only when necessary."
              />
              <FAQItem
                q="Can we cancel anytime?"
                a="Yes. Cancel with 30 days notice. No lock-in contracts."
              />
              <FAQItem
                q="What kind of work do you typically handle?"
                a="UI implementation, design-to-code, component systems, responsiveness fixes, performance improvements, and conversion-focused UX polish across key flows."
              />
              <FAQItem
                q="What do you need from us to get started?"
                a="Access to your repo (GitHub/GitLab), design files (Figma), and a short kickoff to align on priorities. After that, we run async with weekly updates."
              />
            </div>

            {/* Final CTA */}
            <div className="mt-14 ff-card ff-border ff-glow rounded-3xl p-8 text-center sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight">
                Want frontend handled properly?
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
                If your frontend backlog is blocking growth, FrontFolk removes
                the bottleneck with dedicated ownership and consistent delivery.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  className="ff-btn-primary ff-glow px-7 py-3 text-sm"
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book 15-min intro call
                </a>
                <a
                  className="ff-btn-secondary px-7 py-3 text-sm"
                  href="mailto:hello@frontfolk.com"
                >
                  Email: hello@frontfolk.com
                </a>
              </div>
              <p className="mt-5 text-xs text-white/50">
                Slots are limited to maintain quality (1–2 clients at a time).
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <span className="text-2xl font-bold tracking-tight text-white">
                Front
                <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                  Folk
                </span>
              </span>
              <p className="mt-2 text-sm text-white/60">
                Dedicated frontend engineering for SaaS teams
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <a href="#how" className="transition hover:text-white">
                How it works
              </a>
              <a href="#why" className="transition hover:text-white">
                Why us
              </a>
              <a href="#pricing" className="transition hover:text-white">
                Pricing
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
              <a
                href="mailto:hello@frontfolk.com"
                className="transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-white/50">
            © 2026 FrontFolk. All rights reserved.
          </div>
        </Container>
      </footer>
    </main>
  );
}
