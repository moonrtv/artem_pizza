import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

import {NotFoundPage} from './NotFoundPage';

describe('NotFoundPage', () => {
  it('render NotFoundPage', () => {
    render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const h1Element = screen.getByText(/404 страница не найдена/i);
    expect(h1Element).toBeInTheDocument();
  });
});
