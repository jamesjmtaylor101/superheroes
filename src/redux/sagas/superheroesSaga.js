import {call, put, takeLatest} from 'redux-saga/effects';
import {getSuperheroesRequest} from '../../services/superherosServices';
import {
  GET_DC_SUPERHEROES_REQUEST,
  GET_DC_SUPERHEROES_REQUEST_FAILED,
  GET_DC_SUPERHEROES_REQUEST_SUCCESS,
} from '../actions/types';

function* getDCSuperheroesWorker(action) {
  try {
    const data = yield call(getSuperheroesRequest);
    if (data) {
      yield put({type: GET_DC_SUPERHEROES_REQUEST_SUCCESS, payload: data});
    } else {
      yield put({type: GET_DC_SUPERHEROES_REQUEST_FAILED});
    }
  } catch (error) {
    yield put({type: GET_DC_SUPERHEROES_REQUEST_FAILED});
  }
}

export function* watchSuperheoresActions() {
  yield takeLatest(GET_DC_SUPERHEROES_REQUEST, getDCSuperheroesWorker);
}
