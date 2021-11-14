import {calculateCost} from '../../utils/CalculateCost';
import {usePizzaContext} from '../../PizzaContext';

import {SIZE, SAUCE, DOUGH, CHEESE, VEGETABLES, MEAT} from '../../reducer/mokData';

import {Container} from './Order.styled';

export const Order = () => {
  const {state, orderNumber} = usePizzaContext();

  const RenderPizzaConsist = () => {
    return (
      <>
        <div>Размер: {state[SIZE]}</div>
        <div>Толщина: {state[DOUGH]}</div>
        <div>Соус: {state[SAUCE]}</div>
        {(state[CHEESE].length || '') && <div>Сыр: {state[CHEESE].join(' ')}</div>}
        {(state[VEGETABLES].length || '') && <div>Овощи: {state[VEGETABLES].join(' ')}</div>}
        {(state[MEAT].length || '') && <div>Мясо: {state[MEAT].join(' ')}</div>}
      </>
    );
  };

  return (
    <Container>
      <h1>Твоя пицца</h1>
      <h3>Номер заказа: № {orderNumber || `отсуствует`}</h3>
      <RenderPizzaConsist />
      <h4>Итог: {calculateCost(state)} руб</h4>
    </Container>
  );
};
