import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
 en:{
   songs:"Songs"
 },
 es:{
  songs:"Canciones"
},
  eu:{
    songs:"Abestiak"
  }
});

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: songs } = data.allMarkdownRemark

    return (
      <main role="main">
        <Container>
          <Row>
            <Col sm="12">
              <h1 className="text-center u-pv+">{strings.songs}</h1>
            </Col>  
          </Row>
          <Row>
            <Col sm="12">
            <ListGroup>
      {songs
            .map(({ node: song }) => (
              <ListGroupItem action key={song.id}>
                <Link to={song.fields.slug}>
                  <h3>{song.frontmatter.title}</h3>
                </Link>
              </ListGroupItem>
            ))}
            </ListGroup>
            </Col>
            </Row>
        </Container>
      </main>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] },
      filter: { frontmatter: { templateKey: { eq: "song-detail" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`
