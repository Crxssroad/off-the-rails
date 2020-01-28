import React, { useState, useEffect } from 'react'

const ParkShowContainer = (props) => {
  const [parkId, setParkId] = useState({})

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/parks/${id}`)
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(validatedResponse => validatedResponse.json())
    .then(body => setParkId(body))
    .catch(error => console.log(`Error fetching park ${error.message}`))
  }, [])

  return(
    <div>
      {parkId.name}
    </div>
  )
}

export default ParkShowContainer
