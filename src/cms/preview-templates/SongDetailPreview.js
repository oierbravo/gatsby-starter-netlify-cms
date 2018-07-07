import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <SongDetailTemplate
    title={entry.getIn(['data', 'title'])}
    letra={entry.getIn(['data', 'letra'])}
    acordes={entry.getIn(['data', 'acordes'])}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
