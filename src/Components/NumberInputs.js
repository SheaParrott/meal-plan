import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipes, searchURLParam } from '../Actions/SearchActions'

class NumberInputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: '',
      max: ''
    }
  }
  // create actions depending on the label name and add in validations
  changeMin = event => {
    if (event.target.value <= 0) {
      return
    }
    this.setState({
      min: event.target.value
    })
  }
  changeMax = event => {
    if (event.target.value <= 0) {
      return
    }
    this.setState({
      max: event.target.value
    })
  }
  render() {
    return (
      <div>
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
