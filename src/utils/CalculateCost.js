export const calculateCost = (state) => {
  return Object.values(state).reduce((arr, item) => {
    let count = 0;

    if (Array.isArray(item) && item.length > 0) {
      item.forEach((i) => {
        count = count + Number(i.cost);
      });
    }

    return arr + Number(item.cost || 0) + count;
  }, 0);
};
