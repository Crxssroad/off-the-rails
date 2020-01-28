import React from 'react'
import { Link } from 'react-router-dom'

const ParkTile = (props) => {

  return(
    <div>
      <strong><Link to={`/parks/${props.id}`}>{props.name}</Link></strong>
      <p>{props.description}</p>
    </div>
  )
}

export default ParkTile
