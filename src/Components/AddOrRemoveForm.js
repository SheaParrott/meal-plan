import React, { Component } from 'react'
import update from 'immutability-helper'

// [] add in option to delete categories chosen
// [] add guard clause to to prevent adding the same catagory chosen twice

class AddOrRemoveForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      selectedFilters: []
    }
  }

  matchLabel = event => {
    this.setState({
      value: event.target.value
    })
  }
  addSelectedLabel = event => {
    event.preventDefault()
    let form = event.target
    const formData = new FormData(form)
    for (let pair of formData.entries()) {
      this.setState({
        selectedFilters: update(this.state.selectedFilters, {
          $push: [pair[1]]
        })
      })
    }
  }
  render() {
    return (
      <div>
        <div className="red">{this.state.error}</div>

        <div className="formArea">
          <label>{this.props.name}: </label>

          {this.props.name === 'Categories' ? (
            <div>
              {/* add on change here */}
              {/* will have separate selectedFilters in state */}
              <select>
                {this.props.healthLabels
                  .concat(this.props.dietLabels)
                  .map(option => {
                    return <option value={option}>{option}</option>
                  })}
              </select>
            </div>
          ) : (
            <form onSubmit={this.addSelectedLabel}>
              <div>
                <input
                  className="formInput"
                  onChange={this.matchLabel}
                  value={this.state.value}
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
          {this.state.selectedFilters.map((value, index) => {
            return (
              <div key={index} className="displayedLabel">
                <i className="fas fa-times" />
                <p className="Label">{value}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AddOrRemoveForm
