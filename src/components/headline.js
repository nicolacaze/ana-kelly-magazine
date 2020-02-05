import React from 'react'

export default ({ title, featuredImage }) => {
  return (
    <div>
      <h1>A la une</h1>
      <div className='main-outline'>
        <img src={featuredImage} alt="Post featured image"/>
        <p>{title}</p>
      </div>
    </div>
  )
}
