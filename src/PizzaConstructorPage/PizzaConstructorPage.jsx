import {useNavigate} from 'react-router-dom';
import {calculateCost} from '../utils/CalculateCost';

import {Form, Fieldset} from './PizzaConstructorPage.styled';

export const PizzaConstructorPage = ({updateRadio, updateChecked, handleSubmitOrder, state}) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/order');
    handleSubmitOrder();
  };

  const renderPizzaConstructor = (
    <>
      <Fieldset>
        <legend>Размер</legend>

        <label>
          <input
            id="size30"
            type="radio"
            name="size"
            onChange={updateRadio}
            value="30 см"
            checked={state['size'].id === 'size30'}
          />
          30 см
        </label>

        <label>
          <input
            id="size35"
            type="radio"
            name="size"
            onChange={updateRadio}
            value="35 см"
            checked={state['size'].id === 'size35'}
          />
          35 см
        </label>
      </Fieldset>

      <Fieldset>
        <legend>Тесто</legend>

        <label>
          <input
            id="thin"
            type="radio"
            name="dough"
            onChange={updateRadio}
            value="Тонкое"
            checked={state['dough'].id === 'thin'}
          />
          Тонкое
        </label>

        <label>
          <input
            id="lush"
            type="radio"
            name="dough"
            onChange={updateRadio}
            value="Пышное"
            checked={state['dough'].id === 'lush'}
          />
          Пышное
        </label>
      </Fieldset>

      <Fieldset>
        <legend>Выберите соус</legend>

        <label>
          <input
            id="tomatoSauce"
            type="radio"
            name="sauce"
            onChange={updateRadio}
            value="Томатный"
            checked={state['sauce'].id === 'tomatoSauce'}
          />
          Томатный
        </label>

        <label>
          <input
            id="whiteSauce"
            type="radio"
            name="sauce"
            onChange={updateRadio}
            value="Белый"
            checked={state['sauce'].id === 'whiteSauce'}
          />
          Белый
        </label>

        <label>
          <input
            id="spicySauce"
            type="radio"
            name="sauce"
            onChange={updateRadio}
            value="Острый"
            checked={state['sauce'].id === 'spicySauce'}
          />
          Острый
        </label>
      </Fieldset>

      <Fieldset>
        <legend>Добавьте сыр</legend>

        <label>
          <input id="mozzarella" type="checkbox" name="cheese" onChange={updateChecked} value="Моцарелла" />
          Моцарелла
        </label>

        <label>
          <input id="сheddar" type="checkbox" name="cheese" onChange={updateChecked} value="Чеддер" />
          Чеддер
        </label>

        <label>
          <input id="dorBlue" type="checkbox" name="cheese" onChange={updateChecked} />
          Дор Блю
        </label>
      </Fieldset>

      <Fieldset>
        <legend>Добавьте овощи</legend>

        <label>
          <input id="tomato" type="checkbox" name="vegetables" onChange={updateChecked} value="Помидор" />
          Помидор
        </label>

        <label>
          <input id="mushrooms" type="checkbox" name="vegetables" onChange={updateChecked} value="Грибы" />
          Грибы
        </label>

        <label>
          <input id="pepper" type="checkbox" name="vegetables" onChange={updateChecked} value="Перец" />
          Перец
        </label>
      </Fieldset>

      <Fieldset>
        <legend>Добавьте мясо</legend>

        <label>
          <input id="bacon" type="checkbox" name="meat" onChange={updateChecked} value="Бекон" />
          Бекон
        </label>

        <label>
          <input id="pepperoni" type="checkbox" name="meat" onChange={updateChecked} value="Пепперони" />
          Пепперони
        </label>

        <label>
          <input id="ham" type="checkbox" name="meat" onChange={updateChecked} value="Ветчина" />
          Ветчина
        </label>
      </Fieldset>
    </>
  );

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
