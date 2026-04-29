'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-30 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 65%)',
        borderRadius: '50%',
      }}
    />
  );
}
