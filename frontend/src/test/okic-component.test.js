import { render, screen } from '@testing-library/react';
import Okic from "../components/okic-component.js"

test('renders learn react link', () => {
  render(<Okic />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
