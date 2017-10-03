import { call, takeLatest } from 'redux-saga/effects';
import { loginGithubApi, loginGoogleApi, loginInstagramApi, loginInternalApi } from '../../api';
import { LOGIN_INTERNAL, LOGIN_GITHUB, LOGIN_GOOGLE, LOGIN_INSTAGRAM } from './constants';

export function* loginGoogle() {
  try {
    const result = yield call(loginGoogleApi);
    window.location = result;
  } catch (err) {
    console.log(err);
  }
}

export function* loginGithub() {
  try {
    const result = yield call(loginGithubApi);
    window.location = result;
  } catch (err) {
    console.log(err);
  }
}

export function* loginInstagram() {
  try {
    const result = yield call(loginInstagramApi);
    window.location = result;
  } catch (err) {
    console.log(err);
  }
}

export function* loginInternal() {
  try {
    const result = yield call(loginInternalApi);
    window.location = result;
  } catch (err) {
    console.log(err);
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN_INTERNAL, loginInternal);
  yield takeLatest(LOGIN_GITHUB, loginGithub);
  yield takeLatest(LOGIN_GOOGLE, loginGoogle);
  yield takeLatest(LOGIN_INSTAGRAM, loginInstagram);
}
