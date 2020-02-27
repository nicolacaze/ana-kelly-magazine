import React from 'react'
import Slider from "./slider"

export default ({ title, posts }) => {
  return (
    <section>
      <h2>{title}</h2>
      <Slider posts={posts} />
    </section>
  )
}
