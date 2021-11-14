import {useNavigate} from 'react-router-dom';
import {calculateCost} from '../../utils/CalculateCost';
import {usePizzaContext} from '../../PizzaContext';

import {pizzaOptions, domPizzaOptions} from '../../reducer/mokData';

import {Form, Fieldset} from './PizzaConstructor.styled';

export const PizzaConstructor = () => {
  const {state, makeOrder, updateRadioParameters, updateCheckedParameters} = usePizzaContext();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    makeOrder();
    navigate('/order');
  };

  const renderPizzaConstructor = Object.keys(pizzaOptions).map((index) => {
    return (
      <Fieldset key={index}>
        <legend>{domPizzaOptions[index].legend}</legend>

        {pizzaOptions[index].map((item) => {
          return domPizzaOptions[index].type === 'radio' ? (
            <label key={item.id}>
              <input
                id={item.id}
                type={domPizzaOptions[index].type}
                name={item.name}
                onChange={updateRadioParameters}
                value={item.value}
                checked={state[index] === item.value}
              />
              {item.value}
            </label>
          ) : (
            <label key={item.id}>
              <input
                id={item.id}
                type={domPizzaOptions[index].type}
                name={item.name}
                onChange={updateCheckedParameters}
                value={item.value}
                checked={state[index].includes(item.value)}
              />
              {item.value}
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
        {renderPizzaConstructor}
        <button>Заказать за {calculateCost(state)} руб</button>
      </Form>
    </div>
  );
};
