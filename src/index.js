/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';
// import routes from './routes';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

render(
  <BrowserRouter history={browserHistory}>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
);
