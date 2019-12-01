import { combineReducers } from 'redux';

import setting from './setting';
import home from './home';
import auth from './auth';

export default combineReducers({
  setting,
  home,
  auth
});
