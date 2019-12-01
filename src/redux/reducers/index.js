import { combineReducers } from 'redux';

import setting from './setting';
import home from './home';
import auth from './auth';
import detail from './detail';

export default combineReducers({
  setting,
  home,
  auth,
  detail
});
