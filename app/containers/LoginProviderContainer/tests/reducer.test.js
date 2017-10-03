
import { fromJS } from 'immutable';
import loginProviderContainerReducer from '../reducer';

describe('loginProviderContainerReducer', () => {
  it('returns the initial state', () => {
    expect(loginProviderContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
