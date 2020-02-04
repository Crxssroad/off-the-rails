import React from 'react'
import { Link } from 'react-router-dom'

const ParkTile = (props) => {
  let parkimg = `https://images2.imgbox.com/7d/15/MhS0zZLD_o.jpg`


  return(
    <span className="imageTileClass">
      <Link to={`/parks/${props.id}`}>
        <img src={parkimg} className="indexImg" />
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
