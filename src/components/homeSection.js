import React from 'react'
import Slider from "./slider"
import styled from 'styled-components'

const Section = styled.section`
  margin: 0 0 3rem;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  border-bottom: 1px solid #000;
  margin: 2rem 0;
  padding 0 0 1rem;
`

export default ({ title, posts }) => {

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <Slider posts={posts} />
    </Section>
  )
}
