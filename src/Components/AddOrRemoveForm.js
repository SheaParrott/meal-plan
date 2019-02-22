import React, { Component } from 'react'
import update from 'immutability-helper'

// [] add in option to delete categories chosen
// [] add guard clause to to prevent adding the same catagory chosen twice

class AddOrRemoveForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      error: '',
      showOptions: [],
      selected: []
    }
  }

  matchLabel = event => {
    console.log()
    if (this.props.showOptions) {
      this.setState({
        value: event.target.value,
        showOptions: this.props.healthLabels
          .concat(this.props.dietLabels)
          .filter(label => label.match(event.target.value))
      })
    } else {
      this.setState({
        value: event.target.value
      })
    }
  }
  addSelectedLabel = event => {
    event.preventDefault()
    let form = event.target
    const formData = new FormData(form)
    for (let pair of formData.entries()) {
      if (this.props.showOptions) {
        let Found = this.props.healthLabels
          .concat(this.props.dietLabels)
          .filter(label => label === pair[1])
        if (Found.length === 0) {
          this.setState({
            error: 'Not a searchable label, please try again'
          })
          return
        }
      }
      this.setState({
        selected: update(this.state.selected, {
          $push: [pair[1]]
        })
      })
    }
  }
  render() {
    return (
      <div>
        <div className="red">{this.state.error}</div>
        <form onSubmit={this.addSelectedLabel}>
          <div className="formArea">
            <label>{this.props.name}: </label>
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
          </div>
          {this.props.showOptions ? (
            <datalist id="v">
              {this.state.showOptions.map((tag, index) => {
                return <option key={index}>{tag}</option>
              })}
            </datalist>
          ) : null}
        </form>
        <div className="displayedLabelbox">
          {this.state.selected.map((value, index) => {
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
