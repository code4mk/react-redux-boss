import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meClass: 'hero is-danger',
    };
  }
  render() {
    return (

      <div className="columns">
        <div className="column is-8 is-offset-2">
      <section className="hero is-danger component-part">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
                {this.state.title}
            </h1>
           <h2 className="subtitle">
             <div className="columns">
               <div className="column is-8">
                  <input className="input is-dark" value={this.state.meClass} onChange={(e) => {this.setState({meClass: e.target.value})}} type="text" placeholder="Text input"/>
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
export default Home
