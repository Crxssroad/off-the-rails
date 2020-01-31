import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const ParkNewForm = (props) => {
  const defaultPark = {
    name: "",
    description: ""
  }
  const [park, setPark] = useState(defaultPark)
  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleInput = (event) => {
    setPark({
      ...park,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const errorList = errors.map((error, index) => {
      return(
        <li key={index}>{error}</li>
      )
    })

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/api/v1/parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(park)
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(parsedBody => {
      if(typeof parsedBody === "object" && !Array.isArray(parsedBody)) {
        setShouldRedirect(true)
      } else {
        setErrors(parsedBody)
      }
    })
    .catch(error => console.log(`Error posting park ${error.message}`))
  }

  if(shouldRedirect) {
    return <Redirect to="/parks" />
  }

  return(
    <div>
      <ul>
        {errorList}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            onChange={handleInput}
            value={park.name}
          />
        </label>
        <label>
          Description:
          <input
            name="description"
            onChange={handleInput}
            value={park.description}
          />
        </label>
        <input type="submit" value="Add new park" />
      </form>
    </div>
  )
}

export default ParkNewForm
