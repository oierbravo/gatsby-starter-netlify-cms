import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const SongDetailTemplate = ({
  contentComponent,
  letra,
  acordes,
  title,
  helmet,
}) => {
  const SongContentLetra = contentComponent || Content
  const SongContentAcordes = contentComponent || Content
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <pre>{{letra}}</pre>
            <pre>{{acordes}}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}

SongDetailTemplate.propTypes = {
  contentComponent: PropTypes.func,
  letra: PropTypes.text,
  acordes: PropTypes.text,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const SongDetail = ({ data }) => {
  const { markdownRemark: song } = data

  return (
    <SongDetailTemplate
      contentComponent={HTMLContent}
      letra={song.frontmatter.letra}
      acordes={song.frontmatter.acordes}
      helmet={<Helmet title={`${song.frontmatter.title} | Song`} />}
      title={song.frontmatter.title}
    />
  )
}

SongDetail.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SongDetail

export const pageQuery = graphql`
  query SongDetailByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        acordes
        letra
      }
    }
  }
`
