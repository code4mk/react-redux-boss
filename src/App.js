import React, { Component } from 'react';
import Img from './assets/logo1.png'

import { Redirect, Link, Route, Switch } from "react-router-dom"
import Home from './components/react/home/Home'
import Condition1 from './components/react/condition/Condition'
import Condition2 from './components/react/condition/Condition2'
import Condition3 from './components/react/condition/Condition3'
import Form1 from './components/react/form/InputForm'
import Form2 from './components/react/form/SelectForm'
import List from './components/react/list/List'
import Props1 from './components/react/props/parent-to-child/ParentComponent'
import Event from './components/react/event/EventComponent'
import Refs1 from './components/react/refs/refsComponent'
import Refs2 from './components/react/refs/refsComponent2'
import Bind from './components/react/bind/ClassBind'
import Component2 from './components/react/components/children-element/ParentComponent'
import Component1 from './components/react/components/default/ParentComponent.js'
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
<Switch>
  <Route   path="/home" component={Home}/>
  <Redirect exact from='/' to='/home'/>
  <Route path="/condition1" component={Condition1} />
  <Route path="/condition2" component={Condition2} />
  <Route path="/condition3" component={Condition3} />
  <Route path="/form1" component={Form1}/>
  <Route path="/form2" component={Form2}/>
  <Route path="/event" component={Event} />
  <Route path="/props1" component={Props1}/>
  <Route path="/refs1" component={Refs1} />
  <Route path="/refs2" component={Refs2} />
  <Route path="/list" component={List}/>
  <Route path="/bind" component={Bind}/>
  <Route path="/component1" component={Component1}/>
  <Route path="/component2" component={Component2}/>
</Switch>

</div>

      </div>

    );
  }
}

export default App
