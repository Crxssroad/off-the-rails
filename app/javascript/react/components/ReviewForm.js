import React, { useState } from 'react'

import ErrorList from './ErrorList'

const ReviewForm = props => {
  const emptyReview = {
    title: "",
    body: "",
    rating: null
  }
  const [review, setReview] = useState(emptyReview)

  const handleInput = event => {
    setReview({
      ...review,
      [event.currentTarget.name]: event.currentTarget.value
    })
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
