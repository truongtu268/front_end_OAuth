/*
 *
 * LoginProviderContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_PROVIDER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginProviderAction(loginInfo) {
  return {
    type: LOGIN_PROVIDER,
    loginInfo,
  };
}

