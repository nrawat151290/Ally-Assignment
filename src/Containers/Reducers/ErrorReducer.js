import { ERROR_OCCURRED } from "../../Utils/ActionTypes";

const DEFAULT_STATE = {
  message: ""
};

const reducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case ERROR_OCCURRED: {
      const { message = "" } = action;
      return {
        ...state.globalError,
        message
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;