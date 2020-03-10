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
const getWidth = () => window.innerWidth

const Slider = ({ slides, autoPlay }) => {

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  })
  
  const { activeSlide, translate, transition, _slides } = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const smooth = (e) => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }

    const resize = () => {
      resizeRef.current()
    }

    // const interval = setInterval(play, autoPlay * 1000)
    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)
    return () => {
      // clearInterval(interval)
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if(transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition, state])

  const smoothTransition = () => {
    let _slides = []

    if(activeSlide === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    } else if(activeSlide === 0) {
      _slides = [lastSlide, firstSlide, secondSlide]
    } else {
      _slides = slides.slice(activeSlide - 1, activeSlide + 2)
    }

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    })
  }

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
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
        translate: (slides.length - 1) * getWidth(),
        activeSlide: slides.length - 1
      })
    }

    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * getWidth()
    })
  }
  
  return (
    <SliderLayout>
      <SliderContent
      translate={translate}
      transition={transition}
      width={getWidth() * _slides.length}
      length={_slides.length}
      >
        {_slides.map((slide, i) => (
          <Slide key={slide + i} content={slide.node.jetpack_featured_media_url} width={getWidth()} />
          ))}
      </SliderContent>
      {!autoPlay && (
        <>
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </>
      )}
      <Dots slides={slides} activeSlide={activeSlide} />
    </SliderLayout>
  )
}

Slider.defaultProps = {
  slides: [],
  autoPlay: null
}

export default Slider
