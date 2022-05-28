import { render, screen } from '@testing-library/react';
import App from './cruds/colaboradores/App';
import App from './cruds/solicitante/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
