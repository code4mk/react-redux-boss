import React, { Component } from 'react'
import { Redirect, Link, Route, Switch } from 'react-router-dom'

import Home from '../components/react/home/Home'
import Condition1 from '../components/react/condition/Condition'
import Condition2 from '../components/react/condition/Condition2'
import Condition3 from '../components/react/condition/Condition3'
import Form1 from '../components/react/form/InputForm'
import Form2 from '../components/react/form/SelectForm'
import List from '../components/react/list/List'
import Props1 from '../components/react/props/parent-to-child/ParentComponent'
import Event from '../components/react/event/EventComponent'
import Refs1 from '../components/react/refs/refsComponent'
import Refs2 from '../components/react/refs/refsComponent2'
import Bind from '../components/react/bind/ClassBind'
import Component2 from '../components/react/components/children-element/ParentComponent'
import Component1 from '../components/react/components/default/ParentComponent'

class routes extends Component {
    render() {
      return (
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
      )
    }
  }
  export default routes
