import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary grid-bg flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-xs text-accent-cyan/50 tracking-widest mb-4">404 — PAGE NOT FOUND</p>
      <h1 className="font-display text-7xl font-bold gradient-text mb-4">Oops</h1>
      <p className="text-white/40 mb-8 max-w-sm">Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.</p>
      <Link href="/" className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold">
        ← Back to Home
      </Link>
    </div>
  );
}
