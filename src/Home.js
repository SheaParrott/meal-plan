import React, { Component } from 'react'
import front from './assets/front.jpg'
import update from 'immutability-helper'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesBar: false,
      label: '',
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
  matchLabel = event => {
    this.setState({
      label: event.target.value,
      showInputLabels: this.state.healthLabels
        .concat(this.state.dietLabels)
        .filter(label => label.match(event.target.value))
    })
  }
  addSelectedLabel = event => {
    event.preventDefault()
    let form = event.target
    const formData = new FormData(form)
    for (let pair of formData.entries()) {
      this.setState(
        {
          selectedLabels: update(this.state.selectedLabels, {
            $push: [pair[1]]
          })
        },
        () => {
          console.log(this.state.selectedLabels)
        }
      )
    }
  }
  render() {
    return (
      <div className="wrapper">
        <button onClick={this.matchLabel}>test</button>
        <h1>Meal Plan</h1>
        <nav>
          <div>
            <input className="Search" placeholder="search here!" />
            <button type="submit">Submit</button>
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
              <form onSubmit={this.addSelectedLabel}>
                <label>Labels: </label>
                <input
                  onChange={this.matchLabel}
                  value={this.state.label}
                  name="label"
                  type="text"
                  list="labels"
                />
                <button type="submit">Submit</button>
                <datalist id="labels">
                  {this.state.showInputLabels.map((tag, index) => {
                    return <option key={index}>{tag}</option>
                  })}
                </datalist>
              </form>
              <div className="displayedLabelbox">
                {this.state.selectedLabels.map((value, index) => {
                  return (
                    <div key={index} className="displayedLabel">
                      <i className="fas fa-times" />
                      <p className="Label">{value}</p>
                    </div>
                  )
                })}
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
