import React from 'react'

const ReviewTile = ({ title, body, rating, user }) => {


  return(
    <div className="reviewTileContainer">
      <div className="reviewTitle">
        <h4>{title}</h4>
        <span className="author">Author: {user.display_name}</span>
        <div className="specialClassforRating">Rating: {rating}/5</div>
      </div>
      <div className="reviewTileStyling">
        <p>{body}</p>
      </div>
    </div>
  )
}

export default ReviewTile
