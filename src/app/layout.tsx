import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex Morgan | MERN Stack Developer',
  description:
    'Full-stack MERN developer specializing in building scalable, high-performance web applications with React, Node.js, MongoDB, and Next.js.',
  keywords: [
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Next.js',
    'MongoDB',
    'Web Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Alex Morgan' }],
  openGraph: {
    title: 'Alex Morgan | MERN Stack Developer',
    description: 'Building modern, scalable web applications.',
    type: 'website',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="noise-overlay">
        {children}
      </body>
    </html>
  );
}
