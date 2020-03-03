import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const Carousel = ({ posts }) => {
  const [position, setPosition] = useState(0);
  const [slides, setSlides] = useState(posts.edges);

  const Container = styled.div`
    overflow-x: hidden;
    width: 100%;
  `

  const ListContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(${posts.edges.length}, auto);
    grid-template-rows: auto;
    margin: 0;
    width: 100%;
    padding: 0;
    transform: translateX(-${props => props.position}px);
    transition: all 0.5s;
  `
  
  const PostContainer = styled.li`
    margin-left: 1rem;
    list-style: none;
    margin: 0 1rem 0 0;
    a {
      text-decoration: none;
      color: #000;
    }
  `
  
  const FeaturedImage = styled.img`
    width: 400px;
  `

  const next = () => {
    const first = slides[0];
    const restOfSlides = slides.slice(1);
    setSlides([...restOfSlides, first]);
    setPosition(position + 800);
  }

  const prev = () => {
    const lastSlide = slides[slides.length - 1];
    const restOfSlides = slides.slice(0, -1);
    setSlides([lastSlide, ...restOfSlides]);
    setPosition(position - 800);
  }

  return (
    <Container>
      <button onClick={prev}>PREV</button>
      <ListContainer position={position}>
        {slides.map(({ node }) => {
          return (
          <PostContainer key={node.id} >
            <Link to={node.slug}>
              <FeaturedImage src={node.jetpack_featured_media_url} alt="Post featured"/>
              <h4>{node.title}</h4>
            </Link>
          </PostContainer>
          )
        })}
      </ListContainer>
      <button onClick={next}>NEXT</button>
    </Container>
  )
}

export default Carousel
