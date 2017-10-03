/* eslint-disable linebreak-style */
import { createSelector } from 'reselect';

/**
 * Direct selector to the internalProvider state domain
 */
const selectInternalProviderDomain = (state) => state.get('internalProvider');

/**
 * Other specific selectors
 */


/**
 * Default selector used by InternalProvider
 */

const makeSelectInternalProvider = () => createSelector(
  selectInternalProviderDomain,
  (substate) => substate.toJS()
);

export default makeSelectInternalProvider;
export {
  selectInternalProviderDomain,
};
