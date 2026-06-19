'use client';

const TICKER_TEXT =
  '이상 장치 감지됨 ■ ANOMALY DETECTED ■ EV11 ONLINE ■ ARTIFACT LOCATED ■ ' +
  '이상 장치 감지됨 ■ VISION UNIT ACTIVE ■ SCANNING ■ RAY-BAN.EXE INITIATED ■ ' +
  '이상 장치 감지됨 ■ ANOMALY DETECTED ■ EV11 ONLINE ■ ARTIFACT LOCATED ■ ' +
  '이상 장치 감지됨 ■ VISION UNIT ACTIVE ■ SCANNING ■ RAY-BAN.EXE INITIATED ■ ';

export default function Ticker({ variant = 'green' }) {
  const isGreen = variant === 'green';

  return (
    <div
      className="w-full overflow-hidden py-3 border-y"
      style={{
        backgroundColor: isGreen ? 'var(--rb-green)'  : 'var(--rb-red)',
        borderColor:      isGreen ? 'var(--rb-green)'  : 'var(--rb-red)',
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'ticker 22s linear infinite' }}
      >
        {/* Duplicate for seamless loop */}
        {[TICKER_TEXT, TICKER_TEXT].map((text, i) => (
          <span
            key={i}
            className="font-mono text-xs font-semibold tracking-widest uppercase"
            style={{ color: isGreen ? 'var(--rb-black)' : 'var(--rb-text)' }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
