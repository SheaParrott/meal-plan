import React, { Component } from 'react'
import AddOrRemoveForm from '../Components/AddOrRemoveForm'
import NumberInputs from '../Components/NumberInputs'
import { connect } from 'react-redux'
import { resetAllSearchFields } from '../Actions/SearchActions'
import Header from './Header'
import SearchInput from './SearchInput'

class AdvancedSearch extends Component {
  constructor(props) {
    super(props)
    this._resetAllSearchFields = this._resetAllSearchFields.bind(this)
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

  _resetAllSearchFields = () => {
    this.props._resetAllSearchFields()
  }
  _recipeFieldError = () => {
    this.setState({ recipeFieldError: '' })
  }
  render() {
    return (
      <div className="homePageName">
        <div>
          <h1>Meal Plan</h1>
          <nav>
            <Header />
            <div className="centerLine">
              <div className="line" />
            </div>
            <SearchInput />
            {this.props.browse ? (
              <section className="small-view">
                <div className="centerLine">
                  <div className="line" />
                </div>
                <div className="secondTearHeader">
                  <h5
                    className={`about ${
                      this.props.selected == 'topPicks'
                        ? 'whiteCurrentPage'
                        : 'white'
                    }`}
                    onClick={() => {
                      this.props._selected('topPicks')
                    }}
                  >
                    TOP PICKS
                  </h5>
                  <h5
                    className={`about ${
                      this.props.selected == 'Country'
                        ? 'whiteCurrentPage'
                        : 'white'
                    }`}
                    onClick={() => {
                      this.props._selected('Country')
                    }}
                  >
                    COUNTRY
                  </h5>
                </div>
              </section>
            ) : this.props.aboutPage ? (
              <div>
                <div className="centerLine">
                  <div className="line" />
                </div>
                <div className="secondTearHeader small-view">
                  <h5
                    className={`about ${
                      this.props.selectedParagraph == 'Inspiration'
                        ? 'whiteCurrentPage'
                        : 'white'
                    }`}
                    onClick={() => {
                      this.props._selectedParagraph('Inspiration')
                    }}
                  >
                    INSPIRATION
                  </h5>
                  <h5
                    className={`about ${
                      this.props.selectedParagraph == 'thanks'
                        ? 'whiteCurrentPage'
                        : 'white'
                    }`}
                    onClick={() => {
                      this.props._selectedParagraph('thanks')
                    }}
                  >
                    SPECIAL THANKS
                  </h5>
                  <h5
                    className={`about ${
                      this.props.selectedParagraph == 'HappyOrIssues'
                        ? 'whiteCurrentPage'
                        : 'white'
                    }`}
                    onClick={() => {
                      this.props._selectedParagraph('HappyOrIssues')
                    }}
                  >
                    HAPPY / ISSUES
                  </h5>
                </div>
                <div className="secondTearHeader big-view">
                  <h5 className="about ">THANKS FOR VISITING!</h5>
                </div>
              </div>
            ) : this.props.creatorPage ? (
              <div>
                <div className="centerLine">
                  <div className="line" />
                </div>
                <div className="secondTearHeader">
                  <h5 className="about">THANKS FOR VISITING!</h5>
                </div>
              </div>
            ) : (
              <div>
                <div className="centerLine">
                  <div className="line" />
                </div>
                <div className="advancedSearch">
                  <div
                    className="categories white"
                    onClick={this.showCategories}
                  >
                    <h4 className="advancedDropDown">Advanced search</h4>
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
                    this.state.categoriesBar
                      ? 'animated-nav'
                      : 'animated-hide-nav'
                  }`}
                >
                  <section className="advancedSearchWidth">
                    <div className="searchOptionsForm">
                      <AddOrRemoveForm name="Categories" showOptions={true} />
                    </div>
                    <section className="centerLabelBox">
                      <section className="searchOptions row">
                        <div className="label">
                          <label>Max ingredients: </label>
                        </div>
                        <NumberInputs
                          ingredient={true}
                          label="maxIngredients"
                        />
                      </section>
                    </section>
                    <h6 className="red">{this.state.numberError}</h6>
                    <div className="centerFields">
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
                    </div>

                    <div className="centerLine">
                      <div className="line" />
                    </div>
                    <section className="searchOptionsForm">
                      {
                        <AddOrRemoveForm
                          name="Remove Ingredients"
                          label="removeIngredients"
                          showOptions={false}
                        />
                      }
                    </section>

                    <div className="centerLine">
                      <div className="line" />
                    </div>
                    <SearchInput />
                    <div className="centerLine">
                      <div className="line" />
                    </div>
                    <button
                      className="advancedSearchButton reset"
                      onClick={this._resetAllSearchFields}
                    >
                      RESET FIELDS
                    </button>
                  </section>
                </span>
              </div>
            )}
          </nav>
          <div className="navSpacing" />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
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
  _resetAllSearchFields: resetAllSearchFields
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AdvancedSearch)
