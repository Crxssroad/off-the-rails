import React from 'react'

const ErrorList = ({ errors }) => {
  const allErrors = errors.map((error, index) => {
    return(
      <li key={index}>{error}</li>
    )
  })

  return(
    <ul>
      {allErrors}
    </ul>
  )
}

export default ErrorList;
