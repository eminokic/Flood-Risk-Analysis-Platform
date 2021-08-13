import { render, screen } from '@testing-library/react';
import HelloDjango from "../components/axios-tools/HelloDjango.js"

test('renders the hello django component.', () => {
  render(<HelloDjango />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
