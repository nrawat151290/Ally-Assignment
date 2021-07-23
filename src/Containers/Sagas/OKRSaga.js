import { put } from "redux-saga/effects";
import { fetchOKRs } from "../../Utils/Services";
import { OKRS_RECEIVED, ERROR_OCCURRED } from "../../Utils/ActionTypes";
import { ERROR_MESSAGES } from '../../Utils/Constants'

export function* OKRSaga({ filterKey }) {

  /* Execute service method to fetch OKRs */
  try {
    const { data: { data: okrs = [] } = {} } = yield fetchOKRs() || {};
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