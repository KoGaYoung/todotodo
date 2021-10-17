import { render, screen } from '@testing-library/react';
import TODOTODO from './TODOTODO';

test('renders learn react link', () => {
  render(<TODOTODO />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
