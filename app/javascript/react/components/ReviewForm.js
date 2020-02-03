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
    <div className="reviewTileStyling reviewForm">
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>
            Title
            <input
              name="title"
              onChange={handleInput}
              value={review.title}
              placeholder="Title"
              />
          </label>

          <label>Rating
            <input
              name="rating"
              onChange={handleInput}
              value={review.rating}
              placeholder="Rating"
              />
          </label>

          <label>
            Review
            <textarea
              name="body"
              onChange={handleInput}
              value={review.body}
              placeholder="Review"
              />
          </label>

          <input className="button" type="submit" value="Submit Review" />
        </div>
      </form>
    </div>
  )
}

export default ReviewForm;
