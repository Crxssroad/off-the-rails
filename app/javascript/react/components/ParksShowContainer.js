import React, { useState, useEffect, Fragment } from 'react'

import ReviewForm from './ReviewForm'
import ErrorList from './ErrorList'
import ReviewTile from './ReviewTile'
import ParkDetailTile from './ParkDetailTile'

const ParksShowContainer = (props) => {
  const [park, setPark] = useState({})
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState([])
  const [signedInUser, setSignedInUser] = useState(null)

  let id = props.match.params.id
  useEffect(() => {
    fetch(`/api/v1/parks/${id}`)
    .then(response => {
      if(response.ok){
        return response
      } else {
        const error = new Error(`${response.status} ${response.statusText}`)
        throw(error)
      }
    })
    .then(parsedBody => parsedBody.json())
    .then(parsedBody => {
      setPark(parsedBody.park)
      setReviews(parsedBody.reviews.reviews)
      setSignedInUser(parsedBody.user)
    })
    .catch(error => {
      console.error(`Error in fetch ${error.message}`)
    })
  }, [])

  const addNewReview = (formPayload) => {
    fetch(`/api/v1/parks/${id}/reviews/`, {
      credentials: 'same-origin',
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
      .then(response => {
        if(response.ok){
          return response.json()
        } else {
          const error = new Error(`${response.status} ${response.statusText}`)
          throw(error)
        }
      })
      .then(parsedBody => {
        if (typeof parsedBody === "object" && !Array.isArray(parsedBody)) {
          setReviews([
            parsedBody.review,
            ...reviews
          ])
          setErrors([])
        } else {
          setErrors(parsedBody)
        }
      })
      .catch(error => console.error(`Error in fetch ${error.message}`))
  }

  let errorList

  if (errors.length > 0) {
    errorList = <ErrorList errors={errors} />
  }

  const reviewList = reviews.map(review => {
    return (
      <ReviewTile
        key={review.id}
        review={review}
        user={review.user}
        signedInUser={signedInUser}
        parkId={id}
      />
    )
  })

  let reviewForm

  if(signedInUser) {
    reviewForm = <ReviewForm
      addNewReview={addNewReview}
    />
} else {
  reviewForm =
    <Fragment>
      Please <a href="/users/sign_in">Sign In</a> or <a href="/users/sign_up">Sign Up</a> to leave a review.
    </Fragment>
}

  return(
    <div>
      <div className="parksShowStyling">
        <ParkDetailTile
          name={park.name}
          description={park.description}
        />
      </div>
      <div className="parksShowStyling">
        <div className="reviewSectionHeading">
          <h3>Reviews</h3>
          {reviewList}
        </div>
        {errorList}
        {reviewForm}
      </div>
    </div>
  )
}

export default ParksShowContainer
