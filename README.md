# Angavu Cleaners — Official Website

**Live site:** [angavu-cleaners.vercel.app](https://angavu-cleaners.vercel.app)

Professional cleaning services website for **Angavu Cleaners**, Nairobi, Kenya.

---

## What the site includes

| Section | Description |
|---|---|
| **Hero** | Animated illustration, tagline, CTAs, stats, contact info |
| **Services** | 8 service cards with hover effects and illustration banner |
| **Why Choose Us** | Team illustration, stats grid, 5 reason cards |
| **Pricing** | Tabbed standard/deep cleaning rates (KSh), add-on services |
| **Refills** | Eco-friendly product refill initiative |
| **FAQ** | Accordion Q&A with sticky illustration panel |
| **Booking Form** | Formspree-powered form with dark mode, validation, success state |
| **Footer** | Contact card, illustration, links, dark footer |

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite 8** (build tool)
- **Chakra UI v3** (component library)
- **@emotion/react** (keyframe animations)
- **next-themes** (dark / light mode)
- **@formspree/react** (contact form backend)
- **react-icons** (Lucide icon set)
- Deployed on **Vercel**

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Environment variables

The only variable required is the Formspree form ID. It is already set in `.env`:

```
VITE_FORMSPREE_FORM_ID=xkoaapyq
```

For Vercel, add the same key/value in:
**Project Settings → Environment Variables**

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repo
4. Vercel auto-detects Vite — no framework changes needed
5. Add `VITE_FORMSPREE_FORM_ID=xkoaapyq` under Environment Variables
6. Click **Deploy**

The `vercel.json` at the project root handles:
- SPA rewrites (all paths serve `index.html`)
- Long-term caching headers for hashed assets
- Correct build and output directory config

---

## Project structure

```
angavu-cleaners/
├── public/
│   ├── Angavu_LOGO.png        # Official logo
│   ├── cleaning-hero.webp     # Hero section image
│   ├── cleaning-about.webp    # Booking section image
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── illustrations/     # Inline SVG illustration components
│   │   ├── logo/              # SVG logo variants
│   │   ├── ui/                # Chakra UI provider + color mode
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Pricing.tsx
│   │   ├── Refills.tsx
│   │   ├── FAQ.tsx
│   │   ├── BookingForm.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   └── main.tsx
├── .env                       # Public env vars (Formspree form ID)
├── vercel.json                # Vercel deployment config
├── vite.config.ts
└── index.html                 # SEO meta tags + structured data
```

---

## Contact

**Angavu Cleaners**
- Phone / WhatsApp: **0768 549 839**
- Email: **angavucleanerz@gmail.com**
- Location: **Nairobi, Kenya**
- Tagline: *Clean Spaces, Better Living*
