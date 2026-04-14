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
  const { text, style } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    if (!genAI) {
      // Mock mode if no API key
      const mockPoem = `In shadows deep where echoes play,
Your words of '${text}' find their way.
A ${style} thought begins to bloom,
To light the corners of this room.`;
      
      return res.json({ result: mockPoem });
    }

    // Try multiple models in case one is not available
    const modelsToTry = [
      'gemini-robotics-er-1.5-preview',
      'gemini-2.0-flash', 
      'gemini-2.0-flash-latest', 
      'gemini-1.5-flash', 
      'gemini-1.5-flash-latest', 
      'gemini-pro'
    ];
    let generatedText = null;
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        console.log(`Tentando modelo: ${modelName}...`);
        
        let instructions = "You must always respond in the same language as the user. Match the core sentiment of the user's input. CRITICAL CONSTRAINT: You must NEVER generate a poem longer than 12 lines or exceeding 400 characters in total length. The physical UI container is strictly bounded and longer text will break the layout. Keep the poem extremely concise and impactful. Follow this style: ";
        
        if (style === 'romantic') {
          instructions += "You are a classic romantic poet like Keats or Byron. Transform the user's text into a lush, emotional, and expressive poem.";
        } else if (style === 'dark') {
          instructions += "You are a gothic poet like Edgar Allan Poe. Transform the user's text into a melancholic, mysterious, and dark poem.";
        } else if (style === 'philosophical') {
          instructions += "You are a philosophical poet like Rilke or Tagore. Transform the user's text into a thoughtful, existential, and deep poem.";
        } else if (style === 'motivational') {
          instructions += "You are an inspiring, energetic poet. Transform the user's text into an uplifting, hopeful, and motivational poem.";
        } else {
          instructions += "You are a classic poet. Transform the user's text into a beautiful poem.";
        }

        // Using the official systemInstruction parameter provides much stronger adherence
        const model = genAI.getGenerativeModel({ 
          model: modelName,
          systemInstruction: instructions 
        });
        
        const prompt = `Text to transform: "${text}"\n\nRemember: respond ONLY with the poem text. Output in the user's language.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        generatedText = response.text();
        
        if (generatedText) {
          console.log(`Sucesso com o modelo: ${modelName}`);
          break;
        }
      } catch (e) {
        console.error(`Erro com o modelo ${modelName}:`, e.message);
        lastError = e;
      }
    }

    if (generatedText) {
      res.json({ result: generatedText.trim() });
    } else {
      throw lastError || new Error('All models failed');
    }
  } catch (error) {
    console.error('--- DETALHES DO ERRO GEMINI ---');
    console.error('Mensagem:', error.message);
    
    // Provide a fallback poem in case of API failure
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
  console.log(`Servidor rodando na porta ${PORT}`);
});