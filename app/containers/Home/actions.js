/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  VALIDATE_ACCESS_TOKEN,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function validateAccessToken() {
  return {
    type: VALIDATE_ACCESS_TOKEN,
  };
}
