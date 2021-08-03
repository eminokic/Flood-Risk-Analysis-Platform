import { render, screen } from '@testing-library/react';
import Vinny from "../components/vinny-component.js"

test('renders learn react link', () => {
  render(<Vinny />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
