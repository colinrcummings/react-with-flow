// @flow
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App';

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(<App />, root);
}
