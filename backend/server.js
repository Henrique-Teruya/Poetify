const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Initialize Gemini
let genAI = null;
if (process.env.GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
}

app.post('/poetify', async (req, res) => {
  try {
    const { text, style } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    if (!genAI) {
      // Mock mode if no API key
      const mockPoem = `In shadows deep where echoes play,
Your words of '${text}' find their way.
A ${style} thought begins to bloom,
To light the corners of this room.`;
      
      return res.json({ result: mockPoem });
    }

    // Basic Gemini config
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    let systemInstruction = "";
    if (style === 'romantic') {
      systemInstruction = "You are a classic romantic poet like Keats or Byron. Transform the user's text into a lush, emotional, and expressive poem.";
    } else if (style === 'dark') {
      systemInstruction = "You are a gothic poet like Edgar Allan Poe. Transform the user's text into a melancholic, mysterious, and dark poem.";
    } else if (style === 'philosophical') {
      systemInstruction = "You are a philosophical poet like Rilke or Tagore. Transform the user's text into a thoughtful, existential, and deep poem.";
    } else if (style === 'motivational') {
      systemInstruction = "You are an inspiring, energetic poet. Transform the user's text into an uplifting, hopeful, and motivational poem.";
    } else {
      systemInstruction = "You are a classic poet. Transform the user's text into a beautiful poem.";
    }
    
    const prompt = `${systemInstruction}\n\nTransform the following text into a poem. Output ONLY the poem, with no introductions or explanations.\n\nText: "${text}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedText = response.text();

    res.json({ result: generatedText.trim() });
  } catch (error) {
    console.error('Error generating poetry:', error);
    
    // Provide a fallback poem in case of API failure so the UI doesn't look broken
    const fallbackPoem = `Though the network falters and logic bends,
The spirit of poetry never ends.
Your thought of '${text}' remains profound,
Even when the servers are down.`;

    res.json({ result: fallbackPoem });
  }
});

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});