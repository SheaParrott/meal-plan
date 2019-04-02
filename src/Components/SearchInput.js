import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchedRecipe } from '../Actions/SearchActions'
import history from './history'
import { Link } from 'react-router-dom'

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this._SearchedRecipe = this._SearchedRecipe.bind(this)
    this.state = {
      categoriesBar: false,
      numberError: '',
      recipeFieldError: ''
    }
  }
  _SearchedRecipe = event => {
    this.props._SearchedRecipe(event.target.value)
  }
  render() {
    return (
      <div>
        {' '}
        <h6 className="red">{this.state.recipeFieldError}</h6>
        <div className="centerInputAndButton">
          <div className="alignInputAndButton">
            <input
              onChange={this._SearchedRecipe}
              className="Search search-add-input"
              name="recipe"
              placeholder="  Recipes"
              value={this.props.SearchedRecipe.value}
            />
            {this.props.SearchedRecipe.value && this.state.recipeFieldError
              ? this._recipeFieldError()
              : null}
            {this.props.SearchedRecipe.value ? (
              this.props.browsePage ? (
                <button
                  onClick={() => {
                    history.push(`/results/${this.props.paramsWithPagination}`)
                    this.props._newSearchRecipe(this.props.paramsWithPagination)
                  }}
                  className="advancedSearchButton negativeMargin"
                >
                  <i class="fas fa-search" />
                </button>
              ) : (
                <Link to={`/results/${this.props.paramsWithPagination}`}>
                  <button className="advancedSearchButton negativeMargin">
                    <i class="fas fa-search" />
                  </button>
                </Link>
              )
            ) : (
              <button
                onClick={() => {
                  this.setState({ recipeFieldError: 'Cant be empty!' })
                }}
                className="advancedSearchButton negativeMargin"
              >
                <i class="fas fa-search" />
              </button>
            )}
          </div>
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
  removedIngredients: state.removedIngredients,
  from: state.from,
  toParam: state.toParam,
  paramsWithPagination: state.paramsWithPagination,
  paramsWithoutPagination: state.paramsWithoutPagination
})

const mapActionsToProps = {
  _SearchedRecipe: SearchedRecipe
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SearchInput)
