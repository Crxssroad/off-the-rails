import React, { useState, useEffect } from 'react'

import ReviewForm from './ReviewForm'

const ParksShowContainer = () => {
  const [review, setReview] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch('/api/v1/review')
    .then(response => {
      if(response.ok){
        return response.json()
      } else {
        const error = new Error(`${response.status} ${response.statusText}`)
        throw(error)
      }
    })
    .then(parsedBody => {
      setReview(parsedBody)
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
    }, [])

    const addNewReview = event => {
      event.preventDefault();

      fetch("/api/v1/reviews", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review)
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
          if (typeof parsedBody === "object") {
            setReview(emptyReview)
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

  return(
    <div>
      <ReviewForm
        addNewReview={addNewReview}
      />
    </div>
  )
}

export default ParksShowContainer
