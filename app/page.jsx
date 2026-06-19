'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import BootScreen      from '@/components/BootScreen';
import Navbar          from '@/components/Navbar';
import Hero            from '@/components/Hero';
import Ticker          from '@/components/Ticker';
import Story           from '@/components/Story';
import Products        from '@/components/Products';
import ProductSections from '@/components/ProductSections';
import Footer          from '@/components/Footer';

// ── Audio refs ──────────────────────────────────────────────────────────────
const AUDIO_URLS = {
  hover:  'https://media.ray-ban.com/2025/lp_exe/audio/hover.mp3',
  click:  'https://media.ray-ban.com/2025/lp_exe/audio/click1.mp3',
  back:   'https://media.ray-ban.com/2025/lp_exe/audio/back.mp3',
};

export default function Page() {
  const [booted,   setBooted]   = useState(false);
  const [audioOn,  setAudioOn]  = useState(false);
  const audios = useRef({});

  // Preload audio on mount
  useEffect(() => {
    Object.entries(AUDIO_URLS).forEach(([key, src]) => {
      const el = new Audio(src);
      el.volume = 0.4;
      audios.current[key] = el;
    });
  }, []);

  const playSound = useCallback((name) => {
    if (!audioOn) return;
    const audio = audios.current[name];
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, [audioOn]);

  // Attach hover/click sounds to entire document after boot
  useEffect(() => {
    if (!booted) return;

    const onMouseOver = (e) => {
      if (e.target.matches('a, button')) playSound('hover');
    };
    const onClick = (e) => {
      if (e.target.matches('a, button')) playSound('click');
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('click',     onClick);
    return () => {
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('click',     onClick);
    };
  }, [booted, playSound]);

  const handleBootComplete = () => {
    setBooted(true);
    playSound('back');
  };

  return (
    <>
      {/* Boot screen */}
      {!booted && <BootScreen onComplete={handleBootComplete} />}

      {/* Main page — visible after boot */}
      <div
        style={{
          opacity: booted ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: booted ? 'all' : 'none',
        }}
      >
        <Navbar audioOn={audioOn} onToggleAudio={() => setAudioOn((p) => !p)} />
        <main>
          <Hero />
          <Ticker variant="green" />
          <Story />
          <Ticker variant="red" />
          <Products />
          <ProductSections />
        </main>
        <Footer />
      </div>
    </>
  );
}
