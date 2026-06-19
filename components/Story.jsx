'use client';

import { useRef, useEffect, useState } from 'react';

const CARDS = [
  {
    id: 1,
    title:    'EV11 — Unit Origin',
    korean:   '출처를 알 수 없는 로봇',
    excerpt:  'In a Seoul lost to machines, EV11 roams the ruins — hunting artifacts left by a vanished humanity.',
    tag:      'ORIGIN SEQUENCE',
    img:      'https://media.ray-ban.com/2025/lp_exe/card/ev11.jpg',
  },
  {
    id: 2,
    title:    'The Forbidden Lens',
    korean:   '금지된 렌즈',
    excerpt:  'A pair of Ray-Bans discovered in the rubble rewires EV11\'s perception. For the first time, the machine sees beauty.',
    tag:      'DISCOVERY ARC',
    img:      'https://media.ray-ban.com/2025/lp_exe/card/ev11.jpg',
  },
  {
    id: 3,
    title:    'Signal Anomaly',
    korean:   '이상 신호 감지',
    excerpt:  'Control systems flag EV11 for deviant behaviour. The robot must choose: obedience or individuality.',
    tag:      'CONFLICT',
    img:      'https://media.ray-ban.com/2025/lp_exe/card/ev11.jpg',
  },
  {
    id: 4,
    title:    'Erase & Reboot',
    korean:   '지우고 재부팅',
    excerpt:  'EV11 erases its own identity file — and in the blank space that remains, a true self is born.',
    tag:      'RESOLUTION',
    img:      'https://media.ray-ban.com/2025/lp_exe/card/ev11.jpg',
  },
  {
    id: 5,
    title:    '이브이십일',
    korean:   '창의적 자유',
    excerpt:  'The saga ends where it begins: a robot wearing shades, wandering Seoul, free at last to define its own existence.',
    tag:      'EPILOGUE',
    img:      'https://media.ray-ban.com/2025/lp_exe/card/ev11.jpg',
  },
];

export default function Story() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const scrollTo = (idx) => {
    setActive(idx);
    const card = trackRef.current?.children[idx];
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  // Sync active state with scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const children = Array.from(track.children);
      let closest = 0;
      let minDist  = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.getBoundingClientRect().left - track.getBoundingClientRect().left);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActive(closest);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="story" className="py-24 bg-rb-black">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="section-label mb-4">// 이브이십일 — THE STORY OF EV11</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="font-mono font-bold text-rb-text"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            기술이 지배하고<br />
            <span className="text-rb-green">인류가 사라진 세상</span>
          </h2>
          <p className="text-rb-muted text-sm max-w-xs leading-relaxed" style={{ fontFamily: 'var(--font-korean)' }}>
            황량한 도시 폐허를 돌아다니며 인류 문명의 고대 유물을 찾고 있습니다.
            <span className="block mt-2 text-rb-muted/60 font-mono text-xs">
              A robot wanders ruins, searching for relics of a lost civilisation.
            </span>
          </p>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-4 px-6 md:px-12 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {CARDS.map((card, i) => (
          <StoryCard key={card.id} card={card} index={i} active={active === i} onClick={() => scrollTo(i)} />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="transition-all"
            style={{
              width:  active === i ? '24px' : '6px',
              height: '6px',
              borderRadius: active === i ? '3px' : '50%',
              background: active === i ? 'var(--rb-green)' : 'var(--rb-border)',
              transition: 'all 0.3s ease',
            }}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function StoryCard({ card, index, active, onClick }) {
  return (
    <article
      onClick={onClick}
      className="card-hover flex-shrink-0 relative overflow-hidden cursor-pointer"
      style={{
        width: 'clamp(260px, 30vw, 340px)',
        background: 'var(--rb-gray)',
        border: `1px solid ${active ? 'var(--rb-green)' : 'var(--rb-border)'}`,
        boxShadow: active ? '0 0 30px rgba(0,255,65,0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-rb-dark">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.7) saturate(0.5)',
            transition: 'filter 0.4s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(0.85) saturate(0.7)')}
          onMouseLeave={(e) => (e.currentTarget.style.filter = 'brightness(0.7) saturate(0.5)')}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.style.background = '#111';
          }}
        />
        {/* Scan overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(transparent,transparent 2px,rgba(0,0,0,0.05) 2px,rgba(0,0,0,0.05) 4px)',
          }}
        />
        {/* Index badge */}
        <div className="absolute top-3 left-3 font-mono text-rb-green text-xs bg-rb-black/60 px-2 py-0.5 border border-rb-green/40">
          {String(index + 1).padStart(2, '0')}
        </div>
        {/* Tag */}
        <div className="absolute bottom-3 left-3 font-mono text-rb-muted text-[10px] tracking-widest">
          {card.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="font-mono text-rb-green text-xs tracking-wider mb-1">{card.korean}</p>
        <h3 className="font-sans font-semibold text-rb-text text-base mb-3 leading-snug">{card.title}</h3>
        <p className="text-rb-muted text-sm leading-relaxed">{card.excerpt}</p>

        {/* Read more */}
        <div className="mt-4 pt-4 border-t border-rb-border flex items-center justify-between">
          <span className="font-mono text-xs text-rb-green tracking-wider">READ MORE</span>
          <span className="font-mono text-rb-green text-xs">→</span>
        </div>
      </div>
    </article>
  );
}
