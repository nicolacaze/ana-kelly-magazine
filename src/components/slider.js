import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const DotLayout = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${props => props.active ? 'black' : 'white'};
`
const Dot = ({ active }) => (
  <DotLayout active={active} />
)

const DotsLayout = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Dots = ({ slides, activeSlide }) => (
  <DotsLayout>
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i} />
    ))}
  </DotsLayout>
)

const ArrowLayout = styled.div`
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
  <ArrowLayout direction={direction} onClick={handleClick} >
    {direction === 'right' ? <FontAwesomeIcon icon={faChevronRight} size="1x"/> : <FontAwesomeIcon icon={faChevronLeft} size="1x"/>}
  </ArrowLayout>
)

const SlideLayout = styled.div`
  width: ${props => props.width}px;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
  
const Slide = ({ content, width }) => (
  <SlideLayout content={content} width={width} />
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

const SliderLayout = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`

const Slider = props => {
  const getWidth = () => window.innerWidth
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  })
  
  const { activeSlide, translate, transition } = state
  const autoPlayRef = useRef()

  const nextSlide = () => {
    if (activeSlide === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0
      })
    }

    setState({
      ...state,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeSlide: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * getWidth()
    })
  }

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const interval = setInterval(play, props.autoPlay * 1000)
    return () => clearInterval(interval);
  }, [])
  
  return (
    <SliderLayout>
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
      <Dots slides={props.slides} activeSlide={activeSlide} />
    </SliderLayout>
  )
}

Slider.defaultProps = {
  slides: [],
  autoPlay: null
}

export default Slider
