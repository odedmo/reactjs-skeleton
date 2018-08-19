/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import { loadCourses } from './actions/courseActions';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
