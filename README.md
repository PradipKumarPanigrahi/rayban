# Ray-Ban.EXE — Next.js Project

A cyberpunk-themed landing page inspired by the Ray-Ban.EXE campaign, featuring EV11 — a robot wandering a dystopian Seoul who discovers individuality through iconic Ray-Ban frames.

## ✦ Design System

| Token       | Value     | Purpose                       |
|-------------|-----------|-------------------------------|
| `rb-black`  | `#000000` | Primary background            |
| `rb-dark`   | `#0A0A0A` | Sections background           |
| `rb-green`  | `#00FF41` | Matrix-green primary accent   |
| `rb-red`    | `#FF003C` | Alert / danger accent         |
| `rb-amber`  | `#FFB800` | Aviator section accent        |
| `rb-text`   | `#F0F0F0` | Body text                     |
| `rb-muted`  | `#555555` | Secondary text                |

**Fonts:** IBM Plex Mono (UI/headings) · Space Grotesk (body) · Noto Sans KR (Korean copy)

## ✦ Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Framer Motion** (optional — installed for future page transitions)

## ✦ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## ✦ Project Structure

```
ray-ban-exe/
├── app/
│   ├── layout.jsx          # Root layout (scanlines overlay, metadata)
│   ├── page.jsx            # Main page — boot screen logic + audio engine
│   └── globals.css         # Design tokens, keyframes, utility classes
│
├── components/
│   ├── BootScreen.jsx      # Terminal-style boot animation
│   ├── Navbar.jsx          # Fixed nav with audio toggle
│   ├── Hero.jsx            # Full-screen hero with video background
│   ├── Ticker.jsx          # Scrolling Korean/English text ribbon
│   ├── Story.jsx           # Horizontal-scroll EV11 story cards
│   ├── Products.jsx        # 2×2 product grid (Clubmaster, Aviator, Wayfarer, Round)
│   ├── ProductSections.jsx # Full-screen per-product sections with anchor links
│   └── Footer.jsx          # Footer with links and status indicator
│
├── tailwind.config.js      # Custom tokens + animations
├── next.config.mjs         # Image domain allowlist
└── package.json
```

## ✦ Features

- **Boot screen** — Terminal-style loading sequence with progress bar
- **CRT scan-line** overlay across the entire page
- **Glitch animation** on "RAY-BAN.EXE" hero title
- **Video background** in hero (pulled from Ray-Ban CDN)
- **Audio system** — hover/click/back SFX toggle (ON/OFF in navbar)
- **Korean typography** — Noto Sans KR for authentic copy
- **Horizontal story scroll** with dot indicators
- **Anchor-linked product sections** (Clubmaster / Aviator / Wayfarer / Round)
- **Custom scrollbar** (green on black)
- **Fully responsive** — mobile-first

## ✦ Customisation

### Swap product images
Replace the placeholder `◉` icons in `ProductSections.jsx` with `<Image>` components pointing to real product photography:

```jsx
import Image from 'next/image';
// ...
<Image src="/images/clubmaster.png" alt="Clubmaster" fill className="object-contain" />
```

### Add Framer Motion page transitions
`framer-motion` is already installed. Wrap sections in `<motion.section>` with `initial`, `animate`, and `whileInView` props.

### Enable audio permanently
Change `const [audioOn, setAudioOn] = useState(false)` → `useState(true)` in `app/page.jsx`.

## ✦ Credits

Inspired by [Ray-Ban.EXE](https://www.ray-ban.com/uk/l/discover-ray-ban-exe) — a collaboration with Korean webtoonist illustrating the story of EV11 in dystopian Seoul.
