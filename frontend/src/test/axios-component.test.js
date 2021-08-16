import { render } from '@testing-library/react';
import axios from 'axios';
import { fetchDevData, fetchStageData, devAPI, stageAPI } from '../components/axios-tools/axios-fetching.js';

import Restaurant from "../components/axios-tools/axios-query.js"

test('renders the hello django component.', () => {
  render(<Restaurant />);
});

// Jest Library to mock the axios calls required.
jest.mock('axios');
 
/**
 * Fetch data from the development environment.
 */
describe('fetchDevData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {};
 
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchDevData('react')).resolves.toEqual(data);
 
    expect(axios.get).toHaveBeenCalledWith(
      `${devAPI}/search?query=react`,
    );
  });
});

/**
 * Fetch data from the stage environment.
 */
describe('fetchStageData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {};
 
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchStageData('react')).resolves.toEqual(data);
 
    expect(axios.get).toHaveBeenCalledWith(
      `${stageAPI}/search?query=react`,
    );
  });
});