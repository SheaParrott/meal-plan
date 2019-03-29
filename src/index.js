import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import { BrowserRouter as Router } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import SearchReducer from './Reducers/SearchReducer'

const middleware = applyMiddleware(logger, ReduxThunk)

// window.devToolsExtension && window.devToolsExtension()

const store = createStore(
  SearchReducer,
  {
    defaultURL:
      'https://api.edamam.com/search?app_id=4bef2681&app_key=96c8eeccc18628d4b898f8264781b999',
    SearchedRecipe: { value: '', param: '' },
    calories: { min: '', max: '', params: '' },
    cookTime: { min: '', max: '', params: '' },
    maxIngredients: { max: '', params: '' },
    categories: [],
    removedIngredients: [],
    results: {},
    count: '',
    from: { from: 0, param: `&from=0` },
    toParam: { toParam: 12, param: `&to=12` },
    more: '',
    hits: [],
    pages: 0,
    recipe: [],
    healthLabels: ['vegan', 'vegetarian', 'peanut-free', 'tree-nut-free'],
    dietLabels: ['balanced', 'high-protein', 'low-fat', 'low-carb'],
    paramsWithoutPagination: '',
    paramsWithPagination: ''
  },
  middleware
)
store.subscribe(() => {
  console.log('store changed', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
