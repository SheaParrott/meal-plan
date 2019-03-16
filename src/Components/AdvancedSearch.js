import React, { Component } from 'react'
import AddOrRemoveForm from '../Components/AddOrRemoveForm'
import NumberInputs from '../Components/NumberInputs'

class AdvancedSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesBar: false,
      url: ''
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
      <div>
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
            {
              <AddOrRemoveForm
                healthLabels={this.props.healthLabels}
                dietLabels={this.props.dietLabels}
                name="Categories"
                showOptions={true}
              />
            }
          </div>
          <section className="CaloriesAndCookTime">
            <section className="searchOptions">
              <div className="label">
                <label>Calories:</label>
              </div>
              <NumberInputs ingredient={false} label="calories" />
            </section>
            <section className="searchOptions">
              <div className="label">
                <label>Cook Time: </label>
              </div>
              <NumberInputs ingredient={false} label="cookTime" />
            </section>
          </section>
          <section className="searchOptions row">
            <div className="label">
              <label>Max ingredients: </label>
            </div>
            <NumberInputs ingredient={true} label="maxIngredients" />
          </section>
          <div className="line" />
          <section className="searchOptionsForm">
            {
              <AddOrRemoveForm
                name="Remove Ingredients"
                label="removeIngredients"
                showOptions={false}
              />
            }
          </section>
          <div className="line" />
        </span>

        <div>
          <input className="Search" placeholder="Keywords / Recipees!" />
          <button type="submit">Submit</button>
        </div>
      </div>
    )
  }
}

export default AdvancedSearch
