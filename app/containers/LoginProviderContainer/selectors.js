import { createSelector } from 'reselect';

/**
 * Direct selector to the loginProviderContainer state domain
 */
const selectLoginProviderContainerDomain = (state) => state.get('loginProviderContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginProviderContainer
 */

const makeSelectLoginProviderContainer = () => createSelector(
  selectLoginProviderContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectLoginProviderContainer;
export {
  selectLoginProviderContainerDomain,
};
