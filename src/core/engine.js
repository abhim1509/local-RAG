import "dotenv/config";
import { Settings, ContextChatEngine } from "llamaindex";
import { loadIndex } from "./loading.js";
import {
  getLLMModel,
  getEmbeddingModel,
  setEmbeddingModel,
  setLLMModel,
} from "./settings.js";

let chatEngine;

export const setChatEngine = async () => {
  setLLMModel();
  setEmbeddingModel();
  Settings.llm = getLLMModel();
  Settings.embedModel = getEmbeddingModel();

  const index = await loadIndex();
  const customQaPrompt = function ({ context = "", query = "" }) {
    return `
              ---------------------
              ${context}
              ---------------------
              ${process.env.PROMPT}
              Query: ${query}
              Answer:`;
  };

  chatEngine = new ContextChatEngine({
    chatModel: Settings.llm,
    retriever: index.asRetriever(),
    contextSystemPrompt: customQaPrompt,
  });
};

export const getChatEngine = () => {
  return chatEngine;
};
