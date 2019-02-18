import React, { Component } from 'react'
import front from './assets/front.jpg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesBar: false,
      healthLabels: [
        'vegan',
        'vegetarian',
        'paleo',
        'dairy-free',
        'gluten-free',
        'wheat-free',
        'fat-free',
        'low-sugar',
        'egg-free',
        'peanut-free',
        'tree-nut-free',
        'soy-free',
        'fish-free',
        'shellfish-free'
      ],
      dietLabels: [
        'balanced',
        'high-protein',
        'high-fiber',
        'low-fat',
        'low-carb',
        'low-sodium'
      ],
      showInputLabels: [],
      selectedLabels: []
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
            <input className="Search" placeholder="search here!" />
            <button>submit</button>
          </div>
          <div className="categories" onClick={this.showCategories}>
            <h4>Advanced search</h4>
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
            <div className="searchOptions">
              <label>Labels: </label>
              <input type="text" list="labels" />
              <datalist id="labels">
                {this.state.healthLabels
                  .concat(this.state.dietLabels)
                  .map((tag, index) => {
                    return <option key={index}>{tag}</option>
                  })}
              </datalist>

              <div className="displayedLabelbox">
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">tag</p>
                </div>
              </div>
            </div>
            <section className="CaloriesAndCookTime">
              <section className="searchOptions">
                <div>
                  <label>Calories:</label>
                </div>
                <input
                  className="numberInput"
                  type="number"
                  placeholder="any"
                />
                <span>to</span>
                <input
                  className="numberInput"
                  type="number"
                  placeholder="any"
                />
              </section>
              <section className="searchOptions">
                <div>
                  <label>Cook Time: </label>
                </div>
                <input
                  className="numberInput"
                  type="number"
                  placeholder="any"
                />
                <span>to</span>
                <input
                  className="numberInput"
                  type="number"
                  placeholder="any"
                />
              </section>
            </section>
            <section className="searchOptions">
              <label>Max ingredients: </label>
              <input className="numberInput" type="number" placeholder="any" />
            </section>
            <div className="line" />
            <section className="searchOptions">
              <label>Exclude: </label>
              <input placeholder="ingredient" />
              <div className="displayedLabelbox">
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">ingrediant</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">ingrediant</p>
                </div>
                <div className="displayedLabel">
                  <i className="fas fa-times" />
                  <p className="Label">ingrediant</p>
                </div>
              </div>
            </section>
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
