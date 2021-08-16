import axios from 'axios';

// The variable declaring the api call to run the dev environment data.
export const devAPI = 'https://dev.logistics.igniteme.dev/api/data';

// The variable declaring the api call to run the stage environment data.
export const stageAPI = 'https://stage.logistics.igniteme.dev/api/data';

/**
 * This is the URL for the production API.
 * To be released upon the deployment of the production environment.
 */
export const stageAPI = 'https://prod.logistics.igniteme.dev/api/data';

/**
 * The Fetch Data Function
 * 
 * @param {*} query 
 * @returns getData 
 */
export const fetchStageData = async query => {

  const url = `${devAPI}/search?query=${query}`;

  // the get data variable uses axios to get data from the URL.
  var getData = await axios.get(url);

  return getData;
};
 
fetchDevData('react');

/**
 * The Fetch Stage Data Function
 * 
 * @param {*} query 
 * @returns getData 
 */
 export const fetchStageData = async query => {

  const url = `${stageAPI}/search?query=${query}`;

  // the get data variable uses axios to get data from the URL.
  var getData = await axios.get(url);

  return getData;
};
 
fetchStageData('react');