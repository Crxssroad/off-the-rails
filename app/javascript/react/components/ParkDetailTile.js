import React from 'react'
import TagTile from './TagTile'

const ParkDetailTile = (props) => {
  let image = 'https://images2.imgbox.com/7d/15/MhS0zZLD_o.jpg'
  let ratingDisplay = `Rating: ${props.averageRating}/5`
  let tagList
  if(props.tags) {
    tagList = props.tags.map(tag => {
      return(
        <TagTile
          key={tag.id}
          tag={tag}
        />
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
