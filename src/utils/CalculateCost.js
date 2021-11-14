import {SIZE, SAUCE, DOUGH, CHEESE, VEGETABLES, MEAT, pizzaOptions} from '../reducer/mokData';

const priceRadio = (temp, value) => {
  for (let i = 0; i <= temp.length; i++) {
    if (temp[i].value === value) {
      return temp[i].price;
    }
  }
};

const priceChecked = (temp, value) => {
  let result = 0;

  if (value.length === 0) {
    return 0;
  }

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (temp[i].value === value[j]) {
        result += Number(temp[i].price);
      }
    }
  }

  return result;
};

export const calculateCost = (state) => {
  const priceSize = +priceRadio(pizzaOptions[SIZE], state[SIZE]);
  const priceDough = +priceRadio(pizzaOptions[DOUGH], state[DOUGH]);
  const priceSauce = +priceRadio(pizzaOptions[SAUCE], state[SAUCE]);

  const priceCheese = priceChecked(pizzaOptions[CHEESE], state[CHEESE]);
  const priceVegetables = priceChecked(pizzaOptions[VEGETABLES], state[VEGETABLES]);
  const priceMeat = priceChecked(pizzaOptions[MEAT], state[MEAT]);

  return priceSize + priceDough + priceSauce + priceCheese + priceVegetables + priceMeat;
};
