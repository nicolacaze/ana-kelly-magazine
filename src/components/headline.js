import React from 'react'
import styled from 'styled-components'


export default ({ title, featuredImage }) => {

  const HeadImage = styled.div`
    background-image: url('${featuredImage}');
    background-size: cover;
    height: 500px;
  `

  return (
    <section>
      <h1>A la une</h1>
      <div>
        <HeadImage></HeadImage>
        <p>{title}</p>
      </div>
    </section>
  )
}
