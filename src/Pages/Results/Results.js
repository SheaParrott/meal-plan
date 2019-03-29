import React, { Component } from 'react'
import Recipe from '../../Components/Recipe'
import { connect } from 'react-redux'
import { getRecipes } from '../../Actions/SearchActions'
import Loading from '../../Components/Loading'
import Pagination from '../../Components/Pagination'
import history from '../../Components/history'
import './style.css'
import Footer from '../../Components/Footer'
import ErrorMessage from '../../Components/ErrorMessage'
import AdvancedSearch from '../../Components/AdvancedSearch'

class Results extends Component {
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
  _newSearchRecipe = params => {
    this.props._newSearchRecipe(params)
  }

  _PaginationArrowBack = () => {
    let params =
      this.props.paramsWithoutPagination +
      `&from=${parseInt(this.props.from.from) - 10}` +
      `&to=${parseInt(this.props.toParam.toParam) - 10}`
    this.props._PaginationArrowBack(params)
    history.push(`/results/${params}`)
    window.scrollTo(0, 0)
  }
  _PaginationArrowForward = () => {
    if (this.props.from.from >= 90) {
      return
    }
    let params =
      this.props.paramsWithoutPagination +
      `&from=${parseInt(this.props.from.from) + 10}` +
      `&to=${parseInt(this.props.from.from) + 22}`
    this.props._PaginationArrowForward(params)
    history.push(`/results/${params}`)
    window.scrollTo(0, 0)
  }

  render() {
    if (this.props.hits.length <= 0) {
      return <Loading />
    } else if (this.props.hits[0] === 'No Results') {
      return <ErrorMessage />
    }
    let PaginationArray = this.props.pages
      ? parseInt(this.props.from.from) < 41
        ? this.props.pages.slice(0, 5)
        : this.props.pages.slice(
            parseInt(this.props.from.from.toString().slice(0, -1)),
            parseInt(this.props.from.from.toString().slice(0, -1)) + 5
          )
      : []
    return (
      <div className="spash-bg">
        <div className="shaded-bg">
          <div className="single-view-page">
            <main>
              <AdvancedSearch
                _newSearchRecipe={this._newSearchRecipe}
                browsePage={true}
              />
              <div className="spacingFromNav" />
              <div>
                <h2 className="uppercase">
                  {this.props.SearchedRecipe.value} Results
                </h2>
                <div className="centerLine">
                  <div className="line" />
                </div>
                <main className="browseCentering">
                  <div className="recipeBox">
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
                        // params={this.props.paramsWithPagination}
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
            </main>
            <Footer />
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
  hits: state.hits,
  pages: state.pages,
  defaultURL: state.defaultURL,
  SearchedRecipe: state.SearchedRecipe,
  calories: state.calories,
  cookTime: state.cookTime,
  maxIngredients: state.maxIngredients,
  categories: state.categories,
  removedIngredients: state.removedIngredients,
  from: state.from,
  toParam: state.toParam,
  paramsWithoutPagination: state.paramsWithoutPagination,
  paramsWithPagination: state.paramsWithPagination
})
const mapActionsToProps = {
  _searchRecipe: getRecipes,
  _PaginationArrowBack: getRecipes,
  _PaginationArrowForward: getRecipes,
  _newSearchRecipe: getRecipes
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Results)
