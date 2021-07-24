import { combineReducers } from "redux";

/* List of all the app reducers */
import OKRReducer from './OKRReducer';
import ErrorReducer from './ErrorReducer';
import FetchingDataReducer from './FetchingDataReducer';

export default combineReducers({
  okrs: OKRReducer,
  globalError: ErrorReducer,
  isFetching: FetchingDataReducer
});