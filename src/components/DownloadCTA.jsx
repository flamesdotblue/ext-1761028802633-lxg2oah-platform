import React from 'react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.gimbooks.gimbookspay&hl=en_IN';

export default function DownloadCTA() {
  return (
    <section id="download" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(20,184,166,0.14),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get the app and start accepting payments today</h2>
            <p className="mt-3 text-white/75 max-w-xl">Go live in minutes. Share QR or payment links, track settlements, and keep your business flowing — all inside GimBooks Pay.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-neutral-900 font-semibold shadow-[0_20px_60px_rgba(16,185,129,0.3)] hover:opacity-95 transition"
              >
                Install from Google Play
              </a>
              <a
                href="#home"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition"
              >
                Back to top
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-400/30 to-cyan-400/30 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <ul className="space-y-3 text-sm text-white/80">
                <li>• Supports UPI, QR, payment links</li>
                <li>• Instant confirmations and payout tracking</li>
                <li>• GST-ready invoicing and reconciliation</li>
                <li>• Secure by design with encryption and MFA</li>
              </ul>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-4 text-xs text-white/50">Requires Android. Data charges may apply. By installing, you agree to the terms and privacy policy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
