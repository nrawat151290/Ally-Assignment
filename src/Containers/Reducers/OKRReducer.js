import { OKRS_RECEIVED, FILTER_OKRS, FETCHING_DATA } from "../../Utils/ActionTypes";

const DEFAULT_STATE = {
  okrs: [],
  filter: {
    key: "",
    value: []
  },
  filters: [],
  isFetching: false
};

const reducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case FETCHING_DATA: {
      return {
        ...state,
        isFetching: true
      };
    }
    case OKRS_RECEIVED: {
      const { okrs, filters = [] } = action;
      return {
        ...state,
        okrs,
        filters,
        isFetching: false
      };
    }
    case FILTER_OKRS: {
      return {
        ...state,
        /* action.filter is an object containing key and corresponding value array*/
        filter: action.filter
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;