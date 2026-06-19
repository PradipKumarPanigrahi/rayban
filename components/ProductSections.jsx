'use client';

import { useState } from 'react';

const GLASSES = [
  {
    id:     'clubmaster',
    name:   'Clubmaster',
    korean: '클럽마스터',
    year:   '1986',
    color:  '#00FF41',
    models: ['RB3016 — Classic', 'RB3016 — Havana', 'RB3016 — Shiny Black'],
    price:  'From £159',
    story:  'Half-frame precision dating back to 1986. The Clubmaster is the intellectual\'s shield, worn by creatives who choose to see the world on their own terms.',
  },
  {
    id:     'aviator',
    name:   'Aviator',
    korean: '에비에이터',
    year:   '1937',
    color:  '#FFB800',
    models: ['RB3025 — Gold/Green', 'RB3025 — Silver/Blue', 'RB3025 — Arista/Brown'],
    price:  'From £139',
    story:  'Created for US Army Air Corps pilots in 1937. The Aviator redefined eyewear as identity — a teardrop lens built for clarity at altitude.',
  },
  {
    id:     'wayfarer',
    name:   'Wayfarer',
    korean: '웨이파러',
    year:   '1952',
    color:  '#FF003C',
    models: ['RB2140 — Black', 'RB2140 — Tortoise', 'RB2140 — Bicolour'],
    price:  'From £125',
    story:  'The original outsider\'s frame. Worn by every countercultural icon since the 1950s, the Wayfarer is rebellion in acetate form.',
  },
  {
    id:     'round',
    name:   'Round',
    korean: '라운드',
    year:   '1960',
    color:  '#A855F7',
    models: ['RB3447 — Gold/Green', 'RB3447 — Copper/Brown', 'RB3447 — Black/Grey'],
    price:  'From £129',
    story:  'Circular lenses for those who see the world differently. Visionaries, philosophers, artists. And now, one robot searching for meaning in a dying city.',
  },
];

export default function ProductSections() {
  return (
    <>
      {GLASSES.map((g, i) => (
        <GlassSection key={g.id} glass={g} reverse={i % 2 !== 0} />
      ))}
    </>
  );
}

function GlassSection({ glass, reverse }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id={glass.id}
      className="min-h-screen flex items-center border-b border-rb-border"
      style={{ background: 'var(--rb-black)' }}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}
      >
        {/* Visual panel */}
        <div
          className={`relative ${reverse ? 'md:col-start-2' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="aspect-square w-full max-w-md mx-auto flex items-center justify-center"
            style={{
              background: glass.color + '08',
              border: `1px solid ${glass.color}${hovered ? '66' : '22'}`,
              transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
              boxShadow: hovered ? `0 0 60px ${glass.color}22` : 'none',
            }}
          >
            {/* Placeholder graphic — replace with actual product image */}
            <div className="text-center">
              <p
                className="font-mono text-8xl md:text-9xl font-bold"
                style={{ color: glass.color + '22', lineHeight: 1 }}
              >
                ◉
              </p>
              <p className="font-mono text-xs tracking-widest mt-4" style={{ color: glass.color + '88' }}>
                {glass.name.toUpperCase()} — {glass.year}
              </p>
            </div>

            {/* Corner crosshairs */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
              <Crosshair key={pos} position={pos} color={glass.color} />
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className={reverse ? 'md:col-start-1' : ''}>
          <p className="section-label mb-4" style={{ color: glass.color }}>
            // ARTIFACT_{String(GLASSES.findIndex(g => g.id === glass.id) + 1).padStart(2, '0')} — {glass.year}
          </p>

          <h2
            className="font-mono font-bold text-rb-text mb-2"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
          >
            {glass.name}
          </h2>
          <p className="text-rb-muted mb-6 text-sm" style={{ fontFamily: 'var(--font-korean)' }}>
            {glass.korean}
          </p>

          <hr className="divider mb-6" />

          <p className="text-rb-muted text-sm leading-relaxed mb-8 max-w-sm">{glass.story}</p>

          {/* Models */}
          <div className="mb-8">
            <p className="font-mono text-xs tracking-widest text-rb-muted mb-3">AVAILABLE MODELS</p>
            <ul className="space-y-2">
              {glass.models.map((model) => (
                <li key={model} className="flex items-center gap-3 font-mono text-sm text-rb-text">
                  <span className="text-rb-border">›</span>
                  {model}
                </li>
              ))}
            </ul>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center gap-6">
            <span className="font-mono text-rb-green text-lg font-semibold">{glass.price}</span>
            <a
              href={`https://www.ray-ban.com/uk/sunglasses/${glass.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ color: glass.color, borderColor: glass.color + '66' }}
            >
              <span>Shop Now ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Crosshair({ position, color }) {
  const styles = {
    'top-left':     { top: 8, left: 8 },
    'top-right':    { top: 8, right: 8 },
    'bottom-left':  { bottom: 8, left: 8 },
    'bottom-right': { bottom: 8, right: 8 },
  }[position];

  return (
    <div className="absolute w-4 h-4" style={{ ...styles, opacity: 0.5 }}>
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: color }} />
      <div className="absolute top-0 left-0 h-full w-px" style={{ background: color }} />
    </div>
  );
}
