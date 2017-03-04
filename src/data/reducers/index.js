

var{ combineReducers } = require('redux');

import user from './user';

const rootReducer = combineReducers({
  user,
});

export default rootReducer