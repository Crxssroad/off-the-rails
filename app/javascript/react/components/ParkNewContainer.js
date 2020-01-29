import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import ParkNewForm from './ParkNewForm'

const ParkNewContainer = (props) => {
  const [shouldShowForm, setShouldShowForm] = useState(false)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    fetch("/api/v1/users/get_current_user")
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(parsedBody => {
      if(parsedBody.role === "admin") {
        setShouldShowForm(true)
      } else {
        setShouldRedirect(true)
      }
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }, [])

  if(shouldRedirect) {
    return <Redirect to="/parks" />
  }

  if(shouldShowForm) {
    return(
      <div>
        <h1>Add A New Park</h1>
        <ParkNewForm />
      </div>
    )
  }

  return(
    <div></div>
  )
}

export default ParkNewContainer
