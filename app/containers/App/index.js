/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Home from 'containers/Home/Loadable';
import Login from 'containers/LoginContainer/Loadable';
import OAuth from 'containers/Oauth/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/oauth/github" component={OAuth} />
        <Route exact path="/oauth/instagram" component={OAuth} />
        <Route exact path="/oauth/google" component={OAuth} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
