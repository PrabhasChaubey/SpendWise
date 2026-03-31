import { GoogleGenerativeAI } from "@google/generative-ai"
import { Env } from "./env.config.js";

// Initializing the library with API key
export const genAI = new GoogleGenerativeAI(Env.GEMINI_API_KEY);
// Define our model
export const genAIModel = "gemini-2.0-flash";