import React from 'react';
import { Shield, CreditCard, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast UPI & QR',
    desc: 'Accept UPI, card, and QR payments in seconds with smooth, reliable flows and instant confirmations.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Track revenue, settlements, and trends with clear dashboards designed for clarity and decisions.'
  },
  {
    icon: CreditCard,
    title: 'Smart Invoicing',
    desc: 'Generate GST-ready invoices, share payment links, and auto-reconcile incoming payments.'
  },
  {
    icon: Shield,
    title: 'Bank-grade Security',
    desc: 'Encrypted transactions, multi-factor safeguards, and compliance you can trust.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-neutral-950">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(35%_25%_at_75%_10%,rgba(6,182,212,0.18),transparent),radial-gradient(30%_20%_at_15%_80%,rgba(16,185,129,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built for growth, designed for clarity</h2>
          <p className="mt-3 text-white/70">Everything you need to accept, track, and grow your business payments — in one powerful app.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] transition">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 border border-white/10">
                <f.icon className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
