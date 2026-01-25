"use client";

import React, { useEffect, useRef, useState } from "react";

type NavbarProps = {
  calendly: string;
};

export default function Navbar({ calendly }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on hash navigation (UX)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu open (mobile UX)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const navItems = [
    { href: "#how", label: "How it works" },
    { href: "#why", label: "Why FrontFolk" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A12]/70 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* LOGO (mobile optimized) */}
            <a
              href="#"
              className="cursor-pointer select-none rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              aria-label="FrontFolk home"
            >
              <span className="font-semibold tracking-tight text-white text-2xl sm:text-3xl md:text-2xl">
                Front Folk
                {/* <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                  Front Folk
                </span> */}
              </span>
              <span className="sr-only">FrontFolk</span>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
              {navItems.map((x) => (
                <a
                  key={x.href}
                  className="cursor-pointer hover:text-white transition"
                  href={x.href}
                >
                  {x.label}
                </a>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-2">
              {/* CRO: Keep CTA visible on mobile too (compact) */}

              {/* Desktop CTA */}
              <a
                className="cursor-pointer rounded-3xl hidden md:inline-flex ff-btn-primary ff-glow px-5 py-2.5"
                href={calendly}
                target="_blank"
                rel="noreferrer"
              >
                Book 15-min call
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                className="cursor-pointer md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen((v) => !v)}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  {open ? (
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M4 7h16M4 12h16M4 17h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* MOBILE PANEL */}
          <div
            id="mobile-nav"
            className={[
              "md:hidden overflow-hidden transition-[max-height,opacity] duration-200",
              open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="pb-4">
              <div
                ref={panelRef}
                className="ff-border rounded-2xl bg-white/5 p-3 backdrop-blur"
              >
                {/* Primary nav */}
                <nav className="grid gap-1 text-sm">
                  {navItems.map((x) => (
                    <a
                      key={x.href}
                      href={x.href}
                      className="cursor-pointer rounded-xl px-3 py-3 text-white/85 transition hover:bg-white/7 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                      onClick={() => setOpen(false)}
                    >
                      {x.label}
                    </a>
                  ))}
                </nav>

                {/* Strong CTA area (CRO) */}
                <div className="mt-3 grid gap-2">
                  <a
                    className="cursor-pointer ff-btn-primary ff-glow w-full justify-center px-5 py-3 text-sm"
                    href={calendly}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    Book 15-min intro call
                  </a>
                  <a
                    className="cursor-pointer ff-btn-secondary w-full justify-center px-5 py-3 text-sm"
                    href="mailto:hello@frontfolk.com"
                    onClick={() => setOpen(false)}
                  >
                    Email: hello@frontfolk.com
                  </a>
                </div>

                {/* Trust microcopy (CRO) */}
                <p className="mt-3 text-center text-xs text-white/55">
                  Start in 7 days • Cancel anytime • Async-first
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CLICK-AWAY BACKDROP (must be BELOW header & panel) */}
      {open && (
        <button
          aria-label="Close menu"
          className="md:hidden fixed inset-0 z-40 bg-black/50 cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
