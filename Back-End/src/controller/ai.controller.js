// import { generateAIResponse } from "../services/ai.service.js";

// export const getResponse = async (req, res) => {
//   try {
//     const prompt = req.query.prompt;

//     if (!prompt) {
//       return res.status(400).send("Prompt is required");
//     }

//     const response = await generateAIResponse(prompt);
//     res.send(response);

//   } catch (error) {
//     console.error(error);
//     res.status(500).send("AI service error");
//   }
// };
import { generateAIResponse } from "../services/ai.service.js";

export const getResponse = async (req, res) => {
  try {
    const { prompt } = req.query;
    if (!prompt) return res.status(400).send("Prompt is required");

    const response = await generateAIResponse(prompt);
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("AI Error");
  }
};

