import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  a {
    text-decoration: none;
    color: #000;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
   }
  @media (max-width: 675px) {
    grid-template-columns: 1fr;
   }
`

const Article = styled.article`
  padding: 0.5rem;
  text-decoration: none;
`

const Title = styled.h3`
  height: 70px;
`

const Img = styled.img`
  width: 100%;
`

const gridLayout = ({ posts }) => {

  const removeWPstyling = content => content.replace(/(style="[^"]+")|(class="[^"]+")/g,'');

  return (
    <Grid>
      {posts.map(({ node }) => {
        return (
          <Link key={node.id} to={node.slug}>
            <Article>
              <Title>{node.title}</Title>
              <Img src={node.jetpack_featured_media_url} alt="" srcset=""/>
              <div dangerouslySetInnerHTML={{ __html: removeWPstyling(node.excerpt) }} />
            </Article>
          </Link>
        )
      })}
    </Grid>
  )
}

export default gridLayout
