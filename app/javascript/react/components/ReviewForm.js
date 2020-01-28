import React, { useState } from 'react'

const ReviewForm = props => {
  const [review, setReview] = useState({
    title: "",
    body: "",
    rating: null
  })

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

      })
      .catch(error => console.error(`Error in fetch ${error.message}`))
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input name="title" onChange={} value={review.title} />
      </label>

      <label>
        Review
        <input onChange={} value={review.body} />
      </label>

      <input type="submit" value="Submit Review" />
    </form>
  )
}

export default ReviewForm;
