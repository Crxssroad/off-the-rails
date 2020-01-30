import React, { useState } from 'react'

const ReviewForm = props => {
  const emptyReview = {
    title: "",
    body: "",
    rating: ""
  }
  const [review, setReview] = useState(emptyReview)

  const handleInput = event => {
    setReview({
      ...review,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    props.addNewReview(review)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" onChange={handleInput} value={review.title} />
        </label>

        <label>Rating
          <input name="rating" onChange={handleInput} value={review.rating} />
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
