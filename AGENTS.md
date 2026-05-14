# AGENTS.md

## Stack
- Next.js 15.4 (App Router) + React 19 + TypeScript 5
- Tailwind CSS 3.4 + shadcn/ui patterns (CVA, clsx, tailwind-merge)
- Motion (framer-motion v12) for animations
- Lucide React for icons
- OpenAI DALL-E 3 for AI image generation

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run Next.js lint
- `node scripts/generate-images.js` — generate DALL-E images (requires OPENAI_API_KEY)

## Architecture
- Single-page landing: `app/page.tsx` renders `<HeroSection>` from `components/blocks/hero-section-5.tsx`
- `app/layout.tsx` — root layout with Bebas Neue + Inter fonts
- `components/ui/` — reusable UI primitives (Button, ContactForm, FloatingWhatsApp)
- `components/blocks/` — composite sections (Hero, PortfolioGallery, etc.)
- `lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `lib/image-prompts.ts` — DALL-E prompts for all sections
- `scripts/generate-images.js` — bulk image generation script
- Path alias: `@/*` maps to root (`tsconfig.json`)

## Conventions
- shadcn/ui style: UI components use `cva` for variants, `cn()` for className merging, `asChild` via Radix Slot
- Tailwind config uses CSS variables for theming (dark mode default)
- `tailwind.config.js` content paths: `app/**/*` and `components/**/*`
- Typography: Bebas Neue (headings, ALL CAPS) + Inter (body)
- Aesthetic: cinematic, luxury minimal, black & dark gray, gold accent (#CA8A04)

## Image Generation
- DALL-E 3 integration via `app/api/generate-image/route.ts`
- Bulk generation: `node scripts/generate-images.js` (saves to `lib/generated-images.json`)
- Requires `OPENAI_API_KEY` in `.env.local`
- Images cached in memory to avoid regenerating on each request

## Notes
- No test framework configured
- No CI/CD, no pre-commit hooks
- External assets: videos from `public/videos/`, images from Unsplash (fallback)
- `.opencode/` contains local OpenCode config and ui-ux-pro-max skill
- Design system persisted in `design-system/epicmotion/MASTER.md`
- WhatsApp floating button with configurable number/message
