
import {observable,action,computed} from 'mobx'
class MyComponent{
    @observable name = "yo guys"
    @observable title = "kamal the boss"
    @observable price = 20
    @observable vat = 15


    @computed get total() {
      return this.price = this.price + this.vat
    }

    @action todos(newVat) {
      this.price =  newVat
    }
}


// var store = window.store = new MyComponent
//
// export default store
// window.__STATE = new State(window.__STATE)

export default window.__STATE = new MyComponent(window.__STATE)
