/**
 *
 * Asynchronously loads the component for LoginProviderContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
