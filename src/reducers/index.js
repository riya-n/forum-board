import { combineReducers } from 'redux';

import comments from './comments';
import votes from './votes';

export default combineReducers({
  comments,
  votes,
});
