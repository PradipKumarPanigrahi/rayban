'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://media.ray-ban.com/2025/lp_exe/loader/loader_m.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.25) saturate(0.6)' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-rb-black/70 via-transparent to-rb-black" />
        {/* Left vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-rb-black/60 via-transparent to-rb-black/60" />
      </div>

      {/* Corner HUD decorations */}
      <HudCorner position="top-left"  coords="37.5665N / 126.978E" />
      <HudCorner position="top-right" coords="SEQ-2147 / FRAME-001" />

      {/* Central content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="section-label mb-6 animate-flicker">
          ◈ SYSTEM ACTIVE ◈ ARTIFACT DETECTED ◈ DYSTOPIAN SEOUL
        </p>

        {/* Main heading */}
        <h1
          className="glitch font-mono font-bold text-white mb-4"
          data-text="RAY-BAN.EXE"
          style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', lineHeight: 1, letterSpacing: '-0.04em' }}
        >
          RAY-BAN.EXE
        </h1>

        {/* Tagline in Korean */}
        <p
          className="text-rb-text/80 mb-2"
          style={{ fontFamily: 'var(--font-korean)', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 300 }}
        >
          이브이십일 — 존재를 지우고, 진정한 자신을 해방하라
        </p>
        <p className="font-mono text-rb-muted text-sm tracking-wide mb-10">
          Erase Existence. Unleash Your True Self.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#story" className="btn-outline text-rb-text border-rb-border hover:text-rb-black">
            <span>◈ Discover EV11</span>
          </a>
          <a
            href="https://www.ray-ban.com/uk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-rb-green border-rb-green hover:text-rb-black"
            style={{ '--hover-bg': 'var(--rb-green)' }}
          >
            <span>Shop Collection ↗</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-rb-muted text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-rb-green to-transparent" />
      </div>
    </section>
  );
}

function HudCorner({ position, coords }) {
  const posClass = {
    'top-left':  'top-20 left-6',
    'top-right': 'top-20 right-6',
  }[position];

  return (
    <div className={`absolute ${posClass} z-10 font-mono text-rb-green text-xs tracking-wider opacity-60`}>
      <p>{coords}</p>
      <div
        className="mt-1 flex gap-1"
        style={{ justifyContent: position === 'top-right' ? 'flex-end' : 'flex-start' }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-4 h-px bg-rb-green opacity-60" />
        ))}
      </div>
    </div>
  );
}
