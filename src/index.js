import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/shared.css';
import { Provider } from 'react-redux';
import store from './store/rootReducer';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
