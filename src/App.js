import React, { Component } from 'react'
import './App.css'
import Home from './Pages/Home'
import Creator from './Pages/Creator'
import Browse from './Pages/Browse'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Browse />
      </div>
    )
  }
}

export default App
