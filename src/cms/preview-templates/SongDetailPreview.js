import React from 'react'
import PropTypes from 'prop-types'
import { SongDetailTemplate } from '../../templates/song-detail'

const SongDetailPreview = ({ entry, widgetFor }) => (
  <SongDetailTemplate
    title={entry.getIn(['data', 'title'])}
    letra={entry.getIn(['data', 'letra'])}
    acordes={entry.getIn(['data', 'acordes'])}
  />
)

SongDetailPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SongDetailPreview
