import React, { useState } from 'react'

import ErrorList from './ErrorList'

const ReviewForm = props => {
  const emptyReview = {
    title: "",
    body: "",
    rating: null
  }
  const [review, setReview] = useState(emptyReview)
  const [errors, setErrors] = useState([])

  const handleInput = event => {
    setReview({
      ...review,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
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
  return (
    <div>
      {errorList}
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" onChange={handleInput} value={review.title} />
        </label>

        <label>
          Review
          <textarea name="body" onChange={handleInput} value={review.body} />
        </label>

        <input type="submit" value="Submit Review" />
        </form>
    </div>
  )
}

export default ReviewForm;
