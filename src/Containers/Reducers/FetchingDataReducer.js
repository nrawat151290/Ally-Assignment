import { FETCHING_DATA, FETCH_COMPLETE } from "../Actions/ActionTypes";

const DEFAULT_STATE = true

const reducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case FETCHING_DATA: {
      return true
    }
    case FETCH_COMPLETE: {
      return false
    }
    default: {
      return state;
    }
  }
}

export default reducer;