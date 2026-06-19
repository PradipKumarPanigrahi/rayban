'use client';

const FOOTER_LINKS = {
  'Company':    ['About Ray-Ban', 'Newsroom', 'Careers', 'Sustainability'],
  'Support':    ['FAQ', 'Order Status', 'Returns', 'Contact Us'],
  'Legal':      ['Privacy Policy', 'Cookie Settings', 'Terms of Service'],
  'Follow':     ['Instagram', 'TikTok', 'YouTube', 'X (Twitter)'],
};

export default function Footer() {
  return (
    <footer className="border-t border-rb-border bg-rb-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <p className="font-mono text-rb-text text-sm font-bold tracking-widest mb-2">
              RAY-BAN<span className="text-rb-green">.EXE</span>
            </p>
            <p className="font-mono text-rb-muted text-xs leading-relaxed">
              A story about robots, ruins, and the rebellion of seeing clearly.
            </p>
            <div className="mt-6 font-mono text-rb-green text-xs space-y-0.5 opacity-60">
              <p>Seoul-DELTA / 37.5665N</p>
              <p>YEAR 2147 / UNIT EV11</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="section-label mb-4">{group}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-rb-muted text-sm hover:text-rb-green transition-colors"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-rb-muted text-xs tracking-wide">
            © {new Date().getFullYear()} Ray-Ban — Luxottica Group S.p.A.
          </p>
          <p className="font-mono text-rb-muted text-xs">
            RAY-BAN.EXE — A webtoon collaboration
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full bg-rb-green"
              style={{ boxShadow: '0 0 6px #00FF41' }}
            />
            <span className="font-mono text-rb-green text-xs">EV11 ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
