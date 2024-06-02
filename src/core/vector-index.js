import "dotenv/config";
import {
  VectorStoreIndex,
  storageContextFromDefaults,
  SimpleDirectoryReader,
  Settings,
} from "llamaindex";
import { getEmbeddingModel, setEmbeddingModel } from "./settings.js";

setEmbeddingModel();
Settings.embedModel = getEmbeddingModel();
export const loadData = async () => {
  return await new SimpleDirectoryReader().loadData({
    directoryPath: process.env.KNOWLEDGE_SOURCE,
  });
};

export const generateIndex = async () => {
  console.log(process.env.STORAGE_CACHE_DIR);

  const storageContext = await storageContextFromDefaults({
    persistDir: process.env.STORAGE_CACHE_DIR,
  });

  const documents = await loadData();
  //* High level API: split documents, get keywords, and build index.
  return await VectorStoreIndex.fromDocuments(documents, {
    storageContext,
  });
};

generateIndex();
