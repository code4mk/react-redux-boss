import React, { Component } from 'react'

class ClassBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 2,
      meClass: 'hero is-danger',
      inputClass: 'input is-dark',
      inputClass2: 'input is-danger'
    };
  }
  render() {
    return (
      <div className="columns ">
        <div className="column is-8 is-offset-2 ">
        <section className={"bind-part" + " " + this.state.meClass}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                  Primary title >>> {this.state.meClass}
              </h1>
             <h2 className="subtitle">
               <div className="columns">
                 <div className="column is-8">
                   <input className={this.state.meClass === 'hero is-danger'? this.state.inputClass : this.state.inputClass2} value={this.state.meClass} onChange={(e) => {this.setState({meClass: e.target.value})}} type="text" placeholder="Text input"/>
                 </div>
               </div>
             </h2>
            </div>
          </div>
        </section>
        </div>
      </div>
    );
  }
}
export default ClassBind
