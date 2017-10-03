/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import { validateAccessToken } from './actions';
import PrivateResource from '../../components/PrivateResource/Loadable';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.onValidateAccessToken();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PrivateResource} />
      </Switch>
    );
  }
}

Home.propTypes = {
  onValidateAccessToken: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    onValidateAccessToken: () => dispatch(validateAccessToken()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
