import {calculateCost} from './CalculateCost';

import {Container} from './PizzaOrder.styled';

export const PizzaOrder = ({state}) => {
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
      <div>{calculateCost(state)} руб</div>
    </Container>
  );
};
