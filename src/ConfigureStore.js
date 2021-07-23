import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

import rootReducer from './Containers/Reducers/RootReducer';
import rootSaga from './Containers/Sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

export default store;

/* execute root saga to register other sagas */
sagaMiddleware.run(rootSaga);

