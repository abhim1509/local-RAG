import "dotenv/config";
import { Settings, ContextChatEngine } from "llamaindex";
import { loadIndex } from "./loading.js";
import { getLLMModel, getEmbeddingModel } from "./settings.js";

let chatEngine;
Settings.llm = getLLMModel();
Settings.embedModel = getEmbeddingModel();

export const setChatEngine = async () => {
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
