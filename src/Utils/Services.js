import axios from 'axios';
import ENDPOINTS, { API_ROOT } from './Endpoints';

export const fetchOKRs = async () => {
  const result = axios.get(API_ROOT + ENDPOINTS.SAMPLE_OKRS);
  return new Promise((resolve) => {
    /*
      API is pretty quick.
      Adding a deliberate delay of 2s in order to show loader for a moment.
    */
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};