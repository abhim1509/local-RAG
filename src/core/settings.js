import "dotenv/config";
import {
  HuggingFaceEmbedding,
  Ollama,
  HuggingFaceEmbeddingModelType,
} from "llamaindex";

let llmModel;
let embedModel;
export const setLLMModel = () => {
  llmModel = new Ollama({
    model: process.env.LLM_MODEL,
  });
};

export const getLLMModel = () => {
  return llmModel;
};

export const setEmbeddingModel = () => {
  embedModel = new HuggingFaceEmbedding({
    modelType:
      process.env.EMBEDDING_MODEL ||
      HuggingFaceEmbeddingModelType.XENOVA_ALL_MPNET_BASE_V2,
  });
};

export const getEmbeddingModel = () => {
  return embedModel;
};
