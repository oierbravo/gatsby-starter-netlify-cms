import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import './all.sass'
import { withPrefix } from "gatsby-link";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | MongoBook" />
    <Header isHomepage={window.location.pathname === withPrefix("/")}/>
    <section>{children()}</section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
