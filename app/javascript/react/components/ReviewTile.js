import React from 'react'

const ReviewTile = ({ title, body, rating, user }) => {

  return(
    <div>
      <h3>{title}</h3>
      <span className="author">{user.display_name}</span>
      <p>{body}</p>
      <span className="rating">{rating}</span>
    </div>
  )
}

export default ReviewTile
