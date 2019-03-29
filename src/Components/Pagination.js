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
      `&from=${(this.props.page - 1) * 10}` +
      `&to=${(this.props.page - 1) * 10 + 12}`

    this.props._pagination(params)
    history.push(`/browse/${params}`)
    window.scrollTo(0, 0)
  }
  render() {
    if (this.props.page >= 9) {
      return <div />
    }

    let array = this.props.from.from.toString().split('')
    let currentPage =
      parseInt(this.props.from.from) < 1
        ? 1
        : parseInt(
            array
              .slice(0, array.length - 1)
              .reduce((accumulator, currentValue) => accumulator + currentValue)
          ) + 1
    return (
      <p
        className={`pagination white-hv ${
          currentPage == this.props.page ? 'currentPage' : ''
        }`}
        onClick={this._pagination}
      >
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
  // paramsWithoutPagination: state.paramsWithoutPagination
})
const mapActionsToProps = {
  _pagination: getRecipes
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Pagination)
