import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent("フランスの首都はどこですか？");
  const response = result.response;
  console.log("Geminiの回答:", response.text());
}

main().catch((err) => {
  console.error("エラー:", err);
});
