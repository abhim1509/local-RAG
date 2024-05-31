import "dotenv/config";
import {
  VectorStoreIndex,
  storageContextFromDefaults,
  SimpleDirectoryReader,
} from "llamaindex";

export const loadData = async () => {
  return await new SimpleDirectoryReader().loadData({
    directoryPath: process.env.KNOWLEDGE_SOURCE,
  });
};

export const generateIndex = async () => {
  const storageContext = await storageContextFromDefaults({
    persistDir: process.env.STORAGE_CACHE_DIR,
  });

  const documents = await loadData();
  //* High level API: split documents, get keywords, and build index.
  return await VectorStoreIndex.fromDocuments(documents, {
    storageContext,
  });
};
