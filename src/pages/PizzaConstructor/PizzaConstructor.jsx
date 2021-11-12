import {useNavigate} from 'react-router-dom';
import {calculateCost} from '../../utils/CalculateCost';
import {usePizzaContext} from '../../PizzaContext';

import {PARAMETERS_FOR_PIZZA, domElementsPizza} from '../../reducer/mokData';

import {Form, Fieldset} from './PizzaConstructor.styled';

export const PizzaConstructor = () => {
  const {pizza, makeOrder, updateRadioParameters, updateCheckedParameters} = usePizzaContext();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    makeOrder();
    navigate('/order');
  };

  const renderPizzaConstructor = Object.values(PARAMETERS_FOR_PIZZA).map((parameter, index) => {
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
                onChange={updateRadioParameters}
                value={item.value}
                checked={item.checked}
              />
              {item.value}
            </label>
          ) : (
            <label key={item.id}>
              <input
                id={item.id}
                type={domElementsPizza[parameter].type}
                name={item.name}
                onChange={updateCheckedParameters}
                value={item.value}
                checked={item.checked}
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
        <button>Заказать за {calculateCost(pizza)} руб</button>
      </Form>
    </div>
  );
};
