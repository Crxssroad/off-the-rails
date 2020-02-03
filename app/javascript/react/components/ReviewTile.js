import React from 'react'

const ReviewTile = ({ title, body, rating, user, signedInUser }) => {
  let updateDeleteButtons

  if (signedInUser && signedInUser.id === user.id || signedInUser && signedInUser.role === "admin") {
    updateDeleteButtons = <form>
      <input type="button" value="Edit" />
      <input type="button" value="Delete" />
    </form>
  }

  return(
    <div>
      <h3>{title}</h3>
      <span className="author">{user.display_name}</span>
      <p>{body}</p>
      <span className="rating">{rating}</span>
      {updateDeleteButtons}
    </div>
  )
}

export default ReviewTile
