import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
        <section className="hero is-danger component-part">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                  This is Parent Component
              </h1>
             <h2 className="subtitle">
               <div className="columns">
                 <div className="column is-8">
                  <h1><strong>This is Parent Component</strong></h1>
                 </div>
               </div>
             </h2>
            </div>
          </div>
          <ChildComponent/>
        </section>
        </div>
      </div>
    );
  }
}
export default ParentComponent
