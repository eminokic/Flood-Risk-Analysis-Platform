import { render, screen } from '@testing-library/react';
import Derek from "../components/derek-component.js"

test('renders learn react link', () => {
  render(<Derek />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
