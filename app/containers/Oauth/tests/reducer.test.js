/* eslint-disable linebreak-style */
import { fromJS } from 'immutable';
import oauthReducer from '../reducer';

describe('oauthReducer', () => {
  it('returns the initial state', () => {
    expect(oauthReducer(undefined, {})).toEqual(fromJS({}));
  });
});
