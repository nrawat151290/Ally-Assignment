import {
  FETCH_OKRS,
  OKRS_RECEIVED,
  FILTER_OKRS
} from './ActionTypes';

export const fetchOKRs = ({ filterKey }) => {
  return {
    type: FETCH_OKRS,
    filterKey
  };
};

export const okrsReceived = (data = []) => {
  return {
    type: OKRS_RECEIVED,
    data
  };
}

export const filterOKRs = (key, value) => {
  return {
    type: FILTER_OKRS,
    filter: {
      key,
      value
    }
  }
}