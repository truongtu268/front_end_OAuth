/**
 *
 * LoginContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Login from '../../components/LoginMain';
import { loginGithub, loginGoogle, loginInstagram, loginInternal } from './actions';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props);
    return (
      <Login
        onLoginGoogle={this.props.onLoginGoogle}
        onLoginInstagram={this.props.onLoginInstagram}
        onLoginGithub={this.props.onLoginGithub}
        onLoginInternal={this.props.onLoginInternal}
      />
    );
  }
}

LoginContainer.propTypes = {
  onLoginInternal: PropTypes.func.isRequired,
  onLoginInstagram: PropTypes.func.isRequired,
  onLoginGoogle: PropTypes.func.isRequired,
  onLoginGithub: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  logincontainer: makeSelectLoginContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoginInternal: () => dispatch(loginInternal()),
    onLoginInstagram: () => dispatch(loginInstagram()),
    onLoginGoogle: () => dispatch(loginGoogle()),
    onLoginGithub: () => dispatch(loginGithub()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginContainer', reducer });
const withSaga = injectSaga({ key: 'loginContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginContainer);
