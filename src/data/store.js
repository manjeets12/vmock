
var {applyMiddleware, createStore} = require('redux');
import ReduxThunk from 'redux-thunk'

import rootReducer from './reducers';

var createVmockStore = applyMiddleware(ReduxThunk)(createStore);

function configureStore() {
  const store = createVmockStore(rootReducer);
  return store;
}
module.exports = configureStore;
