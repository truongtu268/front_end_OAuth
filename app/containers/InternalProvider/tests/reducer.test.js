/* eslint-disable linebreak-style */
import { fromJS } from 'immutable';
import internalProviderReducer from '../reducer';

describe('internalProviderReducer', () => {
  it('returns the initial state', () => {
    expect(internalProviderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
