import React from 'react'
import PropTypes from 'prop-types'

const Lyrics = ({ data }) => (
  <div className="lyrics">
    <pre>{data}</pre>
  </div>
)

Lyrics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      lyrics: PropTypes.string
    })
  ),
}

export default Lyrics
