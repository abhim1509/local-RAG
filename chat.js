import "dotenv/config";
import {
  HuggingFaceEmbedding,
  Ollama,
  Settings,
  HuggingFaceEmbeddingModelType,
} from "llamaindex";
import { generateIndex } from "./generate-index.js";

Settings.llm = new Ollama({
  model: process.env.LLM_MODEL,
});

Settings.embedModel = new HuggingFaceEmbedding({
  modelType:
    process.env.EMBEDDING_MODEL ||
    HuggingFaceEmbeddingModelType.XENOVA_ALL_MPNET_BASE_V2,
});

async function main() {
  const index = await generateIndex();
  // Query the index
  const queryEngine = index.asQueryEngine();

  const response = await queryEngine.query({
    query: "Tell me some tips and best practices?",
  });

  // Output response
  console.log(response.toString());
}

main().catch(console.error);
