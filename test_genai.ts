import { GoogleGenAI } from "@google/genai";

async function test() {
  console.log("API Key exists:", !!process.env.GEMINI_API_KEY);
  if (process.env.GEMINI_API_KEY) {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Say hello",
    });
    console.log(response.text);
  }
}
test();
