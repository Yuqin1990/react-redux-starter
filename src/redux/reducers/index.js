import { combineReducers } from 'redux';
import { status } from './status';
import { history } from './history';

export default combineReducers({
  status,
  history
});
