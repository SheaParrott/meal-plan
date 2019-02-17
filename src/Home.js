import React, { Component } from 'react'
import front from './assets/front.jpg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesBar: false
    }
  }
  showCategories = () => {
    this.setState({
      categoriesBar: !this.state.categoriesBar
    })
  }
  render() {
    return (
      <div>
        <h1>Meal Plan</h1>
        <nav>
          <div>
            <input placeholder="search here!" />
            <button>submit</button>
          </div>
          <div className="tooltip">
            <div onClick={this.showCategories}>
              <h4>Categories</h4>
              <i
                className={`fas fa-angle-down ${
                  this.state.categoriesBar ? 'hidden' : ''
                }`}
              />
              <i
                className={` fas fa-angle-up ${
                  this.state.categoriesBar ? '' : 'hidden'
                }`}
              />
            </div>
            <span
              className={`tooltiptext categories ${
                this.state.categoriesBar ? '' : 'hidden'
              }`}
            >
              <h4>Vegetarian</h4>
              <h4>Vegan</h4>
              <h4>Low-Cal</h4>
              <h4>Nut-free</h4>
            </span>
          </div>
        </nav>
        <img className="home" src={front} alt="cover" />
        <footer>
          <p>Creator</p>
          <p>Home</p>
          <p>&copy;SheaParrott</p>
        </footer>
      </div>
    )
  }
}

export default Home
