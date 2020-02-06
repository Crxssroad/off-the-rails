import React, { useState, Fragment } from 'react'

import ReviewForm from '../FormsComponents/ReviewForm'
import ErrorList from '../ErrorList'

const ReviewTile = ({ review, user, signedInUser, parkId, setPark, displayName }) => {
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
    <div className="reviewTileContainer">
      <div className="reviewTitle">
        <div className="reviewHeading">
          <h3>{tileReview.title}</h3><br/>
          <span className="author">Author: {displayName}</span>
        </div>
        <span className="rating">Rating: {tileReview.rating}/5</span>
      </div>
      <div className="reviewTileStyling">
        <p>{tileReview.body}</p>
          {updateDeleteButtons}
      </div>
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
          editReview={tileReview}
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
