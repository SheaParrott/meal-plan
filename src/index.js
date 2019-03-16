import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import SearchReducer from './Reducers/SearchReducer'

// const logger = store => next => action => {
//   console.log('actionFired :' + action)
//   next(action)
// }

// const middleware = applyMiddleware(logger)

// store.subscribe(() => {
//   console.log('store changed', store.getState())
// })

const store = createStore(
  SearchReducer,
  {
    defaultURL:
      'https://api.edamam.com/search?app_id=4bef2681&app_key=96c8eeccc18628d4b898f8264781b999',
    searchURL: '',
    searched: '',
    categories: [], // selected labels given by api
    calories: { min: 0, max: 0 },
    maxIngredients: 0,
    removeIngredients: [],
    results: []
  },
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
