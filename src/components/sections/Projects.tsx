'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass-card border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300"
    >
      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${project.color}08, transparent 60%)`,
          boxShadow: `0 0 40px ${project.color}10`,
        }}
      />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium"
              style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}30` }}>
              ✦ Featured
            </span>
          </div>
        )}

        {/* Links on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-4 right-4 flex gap-2"
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}>
            <Github size={14} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}>
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-lg font-bold text-white/90 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={16} className="text-accent-cyan mt-1" />
          </motion.div>
        </div>

        <p className="text-sm text-white/40 leading-relaxed mb-5">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono"
              style={{ background: `${project.color}0a`, color: `${project.color}cc`, border: `1px solid ${project.color}20` }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom links */}
        <div className="mt-5 pt-5 border-t border-white/5 flex items-center gap-4">
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-accent-cyan transition-colors">
            <ExternalLink size={12} />
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white/80 transition-colors">
            <Github size={12} />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="MY WORK" title="Featured" highlight="Projects" subtitle="Real-world applications built with production-grade code and attention to detail." />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card border border-white/5 rounded-2xl p-1.5 flex gap-1">
            {(['all', 'featured'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
                  filter === tab
                    ? 'bg-accent-cyan text-bg-primary font-semibold'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {tab === 'all' ? `All (${PROJECTS.length})` : `Featured (${PROJECTS.filter(p => p.featured).length})`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-white/30 text-sm mb-4">Want to see more?</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Github size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
