import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipes, searchURLParam } from '../Actions/SearchActions'

class NumberInputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: '',
      max: '',
      error: ''
    }
  }
  // create actions depending on the label name and add in validations
  changeMin = event => {
    if (event.target.value <= 0) {
      return
    }
    if (this.state.min > this.state.max && this.state.max) {
      this.setState({
        error: `Minimal value of ${this.props.label} cannot be lower than max`
      })
      return
    } else if (this.state.error) {
      this.setState({
        error: ''
      })
    }
    // pass the label name to action and the value
    // use switch case in action {theCase: , min:, max:}

    this.setState({
      min: event.target.value
    })
  }
  // going to remove this soon.
  //handling min and max in one action
  changeMax = event => {
    if (event.target.value <= 0) {
      return
    }
    // pass the label name to action and the value
    // use switch case in action {theCase: , value:}

    this.setState({
      max: event.target.value
    })
  }
  render() {
    console.log('min : ' + this.state.min)
    console.log('max : ' + this.state.max)
    return (
      <div>
        <h5>{this.state.error}</h5>
        <div>
          <input
            className="numberInput"
            type="number"
            onChange={this.changeMin}
            value={this.state.min}
            placeholder="any"
          />
          {this.props.ingredient ? null : (
            <span>
              <span className="label">to</span>
              <input
                className="numberInput"
                type="number"
                onChange={this.changeMax}
                value={this.state.max}
                placeholder="any"
              />
            </span>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // defaultURL: state.defaultURL,
  // searchURLParam: state.searchURLParam
  // months: state.months,
  // map out state
})

const mapActionsToProps = {
  // _searchURLParam: searchURLParam
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(NumberInputs)
