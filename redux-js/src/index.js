import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer'
import * as actions from './actions'

let store = createStore(reducer)
const { dispatch } = store
const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

document
  .getElementById('inc')
  .addEventListener('click', inc)

document
  .getElementById('dec')
  .addEventListener('click', dec)

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const rndValue = Math.floor(Math.random()*10)
    rnd(rndValue)
  })

const updateCounter = () => {
  document.getElementById('counter')
  .innerHTML = store.getState()
}

updateCounter()
store.subscribe(updateCounter)