import React, { useState } from 'react'
import styled from 'styled-components'
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
  grid-template-columns: repeat(${props => props.length}, auto);
  grid-template-rows: auto;
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

const Slider = props => {
  const getWidth = () => window.innerWidth
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  })
  
  const { activeIndex, translate, transition } = state

  const nextSlide = () => {
    if (activeIndex !== props.slides.length - 1) {
      return setState({
        ...state,
        activeIndex: activeIndex + 1,
        translate: (activeIndex + 1) * getWidth()
      })
    }

  }

  const prevSlide = () => {
    if (activeIndex !== 0) {
      return setState({
        ...state,
        activeIndex: activeIndex - 1,
        translate: (activeIndex - 1) * getWidth()
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
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide.node.jetpack_featured_media_url} width={getWidth()} />
          ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderCSS>
  )
}

export default Slider
