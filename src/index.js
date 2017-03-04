import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import './index.css';
//import rootReducer from './data/reducers';
import configureStore from './data/store';

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
