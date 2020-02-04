import React from 'react'

const ParkDetailTile = (props) => {
  let image = 'https://images2.imgbox.com/7d/15/MhS0zZLD_o.jpg'


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
        <p> {props.description}</p>
      </div>
    </div>
  )
}

export default ParkDetailTile
