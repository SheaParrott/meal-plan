import React, { Component } from 'react'
import AddOrRemoveForm from '../Components/AddOrRemoveForm'
import NumberInputs from '../Components/NumberInputs'
import { connect } from 'react-redux'
import { getRecipes } from '../Actions/SearchActions'

class AdvancedSearch extends Component {
  constructor(props) {
    super(props)
    //bind the dispatch function
    this._searchRecipe = this._searchRecipe.bind(this)
    this.state = {
      categoriesBar: false,
      url: ''
    }
  }

  // onUpdateStateCurrentDay() {
  //my dispatch
  //   this.props.onUpdateStateCurrentDay(this.setDateChosen())
  // }
  showCategories = () => {
    this.setState({
      categoriesBar: !this.state.categoriesBar
    })
    // can add a form reset here later on
  }
  _searchRecipe = event => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    // let array = [this.props.date_id]
    // for (let pair of formData.entries()) {
    //   array.push(pair[1])
    // }
    let value = ''
    for (let pair of formData.entries()) {
      value = pair[1]
    }
    console.log(value)
    // let obj = { URL: this.props.defaultURL, value: event.target.value }
    // console.log('newOBJ: ' + obj)
    // console.log(this.props.defaultURL)
    this.props._searchRecipe({ url: this.props.defaultURL, value: value })
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
            {/* START - will use this instead */}
            {/* <select>
              {this.props.healthLabels
                .concat(this.props.dietLabels)
                .map(option => {
                  return <option>{option}</option>
                })}
            </select>
            <button>Add</button> */}
            {/* END */}
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

        <form onSubmit={this._searchRecipe}>
          <input
            className="Search"
            name="recipe"
            placeholder="Keywords / Recipees!"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  defaultURL: state.defaultURL
  // months: state.months,
  // map out state
})

const mapActionsToProps = {
  _searchRecipe: getRecipes
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AdvancedSearch)
