import axios from 'axios';
import ENDPOINTS, { API_ROOT } from './Endpoints';

export const fetchOKRs = async () => {
  return axios.get(API_ROOT + ENDPOINTS.SAMPLE_OKRS);
};