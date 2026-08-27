<div align="center">

<img src="./public/images/logo.svg" alt="Portfolio Logo" width="90" />

# 🌟 Raton Dutta — Portfolio

### Student Developer · Full‑Stack Engineer · AI Tinkerer

*A dark‑luxury, glassmorphic developer portfolio built with Next.js 15 & React 19*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-portfolio--e7t2.vercel.app-9333ea?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-e7t2.vercel.app/)
[![License: MIT](https://img.shields.io/badge/📄_License-MIT-00D26A?style=for-the-badge)](https://opensource.org/license/mit)
[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Stars](https://img.shields.io/github/stars/Ratondutta12345/Portfolio?style=for-the-badge&color=a855f7)](https://github.com/Ratondutta12345/Portfolio/stargazers)

**If this project inspired you or helped you build your own, drop it a ⭐ — it genuinely helps.**

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🎨 Design System](#-design-system)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Customization](#️-customization)
- [📂 Project Structure](#-project-structure)
- [📸 Preview](#-preview)
- [🤝 Contributing](#-contributing)
- [🔗 Connect](#-connect)

---

## 🎯 Overview

A modern, responsive portfolio website built with **Next.js 15** and **React 19**, featuring an ultra-dark aesthetic, glassmorphism, and smooth motion-driven interactions. Designed as both a personal showcase and a reusable template for developers who want a premium, animated portfolio without starting from scratch.

| | |
|---|---|
| 🌐 **Live Demo** | [portfolio-e7t2.vercel.app](https://portfolio-e7t2.vercel.app/) |
| 📦 **Repository** | [github.com/Ratondutta12345/Portfolio](https://github.com/Ratondutta12345/Portfolio) |

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Dark Luxury Theme** | Ultra-dark palette with purple accents and glass effects |
| ⚡ **Performance Optimized** | Next.js 15 + Turbopack for lightning-fast builds |
| 📱 **Fully Responsive** | Seamless experience across every device size |
| 🎭 **Smooth Animations** | Motion-powered transitions and micro-interactions |
| 📧 **Contact System** | Integrated email delivery via React Email + Nodemailer |
| 🔍 **SEO Optimized** | Full meta tags, sitemap, robots.txt, OpenGraph/Twitter cards |
| 🛡️ **Security Headers** | Hardened response headers out of the box |
| 📄 **PDF Resume Viewer** | Built-in resume viewer with error boundaries |
| 🎯 **Interactive UI** | Glassmorphism, hover states, and neon accent glows |

---

## 🛠️ Tech Stack

**Frontend Framework**

| Technology | Version | Purpose |
|---|---|---|
| Next.js | `15.4.4` | React framework with SSR |
| React | `19.1.0` | UI library |
| TypeScript | `^5.0` | Type-safe JavaScript |

**Styling & UI**

| Technology | Version | Purpose |
|---|---|---|
| Tailwind CSS | `^3.4.17` | Utility-first styling |
| Motion | `^12.23.9` | Animation library |
| Radix UI | `^1.2.3` | Headless, accessible components |
| Class Variance Authority | `^0.7.1` | Component variant management |

**Email & Communication**

| Technology | Version | Purpose |
|---|---|---|
| React Email | `^0.3.2` | Email templates |
| Nodemailer | `^7.0.5` | Sending contact-form emails |
| Sonner | `^2.0.6` | Toast notifications |

**Tooling**

| Technology | Version | Purpose |
|---|---|---|
| ESLint | `^9.0` | Code linting |
| Autoprefixer | `^10.4.21` | CSS vendor prefixing |
| Critters | `^0.0.23` | Critical CSS inlining |

---

## 🎨 Design System

**Color Palette**

| Color | HSL | Hex | Usage |
|---|---|---|---|
| Background | `240 15% 2%` | `#05050a` | Main background |
| Foreground | `220 8% 94%` | `#eeeff2` | Primary text |
| Primary | `220 15% 88%` | `#dde0e6` | Interactive elements |
| Secondary | `275 60% 45%` | `#8b5fb8` | Accent elements |
| Accent | `275 70% 55%` | `#a855f7` | Highlights |
| Muted | `240 18% 6%` | `#0d0e14` | Subtle backgrounds |
| Card | `245 20% 3%` | `#070810` | Component surfaces |

**Typography**

| Font | Usage | Weight | Character |
|---|---|---|---|
| Inter | Body text | 300–700 | Clean, readable |
| Cutive Mono | Code/technical text | 400 | Monospaced |
| Nasalization | Headings | 400 | Futuristic, bold |
| Quentine | Name / signature text | 400 | Elegant |

**Visual Effects**

| Effect | Implementation | Description |
|---|---|---|
| Glass Morphism | `backdrop-filter: blur(16px)` | Frosted glass surfaces |
| Luxury Shadows | Multi-layer `box-shadow` | Deep, rich elevation |
| Neon Glow | Purple-tinted `box-shadow` | Accent glow on hover/focus |
| Shimmer | Animated `linear-gradient` | Subtle shine on key elements |

---

## 🚀 Quick Start

**Prerequisites:** Node.js 18+ and npm / yarn / pnpm

```bash
# 1. Clone the repository
git clone https://github.com/Ratondutta12345/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

**Build Commands**

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |

---

## ⚙️ Customization

**Personal information** — `src/constant/self.ts`

```typescript
export const selfData = {
  name: "Your Name",
  jobTitle: "Your Title",
  email: "your.email@domain.com",
  // ...update all personal details
};
```

**Content files**

| File | Purpose |
|---|---|
| `src/constant/projects.ts` | Project portfolio entries |
| `src/constant/experience.ts` | Work experience timeline |
| `src/constant/skillsData.tsx` | Technical skills list |

**Assets**

| Type | Location | Notes |
|---|---|---|
| Logo | `public/images/logo.svg` | Main site logo |
| Profile picture | `src/assets/images/me.png` | Used in About section |
| Resume | `public/docs/` | PDF resume file |
| Fonts | `src/assets/fonts/` | Custom font files |

**Styling** — colors live in `src/app/globals.css`, fonts in `src/app/fonts.ts`, and UI primitives in `src/components/ui/`.

---

## 📂 Project Structure

```
Portfolio/
├── public/              # Static assets (images, docs, favicons)
├── src/
│   ├── app/             # Next.js app router, layouts, global styles
│   ├── assets/          # Fonts and images bundled with the app
│   ├── components/      # UI components (incl. Radix-based primitives)
│   └── constant/        # Editable content: profile, projects, skills
├── eslint.config.mjs
├── next.config.ts
├── tailwind.config.js
└── package.json
```

---

## 📸 Preview

> 🌟 Dark luxury theme with purple accents
> 🚀 Turbopack-powered, near-instant builds
> 📱 Pixel-perfect on every screen size

*(Add real screenshots or a screen recording here — a visual preview is the single biggest thing that makes visitors stop and look.)*

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🔗 Connect

| Platform | Link |
|---|---|
| 🐙 GitHub | [@Ratondutta12345](https://github.com/Ratondutta12345) |
| 💼 LinkedIn | [Raton Dutta](https://linkedin.com/in/raton-dutta) |
| 📸 Instagram | [@ratondutta12345](https://instagram.com/ratondutta12345) |
| 🐦 Twitter / X | [@ratondutta12345](https://twitter.com/ratondutta12345) |
| 📧 Email | [ratondutta444@gmail.com](mailto:ratondutta444@gmail.com) |

<div align="center">

**Built with ❤️ by [Raton Dutta](https://portfolio-e7t2.vercel.app/)**
*Student Developer · Chief Problem Solver · Solution Sorcerer*

⭐ **Star this repo if you found it useful!**

</div>
