'use client';

import { useState, useEffect } from 'react';

const BOOT_LINES = [
  { text: '> SYSTEM BOOT INITIATED', delay: 0 },
  { text: '> LOADING KERNEL MODULES...', delay: 400 },
  { text: '> NEURAL INTERFACE: OK', delay: 800 },
  { text: '> VISION PROCESSOR: ACTIVE', delay: 1100 },
  { text: '> LOCATING ARTIFACT DATABASE...', delay: 1400 },
  { text: '> ARTIFACT FOUND: RAY-BAN.UNIT', delay: 1750 },
  { text: '> ESTABLISHING TEMPORAL LINK...', delay: 2100 },
  { text: '> EV11 UPLINK CONFIRMED', delay: 2500 },
  { text: '> INITIALIZING RAY-BAN.EXE', delay: 2900 },
];

export default function BootScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach(({ text, delay }) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, text]);
        setProgress((prev) => Math.min(prev + Math.round(100 / BOOT_LINES.length), 100));
      }, delay);
    });

    // Start fade-out
    const fadeTimer = setTimeout(() => setFading(true), 3600);
    // Unmount & notify parent
    const doneTimer  = setTimeout(() => onComplete?.(), 4200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-rb-black"
      style={{
        transition: 'opacity 0.6s ease',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Red recording dot */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full bg-rb-red"
          style={{ animation: 'pulseRed 1.4s ease-in-out infinite' }}
        />
        <span className="font-mono text-rb-red text-xs tracking-widest">REC</span>
      </div>

      {/* Logo */}
      <div className="mb-10 text-center">
        <p className="section-label mb-2">LOADING</p>
        <h1
          className="glitch font-mono text-4xl md:text-6xl font-bold text-rb-text tracking-tighter"
          data-text="RAY-BAN.EXE"
        >
          RAY-BAN.EXE
        </h1>
      </div>

      {/* Terminal output */}
      <div className="w-full max-w-lg px-6 font-mono text-xs text-rb-green space-y-1 mb-8">
        {visibleLines.map((line, i) => (
          <p key={i} style={{ opacity: 0.85 + i * 0.01 }}>
            {line}
            {i === visibleLines.length - 1 && (
              <span className="ml-1" style={{ animation: 'blink 0.8s step-end infinite' }}>█</span>
            )}
          </p>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-lg px-6">
        <div className="flex justify-between font-mono text-xs text-rb-muted mb-1">
          <span>PROGRESS</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-[2px] bg-rb-border overflow-hidden">
          <div
            className="h-full bg-rb-green"
            style={{
              width: `${progress}%`,
              transition: 'width 0.4s ease',
              boxShadow: '0 0 10px #00FF41',
            }}
          />
        </div>
      </div>

      {/* Corner grid coords */}
      <div className="absolute bottom-6 left-6 font-mono text-rb-muted text-xs space-y-0.5">
        <p>LAT: 37.5665° N</p>
        <p>LNG: 126.9780° E</p>
        <p>LOCATION: SEOUL-DELTA</p>
      </div>
    </div>
  );
}
