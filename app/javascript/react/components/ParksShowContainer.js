import React, { useState, useEffect } from 'react'

import ReviewForm from './ReviewForm'
import ErrorList from './ErrorList'
import ReviewTile from './ReviewTile'


const ParksShowContainer = (props) => {
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/parks/${id}/reviews/`)
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
      setReviews(parsedBody)
    })
    .catch(error => {
      console.error(`Error in fetch ${error.message}`)
    })
    }, [])

    const addNewReview = (formPayload) => {
      let id = props.match.params.id
      fetch(`/api/v1/parks/${id}/reviews/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
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
              parsedBody
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
        <ReviewListContainer
          title={review.title}
          body={review.body}
          rating={review.rating}
        />
      )
    })

  return(
    <div>
      {reviewList}
      {errorList}
      <ReviewForm
        addNewReview={addNewReview}
      />
    </div>
  )
}

export default ParksShowContainer
