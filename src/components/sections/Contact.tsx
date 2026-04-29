'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

// ── Replace these with your real EmailJS credentials ──────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error';

const INFO_ITEMS = [
  { icon: Mail,    label: 'Email',     value: 'shommo.nexus@gmail.com',    href: 'mailto:shommo.nexus@gmail.com' },
  { icon: MapPin,  label: 'Location',  value: 'Remote — Worldwide',  href: null },
  { icon: Clock,   label: 'Response',  value: 'Within 24 hours',     href: null },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.name.trim())    e.name    = 'Name is required';
    if (!values.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) e.email = 'Enter a valid email';
    if (!values.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      // Dynamic import so emailjs is only loaded client-side
      const emailjs = (await import('emailjs-com')).default;
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setValues({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's Build"
          highlight="Together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info card */}
            <div className="glass-card border border-white/5 rounded-3xl p-7">
              <h3 className="font-display text-xl font-bold text-white/90 mb-2">Ready to start?</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-7">
                I&apos;m available for freelance projects, full-time roles, and interesting collaborations.
                Let&apos;s discuss what we can build together.
              </p>

              <div className="space-y-4">
                {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent-cyan/8 border border-accent-cyan/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-accent-cyan" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-white/30 tracking-wider">{label.toUpperCase()}</p>
                      {href ? (
                        <a href={href} className="text-sm text-white/70 hover:text-accent-cyan transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm text-white/70">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass-card border border-accent-emerald/15 rounded-2xl p-5 flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-accent-emerald" />
                <div className="absolute inset-0 rounded-full bg-accent-emerald animate-ping opacity-40" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white/80">Available for new projects</p>
                <p className="text-xs text-white/35">Accepting work starting immediately</p>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card border border-white/5 rounded-2xl p-5">
              <p className="font-mono text-xs text-white/30 tracking-wider mb-3">FIND ME ON</p>
              <div className="flex gap-3">
                {[
                  { label: 'GitHub', href: 'https://github.com', icon: '⌥' },
                  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
                  { label: 'Twitter', href: 'https://twitter.com', icon: '✕' },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl glass-card border border-white/5 text-center text-xs font-mono text-white/40 hover:text-white/80 hover:border-white/15 transition-all"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass-card border border-white/5 rounded-3xl p-8">
              {/* Success / Error overlays */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 rounded-3xl bg-bg-card/95 backdrop-blur flex flex-col items-center justify-center gap-4 p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                      <CheckCircle2 size={52} className="text-accent-emerald mx-auto" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-white/90">Message Sent!</h3>
                    <p className="text-white/45 text-sm max-w-xs">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-outline px-6 py-2.5 rounded-xl text-sm font-semibold mt-2"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] text-white/30 tracking-wider mb-2">NAME *</label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-white/3 border rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 outline-none transition-all focus:border-accent-cyan/50 focus:bg-white/5 ${
                        errors.name ? 'border-red-500/50' : 'border-white/8'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-white/30 tracking-wider mb-2">EMAIL *</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full bg-white/3 border rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 outline-none transition-all focus:border-accent-cyan/50 focus:bg-white/5 ${
                        errors.email ? 'border-red-500/50' : 'border-white/8'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-mono text-[11px] text-white/30 tracking-wider mb-2">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    placeholder="Let's build something amazing"
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 outline-none transition-all focus:border-accent-cyan/50 focus:bg-white/5"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[11px] text-white/30 tracking-wider mb-2">MESSAGE *</label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows={6}
                    className={`w-full bg-white/3 border rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 outline-none transition-all focus:border-accent-cyan/50 focus:bg-white/5 resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-white/8'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/8 border border-red-500/20 text-sm text-red-400">
                    <AlertCircle size={15} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-white/20">
                  Your information is kept private and never shared.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
