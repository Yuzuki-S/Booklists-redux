

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux' //{one variable} = you can use this as a function
import allReducers from './reducers'
import './index.css';
import App from './components/app'

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//createStore is all my application states/data. This is going to be changed by not by coding

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}> 
      <App />
    </Provider>,
    document.getElementById('root')
  )
})
