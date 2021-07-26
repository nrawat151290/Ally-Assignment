import axios from 'axios';
import ENDPOINTS, { API_ROOT } from './Endpoints';
import { delay } from './Helpers';

export const fetchOKRs = async () => {
  /*
    API is pretty quick.
    Adding a deliberate delay of 2s in order to show loader for a moment.
  */
  await delay(2000);
  return axios.get(API_ROOT + ENDPOINTS.SAMPLE_OKRS);
};