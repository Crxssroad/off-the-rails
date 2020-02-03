import React from 'react'

const ReviewTile = (props) => {

  return(
    <div className="reviewTileContainer">
      <div className="reviewTitle">
        <h3>{props.title}</h3>
        <div className="specialClassforRating">Rating: {props.rating}/5</div>
      </div>
      <div className="reviewTileStyling">
        <p>{props.body}</p>
      </div>
    </div>
  )
}

export default ReviewTile
