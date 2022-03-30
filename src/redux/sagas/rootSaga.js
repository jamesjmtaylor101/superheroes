import {all, fork} from 'redux-saga/effects';
// Redux Sagas
import {watchSuperheoresActions} from './superheroesSaga';

export function* rootSaga() {
  yield all([fork(watchSuperheoresActions)]);
}
