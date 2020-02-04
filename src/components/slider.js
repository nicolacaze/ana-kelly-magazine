import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


export default ({ data }) => {
  
  return (
    <div>
      {data.edges[0].node.title}
    </div>
  )
}
