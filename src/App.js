import React, { Component } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Creator from './Pages/Creator/Creator'
import Browse from './Pages/Browse/Browse'
import { Route } from 'react-router-dom'
import RecipePage from './Pages/RecipePage/RecipePage'
import About from './Pages/About/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/browse/:url_params" component={Browse} />
        <Route path="/creator" component={Creator} />
        <Route path="/recipe/:uri" component={RecipePage} />
      </div>
    )
  }
}

export default App

// to do:
// [] highlight page number currently on
// [] extend advanced search bar to all pages that work with the recipes
// [] refactor single recipe page to have info to the side of the image for desktop view
// [x] add validation to prevent the same categories chosen twice
// [] (tough one, will consult someone about this) add guard clause to number inputs that prevents 'e' from getting added.
//    - type of not number return
// [] start the week recipe planner
//    - [] create a page where recipe can be saved to certain days and times
//    - [] add a export to pdf option
