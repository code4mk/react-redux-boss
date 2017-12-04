
import {observable,action,computed} from 'mobx'
import PropTypes from 'prop-types'
class MyComponent{
    @observable project = "mobx project"
    @observable title = "kamal the boss"
    @observable price1 = 20
    @observable vat1 = 15
    @observable totalPrice = []

    @computed get total() {
      // let self = this
      return this.price1 + this.vat1
    }

    @action todos(value) {
    return  this.price1 =  value
    }
    @action todos2(value) {
    return  this.vat1 =  value
    }
    @action todoKamal() {
      return(
        this.project = `Awesome project`
      )
    }
}


// var store = window.store = new MyComponent
//
// export default store
// window.__STATE = new State(window.__STATE)
MyComponent.propTypes = {
  totalPrice: PropTypes.number,
  price1: PropTypes.number,
  vat1: PropTypes.number
}
export default window.__STATE = new MyComponent(window.__STATE)
