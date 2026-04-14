# Design System Inspired by Obsidian Assembly

## 1. Visual Theme & Atmosphere

Obsidian Assembly’s interface feels like a **minimalist, underground digital institution** — restrained, deliberate, and quietly powerful. The design leans heavily into deep dark tones (`#151415`) contrasted by soft, almost paper-like highlights (`#F1EADE`), creating a cinematic, high-contrast environment.

Unlike warm editorial systems like Claude, Obsidian’s aesthetic is **controlled, modern, and slightly mysterious** — closer to a private lab or experimental studio than a consumer product. The palette avoids bright saturation, instead favoring **muted, intellectual tones** like dusty lavender (`#DED4E6`) and earthy brown (`#7B5136`).

Typography reinforces this neutrality: system fonts dominate, ensuring performance and familiarity, while spacing and contrast carry the personality.

**Key Characteristics:**

- Deep near-black background (`#151415`) as the foundation
- Soft light contrast (`#F1EADE`) instead of pure white
- Muted accent tones (lavender and brown)
- Flat surfaces with minimal shadows
- Sharp or zero-radius elements (brutalist influence)
- Clean, system-driven typography
- High contrast, low noise UI

---

## 2. Color Palette & Roles

### Primary

- **Obsidian Dark** (`#151415`): Main background and primary surface
- **Soft Light** (`#F1EADE`): Primary contrast color for buttons and highlights

### Secondary & Accent

- **Earth Brown** (`#7B5136`): Secondary accent, grounding tone
- **Muted Lavender** (`#DED4E6`): Interactive accents, links, secondary buttons

### Surface & Background

- **Base Background** (`#151415`): Full-page background
- **Transparent Layers**: Inputs and containers rely on transparency instead of layered surfaces

### Text

- **Primary Text** (`#151415`): Used on light surfaces
- **Inverse Text** (`#F1EADE`): Used on dark backgrounds
- **Links** (`#DED4E6`): Accent color for interactivity

---

## 3. Typography Rules

### Font Family

- Primary: `Roboto`
- Secondary: `Open Sans`
- Fallback: `Helvetica Neue`, system-ui stack

### Hierarchy

| Role    | Size    | Weight | Notes                     |
| ------- | ------- | ------ | ------------------------- |
| H1 / H2 | 24px    | 500    | Minimal, compact headings |
| Body    | 15.36px | 400    | Standard readable UI text |

### Principles

- System-first typography for speed and consistency
- Minimal hierarchy — reduced contrast between headings and body
- Clean and neutral tone (no expressive typography)
- Focus on layout and spacing instead of font personality

---

## 4. Component Stylings

### Buttons

**Primary Button**

- Background: `#F1EADE`
- Text: `#151415`
- Radius: `0px` (sharp edges)
- Shadow: none
- High contrast, dominant CTA

**Secondary Button**

- Background: `#DED4E6`
- Text: `#101214`
- Radius: `19.2px` (pill shape)
- Soft contrast, more friendly interaction

---

### Inputs

- Background: transparent
- Text: `#151415`
- Border: none
- Radius: `0px`
- Shadow: none

Minimalist and almost invisible — relies on layout context instead of borders.

---

### Cards & Containers

- No explicit card system
- Flat layout approach
- Separation through spacing, not borders or shadows

---

## 5. Layout Principles

### Spacing System

- Base unit: 4px
- Tight spacing scale (compact UI)

### Philosophy

- Minimal padding
- Dense but readable layout
- Functional spacing over expressive whitespace

---

### Grid & Structure

- Simple linear layouts
- No heavy containerization
- Emphasis on flow instead of boxed sections

---

## 6. Depth & Elevation

| Level       | Treatment                  |
| ----------- | -------------------------- |
| Flat        | Default state (no shadows) |
| Interactive | Slight color contrast only |

### Philosophy

- No shadows
- No elevation system
- Depth is implied only through contrast and color shifts

---

## 7. Do's and Don'ts

### Do

- Use dark background (`#151415`) consistently
- Use soft light (`#F1EADE`) for primary actions
- Keep components flat and minimal
- Use sharp edges for primary UI
- Maintain low visual noise

### Don't

- Don’t use heavy shadows or elevation
- Don’t introduce bright or saturated colors
- Don’t overuse border radius (except secondary buttons)
- Don’t create complex card systems
- Don’t add unnecessary decoration

---

## 8. Responsive Behavior

### Breakpoints

- Mobile-first design
- Simple stacking layout

### Behavior

- Components stack vertically
- Buttons remain large and tappable
- Typography scales minimally

---

## 9. Design Personality

- Tone: Modern
- Energy: Medium
- Feel: Experimental, controlled, slightly underground

---

## 10. Agent Prompt Guide

### Quick Color Reference

- Background: `#151415`
- Primary CTA: `#F1EADE`
- Secondary: `#DED4E6`
- Accent: `#7B5136`

---

### Example Prompts

- "Create a dark hero section using background #151415 with a primary button in #F1EADE and sharp edges."
- "Design a minimalist input field with transparent background and no borders."
- "Build a flat UI layout with no shadows and strong contrast between text and background."
- "Create a secondary button with rounded pill shape using #DED4E6."

---

### Iteration Guide

1. Keep everything minimal
2. Avoid shadows completely
3. Use contrast instead of decoration
4. Favor sharp edges over rounded ones
5. Maintain a dark-first aesthetic
