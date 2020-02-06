import React from 'react'

const ParkDetailTile = (props) => {
  let ratingDisplay = `Rating: ${props.averageRating}/5`

  if (props.averageRating === 0) {
    ratingDisplay = "Be the first to review"
  }

let image = props.image ? props.image.url : null
  return (
    <div>
      <div className="card">
        <img src={image}/>
        <div className="showPageRibbon">
          {props.name}
        </div>
      </div>
      <div className="parkShowDescStyling">
        <h3>
          Description
        </h3>
        <h6>
          {ratingDisplay}
        </h6>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ParkDetailTile
