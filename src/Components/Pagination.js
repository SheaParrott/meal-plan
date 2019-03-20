import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from './history'
import { getRecipes } from '../Actions/SearchActions'

class Pagination extends Component {
  constructor(props) {
    super(props)
    this._pagination = this._pagination.bind(this)
  }
  _pagination = event => {
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
      string +
      `&from=${(this.props.page - 1) * 10}`

    this.props._pagination(params)
    history.push(`/browse/${params}`)
    window.scrollTo(0, 0)
  }
  render() {
    if (this.props.page >= 11) {
      return <div />
    }
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
      string +
      this.props.from.param

    return (
      <p className="pagination white-hv" onClick={this._pagination}>
        {this.props.page}
      </p>
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
  from: state.from
})
const mapActionsToProps = {
  _pagination: getRecipes
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Pagination)
