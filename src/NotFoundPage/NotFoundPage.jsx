import {Link} from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">Вернуться на страницу заказа</Link>
      <br />
      <h1>404 страница не найдена!</h1>
    </div>
  );
};
