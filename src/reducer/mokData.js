export const SIZE = 'size';
export const DOUGH = 'dough';
export const SAUCE = 'sauce';
export const CHEESE = 'cheese';
export const VEGETABLES = 'vegetables';
export const MEAT = 'meat';

export const domPizzaOptions = {
  [SIZE]: {
    legend: 'Размер',
    type: 'radio',
  },
  [DOUGH]: {
    legend: 'Тесто',
    type: 'radio',
  },
  [SAUCE]: {
    legend: 'Выберите соус',
    type: 'radio',
  },
  [CHEESE]: {
    legend: 'Добавьте сыр',
    type: 'checkbox',
  },
  [VEGETABLES]: {
    legend: 'Добавьте овощи',
    type: 'checkbox',
  },
  [MEAT]: {
    legend: 'Добавьте мясо',
    type: 'checkbox',
  },
};

export const initialState = {
  [SIZE]: '30 см',
  [DOUGH]: 'Тонкое',
  [SAUCE]: 'Томатный',
  [CHEESE]: [],
  [VEGETABLES]: [],
  [MEAT]: [],
};

export const pizzaOptions = {
  [SIZE]: [
    {id: '1', name: 'size', value: '30 см', price: '200'},
    {id: '2', name: 'size', value: '35 см', price: '250'},
  ],
  [DOUGH]: [
    {id: '3', name: 'dough', value: 'Тонкое', price: '0'},
    {id: '4', name: 'dough', value: 'Пышное', price: '0'},
  ],
  [SAUCE]: [
    {id: '5', name: 'sauce', value: 'Томатный', price: '0'},
    {id: '6', name: 'sauce', value: 'Белый', price: '0'},
    {id: '7', name: 'sauce', value: 'Острый', price: '0'},
  ],
  [CHEESE]: [
    {id: '8', name: 'cheese', value: 'Моцарелла', price: '29'},
    {id: '9', name: 'cheese', value: 'Чеддер', price: '29'},
    {id: '10', name: 'cheese', value: 'Дор Блю', price: '29'},
  ],
  [VEGETABLES]: [
    {id: '11', name: 'vegetables', value: 'Помидор', price: '29'},
    {id: '12', name: 'vegetables', value: 'Грибы', price: '29'},
    {id: '13', name: 'vegetables', value: 'Перец', price: '29'},
  ],
  [MEAT]: [
    {id: '14', name: 'meat', value: 'Бекон', price: '29'},
    {id: '15', name: 'meat', value: 'Пепперони', price: '29'},
    {id: '16', name: 'meat', value: 'Ветчина', price: '29'},
  ],
};
