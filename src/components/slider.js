import React from 'react'

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.edges.map(({ node }) => {
        return (
        <div key={node.id} >
          <img src={node.jetpack_featured_media_url} alt="Post featured image"/>
          <h4>{node.title}</h4>
        </div>
        )
      })}
    </div>
  )
}
