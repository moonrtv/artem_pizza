export interface IParametersForPizza {
  SIZE: 'size';
  DOUGH: 'dough';
  SAUCE: 'sauce';
  CHEESE: 'cheese';
  VEGETABLES: 'vegetables';
  MEAT: 'meat';
}

export type TDomElementsPizza = {
  [key: string]: {
    legend: string;
    type: string;
  };
};

export interface IParametrsForIngredientPizza {
  id: string;
  name: string;
  label: string;
  cost: string;
  checked: boolean;
}

export type TDataForPizza = {
  [key: string]: IParametrsForIngredientPizza[];
};

export const PARAMETERS_FOR_PIZZA: IParametersForPizza = {
  SIZE: 'size',
  DOUGH: 'dough',
  SAUCE: 'sauce',
  CHEESE: 'cheese',
  VEGETABLES: 'vegetables',
  MEAT: 'meat',
};

export const domElementsPizza: TDomElementsPizza = {
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

export const dataForPizza: TDataForPizza = {
  [PARAMETERS_FOR_PIZZA.SIZE]: [
    {id: 'size30', name: 'size', label: '30', cost: '200', checked: false},
    {id: 'size35', name: 'size', label: '35', cost: '250', checked: true},
  ],
  [PARAMETERS_FOR_PIZZA.DOUGH]: [
    {id: 'thin', name: 'dough', label: 'Тонкое', cost: '0', checked: false},
    {id: 'lush', name: 'dough', label: 'Пышное', cost: '0', checked: true},
  ],
  [PARAMETERS_FOR_PIZZA.SAUCE]: [
    {id: 'tomato', name: 'sauce', label: 'Томатный', cost: '0', checked: false},
    {id: 'white', name: 'sauce', label: 'Белый', cost: '0', checked: false},
    {id: 'spicy', name: 'sauce', label: 'Острый', cost: '0', checked: false},
  ],
  [PARAMETERS_FOR_PIZZA.CHEESE]: [
    {id: 'mozzarella', name: 'cheese', label: 'Моцарелла', cost: '29', checked: false},
    {id: 'сheddar', name: 'cheese', label: 'Чеддер', cost: '29', checked: false},
    {id: 'dorBlue', name: 'cheese', label: 'Дор Блю', cost: '29', checked: false},
  ],
  [PARAMETERS_FOR_PIZZA.VEGETABLES]: [
    {id: 'tomato', name: 'vegetables', label: 'Помидор', cost: '29', checked: false},
    {id: 'mushrooms', name: 'vegetables', label: 'Грибы', cost: '29', checked: false},
    {id: 'pepper', name: 'vegetables', label: 'Перец', cost: '29', checked: false},
  ],
  [PARAMETERS_FOR_PIZZA.MEAT]: [
    {id: 'bacon', name: 'meat', label: 'Бекон', cost: '29', checked: false},
    {id: 'pepperoni', name: 'meat', label: 'Пепперони', cost: '29', checked: false},
    {id: 'ham', name: 'meat', label: 'Ветчина', cost: '29', checked: false},
  ],
};
