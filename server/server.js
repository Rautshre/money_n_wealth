const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Use this for compatibility:
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config(); // Use .env for safety

const app = express();
const PORT = 5001;

const GEMINI_API_KEY = 'AIzaSyBBq0xdKb9y8kPz5YDPLv_YWfcxFtKSeD4';

app.use(cors());
app.use(bodyParser.json());

app.post('/api/gemini', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'No message provided' });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

  const payload = {
    contents: [
      {
        parts: [{ text: message }]
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log("Gemini raw response:", JSON.stringify(data, null, 2));

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get an answer right now.";
    res.json({ reply });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: 'Gemini API error' });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Gemini proxy server running on http://localhost:${PORT}`);
});
