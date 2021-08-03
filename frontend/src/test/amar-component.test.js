import { render, screen } from '@testing-library/react';
import Amar from "../components/amar-component.js"

test('renders learn react link', () => {
  render(<Amar />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
