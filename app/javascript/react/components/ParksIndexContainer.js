import React, { useState, useEffect} from 'react'

const ParksIndexContainer = () => {
  const [parks,setParks] = useState([])

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
    .then(body => {
      console.log(body)
      setParks(body.parks)
    })
    .catch(error => {
      console.log(`Error fetching parks list ${error.message}`)
    })
  }, [])

  const parkTiles = parks.map(park => {
    return (
      <li>
        <p> {park.name} </p>
        <p> {park.description} </p>
      </li>
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
