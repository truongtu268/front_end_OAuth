/**
 *
 * Asynchronously loads the component for LoginMain
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
