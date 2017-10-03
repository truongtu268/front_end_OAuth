/*
 *
 * Oauth actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_OAUTHCODE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function oauthAction() {
  return {
    type: FETCH_OAUTHCODE,
  };
}
