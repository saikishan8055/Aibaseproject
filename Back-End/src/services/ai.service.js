// import express from "express";
// import aiRoutes from "./routes/ai.routes.js";

// const app = express();

// app.use("/api", aiRoutes);

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "models/gemini-3-flash-preview",
});

export async function generateAIResponse(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}
