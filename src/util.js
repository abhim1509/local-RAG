export const timerStart = (entity) => {
  console.log("Loading" + entity);
  return new Date();
};

export const timerEnd = (entity, startDate) => {
  console.log("Loaded" + entity);
  console.log((new Date() - startDate) * 0.006);
};
