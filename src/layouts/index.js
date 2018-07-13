import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import './all.sass'
import "gatsby-link";
import { withPrefix } from "gatsby-link";

const TemplateWrapper = ({ children,location }) => (
  <div>
    <Helmet title="Home | MongoBook" />
    <Header isHomepage={location.pathname === withPrefix("/")}/>
    <section>{children()}</section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
