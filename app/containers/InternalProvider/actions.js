/*
 *
 * InternalProvider actions
 *
 */

import {
  DEFAULT_ACTION,
  CHECK_CLIENT,
  CHECK_USER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function checkClientAction() {
  return {
    type: CHECK_CLIENT,
  };
}

export function checkUserAction() {
  return {
    type: CHECK_USER,
  };
}
