import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ParkTile from './ParkTile'

const ParksIndexContainer = (props) => {
  const [parks, setParks] = useState([])
  const [tag, setTag] = useState(null)

  useEffect(() =>{
    let path = "/api/v1/parks"
    if (props.match.params.tag_id) {
      path = `/api/v1/tags/${props.match.params.tag_id}/parks`
    }
    fetch(path)
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(validatedResponse => validatedResponse.json())
    .then(body => {
      setParks(body.parks)
      setTag(body.tag)
    })
    .catch(error => {
      console.log(`Error fetching parks list ${error.message}`)
    })
  }, [])

  const parkTiles = parks.map(park => {
    return (
      <ParkTile
        key={park.id}
        id={park.id}
        name={park.name}
        description={park.description}
      />
    )
  })
  let pageHeader = tag ? `${tag.name} Parks` : "Parks Index"
  return(
    <div>
      <h1>{pageHeader}</h1>
      <ul>{parkTiles}</ul>
    </div>
  )
}

export default ParksIndexContainer
