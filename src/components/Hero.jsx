import React from 'react';
import Spline from '@splinetool/react-spline';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.gimbooks.gimbookspay&hl=en_IN';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[92vh] flex items-center">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* subtle gradient vignettes to enhance neon glow without blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(34,197,94,0.18),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(16,185,129,0.7)]" />
              Instant business payments
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Manage and accept payments with neon-speed precision
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              GimBooks Pay streamlines UPI, card, and QR payments with real-time insights and bank-grade security — built for modern Indian businesses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center rounded-md bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-neutral-900 font-semibold shadow-[0_20px_60px_rgba(16,185,129,0.3)] hover:opacity-95 transition"
              >
                Get it on Google Play
              </a>
              <a
                href="#features"
                className="inline-flex justify-center items-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition"
              >
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
