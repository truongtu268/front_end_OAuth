/* eslint-disable linebreak-style */
// import { take, call, put, select } from 'redux-saga/effects';
import queryString from 'query-string';
import { call, takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { CHECK_CLIENT } from './constants';
import { checkClientOauthApi, checkUserOauthApi, getTokenApi } from '../../api';
// Individual exports for testing
export function* checkClientSage() {
  try {
    const reqServer = queryString.parse(location.search);
    const scope = reqServer.scope.split(' ');
    reqServer.scope = scope;
    const response = yield call(checkClientOauthApi, reqServer);
    localStorage.setItem('query_code', response);
    const req2IdentityUser = {};
    req2IdentityUser.query_code = response;
    localStorage.setItem('query_code', response);
    const accessToken = localStorage.getItem('accesstoken');
    const refreshToken = localStorage.getItem('refreshtoken');
    if (accessToken && refreshToken) {
      req2IdentityUser.type_oauth = 'accesstoken';
      req2IdentityUser.access_token = accessToken;
      req2IdentityUser.refresh_token = refreshToken;
    } else {
      yield put(push('/login_provider'));
    }
    const userResponse = yield call(checkUserOauthApi, req2IdentityUser);
    const codeOauth = queryString.parse(userResponse);
    const tokenResponse = yield call(getTokenApi, codeOauth);
    localStorage.setItem('accesstoken', tokenResponse.access_token);
    localStorage.setItem('refreshtoken', tokenResponse.refresh_token);
    yield put(push('/'));
  } catch (err) {
    yield put(push('/some_thing_wrong'));
  }
}

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CHECK_CLIENT, checkClientSage);
}
