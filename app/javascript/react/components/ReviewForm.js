import React, { useState } from 'react'

import ErrorList from './ErrorList'

const ReviewForm = props => {
  const [review, setReview] = useState({
    title: "",
    body: "",
    rating: null
  })
  const [errors, setErrors] = useState([])

  const handleInput = event => {
    setReview({
      ...review,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    fetch("/api/v1/reviews", { method: "POST", body: JSON.stringify(review) })
      .then(response => {
        if(response.ok){
          response.json()
        } else {
          const error = new Error(`${response.status} ${response.statusText}`)
          throw(error)
        }
      })
      .then(parsedBody => {
        if (false) {
          // if succesful pass review to parent component and clear form
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
      errorList
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" onChange={handleInput} value={review.title} />
        </label>

        <label>
          Review
          <input onChange={handleInput} value={review.body} />
        </label>

        <input type="submit" value="Submit Review" />
        </form>
    </div>
  )
}

export default ReviewForm;
