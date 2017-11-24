import React, { Component } from 'react'

class ParentComponent extends Component {
  render() {
    return (
      <section className="hero is-success">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
                This is Child Component
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
      </section>
    );
  }
}
export default ParentComponent
