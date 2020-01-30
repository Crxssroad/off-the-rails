import React from 'react'

const ReviewTile = (props) => {
  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <span>{props.rating}</span>
    </div>
  )
}

export default ReviewTile
