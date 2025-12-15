const CALENDLY = "https://calendly.com/your-link/intro"; // replace

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ff-border bg-white/5">
      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
      {children}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="ff-border rounded-2xl bg-white/5 px-4 py-3">
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
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

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group ff-border rounded-2xl bg-white/5 p-5">
      <summary className="cursor-pointer list-none items-center justify-between text-sm font-semibold flex">
        {q}
        <span className="ml-4 text-white/60 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm leading-6 text-white/70">{a}</p>
    </details>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-black/20 p-4 ff-border">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">
        ✓
      </span>
      <p className="text-sm text-white/80 leading-6">{children}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,58,237,0.28),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_20%,rgba(59,130,246,0.22),transparent_65%)]" />
        <div className="absolute inset-0 ff-grid opacity-60" />
      </div>

      {/* NAV */}
      <header className="relative z-10 border-b border-white/10 bg-[#070A12]/60 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* TEXT LOGO ONLY */}
            <a href="#" className="select-none">
              <span className="font-semibold tracking-tight text-white text-2xl sm:text-3xl md:text-2xl">
                Front
                <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                  Folk
                </span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a className="hover:text-white" href="#how">
                How it works
              </a>
              <a className="hover:text-white" href="#why">
                Why FrontFolk
              </a>
              <a className="hover:text-white" href="#pricing">
                Pricing
              </a>
              <a className="hover:text-white" href="#faq">
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                className="ff-btn-primary ff-glow px-5 py-2.5"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                Book 15-min call
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative z-10 pt-16 sm:pt-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Badge>Only 1–2 client slots at a time</Badge>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                A dedicated frontend engineer —
                <span className="block bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                  without hiring or long contracts.
                </span>
              </h1>

              <p className="mt-5 text-base leading-7 text-white/70">
                FrontFolk helps SaaS & B2B teams ship faster with clean UI
                execution: Figma → production code, responsiveness, performance,
                and UI polish. You get ownership and speed — minus freelancer
                chaos.
              </p>

              {/* FIX: more padding + breathing room for CTAs */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="ff-btn-primary ff-glow px-6 py-3 text-sm"
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a 15-min intro call
                </a>
                <a className="ff-btn-secondary px-6 py-3 text-sm" href="#how">
                  See how it works
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Stat value="30–35 hrs/wk" label="Dedicated capacity" />
                <Stat value="Async-first" label="No meeting fatigue" />
                <Stat value="Cancel anytime" label="No lock-in" />
              </div>

              <p className="mt-4 text-xs text-white/50">
                Best for teams with backend covered who need frontend velocity
                and polish.
              </p>
            </div>

            {/* Hero card */}
            <div className="ff-card ff-border ff-glow rounded-3xl p-6 sm:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-white/60">
                    Typical outcomes in 30 days
                  </div>
                  <div className="mt-1 text-lg font-semibold">
                    Frontend bottleneck removed
                  </div>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                  CRO-focused
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  {
                    t: "UI polish & consistency",
                    d: "Design system alignment, spacing, typography, components.",
                  },
                  {
                    t: "Responsive fixes",
                    d: "Mobile/tablet bugs eliminated across key screens.",
                  },
                  {
                    t: "Speed improvements",
                    d: "Reduce UI jank, improve LCP/CLS and perceived performance.",
                  },
                  {
                    t: "Figma → production",
                    d: "Ship new UI fast with clean, scalable code.",
                  },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl bg-black/20 p-4 ff-border"
                  >
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-sm text-white/70">{x.d}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/5 p-4 ff-border">
                <div>
                  <div className="text-xs text-white/60">Starting at</div>
                  <div className="text-xl font-semibold">$4,000 / month</div>
                </div>
                <a
                  className="ff-btn-primary px-5 py-2.5 text-sm"
                  href="#pricing"
                >
                  See pricing
                </a>
              </div>
            </div>
          </div>
        </Container>

        {/* NEW: subtle gradients below hero */}
        <div aria-hidden className="relative z-10 mt-12">
          <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-[520px] -translate-x-1/2 rounded-full
                          bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_60%)] blur-2xl"
          />
          <div
            className="pointer-events-none absolute left-[22%] top-6 h-28 w-72 rounded-full
                          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_60%)] blur-2xl"
          />
          <div
            className="pointer-events-none absolute right-[18%] top-10 h-28 w-72 rounded-full
                          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_60%)] blur-2xl"
          />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative z-10 mt-14">
        <Container>
          <div className="ff-border rounded-3xl bg-white/5 p-7 sm:p-8">
            <p className="text-sm text-white/70 leading-6">
              If your product’s frontend is slowing growth (shipping, UX,
              conversions), FrontFolk replaces the need to hire by giving you{" "}
              <span className="text-white font-medium">
                dedicated ownership
              </span>{" "}
              and consistent delivery.
            </p>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative z-10 mt-16 sm:mt-22">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                How it works
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Simple monthly subscription. Clear scope. Consistent output.
              </p>
            </div>
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
              desc="Clear progress, next steps, and alignment — without management overhead."
            />
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section id="why" className="relative z-10 mt-16 sm:mt-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="ff-card ff-border rounded-3xl p-7 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Why teams choose FrontFolk
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                You don’t need another freelancer to manage. You need frontend
                ownership and velocity.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  [
                    "Ownership mindset",
                    "I take responsibility for frontend quality and delivery — not just tasks.",
                  ],
                  [
                    "Less founder overhead",
                    "Async-first workflow so you’re not stuck in meetings and micromanagement.",
                  ],
                  [
                    "Cleaner UI, better conversion",
                    "Polish, clarity, and UX improvements that compound over time.",
                  ],
                  [
                    "Hire later with confidence",
                    "We stabilize the frontend now; you can hire when timing is right.",
                  ],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="rounded-2xl bg-black/20 p-4 ff-border"
                  >
                    <div className="text-sm font-semibold">{t}</div>
                    <div className="mt-1 text-sm text-white/70">{d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="ff-card ff-border rounded-3xl p-7 sm:p-8">
                <h3 className="text-sm font-semibold">Perfect for</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>• SaaS founders with frontend backlog</li>
                  <li>• B2B dashboards needing UI polish</li>
                  <li>• Teams with backend covered</li>
                  <li>• Agencies needing dependable frontend execution</li>
                </ul>
              </div>

              <div className="ff-card ff-border rounded-3xl p-7 sm:p-8">
                <h3 className="text-sm font-semibold">Not a fit for</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>• Unlimited work expectations</li>
                  <li>• Backend/DevOps ownership needs</li>
                  <li>• Daily meetings / urgent same-day work</li>
                  <li>• Unclear requirements with no priorities</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>

        {/* NEW: small side gradients for section depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12),transparent_60%)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_60%)] blur-3xl"
        />
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative z-10 mt-16 sm:mt-22 pb-16">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pricing
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Premium, focused, and limited availability.
            </p>
          </div>

          <div className="mt-8 grid gap-5 items-stretch lg:grid-cols-3">
            {/* Value stack */}
            <div className="ff-card ff-border rounded-3xl p-7 sm:p-8 lg:col-span-2 h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-white/60">
                    FrontFolk Subscription
                  </div>
                  <div className="mt-1 text-xl font-semibold">
                    Dedicated Frontend Engineer
                  </div>
                  <p className="mt-2 text-sm text-white/70 leading-6">
                    Frontend ownership without hiring — fast shipping, clean UI,
                    and consistent delivery for SaaS & B2B teams.
                  </p>
                </div>
                <Badge>Limited slots</Badge>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Frontend features & components",
                  "Figma → production-ready UI",
                  "Responsiveness & mobile fixes",
                  "Performance improvements (LCP/CLS)",
                  "Refactors & component cleanup",
                  "Accessibility upgrades",
                  "SEO optimization",
                  "Complete SaaS Frontend",
                  "Async communication",
                  "Weekly updates",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl bg-black/20 p-4 ff-border text-sm text-white/80"
                  >
                    {x}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-white/5 p-4 ff-border text-xs text-white/60">
                <span className="text-white/80 font-medium">Scope:</span>{" "}
                Frontend-only. Backend-heavy work, DevOps, unlimited meetings,
                and emergency same-day delivery are not included unless agreed
                separately.
              </div>
            </div>

            {/* UPDATED: Price card — filled with detail (no empty space) */}
            <div className="ff-card ff-border ff-glow rounded-3xl p-7 h-full flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs text-white/60">Monthly</div>
                  <div className="mt-1 text-4xl font-semibold">$5,000</div>
                  <div className="mt-2 text-sm text-white/70 leading-6">
                    Dedicated capacity (~30–35 hrs/week). Cancel anytime.
                  </div>
                </div>

                <span className="shrink-0 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                  1–2 clients max
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                <Check>
                  <span className="font-medium text-white">Start fast:</span>{" "}
                  onboarding + priority plan in 24–48 hrs.
                </Check>
                <Check>
                  <span className="font-medium text-white">
                    Weekly momentum:
                  </span>{" "}
                  shipped improvements every week.
                </Check>
                <Check>
                  <span className="font-medium text-white">Quality bar:</span>{" "}
                  responsive, accessible, production-ready UI.
                </Check>
              </div>

              <div className="mt-6 rounded-2xl bg-black/20 p-4 ff-border">
                <div className="text-xs text-white/60">
                  Typical first 2 weeks
                </div>
                <ul className="mt-2 space-y-2 text-sm text-white/75">
                  <li>• Fix top UI bugs + responsiveness</li>
                  <li>• Clean up components & spacing</li>
                  <li>• Ship 1–2 high-impact UI upgrades</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  className="ff-btn-primary ff-glow w-full px-6 py-3 text-sm"
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book 15-min call
                </a>
                <a
                  className="ff-btn-secondary w-full px-6 py-3 text-sm"
                  href="#faq"
                >
                  Read FAQ
                </a>
              </div>

              <div className="mt-6 text-xs text-white/60 space-y-2">
                <p>✅ No hiring risk · ✅ No long contracts · ✅ Clear scope</p>
                <p>
                  Best fit if backend is covered and frontend is the bottleneck.
                </p>
              </div>
            </div>
          </div>

          {/* COMPARISON */}
          <section id="comparison" className="relative z-10 mt-16 sm:mt-20">
            <Container>
              {/* Background gradient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex justify-center"
              >
                <div
                  className="h-96 w-[900px] rounded-full
        bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_60%)]
        blur-3xl"
                />
              </div>

              <div className="relative">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Compare your options
                  </h2>
                  <p className="mt-2 text-sm text-white/70">
                    Same outcome as hiring — without hiring risk.
                  </p>
                </div>

                {/* Scroll wrapper (mobile + desktop) */}
                <div className="mt-8 overflow-x-auto ff-scroll">
                  {/* Min width ensures desktop-like columns even on mobile */}
                  <div className="min-w-[880px] ff-card ff-border rounded-3xl overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-4 border-b border-white/10 bg-white/5">
                      {["Option", "Cost", "Speed", "Risk / Overhead"].map(
                        (h) => (
                          <div
                            key={h}
                            className="p-4 text-xs font-semibold text-white/70"
                          >
                            {h}
                          </div>
                        )
                      )}
                    </div>

                    {/* Rows */}
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
                        {/* Sticky first column (optional but recommended for mobile) */}
                        <div className="p-4 bg-[#070A12]/70 sticky left-0 z-10 border-r border-white/10">
                          <div className="text-sm font-semibold">
                            {row.name}
                          </div>
                          <div className="mt-1 text-xs text-white/60">
                            {row.desc}
                          </div>
                        </div>

                        <div className="p-4 text-sm text-white/80">
                          {row.cost}
                        </div>
                        <div className="p-4 text-sm text-white/80">
                          {row.speed}
                        </div>
                        <div className="p-4 text-sm text-white/80">
                          {row.risk}
                        </div>
                      </div>
                    ))}

                    {/* Highlight row */}
                    <div className="grid grid-cols-4 bg-gradient-to-r from-violet-500/15 via-sky-500/10 to-cyan-400/15">
                      <div className="p-4 bg-[#070A12]/30">
                        <div className="flex items-center gap-2 text-sm font-semibold">
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

                {/* tiny hint for mobile */}
                <p className="mt-3 text-center text-xs text-white/50 md:hidden">
                  Swipe horizontally to view all columns →
                </p>
              </div>
            </Container>
          </section>

          {/* FAQ */}
          <div id="faq" className="mt-14">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                FAQ
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Quick answers before we talk.
              </p>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <FAQ
                q="Is this unlimited requests?"
                a="No. It’s dedicated capacity. We prioritize high-impact tasks and ship steadily—without quality dropping."
              />
              <FAQ
                q="How fast can you start?"
                a="Usually within 7 days depending on availability. I keep only 1–2 clients active."
              />
              <FAQ
                q="Do you do backend work?"
                a="Frontend only. Small integrations are okay, but backend-heavy work is out of scope unless agreed separately."
              />
              <FAQ
                q="How do we communicate?"
                a="Async-first via Slack or email, with weekly updates. Meetings only when necessary."
              />
              <FAQ
                q="Can we cancel anytime?"
                a="Yes. You can cancel with 30 days’ notice. No long-term lock-in."
              />
              <FAQ
                q="Who is this best for?"
                a="SaaS & B2B teams with backend handled who need frontend velocity, UI consistency, responsiveness, and performance improvements."
              />
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-14 ff-card ff-border ff-glow rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-semibold tracking-tight">
              Want frontend handled properly?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
              If your frontend backlog is blocking growth, FrontFolk removes the
              bottleneck with dedicated ownership and consistent delivery.
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
        </Container>
      </section>
    </main>
  );
}
