import React, { Component } from 'react';
import Img from './assets/logo1.png'

import { Redirect, Link, Route, Switch } from 'react-router-dom'
import Routes from './routes'
class App extends Component {
  render() {
    return (
      <div className="mk">
      <nav className="navbar is-dark">
  <div className="navbar-brand">
    <Link className="navbar-item logo-mk" to="/">code4mk.org</Link>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to="/bind">Bind</Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link" to="/">React</Link>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" to="/component1">Component1</Link>
          <Link className="navbar-item" to="/component2">Component2</Link>
          <Link className="navbar-item" to="/condition1">Condition1</Link>
          <Link className="navbar-item" to="/condition2">Condition2</Link>
          <Link className="navbar-item" to="/condition3">Condition3</Link>
          <Link className="navbar-item" to="/event">Event</Link>
          <Link className="navbar-item" to="/form1">Form1</Link>
          <Link className="navbar-item" to="/form2">Form2</Link>
          <Link className="navbar-item" to="/list">List</Link>
          <hr className="navbar-divider"/>
          <Link className="navbar-item" to="/props1">Props1</Link>
            <Link className="navbar-item" to="/refs1">Refs1</Link>
          <Link className="navbar-item" to="/refs2">Refs2</Link>
        </div>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link" to="/">Redux</Link>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" to="/component1">Component1</Link>
        </div>
      </div>

      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link" to="/">mobX</Link>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" to="/template1">template one</Link>
          <Link className="navbar-item" to="/template2">template two</Link>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button"   href="https://twitter.com/code4mk">
              <span className="icon">
                <i className="fa fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary" href="https://github.com/code4mk/react-redux-boss/archive/1.0.0.zip">
              <span className="icon">
                <i className="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>

<div>
  <Routes/>
</div>

      </div>

    );
  }
}

export default App
