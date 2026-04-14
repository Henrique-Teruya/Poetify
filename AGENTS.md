# AGENTS.md - Developer Guidelines for Poetify

This file provides guidelines for agentic coding agents operating in this repository.

## 1. Project Overview

Poetify is a web application that transforms everyday text into expressive poetry. It consists of:
- **Backend**: Express.js server (`backend/server.js`)
- **Frontend**: Vanilla HTML/CSS/JS (`frontend/`)

## 2. Build & Runtime Commands

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
node backend/server.js
```
Server runs on port 8080 by default (configurable via `PORT` env var).

### Environment Variables
Create `backend/.env` with:
```
PORT=8080
GEMINI_API_KEY=your_api_key_here
```

### Testing
No test framework is currently configured. The npm test script is a placeholder:
```bash
npm test  # Currently echoes "Error: no test specified"
```

### Linting
No linting tool is configured. Code should follow the style guidelines below.

## 3. Code Style Guidelines

### General Principles
- Keep code simple and readable
- Use vanilla JavaScript (no frameworks) for frontend
- Use Express.js patterns for backend
- Avoid unnecessary dependencies

### JavaScript (Frontend & Backend)

**Imports**
- Use ES6 `import` for modules where supported
- Use CommonJS `require` for Node.js built-ins
- Group imports: external → internal → types (if applicable)

**Formatting**
- 2 spaces for indentation
- No trailing whitespace
- Use semicolons consistently
- Maximum line length: 100 characters

**Naming Conventions**
- Variables/functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Classes: `PascalCase`
- Files: `kebab-case.js`
- DOM elements: prefix with `$` or descriptive names (e.g., `$input`, `poetryOutput`)

**Types**
- Use JSDoc comments for function parameters and returns
- Prefer `const` over `let`; avoid `var`
- Use strict equality (`===` and `!==`)

**Error Handling**
- Use `try/catch` for async operations
- Return meaningful error messages
- Log errors appropriately (not sensitive data)

### HTML

**Structure**
- Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<footer>`)
- Accessible attributes (`aria-label`, `alt` text)
- Logical tab order

**Attributes**
- Use double quotes for attribute values
- Order: `id`, `class`, `src/alt`, `aria-*`, other attributes

### CSS

**Organization**
- Use CSS custom properties for colors (see Design System)
- Group related properties together
- Use mobile-first responsive approach

**Naming**
- Classes: `kebab-case`
- Prefix with component name (e.g., `poetry-card__title`)

**Values**
- Use `rem` for font sizes
- Use `em` for relative spacing
- Use `px` for borders and small values
- Use CSS custom properties for repeated values

## 4. Design System

This project uses a design system inspired by Claude (Anthropic). See `DESIGN.md` for complete guidelines.

### Quick Color Reference
| Name | Hex | Usage |
|------|-----|-------|
| Parchment | `#f5f4ed` | Page background |
| Ivory | `#faf9f5` | Card surfaces |
| Anthropic Near Black | `#141413` | Primary text |
| Terracotta Brand | `#c96442` | Primary CTA |
| Olive Gray | `#5e5d59` | Secondary text |
| Stone Gray | `#87867f` | Tertiary text |
| Warm Sand | `#e8e6dc` | Button backgrounds |
| Border Cream | `#f0eee6` | Borders (light) |

### Typography
- Headlines: Serif font (Georgia fallback)
- Body/UI: Sans font (system-ui/Inter fallback)
- Code: Monospace font

### Key Design Principles
- Warm, parchment-toned aesthetic (no cool blue-grays)
- Serif for headlines, sans for UI text
- Generous whitespace and relaxed line-heights (1.60 for body)
- Ring shadows (`0px 0px 0px 1px`) for interactive element depth
- Border-radius: 8px for cards, 12px for buttons/inputs

## 5. File Structure

```
/Poetify
├── AGENTS.md           # This file
├── DESIGN.md          # Design system guidelines
├── package.json       # Node dependencies
├── README.md          # Project readme
├── backend/
│   ├── .env           # Environment variables (not committed)
│   └── server.js      # Express server
└── frontend/
    ├── index.html     # Main HTML page
    ├── script.js     # Frontend JavaScript
    └── style.css    # Stylesheets
```

## 6. Git Conventions

### Commits
- Use clear, concise commit messages
- Start with verb: "Add", "Fix", "Update", "Remove"
- Example: `Add poetry style selector dropdown`

### Branching
- Feature: `feature/description`
- Bugfix: `fix/description`
- Use descriptive branch names

## 7. Security Considerations

- Never commit secrets or API keys to version control
- Use `.env` files for sensitive configuration
- Validate all user input
- Sanitize output before rendering

## 8. Accessibility

- Use semantic HTML
- Include proper ARIA labels for interactive elements
- Ensure sufficient color contrast
- Support keyboard navigation
- Add alt text for images