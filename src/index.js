import React from 'react';
import ReactDom from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';

import './styles.css';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
