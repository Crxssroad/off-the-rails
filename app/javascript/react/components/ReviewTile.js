import React from 'react'

const ReviewTile = ({ title, body, rating, user }) => {

  return(
    <div>
      <h3>{title}</h3>
      <span>{user.display_name}</span>
      <p>{body}</p>
      <span>{rating}</span>
    </div>
  )
}

export default ReviewTile
