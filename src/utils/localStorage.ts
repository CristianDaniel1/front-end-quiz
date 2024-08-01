export const setItemStorage = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getItemStorage = (key: string, initial: unknown) => {
  const savedResults = localStorage.getItem(key);

  const item = savedResults ? JSON.parse(savedResults) : initial;

  return item;
};
