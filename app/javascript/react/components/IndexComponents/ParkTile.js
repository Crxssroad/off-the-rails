import React from 'react'
import { Link } from 'react-router-dom'

const ParkTile = (props) => {

  return(
    <span className="imageTileClass">
      <Link to={`/parks/${props.id}`}>
        <img src={props.image} className="indexImg" />
        <div className="indexImageTextBox">
          <div className="parkTitleText">
            {props.name}
            </div>
          </div>
          <div className="ribbonShadowBox">
        </div>
      </Link>
    </span>
  )
}

export default ParkTile
