'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SKILLS, TECH_STACK } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

function SkillBar({ name, level, icon, index }: { name: string; level: number; icon: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">{name}</span>
        </div>
        <span className="font-mono text-xs text-accent-cyan/60">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay: index * 0.08 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '4+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="WHO I AM" title="About" highlight="Me" subtitle="A passionate developer who loves turning complex problems into elegant solutions." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Avatar placeholder */}
            <div className="relative mb-8 w-fit">
              <div className="w-20 h-20 rounded-2xl glass-card border border-accent-cyan/20 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent-emerald border-2 border-bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            <h3 className="font-display text-2xl font-bold text-white/90 mb-4">
              Hey, I&apos;m Shommo — I build things for the web.
            </h3>

            <div className="space-y-4 text-white/45 leading-relaxed mb-8">
              <p>
                I&apos;m a full-stack MERN developer with 4+ years of experience building production-ready
                applications. I care deeply about code quality, user experience, and performance.
              </p>
              <p>
                From crafting pixel-perfect UIs with React to designing scalable backend architectures
                with Node.js and MongoDB — I handle the full stack. I&apos;ve shipped apps used by thousands
                of users daily and I take that responsibility seriously.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m contributing to open source, writing dev blogs, or experimenting
                with new tech. I believe great software is built with both technical excellence and empathy.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mb-10">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Talk →
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="btn-outline px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV ↓
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card border border-white/5 rounded-2xl p-4 text-center hover:border-accent-cyan/20 transition-colors"
                >
                  <p className="font-display text-2xl font-bold gradient-text-cyan">{stat.value}</p>
                  <p className="text-xs text-white/35 mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card border border-white/5 rounded-3xl p-8">
              <p className="font-display text-sm font-semibold text-white/60 mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-accent-cyan/40" />
                TECHNICAL SKILLS
              </p>

              <div className="space-y-5 mb-8">
                {SKILLS.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} index={i} />
                ))}
              </div>

              {/* Tech stack tags */}
              <div className="border-t border-white/5 pt-6">
                <p className="font-mono text-xs text-white/30 mb-3 tracking-wider">ALSO WORKING WITH</p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="skill-tag px-3 py-1 rounded-lg text-xs font-mono"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
