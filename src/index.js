import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import Home from './components/Home';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
