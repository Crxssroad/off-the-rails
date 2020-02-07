import React from 'react'
import TagTile from '../IndexComponents/TagTile'

const ParkDetailTile = (props) => {
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

let image = props.image ? props.image.url : null
  return (
    <div>
      <div className="card">
        <img src={image}/>
        <div className="showPageRibbon">
          <h3>{props.name}</h3>
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
