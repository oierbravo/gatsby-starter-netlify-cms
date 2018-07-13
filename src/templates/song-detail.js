import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import {Helmet} from 'react-helmet'
import Link from 'gatsby-link'
import Lyrics from '../components/Lyrics'
import Chords from '../components/Chords'
import AudioFiles from '../components/AudioFiles'

import TrikiSheet from 'react-lib-trikisheet'
import styles from 'react-lib-trikisheet/build/css/index.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import { Container, Row, Col } from 'reactstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
 en:{
   title:"Title",
   lyrics:"Lyrics",
   chords:"Chords",
   audios:"Audios"
 },
 es:{
  title:"Titulo",
  lyrics:"Letra",
  chords:"Acordes",
  audios:"Audios"
},
  eu:{
    title:"Izenburua",
    lyrics:"Letra",
    chords:"Akordeak",
    audios:"Audioak"
  }
});

export const SongDetailTemplate = ({
  lyrics,
  chords,
  trikitixa,
  title,
  audio
}) => {
  return (
    <Container className="section">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Row>
        <Col sm="12">
          <h1 className="text-center u-pv+">{title}</h1>
        </Col>
      </Row>
      <Row  className="u-pb+">
        <Col sm="12">
        <Accordion>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>{strings.lyrics}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                  <Lyrics data={lyrics} />
              </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>{strings.chords}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                <Chords data={chords} />
              </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>Trikitixa</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                <TrikiSheet sheet={trikitixa}/>
              </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemTitle>
                  <h3>{strings.audios}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
              <AudioFiles files={audio} />
                
              </AccordionItemBody>
          </AccordionItem>
      </Accordion>
  
        </Col>
      </Row>
    </Container>
  )
}

SongDetailTemplate.propTypes = {
  lyrics: PropTypes.string,
  chords: PropTypes.array,
  trikitixa: PropTypes.string,
  fileOriginal: PropTypes.string,
  title: PropTypes.string,
  audio: PropTypes.array
}

const SongDetail = ({ data }) => {
  const { markdownRemark: song } = data
  console.log(song);
  return (
    <SongDetailTemplate
      trikitixa={song.frontmatter.trikitixa}
      lyrics={song.frontmatter.lyrics}
      chords={song.frontmatter.chords}
      title={song.frontmatter.title}
      audio={song.frontmatter.audio}
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
      frontmatter {
        title
        lyrics
        chords {
          title
          sequence
        }
        trikitixa
        audio {
          title
          file
        }
      }
    }
  }
`
