import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DownloadCTA from './components/DownloadCTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DownloadCTA />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} GimBooks Pay. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
