import React, { Component } from 'react'

class EventComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 2,
      btn: 'is-primary',
      btn2: 'is-primary'
    };
  }
  onClick1() {
    this.setState((prevState, props) => ({
      number: prevState.number += 10,
      btn2: 'is-info'
    }));
  }
  onClick2() {
    this.setState((prevState, props) => ({
      number: prevState.number -= 10,
      btn: 'is-dark'
    }));
  }
  render() {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
        <section className="hero is-danger component-part">
          <div className="hero-body">
            <div className="container">
            <h1><strong>The Number is {this.state.number}</strong></h1>
            <a className={"button btn-getreact is-outlined " + " " + this.state.btn2} onClick={(e) => this.onClick1()}>Increase</a>
            <a className={"button btn-getreact is-outlined " + " " + this.state.btn} onClick={(e) => this.onClick2()}>Decrease</a>
            </div>
          </div>
        </section>


        </div>
      </div>
    );
  }
}
export default EventComponent
