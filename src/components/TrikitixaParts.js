import React from 'react'
import PropTypes from 'prop-types'
import TrikiSheet from 'react-lib-trikisheet'
import styles from 'react-lib-trikisheet/build/css/index.css'

const TrikitixaParts = ({ parts }) => (
  <div className="c-triki">
    {parts.map((part,index) => (
      <div key={index}>
        <p className="c-triki--title"><strong>{part.title}</strong></p>
        <TrikiSheet sheet={part.numbers}/>

      </div>
    ))}
  </div>
)

TrikitixaParts.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      numbers: PropTypes.string,
      title: PropTypes.string
    })
  ),
}

export default TrikitixaParts
