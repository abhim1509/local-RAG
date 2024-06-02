import { VectorStoreIndex, storageContextFromDefaults } from "llamaindex";

export const loadIndex = async () => {
  console.log(process.env.STORAGE_CACHE_DIR);

  const storageContext = await storageContextFromDefaults({
    persistDir: process.env.STORAGE_CACHE_DIR,
  });

  const index = await VectorStoreIndex.init({
    storageContext: storageContext,
  });
  // console.log(index);
  return index;
};
