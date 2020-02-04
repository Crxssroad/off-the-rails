import React, { useState, useEffect } from 'react'

const ReviewForm = props => {
  const emptyReview = {
    title: "",
    body: "",
    rating: ""
  }
  const [review, setReview] = useState(emptyReview)

  useEffect(() => {
    if(props.editReview) {
      setReview({
        title: props.editReview.title,
        body: props.editReview.body,
        rating: props.editReview.rating
      })
    }
  }, [])

  const handleInput = event => {
    setReview({
      ...review,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    props.addNewReview(review)
    setReview(emptyReview)
  }

  const handleSave = event => {
    event.preventDefault()

    props.saveReview(review)
  }

  let formAction = handleSubmit
  let submitButton = "Submit Review"
  let cancelButton
  if (props.editReview) {
    submitButton = "Save"
    formAction = handleSave
    cancelButton = <input
      type="button"
      value="Cancel"
      onClick={props.cancelClicked}
    />
  }


  return (
    <div className="reviewTileStyling reviewForm">
      <form onSubmit={formAction}>
        <div className="inputContainer">
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

          <input className="button" type="submit" value={submitButton} />
          {cancelButton}
        </div>
      </form>
    </div>
  )
}

export default ReviewForm;
