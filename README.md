# ✨ Poetify

Poetify is a simple AI-powered web app that transforms everyday text into expressive poetry. With a clean Apple-inspired interface and smooth animations, users can choose styles like romantic, dark, or philosophical and instantly generate poetic versions of their words.

---

## 🚀 Features

- 🎭 Multiple poetic styles (Romantic, Dark, Motivational, Philosophical)
- ⚡ Real-time text transformation
- ✨ Typewriter animation for output
- 🎨 Clean UI inspired by Apple design
- 🔌 Minimal backend using Node.js
- 🤖 AI-powered text generation

---

## 🧠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript (Vanilla)

### Backend
- Node.js
- Express

### AI
- OpenAI API

---

## 📂 Project Structure

```bash
poetify/
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── backend/
│ ├── server.js
│ └── .env
```

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/poetify.git

cd poetify
```

---

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file:

```bash
OPENAI_API_KEY=your_api_key_here
```

Run the server:

```bash
node server.js
```

---

### 3. Frontend

Just open:

frontend/index.html

(or use Live Server)

---

## 🔌 API Endpoint

### POST `/poetify`

**Request:**
```bash
{
"text": "your text here",
"style": "romantic"
}
```

**Response:**
```bash
{
"result": "poetic version..."
}
```

---

## 🎨 Future Improvements

- 💾 Save generated poems
- 🔗 Shareable links
- 🖼️ Export as image
- 🔊 Voice narration
- 🌈 More styles and themes

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 💡 Inspiration

Built to explore creative UI design + AI integration with a focus on simplicity and user experience.
