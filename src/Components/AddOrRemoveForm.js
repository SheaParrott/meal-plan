import React, { Component } from 'react'
import update from 'immutability-helper'
import { connect } from 'react-redux'
import { addCategory, addRemovedIngredients } from '../Actions/SearchActions'

// [] add in option to delete categories chosen
// [] add guard clause to to prevent adding the same catagory chosen twice

class AddOrRemoveForm extends Component {
  constructor(props) {
    super(props)
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
              {/* add on change here */}
              {/* will have separate selectedFilters in state */}
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
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </div>

        <div className="displayedLabelbox">
          {tagsDisplayed.map((value, index) => {
            return (
              <div key={index} className="displayedLabel">
                <i className="fas fa-times" />
                <p className="Label">{value.category}</p>
              </div>
            )
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
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AddOrRemoveForm)
