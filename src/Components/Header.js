import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="categoriesBar">
        <Link to="/">
          <h4
            className={`homeButton ${
              window.location.pathname === '/' ? 'whiteCurrentPage' : 'white'
            }`}
          >
            HOME
          </h4>
        </Link>
        <Link to="/about">
          <h4
            className={`homeButton ${
              window.location.pathname === '/about'
                ? 'whiteCurrentPage'
                : 'white'
            }`}
          >
            ABOUT
          </h4>
        </Link>
        <Link to="/creator">
          <h4
            className={`homeButton ${
              window.location.pathname === '/creator'
                ? 'whiteCurrentPage'
                : 'white'
            }`}
          >
            CREATOR
          </h4>
        </Link>
      </div>
    )
  }
}

export default Header
