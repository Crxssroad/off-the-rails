import React, { useState, Fragment } from 'react'

import ReviewForm from './ReviewForm'
import ErrorList from './ErrorList'

const ReviewTile = ({ review, user, signedInUser, parkId, setPark, displayName, voteState }) => {
  let { title, body, rating, id } = review
  const [tileReview, setTileReview] = useState(review)
  const [editClicked, setEditClicked] = useState(false)
  const [errors, setErrors] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [vote, setVote] = useState(voteState)
  const [totalVotes, setTotalVotes] = useState(review.vote_count)

  const onEditClick = event => {
    event.preventDefault()
    setEditClicked(true)
  }

  const saveReview = (formPayload) => {
    fetch(`/api/v1/parks/${parkId}/reviews/${review.id}`, {
      credentials: 'same-origin',
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
    .then(parsedBody => {
      if (typeof parsedBody === "object" && !Array.isArray(parsedBody)) {
        setTileReview(parsedBody.review)
        setEditClicked(false)
        setErrors([])
        setPark(parsedBody.review.park)
      } else {
        setErrors(parsedBody)
      }
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }

  const deleteReview = () => {
    fetch(`/api/v1/parks/${parkId}/reviews/${review.id}`, {
      credentials: 'same-origin',
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
    .then(parsedBody => {
      setPark(parsedBody.park)
      setDeleted(true)
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }

  const handleVote = event => {
    event.preventDefault()
    let url = `/api/v1/parks/${parkId}/reviews/${review.id}/votes`
    let method = "POST"
    let value = Number(event.target.value)

    if(vote !== null) {
      url = `/api/v1/parks/${parkId}/reviews/${review.id}/votes/${vote.id}`
      method = "PATCH"
    }

    if (vote && value === vote.value) {
      value = 0
    }

    let formPayload = {
      value: value
    }
    fetch(url, {
      credentials: 'same-origin',
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
    .then(parsedBody => {
      setVote(parsedBody.vote)
      setTotalVotes(parsedBody.vote_count)
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }

  let updateDeleteButtons, voteButtons

  if (signedInUser) {
    let upvoteClass = "fas fa-thumbs-up vote"
    let downvoteClass = "fas fa-thumbs-down vote"
    if(vote) {
      if(vote.value === 1) {
        upvoteClass+= " vote-selected"
      }
      if(vote.value === -1) {
        downvoteClass+= " vote-selected"
      }
    }
    voteButtons = <div className="vote-buttons-container">
      <button className={upvoteClass} onClick={handleVote} value="1"></button>
      <button className={downvoteClass} onClick={handleVote} value="-1"></button>
    </div>
  }

  if (signedInUser && signedInUser.id === user.id || signedInUser && signedInUser.role === "admin") {
    updateDeleteButtons = <form>
      <input className="editButton" onClick={onEditClick} type="button" value="Edit" />•
      <input  className="deleteButton" onClick={deleteReview} type="button" value="Delete" />
    </form>
  }

  let display =
    <div>
      <hr/>
      <div className="reviewTitle">
        <div className="reviewHeading">
        <div>
        <span className="rating">Rating: {tileReview.rating}/5</span>
        </div>
          <img src={review.user.profile_photo.url} />
          <h3>{tileReview.title}</h3>
          <span className="author">Author: {displayName}</span>
          <span className="vote-count">{totalVotes} votes</span>
        </div>
      </div>
      <div className="reviewTileStyling">
        <p>{tileReview.body}</p>
          {updateDeleteButtons}
          {voteButtons}
      </div>
    </div>

    if (editClicked) {
      let errorList
      if (errors.length > 0) {
        errorList = <ErrorList errors={errors} />
      }
      const cancelClicked = () => {
        setEditClicked(false)
      }
      display =
      <div>
        {errorList}
        <ReviewForm
          editReview={tileReview}
          saveReview={saveReview}
          cancelClicked={cancelClicked}
        />
      </div>
    }
    if(deleted){
      display = "Review successfully deleted"
    }
  return(
    <Fragment>
      {display}
    </Fragment>
  )
}

export default ReviewTile
