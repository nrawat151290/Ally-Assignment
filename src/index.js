import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Routes from './Routes';
import store from './ConfigureStore';
import { GlobalErrorHandler } from './Components/ComponentsRepository';
import './Styles/reset.css';
import './Styles/common.css';
import './Styles/typography.css';

ReactDOM.render(
  <Provider store={store}>
    <GlobalErrorHandler>
      <Routes />
    </GlobalErrorHandler>
  </Provider >
  ,
  document.getElementById('root')
);
