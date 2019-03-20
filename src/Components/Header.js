import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div
        className={
          window.location.pathname == '/about'
            ? 'categoriesBarAbout'
            : 'categoriesBar'
        }
      >
        <Link to="/">
          <h4 className="homeButton white">HOME</h4>
        </Link>
        <span className="headerOrFooterBiggerScreens">
          <Link to="/creator">
            <h4 className="homeButton white">CREATOR</h4>
          </Link>
        </span>
        {/* about page not created yet */}
        <Link to="/about">
          <h4 className="homeButton white">ABOUT</h4>
        </Link>
      </div>
    )
  }
}

export default Header
