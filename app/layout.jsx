import './globals.css';

export const metadata = {
  title: 'Ray-Ban.EXE | Erase Existence & Unleash Your True Self',
  description:
    'Discover Ray-Ban.EXE — a groundbreaking collaboration with a Korean webtoonist. Join EV11, the robot who finds creative freedom and individuality in a dystopian Seoul.',
  keywords: 'Ray-Ban, EXE, Clubmaster, Aviator, Wayfarer, Round, sunglasses, EV11',
  openGraph: {
    title: 'Ray-Ban.EXE',
    description:
      'Explore iconic sunglasses through the lens of a dystopian Seoul story.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="scanlines">
        {children}
      </body>
    </html>
  );
}
