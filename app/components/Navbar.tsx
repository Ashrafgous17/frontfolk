"use client";

import { useEffect, useState } from "react";

export default function Navbar({ calendly }: { calendly: string }) {
  const [open, setOpen] = useState(false);

  // lock scroll when menu open (mobile UX)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const links = [
    { href: "#how", label: "How it works" },
    { href: "#why", label: "Why FrontFolk" },
    { href: "#pricing", label: "Pricing" },
    { href: "#comparison", label: "Compare" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="relative z-20 border-b border-white/10 bg-[#070A12]/60 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* TEXT LOGO ONLY — bigger on mobile */}
          <a href="#" className="select-none">
            <span className="font-semibold tracking-tight text-white text-2xl sm:text-xl md:text-xl">
              Front
              <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                Folk
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            {links.map((l) => (
              <a key={l.href} className="hover:text-white" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden ff-btn-secondary px-3 py-2"
              aria-label="Open menu"
            >
              ☰
            </button>

            <a
              className="hidden sm:inline ff-btn-secondary px-4 py-2.5"
              href="#pricing"
            >
              View pricing
            </a>
            <a
              className="ff-btn-primary ff-glow px-5 py-2.5"
              href={calendly}
              target="_blank"
              rel="noreferrer"
            >
              Book 15-min call
            </a>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm ff-card ff-border bg-[#070A12] p-5">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold text-xl">
                Front
                <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                  Folk
                </span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ff-btn-secondary px-3 py-2"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="ff-border rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <a
                className="ff-btn-primary ff-glow w-full px-6 py-3 text-sm"
                href={calendly}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Book 15-min call
              </a>
              <a
                className="ff-btn-secondary w-full px-6 py-3 text-sm"
                href="#pricing"
                onClick={() => setOpen(false)}
              >
                View pricing
              </a>
            </div>

            <p className="mt-6 text-xs text-white/50">
              Slots are limited (1–2 clients at a time).
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
