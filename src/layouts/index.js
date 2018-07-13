import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import './all.sass'



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | MongoBook" />
    <Header />
    <section>{children()}</section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
