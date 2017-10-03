// import { take, call, put, select } from 'redux-saga/effects';
import { call, takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { FETCH_OAUTHCODE } from './constants';
import { sendOauthCode2Server } from '../../api';
//
export function* oauthCode() {
  try {
    const provider = window.location.toString().split('?')[0].split('/');
    const req = {};
    req.query_string = location.search;
    req.provider = provider[provider.length - 1];
    const result = yield call(sendOauthCode2Server, req);
    localStorage.setItem('accesstoken', result.AccessToken);
    localStorage.setItem('refreshtoken', result.RefreshToken);
    yield put(push('/'));
  } catch (err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCH_OAUTHCODE, oauthCode);
}
