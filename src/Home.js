import React, { Component } from 'react'
import front from './assets/front.jpg'
import AddOrRemoveForm from './AddOrRemoveForm'

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
    // can add a form reset here later on
  }
  render() {
    return (
      <div className="wrapper">
        <h1>Meal Plan</h1>
        <nav>
          <div className="categoriesBar">
            <h4 className="homeButton white">HOME</h4>
            <h4 className="homeButton white">CATEGORIES</h4>
          </div>
          <div className="centerLine">
            <div className="line" />
          </div>
          <div>
            <input className="Search" placeholder="search here!" />
            <button type="submit">Submit</button>
          </div>
          <div className="advancedSearch">
            <div className="categories " onClick={this.showCategories}>
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
          </div>
          <span
            className={`categoriesBar ${
              this.state.categoriesBar ? '' : 'hidden'
            }`}
          >
            <div className="searchOptionsForm">
              {<AddOrRemoveForm name="Categories" showOptions={true} />}
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
            <section className="searchOptionsForm">
              {
                <AddOrRemoveForm
                  name="Remove Ingredients"
                  showOptions={false}
                />
              }
            </section>
          </span>
        </nav>
        <div className="navSpacing" />
        <img className="home" src={front} alt="cover" />
        <footer>
          <p className="white">Creator</p>
          <p className="white">&copy;SheaParrott</p>
        </footer>
      </div>
    )
  }
}

export default Home
