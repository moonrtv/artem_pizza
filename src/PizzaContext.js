import {createContext, useReducer, useContext, useState} from 'react';

import {reducer} from './reducer/pizza.reducer';

import {MIN, MAX} from './utils/constants';
import {parameterCostForPizza, initialState} from './reducer/mokData';

export const PizzaContext = createContext(null);

export const PizzaProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [orderNumber, setOrderNumber] = useState('');

  const getRandomInt = () => {
    const min = Math.ceil(MIN);
    const max = Math.floor(MAX);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const makeOrder = () => {
    setOrderNumber(getRandomInt());
  };

  const updateRadioParameters = (event) => {
    const {name, id, value, type} = event.target;

    dispatch({
      type: type,
      payload: {type, id, name, value, cost: parameterCostForPizza[id]},
    });
  };

  const updateCheckedParameters = (event) => {
    const {name, id, value, type} = event.target;

    dispatch({
      type,
      payload: {type, id, name, value, cost: parameterCostForPizza[id]},
    });
  };

  return (
    <PizzaContext.Provider
      value={{pizza: state, orderNumber, makeOrder, updateRadioParameters, updateCheckedParameters}}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizzaContext = () => useContext(PizzaContext);
