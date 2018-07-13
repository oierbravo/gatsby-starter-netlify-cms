import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import ReactAudioPlayer from 'react-audio-player';


const AudioFiles = ({ files }) => (
  <ul>
    {files.map((file,index) => (
      <li key={index}>
        <p className="c-audio-files--title">{file.title}</p>
        <ReactAudioPlayer src={file.file} controls/>

      </li>
    ))}
  </ul>
)

AudioFiles.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string
    })
  ),
}

export default AudioFiles
