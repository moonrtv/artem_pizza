import {createContext, useReducer} from 'react';

import {reducer} from './reducer/pizza.reducer';

const initialState = {
  size: {id: 'size30', name: '30', cost: 200},
  dough: {},
  sauce: {},
  cheese: [],
  vegetables: [],
  meat: [],
};

export const PizzaContext = createContext(null);

export const PizzaProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const includeElement = (list, id) => {
    for (let i = 0; list.length > i; i++) {
      if (list[i].id === id) {
        return true;
      }
    }
  };

  const updateRadioParametersForPizza = (event) => {
    const {name, id, value, type} = event.target;

    dispatch({
      type: type,
      payload: {type: name, id: id, title: value, cost: id},
    });
  };

  const updateCheckedParametersFromPizza = (event) => {
    const {name, id, value} = event.target;

    if (includeElement(state[name], id)) {
      dispatch({
        type: 'deleteCheckbox',
        payload: {type: name, id: id, title: value, cost: id},
      });
    } else {
      dispatch({
        type: 'addCheckbox',
        payload: {type: name, id: id, title: value, cost: id},
      });
    }
  };

  return (
    <PizzaContext.Provider value={{pizza: state, updateRadioParametersForPizza, updateCheckedParametersFromPizza}}>
      {children}
    </PizzaContext.Provider>
  );
};
