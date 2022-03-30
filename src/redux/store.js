// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

// Redux Root Reducer
import rootReducer from './reducers/rootReducer';

// Redux Root Saga
import {rootSaga} from './sagas/rootSaga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
