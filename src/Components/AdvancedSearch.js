import React, { Component } from 'react'
import AddOrRemoveForm from '../Components/AddOrRemoveForm'
import NumberInputs from '../Components/NumberInputs'
import { connect } from 'react-redux'
import { getRecipes, searchURLParams } from '../Actions/SearchActions'
import { Link } from 'react-router-dom'

class AdvancedSearch extends Component {
  constructor(props) {
    super(props)
    //bind the dispatch function
    this._searchURLParams = this._searchURLParams.bind(this)
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

  _searchURLParams = event => {
    this.props._searchURLParams({
      url_params: this.props.searchURLParams,
      value: event.target.value
    })
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

        <input
          onChange={this._searchURLParams}
          className="Search"
          name="recipe"
          placeholder="Keywords / Recipees!"
        />
        <Link to={`/browse/${this.props.searchURLParams}`}>
          <button>Submit</button>
        </Link>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  defaultURL: state.defaultURL,
  searchURLParams: state.searchURLParams
  // months: state.months,
  // map out state
})

const mapActionsToProps = {
  _searchURLParams: searchURLParams
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AdvancedSearch)
