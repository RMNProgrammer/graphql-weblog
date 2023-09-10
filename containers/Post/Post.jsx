import React from 'react'

const Post = ({film}) => {
   const { title, director } = film

   return (
      <div className="card">
         <h3>{title}</h3>
         <p>{director}</p>
      </div>
   )
}

export default Post
