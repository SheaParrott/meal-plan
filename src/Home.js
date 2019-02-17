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
      <div className="wrapper">
        <h1>Meal Plan</h1>
        <nav>
          <div>
            <input placeholder="search here!" />
            <button>submit</button>
          </div>
          <div className="categories" onClick={this.showCategories}>
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
            className={`categoriesBar ${
              this.state.categoriesBar ? '' : 'hidden'
            }`}
          >
            <h4 className="white">Vegetarian</h4>
            <h4 className="white">Vegan</h4>
            <h4 className="white">Low-Cal</h4>
            <h4 className="white">Nut-free</h4>
          </span>
        </nav>
        <div className="navSpacing" />
        <img className="home" src={front} alt="cover" />
        <footer>
          <p className="white">Creator</p>
          <p className="white">Home</p>
          <p className="white">&copy;SheaParrott</p>
        </footer>
      </div>
    )
  }
}

export default Home
