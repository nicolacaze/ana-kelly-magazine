import React from 'react'
import Slider from "./slider"

export default ({ title, data }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Slider data={data} />
    </div>
  )
}
