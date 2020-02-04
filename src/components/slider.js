import React from 'react'

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.edges.map(({ node }) => {
        return (
        <div key={node.id} >
          <h4>{node.title}</h4>
          <p>{node.excerpt}</p>
        </div>
        )
      })}
    </div>
  )
}
