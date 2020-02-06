import React from 'react'

const ParkDetailTile = (props) => {
  let image = 'https://images2.imgbox.com/7d/15/MhS0zZLD_o.jpg'
  let ratingDisplay = `Rating: ${props.averageRating}/5`
  let tagList
  if(props.tags) {
    tagList = props.tags.map(tag => {
      return(
        <a href={`/tags/${tag.id}/parks`}>
          <li key={tag.id} className="tagItem">{tag.name}</li>
        </a>
      )
    })
  }

  if (props.averageRating === 0) {
    ratingDisplay = "Be the first to review"
  }

  return (
    <div>
      <div className="card">
        <img src={image}/>
        <div className="showPageRibbon">
          {props.name}
        </div>
      </div>
      <div className="parkShowDescStyling">
        <h3>
          Description
        </h3>
        <h6>
          {ratingDisplay}
        </h6>
        <p>{props.description}</p>
      </div>
      <div className="parkShowTags">
        <h4>
          Tags
        </h4>
        <ul className="tagArea">{tagList}</ul>
      </div>
    </div>
  )
}

export default ParkDetailTile
