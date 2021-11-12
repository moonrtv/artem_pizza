import {calculateCost} from '../../utils/CalculateCost';
import {usePizzaContext} from '../../PizzaContext';

import {Container} from './Order.styled';

export const Order = () => {
  const {pizza, orderNumber} = usePizzaContext();

  const RenderPizzaConsist = () => {
    return (
      <>
        {Object.values(pizza).reduce((arr, item) => {
          item.forEach((elem) => {
            arr += elem.checked ? `${elem.value} ` : '';
          });

          return arr;
        }, '')}
      </>
    );
  };

  return (
    <Container>
      <h1>Твоя пицца</h1>
      <h3>Номер заказа: № {orderNumber || `отсуствует`}</h3>
      <RenderPizzaConsist />
      <br />
      <h4>Итог: {calculateCost(pizza)} руб</h4>
    </Container>
  );
};
