export const calculateCost = (state) => {
  const result = Object.values(state).reduce((arr, item) => {
    item.forEach((elem) => {
      arr += elem.checked ? Number(elem.cost) : 0;
    });

    return arr;
  }, 0);

  return result;
};
