import React, { Component } from 'react'
import update from 'immutability-helper'

class AddOrRemoveForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      healthLabels: [
        'vegan',
        'vegetarian',
        'paleo',
        'dairy-free',
        'gluten-free',
        'wheat-free',
        'fat-free',
        'low-sugar',
        'egg-free',
        'peanut-free',
        'tree-nut-free',
        'soy-free',
        'fish-free',
        'shellfish-free'
      ],
      dietLabels: [
        'balanced',
        'high-protein',
        'high-fiber',
        'low-fat',
        'low-carb',
        'low-sodium'
      ],
      showOptions: [],
      selected: []
    }
  }
  matchLabel = event => {
    if (this.props.showOptions) {
      this.setState({
        value: event.target.value,
        showOptions: this.state.healthLabels
          .concat(this.state.dietLabels)
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
      this.setState(
        {
          selected: update(this.state.selected, {
            $push: [pair[1]]
          })
        },
        () => {
          console.log(this.state.selected)
        }
      )
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addSelectedLabel}>
          <label>{this.props.name}: </label>
          <input
            className="formInput"
            onChange={this.matchLabel}
            value={this.state.value}
            name="label"
            type="text"
            list="v"
          />
          <button type="submit">Submit</button>
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
