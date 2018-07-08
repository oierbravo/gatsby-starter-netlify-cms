import React from 'react'
import PropTypes from 'prop-types'

const Chords = ({ data }) => (
  <div className="chords">
    <pre>{data}</pre>
  </div>
)

Chords.propTypes = {
  chords: PropTypes.string,
}

export default Chords
