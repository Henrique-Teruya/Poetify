# ✨ Poetify - Project Context

Poetify is an AI-powered web application designed to transform everyday text into expressive poetry using various styles (Romantic, Dark, Motivational, Philosophical).

## 🚀 Project Overview
- **Type:** Full-stack Web Application (AI-integrated)
- **Frontend:** Vanilla HTML, CSS, and JavaScript.
- **Backend:** Node.js with Express.
- **AI Integration:** Google Gemini API (via `@google/generative-ai`).
- **Current State:** The project is currently scaffolded with a defined structure and dependencies, but the core implementation files (`backend/server.js`, `frontend/index.html`, etc.) are empty and ready for development.

## 📂 Project Structure
- `backend/server.js`: Main entry point for the Express server (currently empty).
- `frontend/`:
  - `index.html`: Main UI structure (currently empty).
  - `style.css`: Application styling (currently empty).
  - `script.js`: Frontend logic and API interaction (currently empty).
- `DESIGN.md`: Comprehensive design system documentation inspired by Claude (Anthropic), focusing on a "literary salon" aesthetic with warm parchment tones and serif typography.
- `README.md`: General project overview and setup instructions.

## 🛠️ Building and Running

### Prerequisites
- Node.js and npm installed.
- A valid Google Gemini API Key.

### Commands
- **Install Dependencies:** `npm install` (run in the root directory).
- **Run Backend:** `node backend/server.js` (after implementation).
- **Run Frontend:** Open `frontend/index.html` in a browser or use a live server.

## 🎨 Development Conventions

### Design Philosophy
Adhere to the visual theme described in `DESIGN.md`:
- **Palette:** Warm neutrals, Parchment background (`#f5f4ed`), Anthropic Near Black (`#141413`), and Terracotta accent (`#c96442`).
- **Typography:** Serif for headlines (Georgia fallback), Sans-serif for UI (System fallback).
- **Aesthetic:** Editorial, literary, and high-quality paper feel.

### Technical Patterns
- Use **CommonJS** for backend modules (as specified in `package.json`).
- Maintain a clean separation between the Express API and the Vanilla JS frontend.
- Implement typewriter animations for AI-generated output as suggested in the README.

## 🤖 AI Implementation Notes
The project is configured to use the `@google/generative-ai` library. Ensure the `OPENAI_API_KEY` mentioned in the README is treated as a placeholder for the Google Gemini API key if proceeding with the current `package.json` dependencies.
