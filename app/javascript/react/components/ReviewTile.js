import React, { useState, Fragment } from 'react'

import ReviewForm from './ReviewForm'
import ErrorList from './ErrorList'

const ReviewTile = ({ review, user, signedInUser, parkId, setPark }) => {
  let { title, body, rating, id } = review
  const [tileReview, setTileReview] = useState(review)
  const [editClicked, setEditClicked] = useState(false)
  const [errors, setErrors] = useState([])
  const [deleted, setDeleted] = useState(false)

  const onEditClick = event => {
    event.preventDefault()
    setEditClicked(true)
  }

  const saveReview = (formPayload) => {
    fetch(`/api/v1/parks/${parkId}/reviews/${review.id}`, {
      credentials: 'same-origin',
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
    .then(parsedBody => {
      if (typeof parsedBody === "object" && !Array.isArray(parsedBody)) {
        setTileReview(parsedBody.review)
        setEditClicked(false)
        setErrors([])
        setPark(parsedBody.review.park)
      } else {
        setErrors(parsedBody)
      }
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }

  const deleteReview = () => {
    fetch(`/api/v1/parks/${parkId}/reviews/${review.id}`, {
      credentials: 'same-origin',
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
    .then(parsedBody => {
      debugger
      setPark(parsedBody.park)
      setDeleted(true)
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }

  let updateDeleteButtons

  if (signedInUser && signedInUser.id === user.id || signedInUser && signedInUser.role === "admin") {
    updateDeleteButtons = <form>
      <input onClick={onEditClick} type="button" value="Edit" />
      <input onClick={deleteReview} type="button" value="Delete" />
    </form>
  }

  let display =
    <div>
      <h3>{tileReview.title}</h3>
      <span className="author">{user.display_name}</span>
      <p>{tileReview.body}</p>
      <span className="rating">{tileReview.rating}</span>
      {updateDeleteButtons}
    </div>

    if (editClicked) {
      let errorList
      if (errors.length > 0) {
        errorList = <ErrorList errors={errors} />
      }
      const cancelClicked = () => {
        setEditClicked(false)
      }
      display =
      <div>
        {errorList}
        <ReviewForm
          editReview={review}
          saveReview={saveReview}
          cancelClicked={cancelClicked}
        />
      </div>
    }

    if(deleted){
      display = "Review successfully deleted"
    }
  return(
    <Fragment>
      {display}
    </Fragment>
  )
}

export default ReviewTile
