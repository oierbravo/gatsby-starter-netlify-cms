import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import {Helmet} from 'react-helmet'
import Link from 'gatsby-link'
import Lyrics from '../components/Lyrics'
import Chords from '../components/Chords'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import ReactAudioPlayer from 'react-audio-player';

export const SongDetailTemplate = ({
  lyrics,
  chords,
  title,
  fileOriginal
}) => {
  console.log(fileOriginal);
  return (
    <section className="section">
      <Helmet>
        <title>{title} | Song</title>
      </Helmet>
      <div className="container content">
      <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Lyrics</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <Lyrics data={lyrics} />
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Chords</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <Chords data={chords} />
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Original Audio</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
            <ReactAudioPlayer
              src={fileOriginal}
              controls
            />
              
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
 
      </div>
    </section>
  )
}

SongDetailTemplate.propTypes = {
  lyrics: PropTypes.string,
  chords: PropTypes.string,
  fileOriginal: PropTypes.string,
  title: PropTypes.string
}

const SongDetail = ({ data }) => {
  const { markdownRemark: song } = data
  
  return (
    <SongDetailTemplate
      lyrics={song.frontmatter.lyrics}
      chords={song.frontmatter.chords}
      title={song.frontmatter.title}
      fileOriginal={song.frontmatter.fileOriginal}
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
        chords
        fileOriginal
      }
    }
  }
`
