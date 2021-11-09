import React, {useState, useReducer} from 'react';
import {ConstructorPizza} from './ConstructorPizza';
import {OrderPizza} from './OrderPizza';

import {reducer} from './pizza.reducer';
import {initialState} from './constants';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmit, setIsSubmit] = useState(true);

  const includeElement = (list, id) => {
    for (let i = 0; list.length > i; i++) {
      if (list[i].id === id) {
        return true;
      }
    }
  };

  const handleSubmit = () => {
    setIsSubmit(false);
  };

  const handleUpdateRadio = (event) => {
    const {name, id, value, type} = event.target;

    dispatch({
      type: type,
      payload: {type: name, id: id, title: value, cost: id},
    });
  };

  const handleUpdateChecked = (event) => {
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

  if (isSubmit) {
    return (
      <ConstructorPizza
        updateRadio={handleUpdateRadio}
        updateChecked={handleUpdateChecked}
        handleSubmitOrder={handleSubmit}
        state={state}
      />
    );
  }

  if (!isSubmit) {
    return <OrderPizza state={state} />;
  }
};

export default App;
