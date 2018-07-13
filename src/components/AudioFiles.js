import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const AudioFiles = ({ files }) => (
  <div>
    {files.map(file => (
      <ReactAudioPlayer src={file} controls/>
    ))}
  </div>
)

AudioFiles.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string
    })
  ),
}

export default AudioFiles
