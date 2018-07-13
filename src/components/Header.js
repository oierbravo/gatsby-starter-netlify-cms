import React from 'react'
import Link from 'gatsby-link'

import PropTypes from 'prop-types'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';


const Header = ({isHomepage,title}) => (
  
  <header>
    <Navbar color="dark" dark expand="sd">
            <Nav navbar>
              <NavItem>
              {(() => {
                if(!isHomepage) {
                    return(
                      <Link to="/">
                        Back
                      </Link>
                    )
                }
                
              })()}
              </NavItem>
             
              
                </Nav>
                <h1 className="ml-auto primary">
                {title}
              </h1>
          <NavbarBrand className="ml-auto" href="/">MongoBook</NavbarBrand>
          </Navbar>
  </header>
)
Header.propTypes = {
  isHomepage: PropTypes.bool,
  title: PropTypes.string,
}

/*const Header = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)*/

export default Header
