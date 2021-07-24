import { put } from "redux-saga/effects";
import { fetchOKRs } from "../../Utils/Services";
import { OKRS_RECEIVED, ERROR_OCCURRED, FETCHING_DATA, FETCH_COMPLETE } from "../../Utils/ActionTypes";
import { ERROR_MESSAGES } from '../../Utils/Constants'

export function* OKRSaga({ filterKey }) {

  /* Execute service method to fetch OKRs */
  try {
    const { data: { data: okrs = [] } = {} } = yield fetchOKRs() || {};

    /* Send action to render loader */
    yield put({
      type: FETCHING_DATA
    });
    /*
      Fetch out unique categories to create the list of filters.
      filterKey is the property on which filtering will be performed.
    */
    const filters = okrs.reduce((categories, item) => {
      if (!categories.includes(item[filterKey])) {
        categories.push(item[filterKey]);
      }
      return categories;
    }, []);


    /* Send action to stop loader */
    yield put({
      type: FETCH_COMPLETE
    });

    /* Tell reducer about the data */
    yield put({
      type: OKRS_RECEIVED,
      okrs,
      filters
    });
  } catch (err) {
    yield put({ type: ERROR_OCCURRED, message: ERROR_MESSAGES.API_ERROR });
  }
}