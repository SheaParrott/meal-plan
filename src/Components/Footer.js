import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/">
          <p
            className={`footerButton ${
              window.location.pathname === '/' ? 'whiteCurrentPage' : 'white'
            }`}
          >
            Home
          </p>
        </Link>
        <div className="small-view">
          <Link to="/browse">
            <p
              className={`footerButton ${
                window.location.pathname === '/browse'
                  ? 'whiteCurrentPage'
                  : 'white'
              }`}
            >
              Browse
            </p>
          </Link>
        </div>
        <Link to="/about">
          <p
            className={`footerButton ${
              window.location.pathname === '/about'
                ? 'whiteCurrentPage'
                : 'white'
            }`}
          >
            About
          </p>
        </Link>
        <Link to="/creator">
          <p
            className={`footerButton ${
              window.location.pathname === '/creator'
                ? 'whiteCurrentPage'
                : 'white'
            }`}
          >
            Creator
          </p>
        </Link>
        <a href="http://shea-portfolio.surge.sh/" target="_blank">
          <p className="footerButton white">&copy;SheaParrott</p>
        </a>
      </footer>
    )
  }
}

export default Footer
