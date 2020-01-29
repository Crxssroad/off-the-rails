import React from 'react'

const ReviewListContainer = (props) => {
  return(
    <div>
    {props.title}
    {props.body}
    {props.rating}
    </div>
  )
}

export default ReviewListContainer
