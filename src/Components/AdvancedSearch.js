import React, { Component } from 'react'
import AddOrRemoveForm from '../Components/AddOrRemoveForm'
import NumberInputs from '../Components/NumberInputs'
import { connect } from 'react-redux'
import { SearchedRecipe } from '../Actions/SearchActions'
import { Link } from 'react-router-dom'
import Header from './Header'

class AdvancedSearch extends Component {
  constructor(props) {
    super(props)
    this._SearchedRecipe = this._SearchedRecipe.bind(this)
    this.state = {
      categoriesBar: false,
      numberError: '',
      recipeFieldError: ''
    }
  }
  _numberError = value => {
    if (value == this.state.error) {
      return
    }
    this.setState({
      numberError: value
    })
  }

  showCategories = () => {
    this.setState({
      categoriesBar: !this.state.categoriesBar
    })
  }

  _SearchedRecipe = event => {
    this.props._SearchedRecipe(event.target.value)
  }

  _recipeFieldError = () => {
    this.setState({ recipeFieldError: '' })
  }
  render() {
    let string = ''
    this.props.categories
      .concat(this.props.removedIngredients)
      .forEach(category => {
        string += category.param
      })
    let params =
      this.props.SearchedRecipe.param +
      this.props.calories.params +
      this.props.cookTime.params +
      this.props.maxIngredients.params +
      string
    return (
      <div>
        <div>
          <h1>Meal Plan</h1>
          <nav>
            <Header />
            <div className="centerLine">
              <div className="line" />
            </div>
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
                {' '}
                <button
                  className="advancedSearchButton"
                  onClick={this.props._resetAllSearchFields}
                >
                  Reset Fields
                </button>
                <div className="searchOptionsForm">
                  {<AddOrRemoveForm name="Categories" showOptions={true} />}
                </div>
                <h6 className="red">{this.state.numberError}</h6>
                <section className="CaloriesAndCookTime">
                  <section className="searchOptions">
                    <div className="label">
                      <label>Calories:</label>
                    </div>
                    <NumberInputs
                      ingredient={false}
                      label="calories"
                      _numberError={this._numberError}
                      errorIsTrue={this.state.numberError ? true : false}
                    />
                  </section>
                  <section className="searchOptions">
                    <div className="label">
                      <label>Cook Time: </label>
                    </div>
                    <NumberInputs
                      ingredient={false}
                      label="cookTime"
                      _numberError={this._numberError}
                      errorIsTrue={this.state.numberError ? true : false}
                    />
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
              <h6 className="red">{this.state.recipeFieldError}</h6>
              <input
                onChange={this._SearchedRecipe}
                className="Search"
                name="recipe"
                placeholder="Keywords / Recipees!"
              />
              {this.props.SearchedRecipe.value && this.state.recipeFieldError
                ? this._recipeFieldError()
                : null}
              {this.props.SearchedRecipe.value ? (
                <Link to={`/browse/${params}`}>
                  <button className="advancedSearchButton">Submit</button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    this.setState({ recipeFieldError: 'Cant be empty!' })
                  }}
                  className="advancedSearchButton"
                >
                  Submit
                </button>
              )}
            </div>
          </nav>
          <div className="navSpacing" />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  defaultURL: state.defaultURL,
  SearchedRecipe: state.SearchedRecipe,
  calories: state.calories,
  cookTime: state.cookTime,
  maxIngredients: state.maxIngredients,
  categories: state.categories,
  removedIngredients: state.removedIngredients

  // months: state.months,
  // map out state
})

const mapActionsToProps = {
  _SearchedRecipe: SearchedRecipe
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AdvancedSearch)
