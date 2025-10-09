import React from 'react';

export default function GlowCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10">
      <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-tr from-brand-500/30 via-transparent to-purple-500/30 blur-2xl"></div>
      {children}
    </div>
  );
}
