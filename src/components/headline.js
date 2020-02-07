import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


export default ({ post }) => {

  const HeadImage = styled.div`
    background-image: url('${post.jetpack_featured_media_url}');
    background-size: cover;
    height: 500px;
  `

  return (
    <section>
      <h1>A la une</h1>
      <div>
        <Link to={post.slug}>
          <HeadImage></HeadImage>
        </Link>
        <p>{post.title}</p>
      </div>
    </section>
  )
}
