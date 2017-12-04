import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {inject, observer } from 'mobx-react'

@inject("store")
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.storeMobx = this.props.store
    this.state = {
      valueMe : '',
      valueMe2 : ''
    };
  }
  render() {
    // const store = this.storeMobx
    const {store} = this.props
    return (

      <div className="columns">
        <div className="column is-8 is-offset-2">
      <section className="hero is-danger component-part">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
                {store.project}
            </h1>
           <h2 className="subtitle">
             <div className="columns">
               <div className="column is-8">
               <h1 className="title">
                  price is  {store.price1} , vat is {store.vat1}
               </h1>
               <h1 className="title">
                   total price {store.total}
               </h1>
                  <input className="input is-dark" value={store.price1} onChange={(e) => store.todos(e.target.value)} type="number" placeholder="Text input"/>
                  <input className="input is-dark" value={store.vat1} onChange={(e) => store.todos2(e.target.value)} type="number" placeholder="Text input"/>
                  <button className="button is-info" onClick={(e) => store.todoKamal(e)}>Click</button>
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
Home.propTypes = {
  price1: PropTypes.number,
  vat1: PropTypes.number
}
export default Home
