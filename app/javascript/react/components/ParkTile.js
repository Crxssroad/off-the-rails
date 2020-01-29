import React from 'react'
import { Link } from 'react-router-dom'

const ParkTile = (props) => {

  return(
    <div>
      <h4><Link to={`/parks/${props.id}`}>{props.name}</Link></h4>
      <p>{props.description}</p>
    </div>
  )
}

export default ParkTile
