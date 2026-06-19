'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'EV11',        href: '#story' },
  { label: 'Clubmaster',  href: '#clubmaster' },
  { label: 'Aviator',     href: '#aviator' },
  { label: 'Wayfarer',    href: '#wayfarer' },
  { label: 'Round',       href: '#round' },
  { label: 'Shop',        href: 'https://www.ray-ban.com/uk' },
];

export default function Navbar({ audioOn, onToggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid #222' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-sm font-bold text-rb-text tracking-widest hover:text-rb-green transition-colors">
          RAY-BAN<span className="text-rb-green">.EXE</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Audio toggle */}
          <button
            onClick={onToggleAudio}
            className="font-mono text-xs tracking-widest flex items-center gap-1.5 transition-colors"
            style={{ color: audioOn ? 'var(--rb-green)' : 'var(--rb-muted)' }}
            aria-label="Toggle audio"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: audioOn ? 'var(--rb-green)' : 'var(--rb-muted)' }}
            />
            SFX {audioOn ? 'ON' : 'OFF'}
          </button>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-rb-text transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-px bg-rb-text transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-rb-text transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-rb-black border-t border-rb-border px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block nav-link py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
