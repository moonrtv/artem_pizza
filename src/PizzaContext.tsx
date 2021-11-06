import {log} from 'console';
import React from 'react';

// import {dataForPizza, TDataForPizza} from './mokData';

import {
  PARAMETERS_FOR_PIZZA,
  domElementsPizza,
  dataForPizza,
  TDataForPizza,
  IParametrsForIngredientPizza,
} from './mokData';

type TContext = {
  pizza: TDataForPizza;
  updateRadioParametersForPizza: (e: any) => void;
  updateCheckedParametersFromPizza: (e: any) => void;
};

export const PizzaContext = React.createContext<TContext | null>(null);

export const PizzaProvider: React.FC<React.ReactNode> = ({children}) => {
  const [pizza, setPizza] = React.useState<TDataForPizza>(dataForPizza);

  const updateRadioParametersForPizza = (e: any) => {
    const {id, name} = e.target;

    setPizza((prevState) => {
      const temp = pizza[name].map((item) => {
        const check = (item.checked = item.id === id ? true : false);
        return {...item, checked: check};
      });

      console.log(temp);

      return {...prevState, ...pizza};
    });
  };

  const updateCheckedParametersFromPizza = (e: any) => {
    const {id, name} = e.target;

    setPizza((prevState) => {
      const temp = pizza[name].map((item) => {
        const check = (item.checked = item.id === id ? !item.checked : item.checked);
        return {...item, checked: check};
      });

      console.log(temp);

      return {...prevState, ...pizza};
    });
  };

  return (
    <PizzaContext.Provider
      value={{pizza: dataForPizza, updateRadioParametersForPizza, updateCheckedParametersFromPizza}}
    >
      {children}
    </PizzaContext.Provider>
  );
};
