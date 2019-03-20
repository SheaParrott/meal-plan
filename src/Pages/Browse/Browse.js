import React, { Component } from 'react'
import Recipe from '../../Components/Recipe'
import { connect } from 'react-redux'
import { getRecipes } from '../../Actions/SearchActions'
import Header from '../../Components/Header'
import Loading from '../../Components/Loading'
import Pagination from '../../Components/Pagination'
import history from '../../Components/history'
import './style.css'

class Browse extends Component {
  constructor(props) {
    super(props)
    this._searchRecipe = this._searchRecipe.bind(this)
    this._PaginationArrowBack = this._PaginationArrowBack.bind(this)
    this._PaginationArrowForward = this._PaginationArrowForward.bind(this)
  }
  componentDidMount = () => {
    window.scrollTo(0, 0)
    this._searchRecipe()
  }
  _searchRecipe = event => {
    this.props._searchRecipe(this.props.match.params.url_params)
  }

  _PaginationArrowBack = () => {
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
      `&from=${parseInt(this.props.from.from) - 10}`
    this.props._PaginationArrowBack(params)
    history.push(`/browse/${params}`)
    window.scrollTo(0, 0)
  }
  _PaginationArrowForward = () => {
    if (this.props.from.from >= 90) {
      return
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
      `&from=${parseInt(this.props.from.from) + 10}`
    this.props._PaginationArrowForward(params)
    history.push(`/browse/${params}`)
    window.scrollTo(0, 0)
  }

  render() {
    if (this.props.hits.length <= 0) {
      return (
        <div>
          <nav>
            <h1 className="basicHeader">Meal Plan</h1>
            <Header />
          </nav>
          <Loading />
        </div>
      )
    } else if (this.props.hits[0] === 'No Results') {
      return (
        <div>
          <nav>
            <h1 className="basicHeader">Meal Plan</h1>
            <Header />
          </nav>
          <h2 className="uppercase noResults">No Results</h2>
          <div className="centerLine">
            <div className="line" />
          </div>
        </div>
      )
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
    let PaginationArray = this.props.pages
      ? parseInt(this.props.from.from) < 1
        ? this.props.pages.slice(0, 5)
        : this.props.pages.slice(
            parseInt(this.props.from.from.toString().slice(0, -1)),
            parseInt(this.props.from.from.toString().slice(0, -1)) + 5
          )
      : []

    return (
      <div>
        <nav>
          <h1 className="basicHeader">Meal Plan</h1>
          <Header />
        </nav>
        <div className="spacingFromNav" />
        <div>
          <h2 className="uppercase">{this.props.q} Results</h2>
          <div className="centerLine">
            <div className="line" />
          </div>
          <main className="browseCentering">
            <div>
              {this.props.hits.map((hit, index) => {
                return <Recipe key={hit + index} hit={hit} />
              })}
            </div>
          </main>
          <div className="browse">
            <i
              className="fas fa-chevron-left white-hv"
              onClick={this._PaginationArrowBack}
            />

            {PaginationArray.map((page, index) => {
              return (
                <Pagination
                  key={index}
                  page={page}
                  params={params}
                  _searchRecipe={this._searchRecipe}
                />
              )
            })}
            <i
              className="fas fa-chevron-right white-hv"
              onClick={this._PaginationArrowForward}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count,
  to: state.to,
  more: state.more,
  q: state.q,
  hits: state.hits,
  pages: state.pages,
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
  _searchRecipe: getRecipes,
  _PaginationArrowBack: getRecipes,
  _PaginationArrowForward: getRecipes
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Browse)
