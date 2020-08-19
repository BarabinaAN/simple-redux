import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'
import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer'
import * as actions from './actions'

let store = createStore(reducer)
const { dispatch } = store
const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

const updateCounter = () => {
  ReactDOM.render( 
    <Counter
      counter={store.getState()}
      dec={dec}
      inc={inc} 
      rnd={() => {
        const rndValue = Math.floor(Math.random()*10)
        rnd(rndValue)
      }}
    />, 
    document.getElementById('root')
  )
}

updateCounter()
store.subscribe(updateCounter)