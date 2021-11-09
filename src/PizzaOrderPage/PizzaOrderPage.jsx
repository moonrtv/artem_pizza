import {calculateCost} from '../utils/CalculateCost';

import {Container} from './PizzaOrderPage.styled';

export const PizzaOrderPage = ({state}) => {
  const RenderPizzaConsist = () => {
    return (
      <>
        {Object.values(state).map((item) => {
          let container = '';

          if (Array.isArray(item) && item.length > 0) {
            item.forEach((elem) => {
              container = container + elem.title + ' . ';
            });
          } else {
            container = item.title ? container + item.title + ' . ' : '';
          }

          return container;
        })}
      </>
    );
  };

  return (
    <Container>
      <h1>Твоя пицца</h1>
      <RenderPizzaConsist />
      <br />
      <h4>Итог: {calculateCost(state)} руб</h4>
    </Container>
  );
};
