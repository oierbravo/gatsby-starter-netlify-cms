import React from 'react'
import PropTypes from 'prop-types'

const Chords = ({ data }) => (
  <div className="chords">
    {data.map((chord,index) => (
      <div key={index} className="chord">
        <p><strong>{chord.title}</strong></p>
        <pre>{chord.sequence}</pre>
      </div>
    ))}
  </div>
)

Chords.propTypes = {
  chords: PropTypes.array,
}

export default Chords
