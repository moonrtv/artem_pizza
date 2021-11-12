export const parameterCostForPizza = {
  1: '200',
  2: '250',
  3: '0',
  4: '0',
  5: '0',
  6: '0',
  7: '0',
  8: '29',
  9: '29',
  10: '29',
  11: '29',
  12: '29',
  13: '29',
  14: '29',
  15: '29',
  16: '29',
};

export const PARAMETERS_FOR_PIZZA = {
  SIZE: 'size',
  DOUGH: 'dough',
  SAUCE: 'sauce',
  CHEESE: 'cheese',
  VEGETABLES: 'vegetables',
  MEAT: 'meat',
};

export const domElementsPizza = {
  [PARAMETERS_FOR_PIZZA.SIZE]: {
    legend: 'Размер',
    type: 'radio',
  },
  [PARAMETERS_FOR_PIZZA.DOUGH]: {
    legend: 'Тесто',
    type: 'radio',
  },
  [PARAMETERS_FOR_PIZZA.SAUCE]: {
    legend: 'Выберите соус',
    type: 'radio',
  },
  [PARAMETERS_FOR_PIZZA.CHEESE]: {
    legend: 'Добавьте сыр',
    type: 'checkbox',
  },
  [PARAMETERS_FOR_PIZZA.VEGETABLES]: {
    legend: 'Добавьте овощи',
    type: 'checkbox',
  },
  [PARAMETERS_FOR_PIZZA.MEAT]: {
    legend: 'Добавьте мясо',
    type: 'checkbox',
  },
};

export const initialState = {
  [PARAMETERS_FOR_PIZZA.SIZE]: [
    {id: '1', name: 'size', value: '30 см', cost: '200', checked: true},
    {id: '2', name: 'size', value: '35 см', cost: '250', checked: false},
  ],
  [PARAMETERS_FOR_PIZZA.DOUGH]: [
    {id: '3', name: 'dough', value: 'Тонкое', cost: '0', checked: false},
    {id: '4', name: 'dough', value: 'Пышное', cost: '0', checked: true},
  ],
  [PARAMETERS_FOR_PIZZA.SAUCE]: [
    {id: '5', name: 'sauce', value: 'Томатный', cost: '0', checked: false},
    {id: '6', name: 'sauce', value: 'Белый', cost: '0', checked: true},
    {id: '7', name: 'sauce', value: 'Острый', cost: '0', checked: false},
  ],
  [PARAMETERS_FOR_PIZZA.CHEESE]: [
    {id: '8', name: 'cheese', value: 'Моцарелла', cost: '29', checked: false},
    {id: '9', name: 'cheese', value: 'Чеддер', cost: '29', checked: false},
    {id: '10', name: 'cheese', value: 'Дор Блю', cost: '29', checked: false},
  ],
  [PARAMETERS_FOR_PIZZA.VEGETABLES]: [
    {id: '11', name: 'vegetables', value: 'Помидор', cost: '29', checked: false},
    {id: '12', name: 'vegetables', value: 'Грибы', cost: '29', checked: false},
    {id: '13', name: 'vegetables', value: 'Перец', cost: '29', checked: false},
  ],
  [PARAMETERS_FOR_PIZZA.MEAT]: [
    {id: '14', name: 'meat', value: 'Бекон', cost: '29', checked: false},
    {id: '15', name: 'meat', value: 'Пепперони', cost: '29', checked: false},
    {id: '16', name: 'meat', value: 'Ветчина', cost: '29', checked: false},
  ],
};
