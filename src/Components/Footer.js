import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <span className="headerOrFooterBiggerScreens">
          <Link to="/">
            <p className="white footerButton">Home</p>
          </Link>
        </span>
        <Link to="/creator">
          <p className="white footerButton">Creator</p>
        </Link>
        {/* about page not created yet */}
        <Link to="/about">
          <p className="white footerButton">About</p>
        </Link>
        <Link to="/creator">
          <p className="white footerButton">&copy;SheaParrott</p>
        </Link>
      </footer>
    )
  }
}

export default Footer
