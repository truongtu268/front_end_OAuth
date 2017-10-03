/*
 *
 * LoginContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_GITHUB,
  LOGIN_GOOGLE,
  LOGIN_INSTAGRAM,
  LOGIN_INTERNAL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loginGoogle() {
  return {
    type: LOGIN_GOOGLE,
  };
}
export function loginInstagram() {
  return {
    type: LOGIN_INSTAGRAM,
  };
}
export function loginGithub() {
  return {
    type: LOGIN_GITHUB,
  };
}
export function loginInternal() {
  return {
    type: LOGIN_INTERNAL,
  };
}
