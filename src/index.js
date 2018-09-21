/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import App from './components/App';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
