import {Link} from 'react-router-dom';

export const Orders = () => {
  return (
    <>
      <Link to="/">Вернуться на страницу заказа</Link>
      <br />
      <h1>Мои заказы</h1>
      <p>Список пока пуст</p>
    </>
  );
};
