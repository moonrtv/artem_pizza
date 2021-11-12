import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

import {NotFound} from './NotFound';

describe('NotFound', () => {
  it('render NotFound', () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );
    const h1Element = screen.getByText(/404 страница не найдена/i);
    expect(h1Element).toBeInTheDocument();
  });
});
