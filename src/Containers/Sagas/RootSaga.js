import { takeLatest } from "redux-saga/effects";
import { FETCH_OKRS } from '../Actions/ActionTypes';

/* List of all application sagas */
import { OKRSaga } from './OKRSaga';

function* rootSaga() {

  /* Register all the application sagas here to listen to specific actions */
  yield takeLatest(FETCH_OKRS, OKRSaga);
}

export default rootSaga;