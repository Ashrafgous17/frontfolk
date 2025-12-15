"use client";

export default function StickyCTA({ href }: { href: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#070A12]/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">
            Frontend ownership without hiring
          </p>
          <p className="truncate text-xs text-white/60">
            Limited slots • $5,000/month
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="ff-btn-primary ff-glow shrink-0 px-5 py-2.5 text-sm"
        >
          Book 15-min call
        </a>
      </div>
    </div>
  );
}
