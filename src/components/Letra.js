import React from 'react'
import PropTypes from 'prop-types'

const Letra = ({ data }) => (
  <div className="letra">
    <pre>{data}</pre>
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      letra: PropTypes.string
    })
  ),
}

export default Letra
