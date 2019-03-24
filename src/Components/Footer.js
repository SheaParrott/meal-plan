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
        <a href="http://shea-portfolio.surge.sh/" target="_blank">
          <p className=" footerButton white">&copy;SheaParrott</p>
        </a>
      </footer>
    )
  }
}

export default Footer
