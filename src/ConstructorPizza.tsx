import React from 'react';
import {PizzaContext} from './PizzaContext';

import {PARAMETERS_FOR_PIZZA, domElementsPizza, TDataForPizza} from './mokData';

import {Form, Fieldset} from './ConstructorPizza.styled';

type TContext = {
  pizza: TDataForPizza;
  updateRadioParametersForPizza: (e: any) => void;
  updateCheckedParametersFromPizza: () => void;
};

export const ConstructorPizza = (): JSX.Element => {
  const {pizza, updateRadioParametersForPizza, updateCheckedParametersFromPizza} = React.useContext(
    PizzaContext
  ) as TContext;

  const handleSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault();

    console.log('handleSubmit');
  };

  const renderConstructorPizza = Object.values(PARAMETERS_FOR_PIZZA).map((parameter, index) => {
    return (
      <Fieldset key={index}>
        <legend>{domElementsPizza[parameter].legend}</legend>

        {pizza[parameter].map((item) => {
          return domElementsPizza[parameter].type === 'radio' ? (
            <label key={item.id}>
              <input
                id={item.id}
                type={domElementsPizza[parameter].type}
                name={item.name}
                onChange={updateRadioParametersForPizza}
                checked={item.checked}
              />
              {item.label}
            </label>
          ) : (
            <label key={item.id}>
              <input
                id={item.id}
                type={domElementsPizza[parameter].type}
                name={item.name}
                onChange={updateCheckedParametersFromPizza}
                checked={item.checked}
              />
              {item.label}
            </label>
          );
        })}
      </Fieldset>
    );
  });

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1>Собери свою пиццу</h1>
        {renderConstructorPizza}
        <button>Заказать за {} руб</button>
      </Form>
    </div>
  );
};
