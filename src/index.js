import React from 'react';
import ReactDom from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(<App />, document.querySelector('#root'));
