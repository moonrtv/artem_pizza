import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render App', () => {
    render(<App />);
    const h1Element = screen.getByText(/Пицца/i);
    expect(h1Element).toBeInTheDocument();
  });
});
