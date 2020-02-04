import React from 'react'

const ParkDetailTile = (props) => {

  let ratingDisplay = props.averageRating

  if (props.averageRating === 0) {
    ratingDisplay = "Be the first to review"
  }

  return (
    <div>
      <h2>{props.name}</h2>
      {ratingDisplay}
      <p>{props.description}</p>
    </div>
  )
}

export default ParkDetailTile
