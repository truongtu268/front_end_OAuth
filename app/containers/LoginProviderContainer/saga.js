import { takeLatest, call, put } from 'redux-saga/effects';
import queryString from 'query-string';
import { push } from 'react-router-redux';
import { LOGIN_PROVIDER } from './constants';
import { checkUserOauthApi, getTokenApi } from '../../api';
export function* loginWithUserName(action) {
  try {
    const req2IdentityUser = {};
    const queryCode = localStorage.getItem('query_code');
    req2IdentityUser.query_code = queryCode;
    localStorage.clear('query_code');
    req2IdentityUser.type_oauth = 'username';
    req2IdentityUser.username = action.loginInfo.username;
    req2IdentityUser.password = action.loginInfo.password;
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

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN_PROVIDER, loginWithUserName);
}
