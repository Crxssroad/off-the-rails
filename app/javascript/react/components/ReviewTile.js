import React from 'react'

const ReviewTile = ({ title, body, rating, user }) => {
  let displayName = user.nickname !== ""
    ? user.nickname
    : `${user.first_name} ${user.last_name}`
  return(
    <div>
      <h3>{title}</h3>
      <span>{displayName}</span>
      <p>{body}</p>
      <span>{rating}</span>
    </div>
  )
}

export default ReviewTile
