import { render, screen } from '@testing-library/react';
import Michael from "../components/michael-component.js"

test('renders learn react link', () => {
  render(<Michael />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
