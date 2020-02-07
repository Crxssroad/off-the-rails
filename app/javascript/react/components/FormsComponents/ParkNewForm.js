import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Dropzone from 'react-dropzone'

const ParkNewForm = (props) => {
  const [park, setPark] = useState({
    name: "",
    description: "",
    city: "",
    state: "",
    country: "",
    park_photo: ""
  })

  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [tags, setTags] = useState([])
  const [tagIds, setTagIds] = useState([])
  const [uploadedPhoto, setUploadedPhoto] = useState([{}])

  useEffect(() => {
    fetch("/api/v1/tags")
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw new Error(`${response.status} ${response.statusText}`)
        }
      })
      .then(parsedBody => {
        setTags(parsedBody.tags)
      })
      .catch(error => console.error(`Error in fetch ${error.message}`))
  }, [])

  const handleCheckChange = event => {
    const checkedId = event.currentTarget.value
    if(tagIds.includes(checkedId)) {
      setTagIds(tagIds.filter(id => checkedId !== id))
    } else {
      setTagIds([...tagIds, checkedId])
    }
  }

  const tagCheckBoxes = tags.map(tag => {
    return(
      <div className="tagStyle" key={tag.id}>
        <input onChange={handleCheckChange} type="checkbox" value={tag.id}/>
        <label htmlFor={tag.name}>{tag.name}</label>
      </div>
    )
  })
  const handleInput = (event) => {
    setPark({
      ...park,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFileUpload = (acceptedFiles) => {
    setUploadedPhoto(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    setPark({
      ...park,
      park_photo: acceptedFiles[0]
    })
  }

  const errorList = errors.map((error, index) => {
    return(
      <li key={index}>{error}</li>
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    let body = new FormData()
    body.append("park[park_photo]", park.park_photo)
    body.append("park[name]", park.name)
    body.append("park[description]", park.description)
    body.append("park[city]", park.city)
    body.append("park[state]", park.state)
    body.append("park[country]", park.country)
    body.append("park[tag_ids]", tagIds)

    fetch("/api/v1/parks", {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        "Accept": 'application/json',
        "Accept": 'image/jpeg'
      },
      body: body
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
          <label>
            Park Photo<br/>
            </label>
            <img src={uploadedPhoto[0].preview} />
          <Dropzone onDrop={handleFileUpload}>
             {({getRootProps, getInputProps}) => (
               <section>
                 <div {...getRootProps()}>
                   <input {...getInputProps()} />
                   <p>Drag 'n' drop some files here, or click to select files</p>
                 </div>
               </section>
             )}
           </Dropzone>
           <div className="new-park-tags-container">
             {tagCheckBoxes}
           </div>
              <input
                className="button"
                type="submit"
                value="Add new park"
              />
        </div>
      </form>
    </div>
  </div>
)}

export default ParkNewForm
