/* eslint-disable linebreak-style */
/**
 *
 * Asynchronously loads the component for InternalProvider
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
