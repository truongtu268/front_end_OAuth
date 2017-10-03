/* eslint-disable linebreak-style */
/**
 *
 * Asynchronously loads the component for Oauth
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
