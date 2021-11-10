import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

import {PizzaOrdersPage} from './PizzaOrdersPage';

describe('PizzaOrdersPage', () => {
  it('render PizzaOrdersPage', () => {
    render(
      <Router>
        <PizzaOrdersPage />
      </Router>
    );
    const h1Element = screen.getByText(/Мои заказы/i);
    expect(h1Element).toBeInTheDocument();
  });
});
