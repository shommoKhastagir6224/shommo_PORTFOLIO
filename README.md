# 🚀 Shommo khastagir — MERN Stack Developer Portfolio

A top-class, modern, high-end personal portfolio website built with **Next.js 14**, **React**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- ⚡ **Next.js 14** App Router with TypeScript
- 🎨 **Dark Premium UI** — glassmorphism, custom gradients, grid backgrounds
- 🎞️ **Framer Motion** — smooth page transitions, scroll reveals, micro-interactions
- 🌐 **Interactive Particle Canvas** — mouse-reactive 3D-style hero background
- ⌨️ **Typewriter Effect** — animated role cycling in the hero
- 📱 **Fully Responsive** — mobile, tablet, desktop
- 📧 **EmailJS Contact Form** — with validation and success/error states
- 🔗 **API Route** — `/api/contact` for backend email (Nodemailer / Resend ready)
- 🔍 **SEO Optimized** — meta tags, Open Graph, robots
- 🌀 **Loading Screen** — animated intro with progress bar
- 🖱️ **Cursor Glow** — subtle ambient cursor light effect
- 🔢 **Skill Progress Bars** — animated on scroll
- 🗂️ **Project Filter** — All / Featured tabs
- 🧭 **Smooth Scrolling** — navbar with mobile drawer
- 🎯 **Custom 404 Page**

---

## 📁 File Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts     # Backend contact API
│   │   ├── globals.css              # Global styles + Tailwind
│   │   ├── layout.tsx               # Root layout + SEO meta
│   │   ├── not-found.tsx            # 404 page
│   │   └── page.tsx                 # Main page (assembles sections)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Sticky nav with mobile drawer
│   │   │   └── Footer.tsx           # Footer with socials
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Hero + particle canvas + typewriter
│   │   │   ├── About.tsx            # Bio + animated skill bars + stats
│   │   │   ├── Projects.tsx         # Project cards with filter tabs
│   │   │   ├── Services.tsx         # Service cards + process steps
│   │   │   └── Contact.tsx          # EmailJS form with validation
│   │   └── ui/
│   │       ├── Loader.tsx           # Loading screen
│   │       ├── CursorGlow.tsx       # Mouse ambient glow
│   │       ├── SectionHeading.tsx   # Reusable section titles
│   │       └── SectionWrapper.tsx   # Fade-in scroll wrapper
│   └── lib/
│       ├── data.ts                  # All portfolio content (projects, skills)
│       └── utils.ts                 # Utility: cn() class merger
├── public/                          # Static assets (favicon, resume.pdf)
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Customization

### 1. Update your personal info

Edit **`src/lib/data.ts`** to change:
- Projects (title, description, image, tags, links)
- Skills (name, level, icon)
- Services
- Tech stack pills

### 2. Update your name/branding

Search and replace `Shommo khastagir` in:
- `src/app/layout.tsx` (SEO metadata)
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/Loader.tsx`

### 3. Set up EmailJS (Contact Form)

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. Create a **Service**, **Template**, and copy your **Public Key**
3. In `src/components/sections/Contact.tsx`, replace:

```ts
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

### 4. Set up Backend Email (Alternative)

Edit `src/app/api/contact/route.ts` and add Nodemailer / Resend / SendGrid:

```bash
npm install nodemailer @types/nodemailer
# or
npm install resend
```

### 5. Add your resume

Place your `resume.pdf` in the `/public` folder. The "Download CV" button links to `/resume.pdf`.

### 6. Update social links

In `Footer.tsx` and `Contact.tsx`, replace `https://github.com` / `https://linkedin.com` with your real URLs.

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--font-display` | Syne | Headings, logo |
| `--font-body` | DM Sans | Body text |
| `--font-mono` | JetBrains Mono | Labels, code, tags |
| `accent-cyan` | `#00d4ff` | Primary accent |
| `accent-violet` | `#7c3aed` | Secondary accent |
| `accent-emerald` | `#10b981` | Success / available |
| `bg-primary` | `#050508` | Page background |
| `bg-card` | `#0d0d18` | Card background |

---

## 📦 Tech Stack

| Package | Version | Purpose |
|---|---|---|
| next | 14.2 | Framework |
| react | 18 | UI library |
| tailwindcss | 3.4 | Styling |
| framer-motion | 11 | Animations |
| emailjs-com | 3.2 | Contact form |
| lucide-react | 0.379 | Icons |
| typescript | 5 | Type safety |

---

## 📄 License

MIT — free to use for your own portfolio.
