/**
 *
 * LoginProviderContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, FormGroup, ControlLabel, Form, FormControl, Grid, Row, Col } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginProviderContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loginProviderAction } from './actions';

export class LoginProviderContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }
  onUserNameChange(e) {
    this.setState({ username: e.target.value });
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  onLoginSubmit() {
    const loginInfo = {};
    loginInfo.username = this.state.username;
    loginInfo.password = this.state.password;
    this.props.onLoginInfo(loginInfo);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} mdPush={3}>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" onChange={this.onUserNameChange} />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" onChange={this.onPasswordChange} />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle="primary" onClick={this.onLoginSubmit}>
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

LoginProviderContainer.propTypes = {
  onLoginInfo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginprovidercontainer: makeSelectLoginProviderContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoginInfo: (loginInfo) => dispatch(loginProviderAction(loginInfo)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginProviderContainer', reducer });
const withSaga = injectSaga({ key: 'loginProviderContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginProviderContainer);
