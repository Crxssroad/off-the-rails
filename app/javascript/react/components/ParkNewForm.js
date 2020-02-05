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
    <div className="grid align-center">
      <div className="cell small-6 formContainer">
        <ul>
          {errorList}
        </ul>
        <form onSubmit={handleSubmit}>
          <h2>Add A New Park</h2>
          <div className="inputContainer">
            <label>
              Name <br />
            <input
              name="name"
              onChange={handleInput}
              value={park.name}
              placeholder="Name"
              />
          </label>

          <label>
            Description <br />
            <input
              name="description"
              onChange={handleInput}
              value={park.description}
              placeholder="Description"
              />
          </label>

          <label>
            City <br />
          <input
            name="city"
            onChange={handleInput}
            value={park.city}
            placeholder="City"
            />
        </label>

        <label>
          State<br />
        <input
          name="state"
          onChange={handleInput}
          value={park.state}
          placeholder="State"
          />
      </label>

      <label>
        Country <br />
      <input
        name="country"
        onChange={handleInput}
        value={park.country}
        placeholder="Country"
        />
    </label>
          <input className="button" type="submit" value="Add new park" />
        </div>
      </form>
    </div>
  </div>
)
}

export default ParkNewForm
