import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {id: 1, title: "This is your webpack"},
        {id: 2, title: "This is your vue"},
        {id: 3, title: "This is your react"},
        {id: 4, title: "This is your angular"},
        {id: 5, title: "This is your ionic"},
        {id: 6, title: "This is your native"}
      ]
    };
  }
  render() {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
        <section className="hero is-danger form-part">
          <div className="hero-body">
            <div className="">
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
          <ChildComponent myPropsPosts={this.state.posts}>
            <h2> <strong>This Child element inside parent</strong> </h2>
          </ChildComponent>
        </section>
        </div>
      </div>
    );
  }
}
export default ParentComponent
