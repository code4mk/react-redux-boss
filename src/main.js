import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import history from 'history/createBrowserHistory'
import './assets/css/color.scss'
import 'bulma/bulma.sass'
import App from './App'
import { Provider } from 'mobx-react'
import store from "./store/mobx";
import posts from "./store/mobx/Posts";

const stores = {
  store,
  posts
};
ReactDOM.render(

  // store={store}
  <Provider {...stores}>
  <BrowserRouter>
      <App/>
  </BrowserRouter>
  </Provider>,
    document.getElementById('root')
)
