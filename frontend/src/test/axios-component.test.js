import { render } from '@testing-library/react';
import axios from 'axios';
import { fetchData, API } from '../components/axios-tools/axios-fetching.js';

import HelloDjango from "../components/axios-tools/HelloDjango.js"

test('renders the hello django component.', () => {
  render(<HelloDjango />);
});

test('tests api connection.', () => {
  
})
jest.mock('axios');
 
describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {};
 
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchData('react')).resolves.toEqual(data);
 
    expect(axios.get).toHaveBeenCalledWith(
      `${API}/search?query=react`,
    );
  });
});