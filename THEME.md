# Design System: Ocean Portfolio

## 1. Vision & Vibe
- **Theme Name**: Ocean Depth & Clarity
- **Core Aesthetic**: Professional, fluid, and deep. Utilizing the calming yet powerful nature of the ocean with dark navy foundations and vibrant cyan/teal accents.
- **Vibe**: Trustworthy, high-tech, and crisp.

## 2. Color Palette (Hex)

### Core Colors
- **Background (Deep Sea)**: `#020617` (Slate 950)
- **Surface (Abyssal)**: `#0f172a` (Slate 900)
- **Primary (Wave)**: `#0ea5e9` (Sky 500)
- **Secondary (Reef Teal)**: `#14b8a6` (Teal 500)
- **Accent (Bioluminescence)**: `#2dd4bf` (Teal 400)

### Neutral Tokens
- **Text Primary**: `#f8fafc` (Slate 50)
- **Text Secondary**: `#94a3b8` (Slate 400)
- **Border/Divider**: `#1e293b` (Slate 800)
- **Glass Background**: `rgba(15, 23, 42, 0.8)`

## 3. Typography

- **Sans-Serif (Body & Headings)**: `Inter, sans-serif`
  - Clean, legible, professional.
  - Headings: Semi-bold to Bold (700).
  - Body: Regular (400) to Medium (500).
- **Monospace (Labels & Tech Tags)**: `DM Mono, monospace`
  - Used for code snippets, tech stack labels, and small metadata.

## 4. Spacing & Layout
- **Base Unit**: `4px`
- **Container**: Max-width `1280px` (7xl) with responsive padding.
- **Section Spacing**: `py-16` (mobile) to `py-32` (desktop).
- **Grid**: 12-column system for complex layouts; 1/2/3 column responsive grids for cards.

## 5. Components

### Elevated Rows / Cards
- **Background**: `bg-slate-900/50`
- **Border**: `1px solid rgba(30, 41, 59, 1)`
- **Backdrop Blur**: `blur-md`
- **Hover State**: Border color shifts to `sky-500/50` with a subtle lift.

### Status Badges
- **Style**: Pill-shaped, Monospace font.
- **Color**: `bg-teal-500/10` text-`teal-400` border-`teal-500/20`.

### Buttons
- **Primary**: Solid `sky-600`, white text, rounded-lg, transition to `sky-500` on hover.
- **Secondary**: Ghost variant with `slate-800` border and `sky-400` text.

## 6. Effects
- **Gradients**: `bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950`
- **Shadows**: Subtle deep shadows `shadow-2xl` for depth on project cards.