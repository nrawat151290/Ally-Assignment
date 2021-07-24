import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

import rootReducer from './Containers/Reducers/RootReducer';
import rootSaga from './Containers/Sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;

/* execute root saga to register other sagas */
sagaMiddleware.run(rootSaga);

