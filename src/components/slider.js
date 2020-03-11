import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const ArrowCSS = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
    &:focus {
      outline: 0;
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
`

const Arrow = ({ direction, handleClick }) => (
  <ArrowCSS direction={direction} onClick={handleClick} >
    {direction === 'right' ? <FontAwesomeIcon icon={faChevronRight} size="1x"/> : <FontAwesomeIcon icon={faChevronLeft} size="1x"/>}
  </ArrowCSS>
)

const SliderContent = styled.ul`
  --slideSize: calc((100% - 2rem) / 3);
  --gridGap: 1rem;
  transform: translateX(calc(-${props => props.index} * var(--slideSize) - ${props => props.index} * var(--gridGap)));
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.length}, var(--slideSize));
  grid-template-rows: auto;
  grid-column-gap: var(--gridGap);
  margin: 0;
  @media (max-width: 900px) {
    overflow: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;  /* Remove scrollbar space */
    }
  }
`

const SliderCSS = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`

const PostContainer = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: #000;
  }
`

const FeaturedImage = styled.img`
  width: 100%;
`

const Slider = ({ posts }) => {

  const [state, setState] = useState({
    index: 0,
    transition: 0.45,
  })
  
  const { index, transition } = state

  const nextSlide = () => {
    if (index < posts.length - 3) {
      setState({
        ...state,
        index: index + 1,
      })
    }
  }

  const prevSlide = () => {
    if (index > 0) {
      setState({
        ...state,
        index: index - 1,
      })
    }
  }
  
  return (
    <SliderCSS>
      <SliderContent
        index={index}
        transition={transition}
        length={posts.length}>
        {posts.map(({ node }) => (
          <PostContainer key={node.id}>
            <Link to={node.slug}>
              <FeaturedImage src={node.jetpack_featured_media_url} alt="Post featured" />
              <h4>{node.title}</h4>
            </Link>
          </PostContainer>
          ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderCSS>
  )
}

export default Slider
