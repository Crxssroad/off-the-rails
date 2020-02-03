import React, { useState, useEffect } from 'react'

import ReviewForm from './ReviewForm'
import ErrorList from './ErrorList'
import ReviewTile from './ReviewTile'
import ParkDetailTile from './ParkDetailTile'

const ParksShowContainer = (props) => {
  const [park,setPark] = useState({})
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState([])
  const [signedInUser, setSignedInUser] = useState(null)

  useEffect(() => {
    let id = props.match.params.id
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
    let id = props.match.params.id
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
            ...reviews,
            parsedBody.review
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
        title={review.title}
        body={review.body}
        user={review.user}
        signedInUser={signedInUser}
        rating={review.rating}
      />
    )
  })

  let reviewForm

  if(signedInUser) {
    reviewForm = <ReviewForm
      addNewReview={addNewReview}
    />
  }

  return(
    <div>
      <ParkDetailTile
        name={park.name}
        description={park.description}
      />
      {reviewList}
      {errorList}
      {reviewForm}
    </div>
  )
}

export default ParksShowContainer
