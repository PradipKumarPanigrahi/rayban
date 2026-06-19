'use client';

import { useState } from 'react';

const PRODUCTS = [
  {
    id:        'clubmaster',
    name:      'Clubmaster',
    korean:    '클럽마스터',
    year:      '1986',
    tag:       'ICONIC HERITAGE',
    desc:      'Half-rim architecture from a golden era of independent spirit. The Clubmaster channels the soul of Beat Generation intellectuals — now worn by a robot who learned to dream.',
    specs:     ['Frame: Acetate / Metal', 'Lens: G-15 Classic', 'Shape: Square-Browline'],
    accent:    '#00FF41',
    href:      'https://www.ray-ban.com/uk/sunglasses/clubmaster',
  },
  {
    id:        'aviator',
    name:      'Aviator',
    korean:    '에비에이터',
    year:      '1937',
    tag:       'MILITARY ORIGIN',
    desc:      'Born in the cockpit, forged for clarity in chaos. EV11 discovered a pair in the wreckage of a fighter jet — the first time the robot understood the concept of horizon.',
    specs:     ['Frame: Metal Wire Core', 'Lens: Crystal G-15', 'Shape: Teardrop'],
    accent:    '#FFB800',
    href:      'https://www.ray-ban.com/uk/sunglasses/aviators',
  },
  {
    id:        'wayfarer',
    name:      'Wayfarer',
    korean:    '웨이파러',
    year:      '1952',
    tag:       'COUNTER CULTURE',
    desc:      'The most recognised silhouette in eyewear history. The Wayfarer is rebellion made wearable — a relic EV11 treats as proof that humans once chose who they wanted to be.',
    specs:     ['Frame: Acetate', 'Lens: Classic G-15', 'Shape: Square-Modified'],
    accent:    '#FF003C',
    href:      'https://www.ray-ban.com/uk/sunglasses/wayfarer',
  },
  {
    id:        'round',
    name:      'Round',
    korean:    '라운드',
    year:      '1960',
    tag:       'VISIONARY',
    desc:      'Circular lenses that echo the eye itself. The Round speaks the language of artists and philosophers — those who looked at the world differently. So does EV11.',
    specs:     ['Frame: Metal', 'Lens: Crystal Green', 'Shape: Round'],
    accent:    '#A855F7',
    href:      'https://www.ray-ban.com/uk/sunglasses/round',
  },
];

export default function Products() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="products" className="py-24 bg-rb-dark">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <p className="section-label mb-4">// ARTIFACT INVENTORY — 4 UNITS IDENTIFIED</p>
        <h2
          className="font-mono font-bold text-rb-text"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
        >
          ICONIC FRAMES<br />
          <span className="text-rb-muted font-light">REDISCOVERED</span>
        </h2>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-px bg-rb-border">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            hovered={hoveredId === product.id}
            onHover={() => setHoveredId(product.id)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, hovered, onHover, onLeave }) {
  return (
    <article
      id={product.id}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="product-card p-8 md:p-10 flex flex-col justify-between min-h-80"
      style={{
        borderColor: hovered ? product.accent + '66' : 'transparent',
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="font-mono text-xs tracking-widest mb-1" style={{ color: product.accent }}>
            {product.tag} — {product.year}
          </p>
          <h3
            className="font-mono font-bold text-rb-text"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
          >
            {product.name}
          </h3>
          <p className="mt-1 text-rb-muted text-xs" style={{ fontFamily: 'var(--font-korean)' }}>
            {product.korean}
          </p>
        </div>

        {/* Decorative frame icon placeholder */}
        <div
          className="w-16 h-16 border flex items-center justify-center font-mono text-2xl"
          style={{
            borderColor: product.accent + '44',
            color: product.accent,
            background: product.accent + '08',
          }}
        >
          ◉
        </div>
      </div>

      {/* Description */}
      <p className="text-rb-muted text-sm leading-relaxed mb-6">{product.desc}</p>

      {/* Specs */}
      <ul className="mb-8 space-y-1">
        {product.specs.map((spec) => (
          <li key={spec} className="font-mono text-xs text-rb-muted flex items-center gap-2">
            <span style={{ color: product.accent }}>›</span>
            {spec}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline self-start"
        style={{
          '--border-color': product.accent,
          '--hover-bg':     product.accent,
          borderColor: product.accent + '66',
          color: product.accent,
        }}
      >
        <span>Shop {product.name} ↗</span>
      </a>
    </article>
  );
}
