import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

import {Orders} from './Orders';

describe('Orders', () => {
  it('render Orders', () => {
    render(
      <Router>
        <Orders />
      </Router>
    );
    const h1Element = screen.getByText(/Мои заказы/i);
    expect(h1Element).toBeInTheDocument();
  });
});
