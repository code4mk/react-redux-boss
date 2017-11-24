import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React Redux Boss'
    };
  }
  render() {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
        <section className="hero is-danger home-part">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                  {this.state.title}
              </h1>
             <h2 className="subtitle">
               <div className="columns">
                 <div className="column is-8">
                   <h2>A mini Boilerplate with webpack</h2>
                    Powered By~ <a href="https://twitter.com/code4mk">@code4mk</a>
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
