import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import ReviewTile from './ReviewTile'

Enzyme.configure({ adapter: new Adapter() })

describe("Review tile", () => {
  let wrapper
  let review = {title:"This is a review", body:"My experience was positive", rating:"4"}
  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        review={review}
        displayName={"Bob"}
      />
    )
  })

  it('should include a title', () => {
    expect(wrapper.find("h3").text()).toBe("This is a review")
  })

  it('should include a body', () => {
    expect(wrapper.find("p").text()).toBe("My experience was positive")
  })

  it('should include a rating', () => {
    expect(wrapper.find("span.rating").text()).toEqual("Rating: 4/5")
  })

  it('should include an author name', () => {
    expect(wrapper.find("span.author").text()).toEqual("Author: Bob")
  })

  it('should not show edit or delete buttons for non authenticated users.', () => {
    expect(wrapper.find("input").length).toEqual(0)
  })
})
