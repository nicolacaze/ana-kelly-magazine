import React from 'react'
import styled from 'styled-components'

export default ({ data }) => {

  const Container = styled.ul`
    display: flex;
    justify-content: start;
    margin: 0;
    width: 100%;
    overflow-x: scroll;
    padding: 0;
  `

  const PostContainer = styled.li`
    margin-left: 1rem;
    list-style: none;
    margin: 0 1rem 0 0;
  `

  const FeaturedImage = styled.img`
    width: 200px;
  `

  return (
    <Container>
      {data.edges.map(({ node }) => {
        return (
        <PostContainer key={node.id} >
          <FeaturedImage src={node.jetpack_featured_media_url} alt="Post featured"/>
          <h4>{node.title}</h4>
        </PostContainer>
        )
      })}
    </Container>
  )
}
