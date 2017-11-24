import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import history from 'history/createBrowserHistory'
import './assets/css/color.scss';
import 'bulma/bulma.sass'
import App from './App';
ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root')
)
