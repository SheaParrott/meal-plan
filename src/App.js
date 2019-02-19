import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import Creator from './Creator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Creator />
      </div>
    )
  }
}

export default App
