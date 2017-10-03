import { put, takeLatest, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { verifyAccessToken } from '../../api';
import { VALIDATE_ACCESS_TOKEN } from './constants';
// Individual exports for testing
export function* validateAccessToken() {
  const accesstoken = localStorage.getItem('accesstoken');
  if (accesstoken === null) {
    yield put(push('/login'));
  }
  try {
    const result = yield call(verifyAccessToken, accesstoken);
    console.log(result);
  } catch (err) {
    yield put(push('/login'));
  }
}

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(VALIDATE_ACCESS_TOKEN, validateAccessToken);
}
