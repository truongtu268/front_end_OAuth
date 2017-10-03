/**
 *
 * Oauth
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOauth from './selectors';
import reducer from './reducer';
import saga from './saga';
import { oauthAction } from './actions';


export class Oauth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.onOauthAction();
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

Oauth.propTypes = {
  onOauthAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  oauth: makeSelectOauth(),
});

function mapDispatchToProps(dispatch) {
  return {
    onOauthAction: () => dispatch(oauthAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'oauth', reducer });
const withSaga = injectSaga({ key: 'oauth', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Oauth);
