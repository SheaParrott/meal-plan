import React, { Component } from 'react'
import AdvancedSearch from './AdvancedSearch'
import Header from './Header'

class HeaderWithSearch extends Component {
  render() {
    return (
      <div>
        <h1>Meal Plan</h1>
        <nav>
          <Header />
          <div className="centerLine">
            <div className="line" />
          </div>
          <AdvancedSearch />
        </nav>
        <div className="navSpacing" />
      </div>
    )
  }
}

export default HeaderWithSearch
