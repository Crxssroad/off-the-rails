import React from 'react'
import { Link } from 'react-router-dom'

const ParkTile = (props) => {
  let parkimg = `https://images2.imgbox.com/7d/15/MhS0zZLD_o.jpg`


  return(
    <span class="imageTileClass">
      <Link to={`/parks/${props.id}`}>
        <img src={parkimg} class="indexImg" />
        <div class="indexImageTextBox">
          <div class="parkTitleText">
            {props.name}
            </div>
          </div>
          <div class="ribbonShadowBox">
        </div>
      </Link>
    </span>
  )
}

export default ParkTile
