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
`

const Arrow = ({ direction, handleClick }) => (
  <ArrowCSS direction={direction} onClick={handleClick} >
    {direction === 'right' ? <FontAwesomeIcon icon={faChevronRight} size="1x"/> : <FontAwesomeIcon icon={faChevronLeft} size="1x"/>}
  </ArrowCSS>
)

const SlideCSS = styled.div`
  width: ${props => props.width}px;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
  
const Slide = ({ content, width }) => (
  <SlideCSS content={content} width={width} >

  </SlideCSS>
)

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.length}, calc((100% - 2rem) / 3));
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  margin: 0;
  width: 100%;
`

const SliderCSS = styled.div`
  position: relative;
  height: 400px;
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

const Slider = props => {
  const getWidth = () => window.innerWidth
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    totalWidth: (props.slides.length - 1) * 416,
  })
  
  const { translate, transition, totalWidth } = state

  const nextSlide = () => {
    if (translate < totalWidth) {
      setState({
        ...state,
        translate: translate + getWidth()
      })
    }
  }

  const prevSlide = () => {
    if (translate > 0) {
      setState({
        ...state,
        translate: translate - getWidth()
      })
    }
  }
  
  return (
    <SliderCSS>
      <SliderContent
      translate={translate}
      transition={transition}
      width={getWidth()}
      length={props.slides.length}
      >
        {props.slides.map(({ node }) => (
          // <Slide key={slide + i} content={slide.node.jetpack_featured_media_url} width={getWidth()} />
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
