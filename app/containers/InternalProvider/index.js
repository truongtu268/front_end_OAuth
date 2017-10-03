/* eslint-disable linebreak-style */
/**
 *
 * InternalProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectInternalProvider from './selectors';
import reducer from './reducer';
import saga from './saga';

export class InternalProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

InternalProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  internalprovider: makeSelectInternalProvider(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'internalProvider', reducer });
const withSaga = injectSaga({ key: 'internalProvider', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(InternalProvider);
