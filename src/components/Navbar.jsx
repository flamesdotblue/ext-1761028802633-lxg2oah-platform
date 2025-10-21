import React from 'react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.gimbooks.gimbookspay&hl=en_IN';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400 shadow-[0_0_24px_2px_rgba(34,197,94,0.4)]" />
          <span className="font-semibold tracking-tight">GimBooks Pay</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#download" className="hover:text-white transition-colors">Download</a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-2 text-neutral-900 font-semibold shadow-[0_8px_30px_rgba(34,197,94,0.35)] hover:opacity-95 transition">
            Get the App
          </a>
        </nav>
        <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="md:hidden inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-emerald-400 px-3 py-1.5 text-neutral-900 text-sm font-semibold shadow-[0_8px_30px_rgba(34,197,94,0.35)]">
          Install
        </a>
      </div>
    </header>
  );
}
