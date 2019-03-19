import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory, addRemovedIngredients } from '../Actions/SearchActions'
import ChosenCategory from './ChosenCategory'

class AddOrRemoveForm extends Component {
  constructor(props) {
    super(props)
    // this._removeCategory = this._removeCategory.bind(this)
    this._addCategory = this._addCategory.bind(this)
  }

  _addRemovedIngredients = event => {
    event.preventDefault()
    let form = event.target
    const formData = new FormData(form)
    for (let pair of formData.entries()) {
      this.props._addRemovedIngredients(pair[1])
    }
    form.reset()
  }
  _addCategory = event => {
    this.props._addCategory(event.target.value)
  }
  _removeCategory = event => {
    console.log(event.target.value)
    // this.props._removeCategory()
  }
  render() {
    let tagsDisplayed =
      this.props.name === 'Categories'
        ? this.props.categories
        : this.props.removedIngredients
    return (
      <div>
        <div className="formArea">
          <label>{this.props.name}: </label>

          {this.props.name === 'Categories' ? (
            <div>
              <select onChange={this._addCategory}>
                <option value="">-----</option>
                {this.props.healthLabels
                  .concat(this.props.dietLabels)
                  .map(option => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )
                  })}
              </select>
            </div>
          ) : (
            <form onSubmit={this._addRemovedIngredients}>
              <div>
                <input
                  className="formInput"
                  onChange={this.matchLabel}
                  name="label"
                  type="text"
                  list="v"
                  autoComplete="off"
                />
                <button className="advancedSearchButton" type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="displayedLabelbox">
          {tagsDisplayed.map((value, index) => {
            return <ChosenCategory key={index} value={value} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  removedIngredients: state.removedIngredients,
  healthLabels: state.healthLabels,
  dietLabels: state.dietLabels
})
const mapActionsToProps = {
  _addCategory: addCategory,
  _addRemovedIngredients: addRemovedIngredients
  // _removeCategory: removeCategory
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AddOrRemoveForm)
