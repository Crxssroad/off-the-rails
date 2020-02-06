import React from 'react'
import { Link } from 'react-router-dom'

const TagTile = ({ tag }) => {
  return(
    <li>
      <Link to={`/tags/${tag.id}/parks`}>{tag.name}</Link>
    </li>
  )
}

export default TagTile
