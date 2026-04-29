'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const SOCIALS = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
];

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-bg-secondary/50">
      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg glass-card border border-accent-cyan/20 flex items-center justify-center">
                <span className="font-display text-base font-bold gradient-text-cyan">A</span>
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white/90">Shommo Khastagir</p>
                <p className="font-mono text-[10px] text-accent-cyan/50 tracking-widest">MERN DEVELOPER</p>
              </div>
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              Building modern, scalable web applications that drive real business results.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-display text-sm font-semibold text-white/70 mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/35 hover:text-accent-cyan transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="font-display text-sm font-semibold text-white/70 mb-4">Connect</p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 glass-card rounded-xl border border-white/5 flex items-center justify-center text-white/40 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/25 font-mono">
              shommo.nexus@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-mono">
            © {new Date().getFullYear()} Shommo khastagir. All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-mono flex items-center gap-1">
            Built with Next.js + Tailwind + Framer Motion
            <span className="text-accent-cyan/50">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
