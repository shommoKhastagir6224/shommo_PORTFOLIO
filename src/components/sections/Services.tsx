'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

const COLOR_MAP: Record<string, { accent: string; glow: string; bg: string; border: string }> = {
  cyan:    { accent: '#00d4ff', glow: 'rgba(0,212,255,0.12)',   bg: 'rgba(0,212,255,0.05)',   border: 'rgba(0,212,255,0.2)' },
  violet:  { accent: '#7c3aed', glow: 'rgba(124,58,237,0.12)', bg: 'rgba(124,58,237,0.05)',  border: 'rgba(124,58,237,0.2)' },
  emerald: { accent: '#10b981', glow: 'rgba(16,185,129,0.12)', bg: 'rgba(16,185,129,0.05)',  border: 'rgba(16,185,129,0.2)' },
  amber:   { accent: '#f59e0b', glow: 'rgba(245,158,11,0.12)', bg: 'rgba(245,158,11,0.05)',  border: 'rgba(245,158,11,0.2)' },
};

type Service = (typeof SERVICES)[number];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const colors = COLOR_MAP[service.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative glass-card rounded-3xl p-8 overflow-hidden transition-all duration-300 cursor-default"
      style={{ border: `1px solid rgba(255,255,255,0.05)` }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(300px circle at 50% 0%, ${colors.glow}, transparent 70%)` }}
      />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-8 right-8 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${colors.accent}60, transparent)` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.4, duration: 0.6 }}
      />

      {/* Icon */}
      <div className="relative mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
        >
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        className="font-display text-xl font-bold mb-3 transition-colors duration-200"
        style={{ color: 'rgba(255,255,255,0.9)' }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-white/40 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm text-white/50">
            <CheckCircle2 size={14} style={{ color: colors.accent, flexShrink: 0 }} />
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="mt-6 pt-6 border-t border-white/5"
      >
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="text-sm font-mono transition-colors inline-flex items-center gap-1.5"
          style={{ color: colors.accent }}
        >
          Get a quote →
        </a>
      </motion.div>
    </motion.div>
  );
}

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery', desc: 'Understanding your requirements, goals, and technical constraints.' },
  { num: '02', title: 'Design', desc: 'Architecting the solution with clean, scalable patterns.' },
  { num: '03', title: 'Build', desc: 'Development with daily updates and transparent communication.' },
  { num: '04', title: 'Launch', desc: 'Testing, deployment, and post-launch support included.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="WHAT I DO"
          title="Services I"
          highlight="Offer"
          subtitle="End-to-end development services tailored to your needs and timeline."
        />

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-accent-cyan/70 mb-4">
            <span className="w-8 h-px bg-accent-cyan/40" />
            HOW I WORK
            <span className="w-8 h-px bg-accent-cyan/40" />
          </span>
          <h3 className="font-display text-3xl font-bold text-white/90">My Process</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative glass-card border border-white/5 rounded-2xl p-6 group hover:border-accent-cyan/15 transition-colors"
            >
              {/* Connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-5 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent z-10" />
              )}

              <span className="font-mono text-3xl font-bold text-accent-cyan/15 group-hover:text-accent-cyan/25 transition-colors block mb-4">
                {step.num}
              </span>
              <h4 className="font-display text-base font-bold text-white/80 mb-2">{step.title}</h4>
              <p className="text-sm text-white/35 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
