import { setChatEngine } from "./core/engine.js";
import { setEmbeddingModel, setLLMModel } from "./core/settings.js";

export const setEngine = () => {
  setLLMModel();
  setEmbeddingModel();
  setChatEngine();
};
