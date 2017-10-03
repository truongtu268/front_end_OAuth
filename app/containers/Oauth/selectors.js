/* eslint-disable linebreak-style */
import { createSelector } from 'reselect';

/**
 * Direct selector to the oauth state domain
 */
const selectOauthDomain = (state) => state.get('oauth');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Oauth
 */

const makeSelectOauth = () => createSelector(
  selectOauthDomain,
  (substate) => substate.toJS()
);

export default makeSelectOauth;
export {
  selectOauthDomain,
};
