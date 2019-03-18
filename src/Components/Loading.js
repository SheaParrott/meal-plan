import React, { Component } from 'react'
import loading from '../assets/loading.gif'

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img className="loadingImage" src={loading} alt="loading" />
      </div>
    )
  }
}

export default Loading
