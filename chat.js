import "dotenv/config";
import {
  HuggingFaceEmbedding,
  Ollama,
  Settings,
  HuggingFaceEmbeddingModelType,
  ContextChatEngine,
} from "llamaindex";
import { loadIndex } from "./vector-index.js";

let chatEngine;
Settings.llm = new Ollama({
  model: process.env.LLM_MODEL,
});

Settings.embedModel = new HuggingFaceEmbedding({
  modelType:
    process.env.EMBEDDING_MODEL ||
    HuggingFaceEmbeddingModelType.XENOVA_ALL_MPNET_BASE_V2,
});

const initialise = async () => {
  // console.log(Settings.llm, Settings.embedModel);
  const index = await loadIndex();
  // console.log(index);
  let customQaPrompt = function ({ context = "", query = "" }) {
    return `
              ---------------------
              ${context}
              ---------------------
              ${process.env.PROMPT}
              Query: ${query}
              Answer:`;
  };
  // console.log(customQaPrompt());
  chatEngine = new ContextChatEngine({
    chatModel: Settings.llm,
    retriever: index.asRetriever(),
    contextSystemPrompt: customQaPrompt,
  });

  return chatEngine;
};

export const getChatEngine = () => {
  return !chatEngine ? initialise() : chatEngine;
};
