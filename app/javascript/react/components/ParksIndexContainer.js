import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ParkTile from './ParkTile'

const ParksIndexContainer = () => {
  const [parks, setParks] = useState([])

  useEffect(() =>{
    fetch("/api/v1/parks")
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(validatedResponse => validatedResponse.json())
    .then(body => setParks(body))
    .catch(error => {
      console.log(`Error fetching parks list ${error.message}`)
    })
  }, [])

  const parkTiles = parks.map(park => {
    let id = park.id
    return (
      <ParkTile
        key={park.id}
        id={park.id}
        name={park.name}
        description={park.description}
      />
    )
  })

  return(
    <div>
      <h1>Parks Index</h1>
      <ul>{parkTiles}</ul>
    </div>
  )
}

export default ParksIndexContainer
