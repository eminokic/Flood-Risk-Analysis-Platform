import axios from 'axios';
 
export const API = 'https://dev.logistics.igniteme.dev/api/data';
 
export const fetchData = async query => {
  const url = `${API}/search?query=${query}`;
 
  return await axios.get(url);
};
 
fetchData('react');