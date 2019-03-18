import React, { Component } from 'react'
import { connect } from 'react-redux'
import { minAndMaxParams } from '../Actions/SearchActions'

class NumberInputs extends Component {
  constructor(props) {
    super(props)
    this._Min = this._Min.bind(this)
    this._Max = this._Max.bind(this)
    this.state = {
      error: ''
    }
  }
  // create actions depending on the label name and add in validations
  _Min = event => {
    let max = ''
    let min = ''
    if (this.props.label == 'calories') {
      max = this.props.calories.max
      min = event.target.value
    } else if (this.props.label == 'cookTime') {
      max = this.props.cookTime.max
      min = event.target.value
    }

    if (min < 0) {
      return
    } else if (min > max && max) {
      this.setState({
        error: `Max must be higher than Min`
      })
      return
    } else if (this.state.error) {
      this.setState({
        error: ''
      })
    }

    this.props._Min({
      theCase: this.props.label,
      min: min,
      max: max
    })

    // pass the label name to action and the value
    // use switch case in action {theCase: , min:, max:}
  }

  _Max = event => {
    let max = ''
    let min = ''
    if (this.props.label == 'calories') {
      min = this.props.calories.min
      max = event.target.value
    } else if (this.props.label == 'cookTime') {
      min = this.props.cookTime.min
      max = event.target.value
    }

    if (min < 0) {
      return
    } else if (min > max && max) {
      this.setState({
        error: `Max must be higher than Min`
      })
      return
    } else if (this.state.error) {
      this.setState({
        error: ''
      })
    }

    this.props._Max({
      theCase: this.props.label,
      min: min,
      max: max
    })
  }
  render() {
    return (
      <div>
        <div>
          {this.props.ingredient ? null : (
            <span>
              <input
                className="numberInput"
                type="number"
                onChange={this._Min}
                value={
                  this.props.label == 'cookTime'
                    ? this.props.cookTime.min
                    : this.props.calories.min
                }
                placeholder="any"
              />
              <span className="label">to</span>
            </span>
          )}
          <input
            className="numberInput"
            type="number"
            onChange={this._Max}
            value={
              this.props.label == 'cookTime'
                ? this.props.cookTime.max
                : this.props.label == 'calories'
                ? this.props.calories.max
                : this.props.maxIngredients
            }
            placeholder="any"
          />
        </div>
        <br />
        <h6 className="red">{this.state.error}</h6>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  calories: state.calories,
  cookTime: state.cookTime,
  maxIngredients: state.maxIngredients
  // defaultURL: state.defaultURL,
  // searchURLParam: state.searchURLParam
  // months: state.months,
  // map out state
})

const mapActionsToProps = {
  _Min: minAndMaxParams,
  _Max: minAndMaxParams
  // _searchURLParam: searchURLParam
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(NumberInputs)

// calories: {min: '', max: '', params: ''},
// cookTime: {min: '', max: '', params: ''},
// maxIngredients: '',
