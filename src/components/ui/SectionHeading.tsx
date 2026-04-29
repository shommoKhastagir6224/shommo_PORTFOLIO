'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, highlight, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-accent-cyan/70 mb-4">
        <span className="w-8 h-px bg-accent-cyan/40" />
        {label}
        <span className="w-8 h-px bg-accent-cyan/40" />
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white/95 leading-tight">
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/40 font-body text-lg max-w-xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
