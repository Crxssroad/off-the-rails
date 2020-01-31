import React from 'react'

const ParkDetailTile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default ParkDetailTile
